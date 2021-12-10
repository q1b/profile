<script lang="ts">
	export let quote: string;
	let arrText: Array<string> = quote.split('');
	let arrLen = arrText.length;

  function getWordsUnder(limit , str) {
		const words = str.split(' ');
		let yetLength = 0;
		let wordsUnder13 = [];
		let wordsAfter13 = [];

		for (let word of words ) {
			if ( word.length + yetLength < under ) {
				wordsUnder13 = [...wordsUnder13, word];
			} else {
				wordsAfter13 = [...wordsAfter13, word];
			}

			yetLength = word.length + yetLength + 1;
		}
    return [wordsUnder13,wordsAfter13]
	}

</script>

{#if arrLen <= 13}
	<div class=" h-full w-auto aspect-square bg-white rounded-full" />
	<div
		on:load={(e) => {
			console.log(e);
		}}
		class="flex flex-col items-start min-w-[256px] justify-center pl-3"
	>
		<!-- 13 -->
		<h1 class="text-2xl text-white absolute top-7">{arrText.slice(0, 13).join()}</h1>
		<p class="text-xl absolute top-16">Monica</p>
	</div>
{:else if arrLen <= 26}
	<div class=" h-full w-auto aspect-square bg-white rounded-full" />
	<div class="flex flex-col items-start min-w-[256px] justify-center pl-3">
		<!-- 13 -->
		<h1 class="text-2xl text-white absolute top-7">
			{arrText.slice(0, 13).join()} <br />
			{arrText.slice(13).join()}
		</h1>
		<p class="text-xl absolute top-16">Monica</p>
	</div>
{/if}
