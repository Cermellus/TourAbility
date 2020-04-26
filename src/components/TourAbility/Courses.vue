<template>
	<div class="p-grid p-fluid layout-dashboard">
		<div class="p-col-12">
			<div class="card card-w-title">
				<Panel>
					<template #header>
						<div style="text-align: center;font-size: 1.3em;">Courses</div>

					</template>
				<h1>Improve your skills!</h1>
				<Accordion>
					<AccordionTab header="Topic 1">
						<div class="card card-w-title team">
							<ul>
								<li class="li-course">
									<img src="assets/layout/images/avatar.png" alt="babylon-layout"/>
									<div class="team-box">
										<span class="team-member">John Doe</span>
										<span class="team-member-role">Facility Manager</span>
										<p>This training focuses on the ...</p>
									</div>
									<button class="p-link">
										<i class="pi pi-share-alt"></i>
									</button>
									<button class="p-link">
										<i class="pi pi-sign-in"></i>
									</button>
								</li>
								<li class="li-course">
									<img src="assets/layout/images/avatar-john.png" alt="babylon-layout"/>
									<div class="team-box">
										<span class="team-member">Jack Sparrow</span>
										<span class="team-member-role">Accountant</span>
										<p>This training focuses on the ...</p>
									</div>
									<button class="p-link">
										<i class="pi pi-share-alt"></i>
									</button>
									<button class="p-link">
										<i class="pi pi-sign-in"></i>
									</button>
								</li>
							</ul>
						</div>

					</AccordionTab>
					<AccordionTab header="Topic 2">
						<div class="card card-w-title team">
							<ul>
								<li class="li-course">
									<img src="assets/layout/images/avatar-kevin.png" alt="babylon-layout"/>
									<div class="team-box">
										<span class="team-member">Luciano Pavarotti</span>
										<span class="team-member-role">Singer</span>
										<p>This training focuses on the ...</p>
									</div>
									<button class="p-link">
										<i class="pi pi-share-alt"></i>
									</button>
									<button class="p-link">
										<i class="pi pi-sign-in"></i>
									</button>
								</li>
							</ul>
						</div>
					</AccordionTab>
					<AccordionTab header="Training 3">
						<div class="card card-w-title team">
							<ul>
								<li class="li-course">
									<img src="assets/layout/images/avatar-kevin.png" alt="babylon-layout"/>
									<div class="team-box">
										<span class="team-member">Luciano Pavarotti</span>
										<span class="team-member-role">Singer</span>
										<p>This training focuses on the ...</p>
									</div>
									<button class="p-link">
										<i class="pi pi-share-alt"></i>
									</button>
									<button class="p-link">
										<i class="pi pi-sign-in"></i>
									</button>
								</li>
							</ul>
						</div>
				</AccordionTab>
				</Accordion>
				</Panel>
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

<style lang="scss" scoped>
	.li-course {
		min-height: 100px;
	}
</style>
