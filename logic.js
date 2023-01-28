let rowCount = 8;

const dimensionsButton = document.querySelector(".dimensions-button");
const grid = document.querySelector(".grid");

let canDraw = false;

function listenToMouseHold() {
  window.addEventListener("mousedown", (e) => (canDraw = true));
  ["dragend", "mouseup"].forEach((event) =>
    window.addEventListener(event, (e) => {
      console.log("end");
      canDraw = false;
    })
  );
}

function listenToDimensionsButton() {
  dimensionsButton.addEventListener("click", (e) => {
    console.log("pressed");
  });
}

function createGridItems() {
  const itemCount = rowCount * rowCount;
  for (let i = 0; i < itemCount; ++i) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mousemove", selectGridItem);
    gridItem.setAttribute("draggable", false);
    grid.appendChild(gridItem);
  }
}

function selectGridItem(e) {
  if (canDraw) e.target.classList.add("grid-item-selected");
}

function deselectGridItem(e) {
  console.log("leave");
  e.target.classList.remove("grid-item-selected");
}

grid.setAttribute("draggable", false);
listenToDimensionsButton();
listenToMouseHold();
createGridItems();
