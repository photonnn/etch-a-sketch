let color;
const container = document.querySelector(".container");
const btn = document.querySelector("button");
btn.addEventListener('click', init);


function removeChildren() {
    while (container.firstChild) {
        // faster to remove last one
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
        div.counter = 1;
        container.appendChild(div);
        number--
    }
}

// counter for alpha, each div has its own - necessary to reset it when its
// color changes
function applyColor() {
    switch (color) {
        case "Black":
            this.counter = 1;
            this.style.backgroundColor = "Black";
            break;
        case "Erase":
            this.counter = 1;
            this.style.backgroundColor = "White";
            break;
        case "Rainbow":
            this.counter = 1;
            this.style.backgroundColor = `rgb(${randomNumber()}, 
                ${randomNumber()}, ${randomNumber()})`;
            break;
        case "Shade":
            this.style.backgroundColor = `rgba(0, 0, 0, ${0.1 * this.counter})`;
            this.counter++;
            break;
        default:
            this.style.backgroundColor = "Black";
    }
}

function listenForColorChange() {
    const btns = document.querySelectorAll(".btn");
    console.log(btns);
    btns.forEach(btn =>
        btn.addEventListener('click', () => color = btn.textContent)
    );
}

// used for rainbow color
function randomNumber() {
    return Math.floor(Math.random() * 256) + 1;
}

function listenForHover() {
    const divs = document.querySelectorAll(".in-div");
    const divsArray = Array.from(divs);
    for (const div of divsArray) {
        div.addEventListener('mouseenter', applyColor);

    }
}

function init() {
    let answer = prompt("How many squares do you want?");
    if (answer > 100) {
        alert("ERROR TOO MANY SQUARES");
    } else {
        removeChildren();
        fillContainer(answer);
        listenForHover();
        listenForColorChange();
    }
}