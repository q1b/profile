<script lang="ts">
  import { fly } from "svelte/transition"
  import { circOut, backInOut } from "svelte/easing" 
	import '../tailwind.css';	
	import Navbar from "$components/Navbar.svelte";
  export let key
</script>

<!-- 1. Assign current route's path to `key` prop -->
<script context="module">
  export const load = async ({ page, session }) => {
    if ( page.path === '/admin' && session.user === '' ) {
      return { redirect: "/", status: 302 };
    }
    return { props: {
      key: page.path,
    },
  }
  }
</script>

<main class="bg-white dark:bg-slate-1000 w-full min-h-screen flex gap-y-12 flex-col items-center pb-20">
	<Navbar/>
  {#key key}
    <div class="w-full flex flex-col max-w-5xl px-6 items-center" in:fly={{ y:200, duration:500, delay:500, easing:backInOut }} out:fly={{ y:200, duration:500,easing:circOut }} >
      <slot />
    </div>
  {/key}
</main>
