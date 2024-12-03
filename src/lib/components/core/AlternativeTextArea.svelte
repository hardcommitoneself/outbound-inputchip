<script>
	import { onMount } from 'svelte';
	let editableContent = '';
	let chips = []; // Array to track chips.

	function handleInput(event) {
		editableContent = event.target.innerHTML;
	}

	function addChip() {
		const newChip = { label: 'New Chip ' + (chips.length + 1) };
		chips.push(newChip);

		// Create chip HTML with a span
		const chipHTML = `<span class="chip" contenteditable="false" style="display:inline-block;padding:5px 10px;background-color:#4a90e2;color:white;border-radius:16px;margin:5px;">${newChip.label}</span>`;

		// Update the editable content
		editableContent += chipHTML;
		moveCursorToEnd();
	}

	function moveCursorToEnd() {
		const editableDiv = document.getElementById('editableDiv');

		// Create a range and place the cursor at the end
		const range = document.createRange();
		const selection = window.getSelection();
		// Collapse the range to the end of the editable div's content
		range.selectNodeContents(editableDiv);

		// Add the newly created range to the selection
		selection.addRange(range);
	}

	onMount(() => {
		const editableDiv = document.getElementById('editableDiv');
		editableDiv.addEventListener('input', handleInput);
	});
</script>

<button on:click={addChip}>Add Chip</button>

<div
	id="editableDiv"
	contenteditable="true"
	bind:innerHTML={editableContent}
	class="editable"
	style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; min-height: 100px;"
></div>

<style>
	.editable {
		min-height: 100px; /* Minimum height for the editable area */
	}
	.chip {
		display: inline-block;
		padding: 5px 10px;
		background-color: #4a90e2;
		color: white;
		border-radius: 16px;
		margin: 5px;
		font-weight: bold;
	}
</style>
