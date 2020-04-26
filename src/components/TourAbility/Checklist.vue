<template>
    <div class="p-grid p-fluid layout-dashboard">
        <div class="p-col-12">
            <div class="card card-w-title">
                <h1>How to become a "COVID-free" facility!</h1>

                <p>Below you can find, for each certifcation level, the list of anti-corona measures that need to be implemented by an accommodation provider.</p>

                <Accordion>
                    <AccordionTab header="Cert. level 1">
                        <div class="task-list">
                            <div class="card card-w-title tasks">
                                <h1>Anti-corona measures</h1>
                                <ul>
                                    <li v-for="c in checklistLevel1" :key="c.id">
                                        <span :class="'task-badge '+c.priority"></span>
                                        <span>{{c.name}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Cert. level 2">
                        <div class="task-list">
                            <div class="card card-w-title tasks">
                                <h1>Anti-corona measures</h1>
                                <ul>
                                    <li v-for="c in checklistLevel2" :key="c.id">
                                        <span :class="'task-badge '+c.priority"></span>
                                        <span>{{c.name}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Cert. level 3">
                        <div class="task-list">
                            <div class="card card-w-title tasks">
                                <h1>Anti-corona measures</h1>
                                <ul>
                                    <li v-for="c in checklistLevel3" :key="c.id">
                                        <span :class="'task-badge '+c.priority"></span>
                                        <span>{{c.name}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>
</template>

<script>
    import MockService from '../../service/TourAbility/MockService';

    export default {
        data() {
            return {
                certifications: Object
            }
        },
        computed: {
            checklistLevel1() {
                return this.certifications.level1 != null ? this.certifications.level1.checklist : [];
            },
            checklistLevel2() {
                return this.certifications.level2 != null ? this.certifications.level2.checklist : [];
            },
            checklistLevel3() {
                return this.certifications.level3 != null ? this.certifications.level3.checklist : [];
            }
        },
        mockService: null,
        created() {
            this.mockService = new MockService();
        },
        mounted() {
            this.mockService.getCertifications().then(data => this.certifications = data);
        }
    }
</script>

<style scoped>

</style>
