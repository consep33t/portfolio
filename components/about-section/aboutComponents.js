fetch("../components/about-section/about.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("about-section").innerHTML = data;
  });

window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = scrollTop / scrollHeight;

  const path = document.getElementById("progress");
  const aboutContainer = document.getElementById("about-section");
  const pathLength = path.getTotalLength();

  let adjustedScrollPercent = 0;

  if (scrollPercent >= 0.2) {
    adjustedScrollPercent = (scrollPercent - 0.2) / 0.8;
  }

  const dashOffset = pathLength * (1 - adjustedScrollPercent);

  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = dashOffset;

  if (scrollPercent >= 0.7) {
    aboutContainer.style.backgroundColor = "#1b2155";
    aboutContainer.style.transition = "background-color 1.5s ease";
  } else {
    aboutContainer.style.backgroundColor = "";
  }
}
