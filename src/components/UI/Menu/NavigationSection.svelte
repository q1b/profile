<script lang="ts">
  export let  title;
</script>

<li>
  <h1 class="text-lg navItem sm:text-2xl text-sky-400 dark:text-purple-400 mb-8 font-medium leading-6" id="nav-dialog-title">{title}</h1>
  <ul class="grid grid-cols-1 gap-y-6 sm:gap-y-0 sm:grid-cols-3 sm:gap-x-10">
    <slot/>
  </ul>
</li>