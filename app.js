let ingresos = [];
let egresos = [];

let totalEgresos = 0;
let totalIngresos = 0;
let total = 0;

let opcion = "";
let descripcion = "";
let valor = 0;

let elementosIngreso = "";
let elementosEgreso = "";

let diaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
let mes = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic",];

function agregar() {
  opcion = document.getElementById("opcion").value;
  descripcion = document.getElementById("descripcion").value;
  valor = parseInt(document.getElementById("valor").value);

  if (!isNaN(valor) && valor > 0 && descripcion != "") {
    if (opcion == "Ingreso") {
      ingresos.push(new Elemento(opcion, descripcion, valor));
      recorrerIngreso();
    } else {
      egresos.push(new Elemento(opcion, descripcion, valor));
      recorrerEgreso();
    }
    total = totalIngresos - totalEgresos;
    document.getElementById("totalEgresos").innerHTML = totalEgresos;
    document.getElementById("totalIngresos").innerHTML = totalIngresos;
    document.getElementById("total").innerHTML = total;
  }
  document.getElementById("descripcion").value = "";
  document.getElementById("valor").value = "";
}

function borrar(id, tipo) {
  if (tipo == "Ingreso") {
    ingresos.splice(id, 1);
    if (ingresos.length == 0)
      document.getElementById("item__ingreso").innerHTML = "";
    recorrerIngreso();
  } else {
    egresos.splice(id, 1);
    if (egresos.length == 0)
      document.getElementById("item__egreso").innerHTML = "";
    recorrerEgreso();
  }
  total = totalIngresos - totalEgresos;
  document.getElementById("totalEgresos").innerHTML = totalEgresos;
  document.getElementById("totalIngresos").innerHTML = totalIngresos;
  document.getElementById("total").innerHTML = total;
}

function fecha() {
  let fecha = new Date();
  let fechaCompleta = `${diaSemana[fecha.getUTCDay() - 1]} ${fecha.getDay() + 1} ${mes[fecha.getMonth()]}`;
  return fechaCompleta;
}

function recorrerIngreso() {
  elementosIngreso = "";
  totalIngresos = 0;
  for (let i = 0; i < ingresos.length; i++) {
    buttonBorrar = `<button class='delete' onclick='borrar(${i}, "${ingresos[i]._opcion}")'><i class='far fa-trash-alt'></i ></button>`;
    elementosIngreso += `<li><samp><small>${fecha()}  |</small>${ingresos[i]._descripcion} $${ingresos[i]._valor} </samp>${buttonBorrar}</li>`;
    totalIngresos += ingresos[i]._valor;
  }
  document.getElementById("item__ingreso").innerHTML = elementosIngreso;
  return totalIngresos;
}

function recorrerEgreso() {
  elementosEgreso = "";
  totalEgresos = 0;
  for (let i = 0; i < egresos.length; i++) {
    buttonBorrar = `<button class='delete' onclick='borrar(${i}, "${egresos[i]._opcion}")'><i class='far fa-trash-alt'></i ></button>`;
    elementosEgreso += `<li><samp><small>${fecha()}  |</small>${egresos[i]._descripcion} $${egresos[i]._valor} </samp>${buttonBorrar}</li>`;
    totalEgresos += egresos[i]._valor;
  }
  document.getElementById("item__egreso").innerHTML = elementosEgreso;
  return totalEgresos;
}
