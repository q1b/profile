<!-- npm init astro -- --template with-tailwindcss -->
<script lang="ts">
	import { flip } from 'svelte/animate';

	import { crossfade, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let state = 'initial';

	const [send, receive] = crossfade({
		duration: 200,
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

  const createObj = (name:string,quote:string): { name:string,quote:string } => ( { name, quote } )

	const feedbacks = [
		createObj("name", 'quote'),
		createObj("joerge", 'Nicedssd asdasd'),
    createObj("wat", 'quote'),
		createObj("sas", 'Nicedssd asdasd'),
    createObj("opensan", 'quote'),
		createObj("ben", 'Nicedssd asdasd'),
    createObj("uncle", 'quote'),
		createObj("shiva", 'Nicedssd asdasd'),
	];

	const va = {};
  // key is index 

  function moveToVa(key, value) {
		feedbacks.splice(key, 1) // delteing from index key
		va['key'] = key;
    va['value'] = value;
	}
	
	function moveToObj(key, value) {
		delete va['key']; // deleting key
		feedbacks.splice(key, 0, value)
	}

</script>

<section class="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
	{#if va.key}
		<article
			on:click={() => {
				moveToObj(va.key, va.value);
        state = 'initial'
			}}
			class="bg-gradient-to-tr z-50 w-[56rem] flex items-center from-cyan-400 to-sky-500 shadow-cyan-300 shadow-lg rounded-4xl p-10 px-20"
			in:receive={{ key: va.value }}
			out:send={{ key: va.value }}
		>
			<div class="w-72 h-72 bg-white shadow-cyan-600/10 shadow-2xl rounded-full shrink-0" style="background-image: url('https://css-for-js.dev/josh-big-photo.jpg'); background-size: cover; background-position: center;"> </div>
			<div class="pl-4 pr-2 flex flex-col items-start max-w-sm">
				<h1 class="text-white text-3xl">{va.value.name}</h1>
				<p class="text-white/80 text-lg">{va.value.quote}</p>
			</div>
		</article>
	{/if}
</section>


<section class="grid grid-cols-3 gap-10">
	{#each feedbacks as feedback,i (i)}
		<article
			on:click={() => {
        moveToVa( i, feedback );
				state = 'extented';
			}}
			class="relative bg-gradient-to-tr flex items-center from-cyan-400 to-sky-500 shadow-cyan-300 shadow-lg rounded-4xl p-10"
			in:receive={{ key: feedback }}
			out:send={{ key: feedback }}
			animate:flip
      >
			<div class="w-24 h-24 bg-white shadow-cyan-600/10 shadow-2xl rounded-full shrink-0">
				<img src="https://css-for-js.dev/me-avatar.jpg" class="rounded-full" alt="" />
			</div>
			<div class="pl-4 pr-2 flex flex-col items-start max-w-sm">
        <h1 class="text-white text-3xl">{feedback.name}</h1>
				<p class="text-white/80 text-lg">{feedback.quote}</p>
			</div>
		</article>
    {/each}
  </section>
  
  {#if state === 'extented'}
    <div
      on:click={() => {
        state = 'initial';
        moveToObj( va.key, va.value );
      }}
      transition:fade
      class="bg-black/60 z-40 backdrop-blur-sm absolute inset-0"
    />
  {/if}
