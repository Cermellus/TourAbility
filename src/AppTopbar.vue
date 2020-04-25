<template>
	<div class="layout-topbar clearfix">
        <div class="layout-menu-container" @click="onMenuClick">
            <div class="layout-menu-wrapper">
                <div class="menu-scroll-content">
                    <AppMenu :model="model" :layoutMode="layoutMode" :active="menuActive"
                             @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"/>
                </div>
            </div>
        </div>

		<button class="layout-topbar-logo p-link">
			<img id="layout-topbar-logo" alt="babylon-layout" src="assets/layout/images/logo-white.png"/>
		</button>

		<button class="layout-menu-button p-link" @click="onMenuButtonClick">
			<i class="pi pi-bars"></i>
		</button>

		<button id="topbar-menu-button" class="p-link"  @click="onTopbarMenuButtonClick">
			<i class="pi pi-ellipsis-v"></i>
		</button>

		<ul :class="topbarItemsClass">
			<li v-if="profileMode === 'popup' || horizontal" :class="['user-profile', {'active-topmenuitem': activeTopbarItem === 'profile'}]"
				@click="$emit('topbar-item-click',{originalEvent:$event,item:'profile'})">
				<button class="p-link">
					<img alt="babylon-layout" src="assets/layout/images/avatar.png"/>
					<span class="topbar-item-name">Arlene Welch</span>
				</button>

				<ul class="fadeInDown">
					<li role="menuitem">
						<button class="p-link">
							<i class="pi pi-user"></i>
							<span>Profile</span>
						</button>
					</li>
					<li role="menuitem">
						<button class="p-link">
							<i class="pi pi-cog"></i>
							<span>Settings</span>
						</button>
					</li>
					<li role="menuitem">
						<button class="p-link">
							<i class="pi pi-envelope"></i>
							<span>Message</span>
						</button>
					</li>
					<li role="menuitem">
						<button class="p-link">
							<i class="pi pi-bell"></i>
							<span>Notifications</span>
						</button>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
    import AppMenu from './AppMenu';

export default {
	props: {
		topbarMenuActive: Boolean,
		activeTopbarItem: String,
		profileMode: String,
            horizontal: Boolean,

            menuActive: Boolean,
            model: Array,
            layoutMode: String
        },
    methods: {
        onMenuButtonClick(event) {
            this.$emit('menubutton-click', event);
        },
		onTopbarMenuButtonClick(event){
			this.$emit('topbar-menubutton-click', event);
            },
            onMenuItemClick(event) {
                this.$emit('menuitem-click', event);
            },
            onRootMenuItemClick(event) {
                this.$emit('root-menuitem-click', event);
            },
            onMenuClick(event) {
                this.$emit('menu-click', event);
            },
            doLogout() {
                this.$router.replace('/login');
		}
    },
	computed: {
		topbarItemsClass() {
			return ['topbar-menu fadeInDown', {
				'topbar-menu-visible': this.topbarMenuActive
			}];
		},
		displayInlineProfile() {
			return this.profileMode === 'inline' && this.layoutMode !== 'horizontal'
		}
        },
        components: {
            'AppMenu': AppMenu,
	}

}
</script>
