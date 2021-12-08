<script lang="ts">
	
	// import { portal } from 'svelte-portal/src/Portal.svelte';
	import { expoIn, expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let shown = false;	

	/** Dispatch event on click outside of node */
	function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	export function show() {
		shown = true;
	}
	export function hide() {
		shown = false;
	}
</script>

<svelte:window
	on:keydown={(e) => {
		switch (e.keyCode) {
			case 27:
				hide();
				break;
			case 191:
				if (shown) {
					hide();
				} else {
					show();
				}
				break;
			default:
				break;
		}
	}}
/>

{#if shown}
	<section
		class="fixed z-50 inset-0 overflow-y-auto"
		role="dialog"
		aria-modal="true"
		aria-labelledby="nav-dialog"
	>
		<article class="min-h-screen px-4 text-center">
			<div
				id="nav-dialog-overlay"
				class="fixed inset-0 bg-slate-1000 dark:bg-purple-400 opacity-80"
				aria-hidden={!shown}
				in:fly
				out:fly
			/>
			<span class="inline-block h-screen align-middle" aria-hidden={!shown}>&ZeroWidthSpace;</span>
			<div
				use:clickOutside
				on:click_outside={hide}
				in:fly={{ y: 200, duration: 300, easing: expoOut }}
				out:fly={{ y: 200, duration: 300, easing: expoIn }}
				id="nav-dialog-container"
				class="inline-block items-center justify-center w-full max-w-[calc(100%-20px)] sm:max-w-[calc(100%-60px)] md:max-w-[calc(100%-120px)] lg:max-w-[calc(10%+900px)] p-3 sm:p-10 my-8 overflow-hidden text-left align-middle bg-[hsl(206,100%,8%)]/50 dark:bg-[hsl(266,100%,4%)]/80 backdrop-blur shadow-lg rounded-2xl max-h-96 overflow-y-auto"
				style="--tw-shadow:0 -4px 6px -2px hsla(218, 30%, 60%, 0.05), 0 10px 15px -3px hsla(178, 50%, 50%, 0.1), 0 4px 6px -2px hsla(218, 30%, 60%, 0.05);"
			>
				<slot />
			</div>
		</article>
	</section>
{/if}
