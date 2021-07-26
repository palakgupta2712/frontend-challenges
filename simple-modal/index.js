const open_modal = document.getElementById("open-modal");
const close_modal = document.getElementById("close-modal");
const container = document.getElementById("container");

open_modal.addEventListener("click", function () {
  container.style.display = "block";
});

close_modal.addEventListener("click", function () {
  container.style.display = "none";
});
