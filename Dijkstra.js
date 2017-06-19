class Dikstra {
	constructor() {
		this.base = [];
		this.distances = {};
		this.links = {};
	}

	//public
	init() {

	}

	//public
	insert(origin, destination, distance) {
		this.base.push({
			origin: origin,
			destination: destination,
			distance: distances
		})
	}
}