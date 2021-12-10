<!-- npm init astro -- --template with-tailwindcss -->
<script lang="ts">
	import { flip } from 'svelte/animate';

	import { crossfade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let state = 'initial';
	const rainbow_gradients = [
		'shadow-xl shadow-cyan-400/20 from-cyan-500 to-sky-500',
		'shadow-xl shadow-blue-400/20 from-blue-400 via-indigo-400 to-purple-500',
		'shadow-xl shadow-indigo-400/20 from-indigo-500 to-purple-500',
		'shadow-xl shadow-purple-400/20 from-purple-400 to-pink-500',
		'shadow-xl shadow-rose-400/20 from-rose-400 to-pink-400',
		'shadow-xl shadow-rose-400/20 from-rose-400 to-red-500',
		'shadow-xl shadow-red-400/20 from-red-500 to-orange-400',
		'shadow-xl shadow-orange-400/20 from-orange-400 to-yellow-300',
		'shadow-xl shadow-yellow-400/20 from-yellow-400 to-green-400',
		'shadow-xl shadow-green-400/20 from-green-400 to-teal-400',
		'shadow-xl shadow-teal-400/20 from-teal-300 to-blue-400'
	]
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
	// The whole viewport width, let x;
	// then, now width of single card min-width is 256px So, characters less than 13 will come in this category
	// then, now width for x/cols = will give us width of single col width,
	//

	function measureWidth(text, font) {
		// Create an element
		const ele:HTMLDivElement = document.createElement('div');

		// Set styles
		ele.style.position = 'absolute';
		ele.style.visibility = 'hidden';
		ele.style.whiteSpace = 'nowrap';
		ele.style.left = '-9999px';

		// Set font and text
		ele.style.font = font;
		ele.style.fontSize = '20px';
		ele.innerText = text;

		// Append to the body
		document.body.appendChild(ele);

		// Get the width
		const width = window.getComputedStyle(ele).width;

		// Remove the element
		document.body.removeChild(ele);

		return width;
	}
	
	
	let createObj = (author:string, quote:string, classes: string ) => {
		return { [author]: { quote, classes}}
	}

	let resetObj = () => {
		return {
			...createObj('Rahul kumar','I am a regular customer, So, I would like to day everytime I visit, clinic I never go unsatisfied.','col-span-1 md:col-span-4 ' + rainbow_gradients[ 0 ]  ),
			...createObj('Kajul kaur','Hoping to come again and again Super helpful','col-span-1 md:col-span-3 ' + rainbow_gradients[ 1 ] ),
			...createObj('Sonu garg','The clinic was very clean and charming','col-span-1 md:col-span-3 ' + rainbow_gradients[ 2 ] ),
			...createObj('Rakesh','Execlent experience, being grateful','col-span-1 md:col-span-3 ' + rainbow_gradients[ 3 ] ),
			...createObj('opensan','I enjoyed the session,','col-span-1 md:col-span-3 ' + rainbow_gradients[ 4 ] ),
			...createObj('ben','Nicedssd asdasd','col-span-1 md:col-span-2 ' + rainbow_gradients[ 5 ] ),
			...createObj('uncle','quote','col-span-1 md:col-span-2 ' + rainbow_gradients[ 6 ] ),
			...createObj('shiva','Nicedssd asdasd','col-span-1 md:col-span-2 ' + rainbow_gradients[ 7 ] ),
			...createObj('sukhpreet','Nicedssd asdasd','col-span-1 md:col-span-2 ' + rainbow_gradients[ 9 ] ),
		};
	};

	// $: resetObj = () => {
	// 	return {
	// 		...createObj('Rahul kumar','I am a regular customer, So, I would like to day everytime I visit, clinic I never go unsatisfied.','col-span-2'),
	// 		...createObj('Kajul kaur','Hoping to come again and again Super helpful','col-span-4'),
	// 		...createObj('Sonu garg','The clinic was very clean and charming','col-span-3'),
	// 		...createObj('Rakesh','Execlent experience, being grateful','col-span-3'),
	// 		...createObj('opensan','I enjoyed the session,','col-span-4'),
	// 		...createObj('ben','Nicedssd asdasd','col-span-2'),
	// 		...createObj('uncle','quote','col-span-4'),
	// 		...createObj('shiva','Nicedssd asdasd','col-span-3'),
	// 	};
	// };
	// onMount(()=> {	
		// const getWidth = (quote) => {return Math.round( ( 85.6 + +measureWidth( quote,'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"').replace('px','') ) / 85.33)}
		// createObj = (author:string, quote:string, classes: string ) => {
		// 	return { [author]: { quote, classes: `col-span-${ getWidth(quote) <= 6 ? getWidth(quote) : 4 } ${ getWidth(quote) ? } ` } }
		// }
	// })

	let obj = resetObj();

	let va = {};

	function moveToVa(key, value) {
		delete obj[key];
		va[key] = value;
	}

	function moveToObj() {
		va = {};
		obj = resetObj();
	}
</script>

<h1 class="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-10"></h1>

{#if state === 'extented'}
	<section class="fixed z-50 inset-0 overflow-y-auto">
		<article class="min-h-screen px-4 text-center">
			<div
				id="overlay"
				on:click={() => {
					state = 'initial';
					moveToObj();
				}}
				class="fixed inset-0 bg-slate-1000 dark:bg-purple-400 opacity-80"
				in:fly
				out:fly
			/>
			<span class="inline-block h-screen align-middle">&ZeroWidthSpace;</span>
			<div
				id="container"
				class="inline-block w-8/12 sm:w-10/12 sm:p-2 md:p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-transparent shadow-xl rounded-2xl"
				in:fly={{ x: 0, y: 100, duration: 200 }}
				out:fly={{ x: 0, y: 100, duration: 200 }}
			>
				{#each Object.keys(va) as key (key)}
					<article
						on:click={() => {
							state = 'initial';
							moveToObj();
						}}
						class={`h-full bg-gradient-to-tr cursor-pointer z-50 flex flex-col md:flex-row items-center rounded-4xl py-6 px-10 ` + va[key]['classes'] }
						in:receive={{ key: key }}
						out:send={{ key: key }}
					>
						<div
							class="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white shadow-cyan-600/10 shadow-2xl rounded-full shrink-0"
							style="background-image: url('https://css-for-js.dev/josh-big-photo.jpg'); background-position: center; background-size: cover;"
						/>
						<div class="pt-4 md:pt-0 md:pl-4 md:pr-2 flex flex-col gap-y-3 md:gap-y-0 items-center md:items-start">
							<h1 class="text-white text-xl sm:text-3xl">{key}</h1>
							<p class="text-white/80 text-center sm:text-xl md:text-left">{va[key]['quote']}</p>
						</div>
					</article>
				{/each}
			</div>
		</article>
	</section>
{/if}

<section class="grid grid-cols-1 md:grid-cols-6 w-full sm:max-w-sm md:max-w-3xl lg:max-w-5xl grid-rows-3 grid-flow-row-dense gap-10 place-content-center">
	{#each Object.keys(obj) as key (key)}
		<article
			on:click={() => {
				moveToVa(key, obj[key]);
				state = 'extented';
			}}
			class={`h-[125px] p-5 cursor-pointer relative bg-gradient-to-tr flex items-center from-cyan-400 to-sky-500 shadow-cyan-300 shadow-lg rounded-4xl ${obj[key]['classes']}`}
			in:receive={{ key: key }}
			out:send={{ key: key }}
			animate:flip
		>
			<div
				class="h-full w-auto aspect-square bg-white shadow-cyan-600/10 shadow-2xl rounded-full shrink-0"
			>
				<img src="https://css-for-js.dev/me-avatar.jpg" class="rounded-full" alt="" />
			</div>
			<div class="flex flex-col items-start justify-center pl-3 pr-1">
				<h1 class="text-white text-xl md:text-2xl">{key}</h1>
				<p class="text-white/80 line-clamp-2 lg:text-lg">{obj[key]['quote']}</p>
			</div>
		</article>
	{/each}
</section>
