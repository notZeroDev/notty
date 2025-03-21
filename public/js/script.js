const createCard = document.querySelector(".master");
const container = document.querySelector(".container");
const controlNote = document.querySelector(".control");
const route = function (routePath) {
  window.location.href = window.location.origin + routePath;
};
createCard.addEventListener("click", (e) => {
  console.log("create new card");
  route("/note-edit");
});
const cards = document.querySelectorAll(".card");
container.addEventListener("click", (e) => {
  const el = e.target.closest("span");
  if (!el) return;
  const note = el.closest(".note");
  if (el.classList.contains("edit"))
    return route(`/note-edit?edit=true&id=${note.dataset.id}`);
  if (el.classList.contains("delete"))
    return route(`/delete/:${note.dataset.id}`);
  console.log("we are here");
});
