class Dijkstra {
	constructor(vertices, arestas) {
    if(vertices > 10) throw new Error("Máximo 10 vértices");
    if(arestas > vertices * vertices) throw new Error("Máximo vértices² arestas");
    this.vertices = Number(vertices);
    this.arestas = Number(arestas);
    this.chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
		this.base = [];
		this.routes = {};
		this.distances = {};
    this.heap = new HeapMin(node => node.distance);
	}

	init(vertice='A') {
    this._setValues(vertice);
    while(this.heap.content.length > 0) {
      let head = this.heap.pop();
      for(let i = 0; i < this.heap.content.length; i++) {
        let heap = this.heap.content[i];
        let node = this._getNode(head.name, heap.name);
        if(node) {
          let distance = this.distances[head.name] + node.distance;
          if(distance < this.distances[heap.name]) {
            this.distances[heap.name] = distance;
            this.routes[heap.name] = head.name;
            this.heap.remove(heap);
            this.heap.push({name: heap.name, distance: distance});
          }
        }
      }
    }
	}

	push(origin, destination, distance) {
		this.base.push({
			origin: origin,
			destination: destination,
			distance: Number(distance)
		})
	}

  _setValues(vertice) {
    for(let i = 0; i < this.vertices; i++) {
      let value;
      if(this.chars[i] == vertice) value = 0;
      else value = Infinity;
      this.distances[this.chars[i]] = value;
      this.heap.push({name: this.chars[i], distance: value});
    }
  }

  _getNode(origin, destination) {
    for(let i = 0; i < this.base.length; i++) {
      if(this.base[i].origin == origin && this.base[i].destination == destination)
        return this.base[i];
    }
    return null;
  }

}
