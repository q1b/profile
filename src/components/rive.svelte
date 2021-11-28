<script lang="ts">
	import { rivePlayer } from '../actions/useRive2';
	async function getBuffer(filePath = '/animations/main.riv'): Promise<Blob> {
		const req: Request = new Request(filePath);
		const response: Response = await fetch(req);
		const buffer: Blob = await response.blob();
		return buffer;
	}

	let buffer = getBuffer();
</script>

<div class="flex">
	{#await buffer}
		<!-- Just it -->
	{:then buf}
		<div>
			<canvas
				use:rivePlayer={{ buffer: buf, artboard: 'Nav' }}
				on:riveActive={(e) => {
					let rive = e.detail;
					rive.play();
				}}
				id="canvas"
				width="100"
				height="100"
			/>
		</div>
		<div class="w-96 h-96">
			<canvas
				use:rivePlayer={{ buffer: buf, artboard: 'SunToMoon' }}
				on:riveActive={(e) => {
					let rive = e.detail;
					rive.play();
				}}
			/>
		</div>
		<div>
			<canvas
				use:rivePlayer={{ buffer: buf, artboard: 'Chat' }}
				on:riveActive={(e) => {
					let rive = e.detail;
					rive.play();
				}}
				id="canvas"
				width="100px"
				height="100px"
			/>
		</div>
	{/await}
</div>
