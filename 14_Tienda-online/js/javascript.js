document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("nav-toggle");
  const navList = document.querySelector(".nav-list");

  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("active");
    toggleButton.setAttribute(
      "aria-expanded",
      navList.classList.contains("active")
    );
  });

  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });

document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', function(e){
        e.stopPropagation();
    });
});
});