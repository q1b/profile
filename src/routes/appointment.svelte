<script>
	import Input from '$components/input.svelte';
	import TextArea from '$components/text_area.svelte';
	import MetaData from '$components/metaData.svelte';
	import Select from '$components/select.svelte';
</script>


<MetaData
	content={{
		title: 'Knoledge Blog post, for dev',
		description: 'Demo description',
		imageSrc: 'ogImage.jpg',
		imageAlt: 'explor the space,explore the nature'
	}}
/>

<section class="flex flex-col gap-y-2">
	<main class="grid grid-cols-1 md:grid-cols-2  place-items-center gap-y-20 md:gap-y-0 md:gap-x-6 relative">
		<div class="w-[90%] h-auto hidden sm:block aspect-[2/1] md:aspect-[3/4] rounded-2xl" style=" background-image: url('/pic_1.jpg'); background-size: cover; background-position: center;"></div>
		<form action="#" method="POST" class="relative"> 
			<h1 class="text-2xl text-slate-700 font-jua p-2 absolute -top-12 left-0">book appointment</h1>
			<div class="shadow-sm p-3 sm:p-0 h-full w-96 rounded-md sm:overflow-hidden">
				<div class="bg-white sm:p-6">
					<div class="pt-6 grid grid-cols-2 gap-7">
						<Input placeholder="first name" />
						<Input placeholder="last name" />
						<Input
							id="phone"
							name="phone"
							type="tel"
							for="phone"
							pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
							placeholder="phone number"
							clx="col-span-2"
						/>
						<TextArea
							type="text"
							clx=" col-span-2 "
							id="details"
							name="userDetails"
							rows={3}
							autocomplete="off"
							placeholder="details"
						/>
						<div class="col-span-2">
							<Select />
					</div>
					</div>
				</div>

				<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
						type="submit"
						class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						send
					</button>
				</div>
			</div>
		</form>
	</main>
</section>