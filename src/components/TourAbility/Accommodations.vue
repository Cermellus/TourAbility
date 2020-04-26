<template>
    <div>

        <div class="p-grid p-fluid" style="margin-top:30px;margin-bottom:30px;">
            <div class="p-col-1 p-lg-1">
                <ToggleButton v-model="fc1" @change="fcSimulation(1)" onLabel="All" offLabel="All" onIcon="pi pi-check" offIcon="pi pi-times" />
            </div>
            <div class="p-col-2 p-lg-2">
                <ToggleButton v-model="fc2" @change="fcSimulation(2)" onLabel="Online" offLabel="Online" onIcon="pi pi-check" offIcon="pi pi-times" />
            </div>
            <div class="p-col-2 p-lg-2">
                <ToggleButton v-model="fc3" @change="fcSimulation(3)" onLabel="Not yet online" offLabel="Not yet online" onIcon="pi pi-check" offIcon="pi pi-times" />
            </div>
            <div class="p-col-2 p-lg-2">
                <ToggleButton v-model="fc4" @change="fcSimulation(4)" onLabel="Certified to level 1" offLabel="Certified to level 1" onIcon="pi pi-check" offIcon="pi pi-times" />
            </div>
            <div class="p-col-2 p-lg-2">
                <ToggleButton v-model="fc5" @change="fcSimulation(5)" onLabel="Certified to level 2" offLabel="Certified to level 2" onIcon="pi pi-check" offIcon="pi pi-times" />
            </div>
            <div class="p-col-2 p-lg-2">
                <ToggleButton v-model="fc6" @change="fcSimulation(6)" onLabel="Certified to level 3" offLabel="Certified to level 3" onIcon="pi pi-check" offIcon="pi pi-times" />
            </div>
        </div>




        <DataView :value="this.structures" :layout="layout" paginatorPosition="both" :paginator="true" :rows="20"
                  :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <div class="p-grid p-nogutter">
                    <div class="p-col-4" style="text-align: left">
                        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By"
                                  @change="onSortChange($event)"/>
                    </div>
                    <div class="table-title p-col-4" style="text-align: center">ACCOMODATIONS</div>
                    <div class="p-col-4" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout"/>
                    </div>
                </div>
            </template>
            <template #list="slotProps">
                <div class="p-col-12">
                    <div class="car-details">
                        <div>
                            <img :src="'assets/layout/images/structures/' + slotProps.data.image + '.jpeg'" :alt="slotProps.data.brand"/>
                            <div class="p-grid">
                                <div class="p-col-12"><b style="fontSize: 1.5em">{{slotProps.data.name}}</b></div>
                                <div class="p-col-12">{{slotProps.data.location.council}} ({{slotProps.data.location.region}} - {{slotProps.data.location.country}})</div>
                                <div class="p-col-1">
                                    <vue-fontawesome icon="eye" v-if="slotProps.data.published" style="fontSize: 1.5em;color:#00cc00;"  />
                                    <vue-fontawesome icon="eye-slash" v-else style="fontSize: 1.5em;color:#989898;"  />
                                </div>

                                <div class="p-col-3" >
                                    <div v-if="!getCertificationTitle(slotProps.data.certifications)">
                                        <span class="team-member-role">Not certified</span>
                                    </div>
                                    <div v-else>
                                        <vue-fontawesome icon="certificate" style="fontSize:1.5em;color:#ffc107;"  />
                                        <span class="team-member-role"> {{getCertificationTitle(slotProps.data.certifications)}}</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <Button icon="pi pi-plus" @click="open(slotProps.data)"></Button>
                    </div>
                </div>
            </template>
            <template #grid="slotProps">
                <div style="padding: .5em" class="p-col-12 p-md-3">
                    <Panel :header="slotProps.data.vin" style="text-align: center">
                        <img :src="'assets/layout/images/structures/' + slotProps.data.image + '.jpeg'" :alt="slotProps.data.image"/>
                        <div class="car-detail">{{slotProps.data.name}} - {{slotProps.data.location.council}}</div>
                        <div class="p-col-12">
                            <vue-fontawesome icon="eye"       v-if="slotProps.data.published" style="fontSize: 1.5em;color:#00cc00;"  />
                            <vue-fontawesome icon="eye-slash" v-else style="fontSize: 1.5em;color:#989898;"  />
                        </div>

                        <div class="p-col-12" >
                            <div v-if="!getCertificationTitle(slotProps.data.certifications)">
                                <span class="team-member-role">Not certified</span>
                            </div>
                            <div v-else>
                                <vue-fontawesome icon="certificate" style="fontSize:1.5em;color:#ffc107;"  />
                                <span class="team-member-role">{{getCertificationTitle(slotProps.data.certifications)}}</span>
                            </div>
                        </div>

                        <Button icon="pi pi-plus" @click="open(slotProps.data)"></Button>
                    </Panel>
                </div>
            </template>
        </DataView>





        <Dialog :header="'Request for certification '+dialogTitle" :visible.sync="display" :style="{width: '70vw'}" :modal="true">

            <div v-if="showBLev1">
                <Button  :style="{width: '100%','margin-bottom':'20px','margin-top':'10px'}" label="Level 1"  icon="pi pi-plus"/>
            </div>
            <div v-else class="layout-dashboard" >
                <div class="p-grid">
                    <div class="p-col-12 p-md-6 p-lg-4 task-list">
                        <div class="card card-w-title tasks" >
                            <h1>Level</h1>
                            <ul>
                                <li v-for="cert in CL1.checklist" :key="cert.id">
                                    <Checkbox name="task" value="report" v-model="tasksCheckbox"/>
                                    <span>{{cert.title}}</span>
                                    <span class="task-badge red"></span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--<CheckList v-else name="test1" v-bind:title="post.title" ></CheckList>-->

            <Button v-if="showBLev2" :style="{width: '100%','margin-bottom':'20px','margin-top':'10px'}" label="Level 2"  icon="pi pi-plus"/>
            <div v-else class="layout-dashboard" >
                <div class="p-grid">
                    <div class="p-col-12 p-md-6 p-lg-4 task-list">
                        <div class="card card-w-title tasks" >
                            <h1>Level</h1>
                            <ul>
                                <li v-for="cert in CL2.checklist" :key="cert.id">
                                    <Checkbox name="task" value="reports" v-model="tasksCheckbox"/>
                                    <span>{{cert.title}}</span>
                                    <span class="task-badge red"></span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Button v-if="showBLev3" :style="{width: '100%','margin-bottom':'20px','margin-top':'10px'}" label="Level 3"  icon="pi pi-plus"/>

            <template #footer>
                <!--<Button label="Yes" @click="close" icon="pi pi-check"/>-->
                <Button label="Close" @click="close" icon="pi pi-times" class="p-button-secondary"/>
            </template>
        </Dialog>



    </div>
</template>

<script>
    import MockService from '../../service/TourAbility/MockService';
    //import CheckList from './CheckList.vue';

    export default {
        data() {
            return {
                fc1: true,
                fc2: true,
                fc3: true,
                fc4: true,
                fc5: true,
                fc6: true,

                dialogTitle:"",
                showBLev1:true,
                showBLev2:true,
                showBLev3:true,

                showTask1:false,
                showTask2:false,
                showTask3:false,

                tasksCheckbox: [],

                CL1:{},
                CL2:{},
                CL3:{},


                display: false,
                structures: null,
                //visibleStructures:null,
                cars: null,
                layout: 'list',
                sortKey: null,
                sortOrder: null,
                sortField: null,
                sortOptions: [
                    {label: 'Newest First', value: '!id'},
                    {label: 'Oldest First', value: 'id'},
                    {label: 'Name', value: 'name'}
                ]
            }
        },
        mockService: null,
        created() {
            this.mockService = new MockService();
        },
        mounted() {
            this.mockService.getCarsLarge().then(data => this.cars = data);
            this.mockService.getStructures().then(data => {
                this.structures = data
                //this.visibleStructures = data
            });
        },
        methods: {
            open(structure) {

                this.dialogTitle=structure.name;

                let certifications=structure.certifications;

                if(structure.certifications.level1){
                    this.showBLev1=false;
                    this.showTask1=false;
                }
                this.CL1=certifications.level1;

                if(structure.certifications.level2){
                    this.showBLev2=false;
                    this.showTask2=false;
                }
                this.CL2=certifications.level2;

                if(structure.certifications.level3){
                    this.showBLev3=false;
                    this.showTask3=false;
                }
                this.CL3=certifications.level3;

                console.log(this.CL1);
                console.log(this.CL2);
                console.log(this.CL3);


                this.display = true;
            },
            close() {
                this.certifications=false;
                this.display = false;
            },
            fcSimulation(fcId){
                //this.visibleStructures=this.structures

                if(fcId==1){
                    if( this.fc1===true){
                        this.fc2=true;
                        this.fc3=true;
                        this.fc4=true;
                        this.fc5=true;
                        this.fc6=true;
                    }else{
                        this.fc2=false;
                        this.fc3=false;
                        this.fc4=false;
                        this.fc5=false;
                        this.fc6=false;
                    }
                }else{
                    if( !this.fc2 ||
                        !this.fc3 ||
                        !this.fc4 ||
                        !this.fc5 ||
                        !this.fc6
                    ){
                        this.fc1=false;
                    }
                }
                /*
                            this.visibleStructures.forEach(row => {
                                if(this.fc1)
                            });*/
            },
            onSortChange(event) {
                const value = event.value.value;
                const sortValue = event.value;

                if (value.indexOf('!') === 0) {
                    this.sortOrder = -1;
                    this.sortField = value.substring(1, value.length);
                    this.sortKey = sortValue;
                } else {
                    this.sortOrder = 1;
                    this.sortField = value;
                    this.sortKey = sortValue;
                }
            },
            getCertificationTitle(certifications){
                if(certifications){
                    if(certifications.level1 && certifications.level1.status==='certified'){
                        if(certifications.level2 && certifications.level2.status==='certified'){
                            if(certifications.level3 && certifications.level3.status==='certified'){
                                return "Level 3";
                            }
                            return "Level 2";
                        }
                        return "Level 1";
                    }
                }
                return null;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .table-title{
        font-size: 1.3em;
    }

    .p-dropdown {
        width: 12em;
    }

    .p-dataview {
        .car-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2em;
            border-bottom: 1px solid #d9dad9;

            & > div {
                display: flex;
                align-items: center;

                img {
                    margin-right: 14px;
                }
            }
        }

        .car-detail {
            padding: 0 1em 1em 1em;
            border-bottom: 1px solid #d9dad9;
            margin: 1em;
        }

        .p-panel-content {
            padding: 1em;
        }
    }

    @media (max-width: 1024px) {
        .p-dataview {
            .car-details {
                img {
                    width: 75px;
                }
            }
        }
    }

    /* Dark Theme such as luna-amber, luna-blue, luna-green and luna-pink */
    .dark-theme {
        .p-dataview {
            .car-details {
                border-bottom-color: #191919;
            }

            .car-detail {
                border-bottom: 1px solid #191919;
            }
        }
    }
</style>
