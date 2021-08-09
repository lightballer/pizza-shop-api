export default class BaseRepository {
	constructor(model) {
		this.model = model;
	}
	getOne(id) {}
	getAll() {}
	create(data) {}
	update(newData) {}
	delete(id) {}
}
