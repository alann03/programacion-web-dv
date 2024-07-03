const toggleMenu = () => {
  const mobileMenu = document.getElementById("mobile-menu");

  if (!mobileMenu.style.display) {
    mobileMenu.style.display = "none";
  }

  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
};

const selectNavLink = () => {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".main-nav a, .mobile-menu a");

  navLinks.forEach((link) => {
    if (currentUrl.endsWith(link.href)) {
      link.classList.add("active");
    }
    link.addEventListener("click", function () {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
      mobileMenu.style.display = "none";
    });
  });
};

document.addEventListener("DOMContentLoaded", selectNavLink);

