<script lang="ts">
	let menuItems = [
	{id: 0, name: "Pizza", spicy: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
	{id: 1, name: "Hot Wings", spicy: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
	{id: 2, name: "Pasta Carbonara", spicy: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
	{id: 3, name: "Steak", spicy: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
	{id: 4, name: "Ramen Soup", spicy: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
	];
</script>


<h1 class="text-6xl font-bold text-center tracking-widest">Visma Restaurant</h1>

<section class="mt-20 text-center">
	<ul>
		<li class="pt-10 pb-6 text-5xl tracking-widest uppercase">Menu</li>
		<div class="flex justify-center items-center">
			<div class="flex justify-center items-start w-1/2">
				<li class="pb-20 text-2xl">
					<ul>
						{#each menuItems as item}
							<li class="py-4 font-sans font-bold">{item.name} {#if item.spicy}🌶️{/if}</li>
							<li class="pb-4 text-s">{item.description}</li>
						{/each}
					</ul>
				</li>
			</div>
		</div>
	</ul>
</section>
