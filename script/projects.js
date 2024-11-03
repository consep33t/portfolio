const projectSections = document.querySelectorAll(
  ".top-project-section, .bottom-project-section"
);

function handleScrollAnimations() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  projectSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top + scrollTop;

    if (scrollTop > sectionTop - windowHeight + 100) {
      section.setAttribute("data-scroll", "in");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimations);
