<template>
    <div class="user-card card">
        <div class="user-card-header">
            <img src="assets/layout/images/avatar.png" alt="babylon-layout"/>
        </div>
        <div class="user-card-content">
            <div class="user-card-name">
                <span>John Doe</span>
            </div>

            <div class="user-detail">
                <div class="overview-box box1">
                    <i class="overview-icon pi pi-dollar"></i>
                    <span class="overview-title">Sales</span>
                    <i class="overview-arrow pi pi-chevron-circle-up"></i>
                    <div class="overview-numbers">
                        $ 92,440
                    </div>
                    <div class="overview-subinfo">
                        21% more than yesterday
                    </div>
                </div>
                <div class="overview-box box2">
                    <i class="overview-icon pi pi-search"></i>
                    <span class="overview-title">Views</span>
                    <i class="overview-arrow pi pi-chevron-circle-up"></i>
                    <div class="overview-numbers">
                        7029
                    </div>
                    <div class="overview-subinfo">
                        2% more than yesterday
                    </div>
                </div>
                <div class="overview-box box3">
                    <i class="overview-icon pi pi-users"></i>
                    <span class="overview-title">Users</span>
                    <i class="overview-arrow pi pi-chevron-circle-up"></i>
                    <div class="overview-numbers">
                        9522
                    </div>
                    <div class="overview-subinfo">
                        7% more than yesterday
                    </div>
                </div>
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
    .box1{
        color: #2E2824;
        background-color: #EBDFDA;
        margin-bottom: 1em;
        border-radius: 1em;
    }
    .box2{
        color: #2E2824;
        background-color: #D7C3B9;
        margin-bottom: 1em;
        border-radius: 1em;
    }
    .box3{
        color: #2E2824;
        background-color: #C3B1A9;
        margin-bottom: 1em;
        border-radius: 1em;
    }
    .user-card {
        background: transparent;
        margin-top: 80px;

        .user-card-header {
            background: transparent;
            height: 220px;
            padding-top: 2em;
            text-align: center;

            img {
                max-width: 150px;
                height: auto;
                border: solid 1px #F9C5AF;
                border-radius: 100%;
            }
        }

        .user-card-content {
            text-align: center;

            .user-card-name {
                margin-left: 0;
                top: -1em;
                color: #212121;
            }
        }

    }

</style>
