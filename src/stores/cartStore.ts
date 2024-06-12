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

if (browser) {
	if (localStorage.cartItems) {
		cartItems.set(JSON.parse(localStorage.cartItems));
	}
	cartItems.subscribe((items) => localStorage.cartItems = JSON.stringify(items));
}

export function addToCart(menuItem: MenuItem) {
	let items = get(cartItems);

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

	console.log(get(cartItems));
}

export function removeFromCart(id: number) {
	let items = get(cartItems);

	for (let item of items) {
		if (item.id === id) {
			if (item.amount > 1) {
				item.amount--;
			} else {
				items = items.filter((item) => item.id !== id);
			}
			cartItems.set(items);
			return;
		}
	}
}

export function calcTotal() {
	let items = get(cartItems);
	let sum = 0;

	for (let item of items) {
		sum += item.price;
	}
	return sum;
}

export function applyDiscount() {
	let sum = calcTotal()
	return sum - (sum/10);
}
