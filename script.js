function isMobile() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 768
  );
}

function redirectBasedOnDevice() {
  const currentPath = window.location.pathname;
  const isMobilePath = currentPath.includes("about-mobile.html");
  const isDesktopPath = currentPath.includes("about.html");

  if (isMobile() && !isMobilePath) {
    window.location.href = "about-mobile.html";
  } else if (!isMobile() && !isDesktopPath) {
    window.location.href = "about.html";
  }
}

document.addEventListener("DOMContentLoaded", redirectBasedOnDevice);
window.addEventListener("resize", redirectBasedOnDevice);

// Mobile navigation handling (only runs on mobile version)
if (document.querySelector(".mobile-nav")) {
  const navLinks = document.querySelectorAll(".mobile-nav a");

  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").slice(1) === section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}
