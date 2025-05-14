document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // set active state on buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        // show all or match data-category
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
