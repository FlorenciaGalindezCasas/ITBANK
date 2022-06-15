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
}
