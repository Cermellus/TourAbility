<template>
	<div :class="containerClass" @click="onDocumentClick">
		<AppTopBar :topbarMenuActive="topbarMenuActive" :activeTopbarItem="activeTopbarItem" :horizontal="isHorizontal()" :profileMode="profileMode" :model="grouped ? menuGrouped : menuUngrouped" :layoutMode="layoutMode" :menuActive="menuActive" @menubutton-click="onMenuButtonClick" @topbar-menubutton-click="onTopbarMenuButtonClick" @topbar-item-click="onTopbarItemClick" @menu-click="onMenuClick"/>

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

		<AppFooter/>

		<div v-if="staticMenuMobileActive" class="layout-mask"></div>
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
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
			menuGrouped: Array,
			menuUngrouped: Array
		}
	},
	created: function(){
		this.menuGrouped = [
			{
                label: 'Home Page', icon: 'pi pi-fw pi-home',
				items: [
					{label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'}
				]
			},
			{
                label: 'Customization', icon: 'pi pi-fw pi-cog',
				items: [
					{	label: 'Menu Layouts', icon: 'pi pi-fw pi-th-large', badge: 2,
						items: [
							{label: 'Static Menu', icon: 'pi pi-fw pi-bars', command: () => this.layoutMode = 'static'},
							{label: 'Overlay Menu', icon: 'pi pi-fw pi-bars', command: () => this.layoutMode = 'overlay'},
							{label: 'Slim Menu', icon: 'pi pi-fw pi-bars', command: () => this.layoutMode = 'slim'},
							{label: 'Horizontal Menu', icon: 'pi pi-fw pi-bars', command: () => this.layoutMode = 'horizontal'},
							{label: 'Grouped Menu', icon: 'pi pi-fw pi-bars', command: () => this.grouped = true},
							{label: 'Ungrouped Menu', icon: 'pi pi-fw pi-bars', command: () => this.grouped = false}
						]
					},
					{
						label: 'Menu Colors', icon: 'pi pi-fw pi-list', badge: 2,
						items: [
							{ label: 'Light', icon: 'pi pi-fw pi-circle-off', command: () => this.darkMenu = false},
							{ label: 'Dark', icon: 'pi pi-fw pi-circle-on', command: () => this.darkMenu = true}
						]
					},
					{
                        label: 'User Profile', icon: 'pi pi-fw pi-user', badge: 2,
						items: [
							{label: 'Popup Profile', icon: 'pi pi-fw pi-user',  command: () => this.profileMode = 'popup'},
							{label: 'Inline Profile', icon: 'pi pi-fw pi-user',  command: () => this.profileMode = 'inline'}
						]
					},
					{
						label: 'Themes', icon: 'pi pi-fw pi-pencil', badge: 17,
						items: [
							{
								label: 'Blue', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('blue', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('blue', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('blue', 'dark')
									}
								]
							},
							{
								label: 'Blue Grey', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('bluegrey', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('bluegrey', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('bluegrey', 'dark')
									}
								]
							},
							{
								label: 'Light Blue', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lightblue', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lightblue', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lightblue', 'dark')
									}
								]
							},
							{
								label: 'Indigo', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('indigo', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('indigo', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('indigo', 'dark')
									}
								]
							},
							{
								label: 'Pink', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('pink', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('pink', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('pink', 'dark')
									}
								]
							},
							{
								label: 'Green', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('green', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('green', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('green', 'dark')
									}
								]
							},
							{
								label: 'Light Green', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lightgreen', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lightgreen', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lightgreen', 'dark')
									}
								]
							},
							{
								label: 'Teal', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('teal', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('teal', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('teal', 'dark')
									}
								]
							},
							{
								label: 'Cyan', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('cyan', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('cyan', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('cyan', 'dark')
									}
								]
							},
							{
								label: 'Lime', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lime', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lime', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('lime', 'dark')
									}
								]
							},
							{
								label: 'Amber', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('amber', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('amber', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('amber', 'dark')
									}
								]
							},
							{
								label: 'Orange', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('orange', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('orange', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('orange', 'dark')
									}
								]
							},
							{
								label: 'Deep Orange', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('deeporange', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('deeporange', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('deeporange', 'dark')
									}
								]
							},
							{
								label: 'Yellow', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('yellow', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('yellow', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('yellow', 'dark')
									}
								]
							},
							{
								label: 'Purple', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('purple', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('purple', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('purple', 'dark')
									}
								]
							},
							{
								label: 'Deep Purple', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('deeppurple', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('deeppurple', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('deeppurple', 'dark')
									}
								]
							},
							{
								label: 'Brown', icon: 'pi pi-fw pi-pencil',
								items: [
									{
										label: 'Accent', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('brown', 'accent')
									},
									{
										label: 'Light', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('brown', 'light')
									},
									{
										label: 'Dark', icon: 'pi pi-fw pi-pencil',
										command: () => this.changeTheme('brown', 'dark')
									}
								]
							}
						]
					}
				]
			},
			{
				label: 'Components', icon: 'pi pi-fw pi-star',
				items: [
					{label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'},
					{label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms'},
					{label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},
					{label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
					{label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays'},
					{label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus'},
					{label: 'Messages', icon: 'pi pi-fw pi-spinner',to: '/messages'},
					{label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
					{label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc'}
				]
			},
			{
				label: 'Pages', icon: 'pi pi-fw pi-copy',
				items: [
					{label: 'Empty Page', icon: 'pi pi-fw pi-clone', to: '/empty'},
					{label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
					{label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
					{label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', to: '/error'},
					{label: '404 Page', icon: 'pi pi-fw pi-times', to: '/notfound'},
					{label: 'Access Denied', icon: 'pi pi-fw pi-ban', to: '/access'}
				]
			},
			{
				label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
				items: [
					{
						label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
						items: [
							{
								label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
								items: [
									{ label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
								]
							},
							{
								label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
								items: [
									{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-sign-in' }
								]
							},
						]
					},
					{
						label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
						items: [
							{
								label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
								items: [
									{ label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-sign-in' },
								]
							},
							{
								label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
								items: [
									{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-sign-in' }
								]
							},
						]
					}
				]
			},
			{
                label: 'Get Started', icon: 'pi pi-fw pi-download',
				items: [
					{
						label: 'Docs', icon: 'pi pi-fw pi-file',to: '/documentation'
					},
					{
						label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']
					}
				]
			}
		];
		this.menuUngrouped = [
			{
				label: 'Main Menu',
				icon: 'pi pi-fw pi-home',
				items: this.menuGrouped
			}
		]
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
		'AppFooter': AppFooter,
		'AppProfile': AppProfile
	}
}
</script>

<style lang="scss">
</style>
