class Main {
  constructor() {
    this.step = 0;
    this.dijkstra = null;
    this.form = document.querySelector("form");
    this.input = this.form.querySelector("input");
    this.input.focus();
    this.btnClear = this.form.querySelector(".btn-clear");
    this.btnUpload = this.form.querySelector(".btn-upload");
    this.content = document.querySelector(".content");
    this.contentIn = this.content.querySelector(".in");
    this.contentOut = this.content.querySelector(".out");
  }

  submit(e) {
    e.preventDefault();
    this._showContent();
    this.input.value = this.input.value.toUpperCase();
    if(this.step == 0) {
      try {
        this.btnClear.removeAttribute("disabled");
        this.btnUpload.setAttribute("disabled", '');
        this.dijkstra = new Dijkstra(...this.input.value.split(' '));
      }catch(e) {return alert(e)}
    }else {
      if(this.step <= this.dijkstra.arestas) {
        this.dijkstra.push(...this.input.value.split(' '));
      }else {
        this.dijkstra.init(this.input.value);
        this._setOut(this.input.value);
        this.input.setAttribute("disabled", '');
        this.step = 0;
      }
    }
    this._setIn(this.input.value);
    this.input.value = '';
    this.step++;
  }

  clear() {
    this.form.removeAttribute("style");
    this.content.removeAttribute("style");
    this.contentIn.innerHTML = "<h4>Entrada</h4>";
    this.contentOut.innerHTML = "<h4>Saída</h4>";
    this.input.removeAttribute("disabled");
    this.btnClear.setAttribute("disabled", '');
    this.btnUpload.removeAttribute("disabled");
    this.input.focus();
    this.step = 0;
  }

  upload() {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.addEventListener("change", e => {
      let reader = new FileReader();
      reader.onload = function() {
        this._showContent();
        let result = reader.result.split('\n');
        for(let i = 0; i < result.length; i++) {
          if(result[i]) {
            this.input.value = result[i];
            this.submit(e);
          }
        }
      }.bind(this)
      reader.readAsText(input.files[0]);
    })
    input.click();
    return false;
  }

  _showContent() {
    this.form.style.top = "120px";
    this.content.style.opacity = '1';
  }

  _setIn(text) {
    let p = document.createElement('p');
    p.textContent = text;
    this.contentIn.appendChild(p);
  }

  _setOut(head) {
    for(let i = 0; i < this.dijkstra.vertices; i++) {
      let key = Object.keys(this.dijkstra.distances)[i];
      let value = this.dijkstra.distances[key];
      if(value == 0 || value == Infinity) continue;
      let p = document.createElement('p');
      p.textContent = `Distância de ${head} até ${key}: ${value} km`;
      this.contentOut.appendChild(p);
    }
  }
}
let main = new Main();
