<script lang="ts">
	import Chip from './Chip.svelte';
	import Dropdown from './Dropdown.svelte';

	let {
		columnNames,
		inputValue = $bindable<string>('')
	}: {
		columnNames: string[];
		inputValue: string;
	} = $props();

	interface Context {
		text: string;
		chip: {
			label: string;
		};
	}

	let contexts = $state<Context[]>([]);
	let isDropdownOpen = $state<boolean>(false);

	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;

		isDropdownOpen = value.includes('/');
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const handleOnSelect = (columnName: string) => {
		contexts = [
			...contexts,
			{
				text: inputValue.split('/')[0],
				chip: {
					label: `[${columnName}]`
				}
			}
		];

		inputValue = '';
		isDropdownOpen = false;
	};
</script>

<div class="flex flex-wrap items-center gap-x-2 rounded-lg border p-2">
	{#each contexts as context}
		<div class="flex items-center gap-x-2">
			{#if context.text}
				<p>{context.text}</p>
			{/if}
			{#if context.chip.label}
				<div class="mt-0.5">
					<Chip label={context.chip.label} isClosable={false} />
				</div>
			{/if}
		</div>
	{/each}

	<div class="relative flex-grow">
		<!-- Input -->
		<input
			class="w-full border-gray-200 py-3 outline-none disabled:pointer-events-none disabled:opacity-50"
			bind:value={inputValue}
			oninput={handleInput}
			onkeydown={handleKeydown}
		/>

		<!-- Dropdown -->
		<Dropdown isOpen={isDropdownOpen} items={columnNames} onSelect={handleOnSelect} />
	</div>
</div>
