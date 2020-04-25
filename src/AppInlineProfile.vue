<template>
	<div :class="['layout-profile', {'layout-profile-active': expanded}]">
		<button class="layout-profile-button p-link" @click="onClick">
			<img src="assets/layout/images/avatar.png" alt="babylon-layout"/>
			<div class="layout-profile-userinfo">
				<span class="layout-profile-name">Arlene Welch</span>
				<span class="layout-profile-role">Design Ops</span>
			</div>
			<i class="layout-profile-icon pi pi-angle-down"></i>
		</button>

		<ul class="layout-profile-menu">
			<li role="menuitem">
				<button class="p-link" :tabIndex="expanded ? null : '-1'">
					<i class="pi pi-user"></i>
					<span>Profile</span>
				</button>
			</li>
			<li role="menuitem">
				<button class="p-link"  :tabIndex="expanded ? null : '-1'">
					<i class="pi pi-cog"></i>
					<span>Settings</span>
				</button>
			</li>
			<li role="menuitem">
				<button class="p-link" :tabIndex="expanded ? null : '-1'">
					<i class="pi pi-envelope"></i>
					<span>Messages</span>
				</button>
			</li>
			<li role="menuitem">
				<button class="p-link" :tabIndex="expanded ? null : '-1'">
					<i class="pi pi-bell"></i>
					<span>Notifications</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				expanded: false
			}
		},
		methods: {
			onClick(event) {
				this.expanded = !this.expanded;
				event.preventDefault();
			}
		},
		name: "AppInlineProfile"
	}
</script>

<style scoped>

</style>
