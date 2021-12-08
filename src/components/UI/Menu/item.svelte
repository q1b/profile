<script lang="ts">
import { goto } from '$app/navigation';

	import { cubicInOut, expoOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import { typewriter } from "../../../actions/useTypewriter"
  // import Typewriter from "svelte-typewriter";

  export let fun, href:string, clx:string="", label:string , bg:string="from-sky-400 to-blue-500", id="menuIcon";
</script>

<li class={clx} in:fly={{ y:24, duration:1000, easing:expoOut }} out:fly={{ y:32, duration:800, easing:cubicInOut }} >
  <button {id} on:click|preventDefault={ () => { goto(href); fun() }} class="flex items-center p-2 transition-colors rounded-md NavItem sm:flex-col hover:bg-white/5">
    <div class={`p-1 sm:p-3 mb-1 w-8 h-8 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br ${bg} rounded-xl`}>
      <slot/>
    </div>
    <p use:typewriter={ label } class="ml-4 text-lg tracking-wider text-white sm:ml-0 font-p"></p>
  </button>
</li>