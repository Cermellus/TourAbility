<template>
    <div>

        <DataView :value="cars" :layout="layout" paginatorPosition="both" :paginator="true" :rows="20"
                  :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <div class="p-grid p-nogutter">
                    <div class="p-col-3" style="text-align: left">
                        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By"
                                  @change="onSortChange($event)"/>
                    </div>
                    <div class="table-title p-col-6" style="text-align: center">ACCOMODATIONS</div>
                    <div class="p-col-3" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout"/>
                    </div>
                </div>
            </template>
            <template #list="slotProps">
                <div class="p-col-12">
                    <div class="car-details">
                        <div>
                            <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
                            <div class="p-grid">
                                <div class="p-col-12">Vin: <b>{{slotProps.data.vin}}</b></div>
                                <div class="p-col-12">Year: <b>{{slotProps.data.year}}</b></div>
                                <div class="p-col-12">Brand: <b>{{slotProps.data.brand}}</b></div>
                                <div class="p-col-12">Color: <b>{{slotProps.data.color}}</b></div>
                            </div>
                        </div>
                        <Button icon="pi pi-search"></Button>
                    </div>
                </div>
            </template>
            <template #grid="slotProps">
                <div style="padding: .5em" class="p-col-12 p-md-3">
                    <Panel :header="slotProps.data.vin" style="text-align: center">
                        <img :src="'demo/images/car/' + slotProps.data.brand + '.png'" :alt="slotProps.data.brand"/>
                        <div class="car-detail">{{slotProps.data.year}} - {{slotProps.data.color}}</div>
                        <Button icon="pi pi-search"></Button>
                    </Panel>
                </div>
            </template>
        </DataView>


    </div>
</template>

<script>
    import MockService from '../../service/TourAbility/MockService';

    export default {
        data() {
            return {
                cars: null,
                layout: 'list',
                sortKey: null,
                sortOrder: null,
                sortField: null,
                sortOptions: [
                    {label: 'Newest First', value: '!year'},
                    {label: 'Oldest First', value: 'year'},
                    {label: 'Brand', value: 'brand'}
                ]
            }
        },
        mockService: null,
        created() {
            this.mockService = new MockService();
        },
        mounted() {
            this.mockService.getCarsLarge().then(data => this.cars = data);
        },
        methods: {
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
            }
        }
    }
</script>

<style lang="scss" scoped>
   .table-title{
       font-size: 1.3em;
   }
</style>
