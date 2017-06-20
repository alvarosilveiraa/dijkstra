class Dikstra {

	constructor(vertices, arestas) {
    if(vertices > 10) throw new Error("...");
    if(arestas > vertices * vertices) throw new Error("...");

    this.vertices = vertices;
    this.arestas = arestas;
    this.chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
		this.base = [];
		this.links = {};
		this.distances = {};
    this.heap = new HeapMin(function(x, y) {
      if(x.distance < y.distance) return -1
      else if(x.distance > y.distance) return 1
      else return 0;
    });
	}

	init() {
    this._startValues();
    while(this.heap.size > 0) {
      let head = this.heap.pop();
      for(let i = 0; i < this.heap.size; i++) {
        let heap = this.heap.items[i];
        let item = this._getItem(head.name, heap.name);
        if(item) {
          let distance = this.distances[head.name] + item.distance;
          if(distance < this.distances[heap.name]) {
            this.distances[heap.name] = distance;
            this.links[heap.name] = head.name;
            this.heap.update(heap, {name: heap.name, distance: distance});
          }
        }
      }
    }
	}

	insert(origin, destination, distance) {
    if(this.base.length < this.arestas) {
  		this.base.push({
  			origin: origin,
  			destination: destination,
  			distance: distance
  		})
    }
	}

  _startValues() {
    if(this.vertices > 0) {
      this.heap.insert({name: this.chars[0], distance: 0});
      this.distances[this.chars[0]] = 0;
      for(let i = 1; i < this.vertices; i++) {
        this.distances[this.chars[i]] = Infinity;
        this.heap.insert({name: this.chars[i], distance: Infinity});
      }
    }
  }

  _getItem(origin, destination) {
    for(let i = 0; i < this.base.length; i++) {
      if(
        this.base[i].origin == origin && this.base[i].destination == destination ||
        this.base[i].origin == destination && this.base[i].destination == origin
      )
        return this.base[i];
    }
    return null;
  }

}
