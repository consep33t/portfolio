const cursor = document.querySelector(".cursor");
const cursor1 = document.querySelector(".cursor1");

const moveCursor = (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 45) + "px; left: " + (e.pageX - 46) + "px;"
  );
};

const moveCursor1 = (e) => {
  cursor1.setAttribute(
    "style",
    "top: " + (e.pageY + -7) + "px; left: " + (e.pageX + -8) + "px;"
  );
};

document.addEventListener("mousemove", moveCursor);
document.addEventListener("mousemove", moveCursor1);
