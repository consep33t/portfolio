const cursor = document.querySelector(".cursor");
const cursor1 = document.querySelector(".cursor1");

const moveCursor = (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 80) + "px; left: " + (e.pageX - 80) + "px;"
  );
};

const moveCursor1 = (e) => {
  cursor1.setAttribute(
    "style",
    "top: " + (e.pageY + -10) + "px; left: " + (e.pageX + -10) + "px;"
  );
};

document.addEventListener("mousemove", moveCursor);
document.addEventListener("mousemove", moveCursor1);
