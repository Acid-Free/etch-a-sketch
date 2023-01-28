let rowCount = 8;

const dimensionsButton = document.querySelector(".dimensions-button");
const grid = document.querySelector(".grid");

let canDraw = false;

function listenToMouseHold() {
  window.addEventListener("mousedown", (e) => (canDraw = true));
  ["dragend", "mouseup"].forEach((event) =>
    window.addEventListener(event, (e) => {
      canDraw = false;
    })
  );
}

function listenToDimensionsButton() {
  dimensionsButton.addEventListener("click", (e) => {
    let rowInput = prompt("Enter row count:");

    if (!rowInput) {
      alert("Empty input");
      return;
    } else if (isNaN(rowInput)) {
      alert("Input is not a number");
      return;
    } else if (rowInput < 1 || rowInput > 100) {
      alert("Input should be between 1 and 100");
      return;
    }

    rowInput = parseInt(rowInput);

    rowCount = rowInput;
    removeGridItems();
    createGridItems();
  });
}

function createGridItems() {
  const itemCount = rowCount * rowCount;

  grid.style.gridTemplateColumns = `repeat(${rowCount}, 1fr)`;

  for (let i = 0; i < itemCount; ++i) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mousemove", selectGridItem);
    gridItem.setAttribute("draggable", false);
    grid.appendChild(gridItem);
  }
}

function removeGridItems() {
  grid.replaceChildren();
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
