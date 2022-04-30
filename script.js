function createDiv(a) {
    let height = container.offsetHeight / a;
    let width = container.offsetWidth / a;
    const div = document.createElement("div");
    div.classList.add("in-div");
    div.style.height = `${height}px`;
    div.style.width = `${width}px`;
    container.appendChild(div);
}

function fill(a) {
    let number = a * a;

    while (number != 0) {
        createDiv(a);
        number--
    }
}

function makeBlack() {
    this.style.backgroundColor = "black";
}

function init() {
    console.log(container.offsetWidth);
    fill(16);
    const divs = document.querySelectorAll(".in-div");
    divs.forEach(div => {
        div.addEventListener('mousemove', makeBlack);
    });
}

const container = document.querySelector(".container");
init();