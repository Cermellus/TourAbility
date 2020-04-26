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

        <button class="p-link signout">
            <i class="pi pi-sign-out"></i>
        </button>
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
            onTopbarMenuButtonClick(event) {
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
    .layout-topbar-logo {
        width: 25%;
        padding: 0;

        img {
            margin: -2px -2px -2px 10px !important;
            width: 100%;
            height: auto !important;
            min-height: 50px !important;
            max-height: 80px !important;
            min-width: 230px !important;
            max-width: 350px !important;
            padding-right: 1em;

        }
    }

    .signout i {
        position: fixed;
        top: 0.5em;
        right: .5em;
        z-index: 999;
        color: #FDE3d7;
        font-size: 1.7em;
    }

    @media screen and (max-width: 897px) {
        .layout-wrapper {
            .layout-topbar {
                text-align: left !important;
            }

        }
    }

    @media screen and (min-width: 897px) {
        .layout-topbar-logo {
            img {
                margin: -2px !important;
            }
        }
        .signout i {
            top: 1em;
        }
    }

</style>
