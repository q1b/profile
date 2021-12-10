<script lang="ts">
	export let art: 'themeBtn' |'home' | 'user' | 'home_green' | 'userGroupPurple' | string;
	let windowWidth, windowHeight;
	import { rivePlayer } from '../../actions/useRive2';

	async function getBuffer(filePath = '/animations/main.riv'): Promise<Blob> {
		const req: Request = new Request(filePath);
		const response: Response = await fetch(req);
		const buffer: Blob = await response.blob();
		return buffer;
	}

	let buffer = getBuffer();
	const creRiveObj = (
		buffer: Blob,
		artboard: string,
		stateMachines: string = 'switch'
	): {
		buffer: Blob;
		artboard: string;
		stateMachines: string;
	} => {
		return { buffer, artboard, stateMachines };
	};

	const hoverAnimation = (element) => {
		let r = element.detail;
		r.play();
		let containerRef = element.target.parentElement.parentElement;
		containerRef.onmouseenter = () => {
			r.stateMachineInputs('switch')[0].fire();
		};
		containerRef.onmouseleave = () => {
			r.stateMachineInputs('switch')[0].fire();
		};
	};
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

{#await buffer}
	<div>
		<h1 class="text-white">I am loading</h1>
	</div>
{:then buf}
	{#if art === 'home_green'}
		<canvas use:rivePlayer={creRiveObj(buf, 'home_green')} on:riveActive={hoverAnimation} id="canvas" />
	<!-- {:else if art === 'themeBtn'}
		<button class="flex-shrink-0 w-12 h-12 overflow-hidden rounded-full">
			<canvas
				use:rivePlayer={creRiveObj(buf, 'SunToMoon')}
				on:riveActive={(e) => {
					let rive = e.detail;
					rive.play();
					setTimeout(() => {
						if (localStorage.theme === 'dark') {
							document.documentElement.classList.add('dark');
							rive.stateMachineInputs('switch')[0].value = true;
						} else {
							rive.stateMachineInputs('switch')[0].value = false;
						}
					}, 420);
					e.target.parentElement.onclick = () => {
						if (!rive.stateMachineInputs('switch')[0].value) {
							document.documentElement.classList.add('dark');
							localStorage.theme = 'dark';
							rive.stateMachineInputs('switch')[0].value =
								!rive.stateMachineInputs('switch')[0].value;
						} else {
							document.documentElement.classList.remove('dark');
							localStorage.theme = 'light';
							rive.stateMachineInputs('switch')[0].value =
								!rive.stateMachineInputs('switch')[0].value;
						}
					};
				}}
				id="canvas"
			/>
		</button> -->
	{:else if art === 'user_blue'}
		<canvas use:rivePlayer={creRiveObj(buf, 'user_blue')} on:riveActive={hoverAnimation} id="canvas" />
	{:else if art === 'userGroupPurple' }
		<canvas use:rivePlayer={creRiveObj(buf, 'userGroupPurple')} on:riveActive={hoverAnimation} id="canvas" />
		{/if}
{/await}
