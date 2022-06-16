fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    miObj(data);
  });

function miObj(data) {
  let compra = document.getElementById("compra");
  compra.innerHTML = `$${data[1].casa.compra}`;

  let venta = document.getElementById("venta");
  venta.innerHTML = `$${data[1].casa.venta}`;

  let variacion = document.getElementById("variacion");
  variacion.innerHTML = `Variacion: ${data[1].casa.variacion}%`;
}
