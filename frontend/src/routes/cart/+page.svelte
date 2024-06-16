<script lang="ts">
	import { cartItems, resetCart, removeFromCart, cartTotal, applyDiscount, orderId } from "../../stores/cartStore";
	import menuItemIcon from "$lib/assets/menu_item_icon.png"

        async function submitOrder() {
          const order = {
            id: $orderId,
            items: $cartItems.map(item => item.id),
            total: $cartTotal,
            status: "pending",
          };

          await fetch("http://0.0.0.0:80/order", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(order),
          });

          orderId.update((id) => id+1);
        };
</script>

<!-- NAV BAR -->
<header class="bg-white top-0 left-0 w-full shadow-md">
	<nav class="flex items-center max-w-screen-xl mx-auto px-6 py-3">
		<div class="flex flex-grow">
			<a href="/">Visma Restaurant</a>
		</div>
	</nav>
</header>

<section class="py-8">
  <div class="mx-auto max-w-screen-xl px-4">
    <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div class="space-y-6">

	    <!-- CART ITEMS -->
	{#each $cartItems as item}
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
	      <img class="h-20 w-20" src="{menuItemIcon}" alt="item icon" />

              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="text-end md:order-4 md:w-32">
			<p class="text-base font-bold text-gray-900">{item.price},-</p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
		      <a href="#" class="text-base font-medium text-gray-900 hover:underline">{item.name} {#if item.spicy}🌶️{/if}</a>

                <div class="flex items-center">
			<button on:click={() => removeFromCart(item.id)} class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">Remove</button>
                </div>
              </div>
            </div>
          </div>

	<div class="hidden xl:mt-8 xl:block"></div>
	{/each}

	<!-- ORDER SUMMARY -->
      <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md">
          <p class="text-xl font-semibold text-gray-900">Order summary</p>

          <div class="space-y-4">
            <div class="space-y-2">
              <div class="flex items-center justify-between gap-4">
                <p>Original price</p>
		<p class="font-semibold">{$cartTotal},-</p>
              </div>

              {#if $cartItems.length > 0 && !$cartItems.some(e => e.spicy === false)}
              <div class="flex items-center justify-between gap-4">
                <p>Spicy Discount</p>
                <p class="font-semibold text-green-500">-10%</p>
              </div>
	      {/if}

            <div class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <p class="font-bold text-gray-900">Total</p>
              {#if $cartItems.length === 0}
		      <p class="font-bold text-gray-900">0,-</p>
	      {:else if $cartItems.some(e => e.spicy === false)}
		      <p class="font-bold text-gray-900">{$cartTotal},-</p>
	      {:else}
		      <p class="font-bold text-gray-900">{applyDiscount()},-</p>
	      {/if}
            </div>
          </div>

          <button on:click={() => submitOrder()} class="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300">Submit Order</button>
          <button on:click={() => resetCart()} class="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300">Reset Cart</button>
      </div>
    </div>
  </div>
</section> 
