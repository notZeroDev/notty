const createCard = document.querySelector(".master");
const container = document.querySelector(".container");
const route = function (routePath) {
  window.location.href = window.location.origin + routePath;
};
createCard.addEventListener("click", (e) => {
  console.log("create new card");
  route("/note-edit");
});
const cards = document.querySelectorAll(".card");
container.addEventListener("click", (e) => {
  const el = e.target;
  if (el.closest(".master") || !el.closest(".note")) return;
  console.log("note were clicked");
  route("/note");
});
