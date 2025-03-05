const createCard = document.querySelector(".master");
createCard.addEventListener("click", (e) => {
  console.log("create new card");
  window.location.href = window.location.origin + "/note";
});
