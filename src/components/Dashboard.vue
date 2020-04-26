<template>
	<div class="layout-dashboard">
		<div class="p-grid">

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
						'#7E57C2',
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
						'#42A5F5',
					],
					borderWidth: 3,
					fill: true
				},
					{
						label: 'Expenses',
						data: [7, 12, 15, 5, 3, 13, 21],
						borderColor: [
							'#FFB300',
						],
						borderWidth: 3,
						fill: false,
						pointRadius: [4, 6, 4, 12, 8, 0, 4]
					},
					{
						label: 'New Users',
						data: [3, 7, 2, 17, 15, 13, 19],
						borderColor: [
							'#66BB6A',
						],
						borderWidth: 3,
						fill: false
					}]
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
