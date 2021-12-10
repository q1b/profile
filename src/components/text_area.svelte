<script lang="ts">
  export let placeholder;
  export let type = 'text';
  export let id;
  export let rows = 3;
  export let name;
  export let autocomplete = 'off';
  export let clx="";
</script>
<div class={`relative ${clx}`}>
	<textarea
		type={type}
		id={id}
		name={name}
		placeholder={placeholder}
		autocomplete={autocomplete}
		rows={rows}
		class="relative z-10 w-full p-2 text-base placeholder-transparent bg-transparent border-2 border-gray-300 rounded-lg peer text-blueGray-300 focus:outline-none focus:border-indigo-600"
	/>
  <label
		class="absolute z-0 text-sm text-gray-600 transition-all left-2 -top-6 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm"
		for={name}>{placeholder}</label
	>
</div>
