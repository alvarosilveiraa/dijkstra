class HeapMin {

  constructor(cmp) {
    this.cmp = cmp || this._cmpDefault;
    this.items = [];
    this.size = 0;
  }

  insert(item) {
    let i = this.size++;
    this.items[i] = item;
    let parent = (i - 1) >> 1;
    while((parent > 0) && this.cmp(this.items[parent], item) > 0) {
      this._swap(i, parent);
      i = parent;
      parent = (i - 1) >> 1;
    }
  }

  update(item, newItem) {
    for(let i = 0; i < this.size; i++) {
      if(this.items[i] === item) {
        this.items[i] = newItem;
        return true;
      }
    }
    return false;
  }

  pop() {
    if(this.size === 0) return;
    let head = this.items[0];
    this._bubble(0);
    return head;
  }

  remove(item) {
    for(let i = 0; i < this.size; ++i) {
      if(this.items[i] === item) {
        this._bubble(i);
        return true;
      }
    }
    return false;
  }

  _bubble(i) {
    this.items[i] = this.items[--this.size];
    this.items[this.size] = null;

    while(true) {
      let left = (i << 1) + 1
        , right = (i << 1) + 2
        , min = i;

      if(left < this.size && this.cmp(this.items[left], this.items[min]) < 0)
        min = left;
      else if(right < this.size && this.cmp(this.items[right], this.items[min]) < 0)
        min = right;

      if(min !== i) {
        this._swap(i, min);
        i = min;
      }else {
        break;
      }
    }
  }

  _swap(i, j) {
    let aux = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = aux;
  }

  _cmpDefault(x, y) {
    // if(x < y) return -1
    // else if(x > y) return 1
    // else return 0;
    return x - y;
  }
}
