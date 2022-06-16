fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    miObj(data);
  });

function miObj(data) {
  let venta3 = document.getElementById("venta3");
  venta3.innerHTML = `$${data[3].casa.venta}`;

  let variacion3 = document.getElementById("variacion3");
  variacion3.innerHTML = `Variación: ${data[3].casa.variacion}%`;
  let venta6 = document.getElementById("venta6");
  venta6.innerHTML = `$${data[6].casa.venta}`;

  let variacion6 = document.getElementById("variacion6");
  variacion6.innerHTML = `Variacion: ${data[6].casa.variacion}%`;

  let compra = document.getElementById("compra");
  compra.innerHTML = `$${data[1].casa.compra}`;

  let venta = document.getElementById("venta");
  venta.innerHTML = `$${data[1].casa.venta}`;

  let variacion = document.getElementById("variacion");
  variacion.innerHTML = `Variacion: ${data[1].casa.variacion}%`;
}
