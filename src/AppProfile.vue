<template>
    <div class="user-card card">
        <div class="user-card-header">
            <img src="assets/layout/images/avatar_1.png" alt="babylon-layout"/>
        </div>
        <div class="user-card-content">
            <div class="user-card-name">
                <span>John Doe</span>
            </div>

            <div class="user-detail">
                <ul>
                    <li class="clearfix">
                        <i class="pi pi-list"></i>
                        <span class="project-title">Tasks</span>
                        <span class="project-detail">3 open</span>
                        <div class="project-progressbar">
                            <div class="project-progressbar-value" style="width: 50%"></div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <i class="pi pi-dollar"></i>
                        <span class="project-title">Revenue</span>
                        <span class="project-detail">+20%</span>
                        <div class="project-progressbar">
                            <div class="project-progressbar-value" style="width: 20%"></div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <i class="pi pi-money-bill"></i>
                        <span class="project-title">Payments</span>
                        <span class="project-detail">24 new</span>
                        <div class="project-progressbar">
                            <div class="project-progressbar-value" style="width: 65%"></div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <i class="pi pi-users"></i>
                        <span class="project-title">Clients</span>
                        <span class="project-detail">+80%</span>
                        <div class="project-progressbar">
                            <div class="project-progressbar-value" style="width: 80%"></div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <i class="pi pi-money-bill"></i>
                        <span class="project-title">Sales</span>
                        <span class="project-detail">+45</span>
                        <div class="project-progressbar">
                            <div class="project-progressbar-value" style="width: 45%"></div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <i class="pi pi-chart-bar"></i>
                        <span class="project-title">Performance</span>
                        <span class="project-detail">+75</span>
                        <div class="project-progressbar">
                            <div class="project-progressbar-value" style="width: 75%"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                expanded: true
            }
        },
        methods: {
            onClick(event) {
                this.expanded = !this.expanded;
                event.preventDefault();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user-card {
        margin-top: 70px;

        .user-card-header {
            background: transparent;
            height: 220px;
            padding-top: 2em;
            text-align: center;
            img {
                max-width: 150px;
                height: auto;
            }
        }

        .user-card-content {
            text-align: center;
            .user-card-name{
                margin-left: 0;
                top:-1em;
                color: #212121;
            }
        }

    }

</style>
