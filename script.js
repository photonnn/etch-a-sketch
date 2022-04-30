function removeChildren() {
    // faster to remove last one
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function fillContainer(a) {
    let number = a * a;

    const height = container.offsetHeight / a;
    const width = container.offsetWidth / a;

    while (number != 0) {
        const div = document.createElement("div");
        div.classList.add("in-div");
        div.style.height = `${height}px`;
        div.style.width = `${width}px`;
        container.appendChild(div);
        number--
    }
}

function changeColor() {
    this.style.backgroundColor = "black";
}

function listen() {
    const divs = document.querySelectorAll(".in-div");
        const divsArray = Array.from(divs);
        for (const div of divsArray) {
            div.addEventListener('mouseenter', changeColor);
        }
}


const container = document.querySelector(".container");
const btn = document.querySelector("button");
btn.addEventListener('click', init);

function init() {
    let answer = prompt("How many squares do you want?");
    if (answer > 100) {
        alert("ERROR TOO MANY SQUARES");
    } else {
        removeChildren();
        fillContainer(answer);
        listen();
    }
}