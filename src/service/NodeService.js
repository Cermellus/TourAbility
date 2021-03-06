import axios from 'axios';

export default class NodeService {

	getFilesystem() {
		return axios.get('assets/demo/data/filesystem.json').then(res => res.data.data);
	}

	getTreeNodes() {
		return axios.get('assets/demo/data/treenodes.json').then(res => res.data.root);
	}

	getTreeTableNodes() {
		return axios.get('assets/demo/data/treetablenodes.json').then(res => res.data.root);
	}
}