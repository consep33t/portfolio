fetch("../components/spiningText/spinigText.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("spining-text").innerHTML = data;
  });
