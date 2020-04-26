<template>
	<div class="layout-dashboard">
		<div class="p-grid" style="padding-top: 36px;">
			<div class="p-col-12 p-md-7">
				<div class="card card-w-title statistics">
					<h1>Statistics</h1>
					<Chart type="line" :data="chartData" :options="chartOptions"/>
				</div>
			</div>
			<div class="p-col-12 p-md-5">
				<div class="card">
					<h1 class="centerText">Polar Area Chart</h1>
					<Chart type="polarArea" :data="polarData" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CarService from '../service/CarService';
import EventService from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
	data() {
		return {
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'Sales',
					data: [12, 19, 3, 5, 2, 3, 9],
					borderColor: [
						'#E30613',
					],
					borderWidth: 3,
					borderDash: [5, 5],
					fill: false,
					pointRadius: 3
				}, {
					label: 'Income',
					data: [1, 2, 5, 3, 12, 7, 15],
					backgroundColor: [
						'rgba(187,222,251,0.2)',
					],
					borderColor: [
						'#FDE7DD',
					],
					borderWidth: 3,
					fill: true
				},
					{
						label: 'Expenses',
						data: [7, 12, 15, 5, 3, 13, 21],
						borderColor: [
							'#EBDFDA',
						],
						borderWidth: 3,
						fill: false,
						pointRadius: [4, 6, 4, 12, 8, 0, 4]
					},
					{
						label: 'New Users',
						data: [3, 7, 2, 17, 15, 13, 19],
						borderColor: [
							'#D7C3B9',
						],
						borderWidth: 3,
						fill: false
					}]
			},
			polarData: {
				datasets: [{
					data: [
						11,
						16,
						7,
						3,
						14
					],
					backgroundColor: [
						"#E30613",
						"#FDE7DD",
						"#EBDFDA",
						"#D7C3B9",
						"#C3B1A9"
					],
					label: 'My dataset'
				}],
				labels: [
					"Item 1",
					"Item 2",
					"Item 3",
					"Item 4",
					"Item 5"
				]
			},

			chartOptions: {
				responsive: true,
				hover: {
					mode: 'index'
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			},
			menuItems: [
				{
					label: 'Save', icon: 'fa fa-fw fa-check'
				},
				{
					label: 'Update', icon: 'fa fa-fw fa-refresh'
				},
				{
					label: 'Delete', icon: 'fa fa-fw fa-trash'
				}
			],
			tasksCheckbox: [],
			cars: null,
			selectedCar: null,
			options: {
				plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
				defaultDate: '2016-01-12',
				header: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				editable: true
			},
			events: null,
		}
	},
	carService: null,
	eventService: null,
	created() {
		this.carService = new CarService();
		this.eventService = new EventService();
	},
	mounted() {
		this.carService.getCarsMedium().then(data => this.cars = data);
		this.eventService.getEvents().then(data => this.events = data);
	},
	methods: {
		toggle(event) {
			this.$refs.menu.toggle(event);
		}
	}
}
</script>

<style scoped>

</style>
