fetch("../components/cursor/cursor.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("cursor").innerHTML = data;
  });

function moveCursor(e) {
  const cursor = document.querySelector(".cursor");
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 53) + "px; left: " + (e.pageX - 53) + "px;"
  );
}

function moveCursor1(e) {
  const cursor1 = document.querySelector(".cursor1");
  cursor1.setAttribute(
    "style",
    "top: " + (e.pageY + -10) + "px; left: " + (e.pageX + -10) + "px;"
  );
}

document.addEventListener("mousemove", moveCursor);
document.addEventListener("mousemove", moveCursor1);
