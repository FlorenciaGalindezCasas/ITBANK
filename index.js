fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    miObj(data);
  });

function miObj(data) {
  let venta6 = document.getElementById("venta6");
  venta6.innerHTML = `$${data[6].casa.venta}`;

  let variacion6 = document.getElementById("variacion6");
  variacion6.innerHTML = `Variacion: ${data[6].casa.variacion}%`;
}
