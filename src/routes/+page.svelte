<script lang="ts">
	import { onMount } from 'svelte';
	import InputChip from '$lib/components/core/InputChip.svelte';
	import { mockSupabaseClient } from '$lib/mock/supabaseClient';
	import AlternativeTextArea from '$lib/components/core/AlternativeTextArea.svelte';

	let columnNames = $state<string[]>([]);
	let filteredColumnNames = $derived<string[]>(
		columnNames.filter((columnName) => columnName.toLowerCase().includes(search.split('/')[1]))
	);
	let search = $state<string>('');

	onMount(async () => {
		try {
			const { data } = await mockSupabaseClient.from('your_table').select(1);

			if (data === undefined) {
				throw new Error('Fetch error');
			}

			columnNames = Object.keys(data);
		} catch (error) {
			console.log(error);
		}
	});
</script>

<div class="mx-auto mt-10 max-w-5xl">
	<InputChip columnNames={filteredColumnNames} bind:inputValue={search} />
	<!-- <AlternativeTextArea /> -->
</div>
