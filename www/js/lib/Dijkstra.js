class Dikstra {
	constructor(vertices, arestas) {
		this.vertices = vertices || 0;
		this.arestas = arestas || 0;
		this.base = [];
		this.links = {};
		this.distances = {};
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