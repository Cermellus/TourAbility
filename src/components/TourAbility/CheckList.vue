<template>
    <div>

        <div class="layout-dashboard" >
                        <div class="p-grid">
                            <div class="p-col-12 p-md-6 p-lg-4 task-list">
                                <div class="card card-w-title tasks" >
                                    <h1>Level</h1>
                                    <ul>
                                        <li>
                                            <Checkbox name="task" value="reports" v-model="tasksCheckbox"/>
                                            <span>Sales Reports</span>
                                            <span class="task-badge red"></span>
                                        </li>
                                        <li>
                                            <Checkbox name="task" value="reports" v-model="tasksCheckbox"/>
                                            <span>Sales Reports</span>
                                            <span class="task-badge orange"></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

    </div>
</template>

<script>

    export default {
            props:{
                dataCheckList:Object
            },
            data() {
                return {
                    tasksCheckbox: []
                }
         },
         created() {
            console.log(this.dataCheckList)
        },
        mounted() {
            
        },
        methods: {

        }
    }
</script>


<style scoped>

</style>