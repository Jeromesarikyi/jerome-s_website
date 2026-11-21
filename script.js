/* Sarikyi Industries – shared site script */
(function () {
  "use strict";

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Copy email button (contact page)
  var btn = document.getElementById("copyEmail");
  var note = document.getElementById("copied");
  if (btn && note) {
    btn.addEventListener("click", function () {
      var email = "jeromesarik@gmail.com";
      var done = function () {
        note.classList.add("show");
        setTimeout(function () { note.classList.remove("show"); }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, done);
      } else { done(); }
    });
  }
})();
