class Elemento {
  constructor(opcion, descripcion, valor) {
    this._opcion = opcion;
    this._descripcion = descripcion;
    this._valor = valor;
  }

  get opcion() {
    return this._opcion;
  }
  set opcion(opcion) {
    this._opcion = opcion;
  }
  get descripcion() {
    return this._descripcion;
  }
  set descripcion(descripcion) {
    this._descripcion = descripcion;
  }
  get valor() {
    return this._valor;
  }
  set valor(valor) {
    this._valor = valor;
  }
  
}
