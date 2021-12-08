<script lang="ts">
  import MetaData from '$components/metaData.svelte';
  export let user;
</script>

<script context="module">
  export async function load({ session }) {
    return {
      props: {
        user: session.user,
      },
    };
  }
</script>

<MetaData
	content={{
		title: 'Knoledge Blog post, for dev',
		description: 'Demo description',
		imageSrc: 'ogImage.jpg',
		imageAlt: 'explor the space,explore the nature'
	}}
/>

{#if user}
<h1 class=" text-white hover:text-slate-600 transition-colors font-bold font-sans text-3xl mt-14 " > Welcome { user } </h1>
<div class="mt-10 flex items-center justify-center">
  <a href="/github/logout" target="_self" class="bg-white/10 group hover:bg-red-400 hover:scale-105 transition-all rounded-lg px-4 py-2">
    <span class="text-white group-hover:text-slate-900 font-semibold"> 
      log out
    </span>
  </a>
</div>
{:else}
<h1 class=" text-white hover:text-slate-600 transition-colors font-bold font-sans text-3xl mt-14 " > SvelteKit Auth App {user} </h1>
<p class="text-white/80" > With 
  <span class="text-slate-700 font-black">
    github
  </span> 
</p>
<div class="mt-10 flex items-center justify-center">
  <a href="/github/login" target="_self" class="bg-white/10 group hover:bg-white hover:scale-105 transition-all rounded-lg px-6 py-2">
    <span class="text-white group-hover:text-slate-900 font-semibold"> 
      login with github
    </span>
  </a>
</div>
{/if}