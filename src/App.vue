<template>
	<div :class="containerClass" @click="onDocumentClick">
		<AppTopBar :topbarMenuActive="topbarMenuActive" :activeTopbarItem="activeTopbarItem" :horizontal="isHorizontal()" :profileMode="profileMode" :model="menu" :layoutMode="layoutMode" :menuActive="menuActive" @menubutton-click="onMenuButtonClick" @topbar-menubutton-click="onTopbarMenuButtonClick" @topbar-item-click="onTopbarItemClick" @menu-click="onMenuClick"/>

		<div class="p-grid">
			<div class="layout-dashboard p-col-12 p-lg-3">
				<AppProfile></AppProfile>
			</div>
			<div class="layout-main p-col-12 p-lg-9">
				<div class="layout-content">
					<router-view/>
				</div>
		</div>


		</div>

		<div v-if="staticMenuMobileActive" class="layout-mask"></div>
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppProfile from './AppProfile.vue';
import EventBus from './event-bus';

export default {
    data() {
        return {
            layoutMode: 'horizontal',
            staticMenuDesktopInactive: false,
            staticMenuMobileActive: false,
            overlayMenuActive: false,
            topbarMenuActive: false,
            activeTopbarItem: null,
            menuActive: false,
            darkMenu: false,
            profileMode: 'inline',
            grouped: true,
            menu: Array
		}
	},
	created: function(){
		this.menu = [
			{label: 'My Accommodations', to: '/accommodations'},
			{label: 'My Certifications', to: '/certifications'},
			{label: 'My Courses', to: '/courses'}
		];
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },
    methods: {
		onDocumentClick() {
			if (!this.topbarItemClick) {
				this.activeTopbarItem = null;
				this.topbarMenuActive = false;
			}

            if (!this.menuClick) {
				if (this.isHorizontal() || this.isSlim()) {
					EventBus.$emit('reset_active_index');
					this.menuActive = false;
				}
				this.hideOverlayMenu();
            }

			this.topbarItemClick = false;
			this.menuClick = false;
		},
		onMenuButtonClick(event) {
			this.menuClick = true;
			this.topbarMenuActive = false;

			if (this.layoutMode === 'overlay') {
				if (this.isDesktop())
					this.overlayMenuActive = !this.overlayMenuActive;
				else
					this.staticMenuMobileActive = !this.staticMenuMobileActive;
			}
			else {
				if (this.isDesktop())
					this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
				else
					this.staticMenuMobileActive = !this.staticMenuMobileActive;
			}

			event.preventDefault();
		},
		onTopbarMenuButtonClick(event) {
			this.topbarItemClick = true;
			this.topbarMenuActive = !this.topbarMenuActive;
			this.hideOverlayMenu();
			event.preventDefault();
		},
		onTopbarItemClick(event) {
			this.topbarItemClick = true;

			if (this.activeTopbarItem === event.item)
				this.activeTopbarItem = null;
			else
				this.activeTopbarItem = event.item;

			event.originalEvent.preventDefault();
		},
		onMenuClick() {
			this.menuClick = true;
		},
		changeTheme(theme, scheme) {
			this.changeStyleSheetUrl('layout-css', theme, 'layout', scheme);
			this.changeStyleSheetUrl('theme-css', theme, 'theme', scheme);
		},
		changeStyleSheetUrl(id, value, prefix, scheme) {
			let element = document.getElementById(id);
			let urlTokens = element.getAttribute('href').split('/');

			if(id.localeCompare('layout-css') === 0) {
				urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
			}
			else {
				urlTokens[urlTokens.length - 2] = value ;
				urlTokens[urlTokens.length - 1] = 'theme-' + scheme +  '.css' ;
			}
			let newURL = urlTokens.join('/');
			element.setAttribute('href', newURL);

			if (scheme === 'dark') {
				this.darkMenu = true;
			} else if (scheme === 'light') {
				this.darkMenu = false;
			}

			let topbarLogo = document.getElementById('layout-topbar-logo');
			let menuLogo = document.getElementById('layout-menu-logo');

			if (value.localeCompare('yellow') === 0 || value.localeCompare('lime') === 0) {
				topbarLogo.src = 'assets/layout/images/logo-black.png';
				menuLogo.src = 'assets/layout/images/logo-black.png';

			} else {
				topbarLogo.src = 'assets/layout/images/logo-white.png';
				menuLogo.src = 'assets/layout/images/logo-white.png';
			}
		},
		isHorizontal() {
			return this.layoutMode === 'horizontal';
		},
		isSlim() {
			return this.layoutMode === 'slim';
		},
		hideOverlayMenu() {
			this.overlayMenuActive = false;
			this.staticMenuMobileActive = false;
		},
		isDesktop() {
			return window.innerWidth > 1024;
		},
		isMobile() {
			return window.innerWidth <= 640;
		},
		onMenuItemClick(event) {
			if (!event.item.items) {
				EventBus.$emit('reset_active_index');
				this.hideOverlayMenu();
			}
			if (!event.item.items && (this.isHorizontal() || this.isSlim())) {
				this.menuActive = false;
			}
		},
		onRootMenuItemClick() {
			this.menuActive = !this.menuActive;
		}
	},
	computed: {
		containerClass() {
			return ['layout-wrapper', {
				'layout-horizontal': this.layoutMode === 'horizontal',
				'layout-overlay': this.layoutMode === 'overlay',
				'layout-static': this.layoutMode === 'static',
				'layout-slim': this.layoutMode === 'slim',
				'layout-static-inactive': this.staticMenuDesktopInactive,
				'layout-mobile-active': this.staticMenuMobileActive,
				'layout-overlay-active': this.overlayMenuActive,
				'layout-menu-dark': this.darkMenu,
				'layout-menu-light':!this.darkMenu
			}];
        }
	},
	components: {
		'AppTopBar': AppTopBar,
		'AppProfile': AppProfile
	}
}
</script>

<style lang="scss">
</style>
