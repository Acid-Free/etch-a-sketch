let rowCount = 8;

const dimensionsButton = document.querySelector(".dimensions-button");
const grid = document.querySelector(".grid");
// let gridItems = [];

function createGridItems() {
  const itemCount = rowCount * rowCount;
  for (let i = 0; i < itemCount; ++i) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseenter", selectGridItem);
    gridItem.addEventListener("mouseleave", deselectGridItem);
    grid.appendChild(gridItem);
  }
}

function selectGridItem(e) {
  console.log("selected");
  e.target.classList.add("grid-item-selected");
}

function deselectGridItem(e) {
  console.log("removed");
  e.target.classList.remove("grid-item-selected");
}

createGridItems();
