<script lang="ts">
	let {
		isOpen = false,
		items = [],
		onSelect
	}: {
		isOpen: boolean;
		items: string[];
		onSelect: (columnName: string) => void;
	} = $props();
</script>

<div
	class="duration {isOpen
		? 'opacity-100'
		: 'opacity-0'} absolute start-0 top-full mt-2 w-60 rounded-lg bg-white shadow-md transition-[opacity,margin]"
>
	<div class="space-y-0.5 p-1">
		{#if !items.length}
			<div class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800">
				Not found
			</div>
		{/if}
		{#each items as item}
			<div
				class="flex cursor-pointer items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
				onclick={() => onSelect(item)}
			>
				{item}
			</div>
		{/each}
	</div>
</div>
