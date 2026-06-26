function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.flex = `0 0 ${100/size}%`;
            container.appendChild(pixel);
        }
    }
}

// make default grid (16 by 16)
const container = document.querySelector(".container");
makeGrid(16);

// button to make grid upon user input
const body = document.querySelector("body");
const newGridBtn = document.createElement("button");
newGridBtn.classList.add("new-grid-btn");
newGridBtn.textContent = "New grid";
body.insertBefore(newGridBtn, container);

newGridBtn.addEventListener("click", () => {
    let input = prompt("Enter the # of squares per side:");
    if (Number(input) > 100 || Number(input) < 0) {
        input = prompt("Enter the # of squares per side (min: 0, max: 100):");
    }
    container.textContent = "";
    makeGrid(Number(input));
});

// drawing effect
let pixels = document.querySelectorAll(".pixel");
console.log(pixels);

document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("pixel")) {
        event.target.classList.add("hover-on");
    }
});