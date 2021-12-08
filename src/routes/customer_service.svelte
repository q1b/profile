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

	let obj = {
		name: 'quote',
		joerge: 'Nicedssd asdasd',
    wat: 'quote',
		sas: 'Nicedssd asdasd',
    opensan: 'quote',
		ben: 'Nicedssd asdasd',
    uncle: 'quote',
		shiva: 'Nicedssd asdasd',
	};

	let va = {};
  
	function moveToVa(key, value) {
		delete obj[key];
		va[key] = value;
	}

	function moveToObj() {
		va = {};
		obj =  {
		name: 'quote',
		joerge: 'Nicedssd asdasd',
    wat: 'quote',
		sas: 'Nicedssd asdasd',
    opensan: 'quote',
		ben: 'Nicedssd asdasd',
    uncle: 'quote',
		shiva: 'Nicedssd asdasd',
	};
	}

</script>

<section class="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
	{#each Object.keys(va) as key (key)}
		<article
			on:click={() => {
        state = 'initial'
				moveToObj( key, va[key] );
			}}
			class="bg-gradient-to-tr z-50 w-[56rem] flex items-center from-cyan-400 to-sky-500 shadow-cyan-300 shadow-lg rounded-4xl p-10 px-20"
			in:receive={{ key: key }}
			out:send={{ key: key }}
		>
			<div class="w-72 h-72 bg-white shadow-cyan-600/10 shadow-2xl rounded-full shrink-0" style="background-image: url('https://css-for-js.dev/josh-big-photo.jpg'); background-position: center; background-size: cover;"> </div>
			<div class="pl-4 pr-2 flex flex-col items-start max-w-sm">
				<h1 class="text-white text-3xl">{ key }</h1>
				<p class="text-white/80 text-lg">{va[key]}</p>
			</div>
		</article>
	{/each}
</section>


<section class="grid grid-cols-3 gap-10">
	{#each Object.keys(obj) as key (key)}
		<article
			on:click={() => {
				moveToVa(key, obj[key]);
				state = 'extented';
			}}
			class="relative bg-gradient-to-tr flex items-center from-cyan-400 to-sky-500 shadow-cyan-300 shadow-lg rounded-4xl p-10"
			in:receive={{ key: key }}
			out:send={{ key: key }}
			animate:flip
      >
			<div class="w-24 h-24 bg-white shadow-cyan-600/10 shadow-2xl rounded-full shrink-0">
				<img src="https://css-for-js.dev/me-avatar.jpg" class="rounded-full" alt="" />
			</div>
			<div class="pl-4 pr-2 flex flex-col items-start max-w-sm">
        <h1 class="text-white text-3xl">{key}</h1>
				<p class="text-white/80 text-lg">{obj[key]}</p>
			</div>
		</article>
    {/each}
  </section>
  
  {#if state === 'extented'}
    <div
      on:click={() => {
        state = 'initial';
        moveToObj(va.key, va.value);
      }}
      transition:fade
      class="bg-black/60 z-40 backdrop-blur-sm absolute inset-0"
    />
  {/if}
