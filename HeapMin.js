class HeapMin {
	constructor() {
		this.heap = [];
		this.count = 0;
	}

	insert(val) {
		let index = this.count++;
		this.heap.push(val);
		while(index > 1 && this.heap[index] > this.heap[index / 2]) {
			this.trade(index, index / 2);
			index = index / 2;
		}
	}

	update(i, val) {}

	extract() {
		if(this.count > 0) {
			this.heap[1] = this.heap[this.count];
			this.count --;

			let index = 1;
			let next = true;

			while(next) {
				let childs = this.getChilds(index);
				if(childs == 0) {
					next = false;
				}else if(childs == 1) {
					if(this.heap[index] < this.heap[2 * index]) {
						this.trade(index, 2 * index);
					}
					next = false;
				}else {
					let priority = getPriority(index);
					if(this.heap[index] < this.heap[priority]) {
						this.trade(index, priority);
						index = priority;
					}else {
						next = false;
					}
				}
			}
		}
	}

	isHeap() {
        for(let i = 2; i < this.count; i++) {
        	if(this.heap[i] > this.heap[i / 2])
        		return false;
        }
        return true;
	}

	trade(i, j) {
		let aux = this.heap[i];
		this.heap[i] = this.heap[j];
		this.heap[j] = aux;
	}

	getChilds(i) {
		if(2 * i + 1 <= this.count) return 2;
		else if(2 * i <= this.count) return 1;
		else return 0;
	}

	getPriority(i) {
		if(this.heap[2 * i] > this.heap[2 * i + 2]) return 2 * i;
		else return 2 * i + 1;
	}
}