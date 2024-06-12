<script lang="ts">
	import { cartItems, addToCart } from "../stores/cartStore";
	import menuItemIcon from "$lib/assets/menu_item_icon.png";
	import cartIcon from "$lib/assets/cart_icon.png";
	let menuItems = [
		{id: 0, name: "Pizza", spicy: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 179.0, available: true},
		{id: 1, name: "Cheeseburger", spicy: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 199.0, available: false},
		{id: 2, name: "Hot Wings", spicy: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 169.0, available: true},
		{id: 3, name: "Ramen Soup", spicy: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 229.0, available: true},
		{id: 4, name: "Steak", spicy: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 369.0, available: true},
		{id: 5, name: "Pasta Carbonara", spicy: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 229.0, available: true},
        ]

</script>
<main>
	<!-- NAV BAR -->
	<header class="bg-white fixed z-50 top-0 left-0 w-full shadow-md">
		<nav class="flex items-center max-w-screen-xl mx-auto px-6 py-3">
			<div class="flex flex-grow">
				<a href="/">Visma Restaurant</a>
			</div>
			<div class="flex items-center justify-end space-x-6">
				<button>Sign In</button>
				<button class="bg-red-700 text-white px-6 py-3 rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">Sign Up</button>
				<div class="relative">
					<a class="w-9" href="/cart">
						<img class="w-9" src="{cartIcon}" alt="Cart">
						{#if $cartItems.length > 0}
							<span class="absolute -top-1 -right-1.5 bg-red-700 text-white rounded-full px-2 text-sm text-semibold">{$cartItems.length}</span>
						{/if}
					</a>
				</div>
			</div>
		</nav>
	</header>

	<!-- HEADER BANNER -->
	<section class="h-96 bg-no-repeat bg-center bg-cover w-full bg-red-100">
		<div class="flex flex-col items-center justify-center h-full">
			<h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">Welcome to Visma Restaurant!</h1>
			<div class="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
				<input class="rounded-full px-4 focus:outline-none w-full bg-transparent" type="text" placeholder="Search for a restaurant near you .....">
				<button class="text-sm bg-red-700 py-3 px-6 rounded-full text-white ring-red-300 focus:outline-none focus:ring-4 transform transition duration-300 hover:scale-105">Search</button>
			</div>
		</div>
	</section>
	
	<!-- MENU SECTION -->
	<section class="my-12 max-w-screen-xl mx-auto px-6">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
			{#each menuItems as item}
				<div class="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
					{#if item.spicy}
					<span class="bg-red-100 border border-red-500 rounded-full text-sm px-4 py-1 inline-block mb-4">🌶️</span>
					{:else}
					<span class="px-4 py-1 inline-block mb-4"></span>
					{/if}

					<img class="w-44 mx-auto transform transition duration-300 hover:scale-105" src="{menuItemIcon}" alt="">

					<div class="flex flex-col items-center my-3 space-y-2">
						<h1 class="text-gray-900 text-lg">{item.name}</h1>
						<p class="text-gray-500 text-sm text-center">{item.description}</p>
						<h2 class="text-gray-900 text-2xl font-bold">{item.price},-</h2>
						{#if item.available}
						<button on:click={() => addToCart(item)} class="bg-red-700 text-white px-8 py-2 mt-24 rounded-full focus:outline-none transition transform duration-300 hover:scale-105">Order Now</button>
						{:else}
						<button class="bg-gray-400 text-white px-8 py-2 mt-24 rounded-full disabled">Out Of Stock</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
	<!-- ORDER CART -->
</main>
