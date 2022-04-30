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
    let number = a*a;

    while (number != 0) {
        createDiv(a);
        number--
    }
}

setTimeout(() => {
    console.log(container.offsetWidth);
    fill(16);
}, 1);

const container = document.querySelector(".container");

