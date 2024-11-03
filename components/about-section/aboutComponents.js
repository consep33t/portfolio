// Fetch konten untuk about section
fetch("../components/about-section/about.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("about-section").innerHTML = data;
  });

// Event listener untuk update progress bar pada scroll
window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  // Mengambil posisi scroll dan tinggi halaman
  const scrollTop = document.documentElement.scrollTop;
  const viewportHeight = document.documentElement.clientHeight;

  // Section yang diambil berdasarkan tinggi 100vh
  const sectionHeight = viewportHeight;
  const aboutSection = document.getElementById("about-section");
  const projectSection = document.getElementById("project-section");

  // Tentukan batas perubahan warna untuk setiap section
  if (scrollTop >= sectionHeight * 0.5) {
    aboutSection.style.backgroundColor = "#1b2155";
    aboutSection.style.transition = "background-color 1.5s ease";
  } else {
    aboutSection.style.backgroundColor = "";
  }

  if (scrollTop >= sectionHeight * 1.5) {
    projectSection.style.backgroundColor = "#0f0f0f";
    projectSection.style.transition = "background-color 1.5s ease";
  } else {
    projectSection.style.backgroundColor = "";
  }
}
