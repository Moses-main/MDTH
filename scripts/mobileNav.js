document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.body.classList.toggle("menu-active");
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.body.classList.toggle("menu-active");
});

// Function to check if the click is inside the mobile navigation
function isClickInsideNav(element, event) {
  return element.contains(event.target);
}
// Getting the mobile navigation

const mobile_navigation = document.querySelector(".mobile-nav").styles;

// Toggle the mobile menu
document
  .querySelector(".menu-toggle")
  .addEventListener("click", function (event) {
    document.body.classList.toggle("menu-active");
    event.stopPropagation(); // Prevent the click event from propagating to the document body
    // mobile_navigation.visibility = "visible";
    mobile_navigation.display = "block";
    alert("mobile navigation clicked");
  });

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileNav = document.querySelector(".mobile-nav");
  const menuToggle = document.querySelector(".menu-toggle");

  const isClickInside =
    isClickInsideNav(mobileNav, event) || isClickInsideNav(menuToggle, event);

  if (!isClickInside && document.body.classList.contains("menu-active")) {
    document.body.classList.remove("menu-active");
  }
});
