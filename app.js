let deleteButton =
  "<button class='delete'><i class='far fa-trash-alt'></i></button>";
document.getElementById(
  "item__egreso"
).innerHTML = `<li><samp><small>mie. 4 Ago |</small>Supermercado $15.000 </samp>${deleteButton}</li>`;

let ingresos = [];
let egresos = [];

let opcion = "";
let descripcion = "";
let valor = 0;
let elemento = "";

let diaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
let mes = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

let agregar = () => {
  let fecha = new Date();
  console.log(fecha.getDay());
  let fechaCompleta =
    diaSemana[fecha.getUTCDay() - 2] +
    " " +
    (fecha.getDay() + 1) +
    " " +
    mes[fecha.getMonth()];
  document.getElementById("item__ingreso").innerHTML = "";

  opcion = document.getElementById("opcion").value;
  descripcion = document.getElementById("descripcion").value;
  valor = parseInt(document.getElementById("valor").value);
  elmento = document.getElementById("item__ingreso").innerHTML;

  if (opcion == "Ingreso") {
    ingresos.push(new Elemento(opcion, descripcion, valor));

    for (const ingreso of ingresos) {
      document.getElementById(
        "item__ingreso"
      ).innerHTML += `<li><samp><small>${fechaCompleta} |</small>${ingreso._descripcion} $${ingreso._valor} </samp>${deleteButton}</li>`;
    }
  } else {
    egresos.push(new Elemento(opcion, descripcion, valor));

    for (const egreso of egresos) {
        document.getElementById(
          "item__egreso"
        ).innerHTML += `<li><samp><small>${fechaCompleta} |</small>${egreso._descripcion} $${egreso._valor} </samp>${deleteButton}</li>`;
      }
  }
};

function formOpcion() {
  opcion = document.getElementById("opcion").value;
  console.log(opcion);
}
