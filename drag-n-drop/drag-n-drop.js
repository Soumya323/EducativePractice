let dragSource = document.querySelector("#drag-img");
let dropTarget = document.querySelector("#drop-container");
let dragContainer = document.querySelector('#drag-container');

dragSource.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);

  dropTarget.classList.remove("default-border");
  dropTarget.classList.add("highlight-border");
});

dropTarget.addEventListener("dragover", (event) => {
  event.preventDefault(); //event listener
});

dropTarget.addEventListener("drop", (event) => {
  event.preventDefault();
  // let firstChild = dropTarget.firstChild;
  const id = event.dataTransfer.getData("text/plain");
  dropTarget.appendChild(document.getElementById(id));
 // dropTarget.insertBefore(document.getElementById(id), firstChild);
  dropTarget.classList.remove("highlight-destination-drag");
});

dragSource.addEventListener("dragend", (event) => {
  dropTarget.classList.add("default-border");
  dropTarget.classList.remove("highlight-border");
});


let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  dragContainer.appendChild(dragSource);
});