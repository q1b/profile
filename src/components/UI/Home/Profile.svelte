<script lang="ts">
  import  highlight from "../../../actions/useRough"
</script>

<div class="flex flex-col gap-16 p-10 transition-colors md:flex-row hover:bg-slate-800/10 dark:hover:bg-indigo-400/10 rounded-xl">
  <article
    id="background-circle"
    class="relative z-0 flex items-center justify-center flex-shrink-0 w-32 h-32 rounded-full bg-blue-gradient dark:bg-indigo-gradient lg:w-64 md:w-52 sm:w-44 lg:h-64 md:h-52 sm:h-44"
  >
    <div
      id="photo"
      class="relative z-10 rounded-full bg-blue-shadow dark:bg-indigo-shadow lg:w-56 md:w-44 sm:w-36 w-28 opacity-80 lg:h-56 md:h-44 sm:h-36 h-28"
      style="
            background-position: top center;
            background-size: cover;
            background-image: url('https://raw.githubusercontent.com/sacarvy/AstroA/main/public/pic.jpeg');
          "
    ></div>
  </article>
  <article class="relative max-w-xl text-xl selection:text-[#0099ff] selection:bg-[hsla(210,100%,50%,0.2)]">
    <h1 class="mb-6 text-4xl font-black text-white dark:text-slate-800">
      Hi there, I'm
      <span use:highlight={{ color:"#AA923d",type:"underline", visible:true }}>Sukhpreet</span>
      .
    </h1>
    <div class="mb-3 text-white dark:text-slate-600">
      A 
      <p class="inline text-blue-500 dark:text-slate-600">
        <span id="annotate-highlight" data-color="rgb(59 130 246 / 0.1)" >self&nbsp;taught&nbsp;developer</span>,
      </p>
      who learnt UI Engineering skills,
      <br />
      during the lockdown, and experimenting with it.
    </div>
    <div class="mb-3 text-white dark:text-slate-600">
      <p class="inline text-indigo-500 dark:text-slate-600">
        <span use:highlight={{ color:"#AA923d",type:"underline", visible:true }}>
          Playing&nbsp;Basketball
        </span>,
      </p>
      <p class="inline dark:text-slate-600 text-violet-500 ">
        <span use:highlight={{ color:"#AA923d", type:"underline", visible:true }}>
          writing&nbsp;code
        </span>,
      </p> and 
      <p class="inline text-purple-500 dark:text-slate-600">
        <span>
          practicing&nbsp;yoga
        </span>
      </p>
      <br />
      are some of my 
      <p class="inline text-pink-500 dark:text-slate-600">
        <span>
          free&nbsp;time&nbsp;favorites
        </span>.
      </p>
    </div>
    <div class="mb-3 text-white dark:text-slate-600">
      I believe in 
      <p class="inline dark:text-slate-600 text-rose-500">
      <span id="annotate-highlight" data-color="rgb(244 63 94 / 0.2)">
          vasudhaiva kutumbakam
      </span>
        ,
      </p>
      <br />
      And I am ...
    </div>
  </article>
</div>