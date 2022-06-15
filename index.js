fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales%22")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
