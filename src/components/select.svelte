<script lang="ts">
  import MultiSelect from 'svelte-multiselect'
  const webFrameworks = [
`Postural and Spinal dysfunctions 🏃🏻‍♂`,
`Sport Injuries - tennis elbow, golfers elbow ⛹🏼‍♀`,
`Chronic pain and Headaches/Migraine  `,
`Joint pain & dysfunctions- sciatica , ankle sprain 🤾🏻‍♂`,
`Asthma & breathing troubles   🗣`,
`Hormonal issues-PCOD, thyroid disorders, menstrual disorders 🤦🏻‍♀`,
`Immune system related issues  `,
`Paediatrics 👶🏻 and elderly complaints 👴🏻 `,
`Pregnancy and its complications  🤰🏻🤱🏻`,
`Chronic stress of physical, mental and emotional etiology 😥😭`,
`Most visceral complaints 🤢 `,
`Post traumatic  and Post surgery complications   😷             `,
`General body Stiffness / Chronic fatigue 😵`,
`Digestive issues- IBS, chronic constipation, hyperacidity🤮`,
];
  let selected;
</script>


<!-- <code>selected = {JSON.stringify(selected)}</code> -->
<div class="text-slate-500 relative border-l-sky-600">
	<MultiSelect 
		--sms-li-selected-bg="rgb(15, 23, 42)"
		--sms-li-selected-color="white"
		--sms-li-active-bg="rgb(100,116,139)"
		--sms-text-color="#FFF"
		--sms-token-bg="rgb(3,14,28)"
		ulOptionsClass=" absolute text-black top-10 max-h-fit bg-white shadow-slate-400 shadow-xl " 
		liOptionClass="!border-l-sky-600"  bind:selected options={webFrameworks} />
</div>
