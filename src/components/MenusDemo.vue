<template>
	<div class="p-grid p-fluid">
		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>Menu</h1>
				<Menu :model="menuItems"></Menu>

				<Menu ref="menu" :model="menuItems" :popup="true"></Menu>
				<Button type="button" label="Overlay" @click="toggle" style="margin-top: 20px; width: auto"/>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			menuItems: [
				{
					label: 'Options',
					items: [{label: 'New', icon: 'pi pi-fw pi-plus'},
						{label: 'Delete', icon: 'pi pi-fw pi-trash'}]
				},
				{
					label: 'Account',
					items: [{label: 'Option', icon: 'pi pi-fw pi-cog'},
						{label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
				}
			]
		}
	},
	methods: {
		toggle(event) {
			this.$refs.menu.toggle(event);
		}
	}
}
</script>

<style scoped>

</style>