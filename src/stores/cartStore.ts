import { browser } from "$app/environment";
import { get, writable } from "svelte/store";

interface MenuItem {
	id: number;
	name: string;
	spicy: boolean;
	description: string;
	price: number;
	available: boolean;
}

interface CartItem extends MenuItem {
	amount: number;
}

export const cartItems = writable<CartItem[]>([]);
export const cartTotal = writable<number>(0);

if (browser) {
	if (localStorage.cartItems) {
		cartItems.set(JSON.parse(localStorage.cartItems));
	}
	cartItems.subscribe((items) => localStorage.cartItems = JSON.stringify(items));

	if (localStorage.cartTotal) {
		cartTotal.set(JSON.parse(localStorage.cartTotal));
	}
	cartTotal.subscribe((items) => localStorage.cartTotal = JSON.stringify(items));
}

export function addToCart(menuItem: MenuItem) {
	let items = get(cartItems);
	let total = get(cartTotal);

	// If item already in cart, increment the amount
	for (let item of items) {
		if (item.id === menuItem.id) {
			item.amount++
			cartItems.set(items);
			return;
		}
	}

	// Else, we add it
	const cartItem = { ...menuItem, amount: 1 };
	cartItems.set([...items, cartItem]);
	total += menuItem.price;
	cartTotal.set(total);
	return;
}

export function removeFromCart(id: number) {
	let items = get(cartItems);
	let total = get(cartTotal)

	for (let item of items) {
		if (item.id === id) {
			if (item.amount > 1) {
				item.amount--;
			} else {
				items = items.filter((item) => item.id !== id);
			}
			cartItems.set(items);
			total = Math.max(0, total - item.price);
			cartTotal.set(total);
			return;
		}
	}
}

export function applyDiscount() {
	let total = get(cartTotal);
	total = total - (total/10);
	return total;
}
