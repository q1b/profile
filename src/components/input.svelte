<script lang="ts">
  export let placeholder;
  export let pattern;
  export let type;
  export let id;
  export let name;
  export let autocomplete = 'off';
  export let clx;
</script>

<div class={`relative ${clx}`}>
	<input
		id={id}
		name={name}
		type={type}
		placeholder={ placeholder }
    pattern={pattern}
		autocomplete={autocomplete}
		class="box-border relative z-10 w-full h-10 p-2 text-base placeholder-transparent bg-transparent border-2 border-gray-300 rounded-lg peer text-blueGray-300 focus:outline-none focus:border-indigo-600"
	/>
	<label
		class="absolute font-sans z-0 text-sm text-gray-600 transition-all left-2 -top-6 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm"
		for={id}>{ placeholder }</label>
</div>
