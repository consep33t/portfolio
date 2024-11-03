fetch("../components/project-section/projectSection.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("project-section").innerHTML = data;
  });
