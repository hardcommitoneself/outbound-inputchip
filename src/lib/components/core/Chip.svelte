<script lang="ts">
	let {
		label,
		isClosable
	}: {
		label: string;
		isClosable: boolean;
	} = $props();
</script>

<span
	class="inline-flex h-6 items-center gap-x-1.5 rounded-full bg-blue-100 pe-2 ps-3 text-xs font-medium text-blue-600"
>
	{label}

	{#if isClosable}
		<button
			type="button"
			class="inline-flex size-4 shrink-0 items-center justify-center rounded-full hover:bg-blue-200 focus:bg-blue-200 focus:text-blue-500 focus:outline-none"
		>
			<span class="sr-only">Remove badge</span>
			<svg
				class="size-3 shrink-0"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M18 6 6 18"></path>
				<path d="m6 6 12 12"></path>
			</svg>
		</button>
	{/if}
</span>
