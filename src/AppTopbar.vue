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
			<img id="layout-topbar-logo" alt="babylon-layout" src="assets/layout/images/tourability_logo.png"/>
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
				<button class="p-link signout">
					<i class="pi pi-sign-out"></i>
				</button>
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
<style lang="scss" scoped>
	.layout-topbar-logo{
		width: 25%;
		padding: 0;
		img {
			margin: -2px!important;
			width: 100%;
			height: auto!important;
			min-height: 50px!important;
			max-height: 80px!important;
			min-width: 230px!important;
			max-width: 350px!important;
			padding-right: 1em;

		}
	}
	.signout i{
		color: #FDE3d7;
		padding-top: 1em;
		font-size: 1.7em;
	}
</style>
