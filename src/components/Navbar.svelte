<script lang="ts">
	import Rive from './Icons/rive.svelte';

	const links = new Map([
		["home","./"],
		["profile","./profile"],
		["notes","./notes"],
		["updates","./updates"]
	])
	
</script>


<header class="flex items-center w-full max-w-5xl px-4 pt-6 bg-transparent gap-x-4">
  <header class="flex w-full p-4 items-center place-content-between">
    <div class="font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-bl from-cyan-400 to-purple-500"> Healthaholist </div>
    <div class="flex items-center gap-x-2">
      <a href="/customer_review" class="flex items-center">
				<div class="w-6 h-6">
					<Rive art="userGroupPurple"/>
				</div>
        <span class="hidden sm:block text-xl text-purple-500"> Customer Review </span>
      </a>
    </div>
    <nav class="flex items-center gap-x-4">
			
    <a href="/" class="flex items-start">
				<div class="w-6 h-6">
					<Rive art="home_green"/>
				</div>
        <span class="hidden sm:block text-xl font-jua text-green-300"> home </span>
      </a>
      <a href="/about" class="flex items-start">
				<div class="w-6 h-6">
					<Rive art="user_blue"/>
				</div>
        <span class="hidden sm:block text-xl font-jua text-blue-400"> about </span>
      </a>
    </nav>
  </header>
  </header>
