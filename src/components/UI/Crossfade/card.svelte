<!-- npm init astro -- --template with-tailwindcss -->
<script>
	import { crossfade,fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing'

	let state = 'initial';
	
	const [send, receive] = crossfade({
		duration: 200,		
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});
</script>

{#if state === 'initial'}
  <article on:click={()=>{
    state = "e";
  }} class="relative bg-gradient-to-tr flex items-center from-cyan-400 to-sky-500 shadow-cyan-300 shadow-lg rounded-4xl p-10" in:receive={{key:'a'}} out:send={{key:'a'}} >
    <div class="w-24 h-24 bg-white shadow-cyan-600/10 shadow-2xl rounded-full shrink-0">
      <img src="https://css-for-js.dev/me-avatar.jpg" class="rounded-full" alt="">
    </div>
    <div class="pl-4 pr-2 flex flex-col items-start max-w-sm">
      <h1 class="text-white text-3xl">I enjoyed the session,</h1>
      <p class="text-white/80 text-lg">ravi sharma</p>
    </div>
  </article>
{:else}
  <div transition:fade class="absolute inset-0 bg-black/10 backdrop-blur-sm z-40" on:click={()=>{ state="initial" }}></div>
  <article on:click={()=>{
    state = 'initial'
  }} class="absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-tr flex items-center from-cyan-400 to-sky-500 shadow-cyan-300 shadow-lg rounded-4xl p-5" in:receive={{key:'a'}} out:send={{key:'a'}}>
    <div class="w-24 h-24 bg-white shadow-cyan-600/10 shadow-2xl rounded-full shrink-0">
      <img src="https://css-for-js.dev/me-avatar.jpg" class="rounded-full" alt="">
    </div>
    <div class="pl-4 pr-2 flex flex-col items-start max-w-sm">
      <h1 class="text-white text-3xl">I enjoyed the session,</h1>
      <p class="text-white/80 text-lg">ravi sharma</p>
    </div>
  </article>
{/if}
