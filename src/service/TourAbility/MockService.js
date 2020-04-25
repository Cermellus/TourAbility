import axios from 'axios'

export default class MockService {

	getStructures(){
		return axios.get('assets/layout/data/structures.json').then(res => res.data);
	}

	getCertifications(){
		return axios.get('assets/layout/data/certifications.json').then(res => res.data);
	}

	getCertificators(){
		return axios.get('assets/layout/data/certificators.json').then(res => res.data);
	}

	getLandmarks(){
		return axios.get('assets/layout/data/landmarks.json').then(res => res.data);
	}


	getCarsSmall() {
		return axios.get('assets/layout/data/cars-small.json').then(res => res.data.data);
	}

	getCarsMedium() {
		return axios.get('assets/layout/data/cars-medium.json').then(res => res.data.data);
	}

	getCarsLarge() {
		return axios.get('assets/layout/data/cars-large.json').then(res => res.data.data);
	}
}