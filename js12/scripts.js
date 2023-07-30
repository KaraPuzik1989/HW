const nav = document.querySelector("nav");
const contentBlocks = document.querySelectorAll(".tabs-wrapper > div");

nav.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const activeNumber = e.target.dataset.tab;

    contentBlocks.forEach((block) => {
      if (
        block.classList.contains("active") &&
        !block.classList.contains(`content-${activeNumber}`)
      ) {
        block.classList.remove("active");
      }
    })

    contentBlocks.forEach((block) => {
      if (block.classList.contains(`content-${activeNumber}`)) {
        block.classList.add("active");
      }
    })

    const activeButtons = document.querySelectorAll("button.active");
    activeButtons.forEach((button) => {
      button.classList.remove("active");
    })

    e.target.classList.add("active");
  }
});
