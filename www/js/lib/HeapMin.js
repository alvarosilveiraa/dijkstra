class HeapMin {
  constructor(score) {
    this.content = [];
    this._score = score || function(x) {return x};
  }

  push(node) {
    this.content.push(node);
    this._bubbleUp(this.content.length - 1);
  }

  pop() {
    let head = this.content[0];
    let last = this.content.pop();
    if(this.content.length > 0) {
      this.content[0] = last;
      this._bubbleDown(0);
    }
    return head;
  }

  remove(node) {
    for(let i = 0; i < this.content.length; i++) {
      if(this.content[i] != node.name) continue;
      let last = this.content.pop();
      if(i == this.content.length - 1) break;
      this.content[i] = last;
      this._bubbleUp(i);
      this._bubbleDown(i);
      break;
    }
  }

  _bubbleUp(index) {
    let node = this.content[index]
    while(index > 0) {
      let parentIndex = Math.floor((index + 1) / 2) - 1;
      let parent = this.content[parentIndex];
      if(this._score(node) >= this._score(parent)) break;
      this.content[parentIndex] = node;
      this.content[index] = parent;
      index = parentIndex;
    }
  }

  _bubbleDown(index) {
    let node = this.content[index];
    while(true) {
      let min = null;
      let childIndex = (index + 1) * 2;
      if(childIndex - 1 < this.content.length) {
        if(this._score(this.content[childIndex - 1]) < this._score(node))
          min = childIndex - 1;
      }
      if(childIndex < this.content.length) {
        if(this._score(this.content[childIndex]) < (min == null? this._score(node): this._score(this.content[childIndex - 1])))
          min = childIndex;
      }
      if(min == null) break;
      this._swap(index, min);
      index = min;
    }
  }

  _swap(i, j) {
    let aux = this.content[i];
    this.content[i] = this.content[j];
    this.content[j] = aux;
  }
}
