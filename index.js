fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    miObj(data);
  });

function miObj(data) {
  let venta_promedio = document.getElementById("venta_promedio");
  venta_promedio.innerHTML = `$${data[6].casa.venta}`;

  let variacion_promedio = document.getElementById("variacion_promedio");
  variacion_promedio.innerHTML = `Variacion: ${data[6].casa.variacion}%`;

  let compra_promedio = document.getElementById("compra_promedio");
  compra_promedio.innerHTML = `$${data[6].casa.compra}`;

  let ventaOficial = document.getElementById("venta_precio");
  venta_precio.innerHTML = `$${data[0].casa.venta}`;

  let variacion_oficial = document.getElementById("variacion_precio");
  variacion_precio.innerHTML = `Variacion: ${data[0].casa.variacion}%`;
  let compra_oficial = document.getElementById("compra_precio");
  compra_precio.innerHTML = `$${data[0].casa.compra}`;
}
