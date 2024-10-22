fetch("../components/hoverText/hovertext.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("hover-text").innerHTML = data;
  });
