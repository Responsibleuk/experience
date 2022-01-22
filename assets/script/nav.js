// jhint

const toggleBtn = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close-btn");
const navbar = document.querySelector(".nav-bar");

// show nav 
toggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("show-nav-bar");
});

// close nav
closeBtn.addEventListener("click", function () {
  navbar.classList.remove("show-nav-bar");
});