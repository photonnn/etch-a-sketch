const play_btn = document.querySelector("button");
play_btn.addEventListener('click', init);


function removeChildren() {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        /* In CS, in general, faster to remove lastChild, depending ofc ...*/
        container.removeChild(container.lastChild); 
    }
}

function fillContainer(a) {
    let number = a * a;

    const container = document.querySelector(".container");
    const height = container.offsetHeight / a;
    const width = container.offsetWidth / a;

    while (number !== 0) {
        const div = document.createElement("div");
        div.classList.add("in-div");
        div.style.height = `${height}px`;
        div.style.width = `${width}px`;
        container.appendChild(div);
        number--;
    }
}

// The reason I did it this way is because opacity seemed simpler than rgba to
// me, I did not want to use global variables nor costum properties such as a 
// costum counter for this kind of a problem. 
// This was the best solution that I've come up with as of now, might change
// when I become more knowledgeble.
function applyColor() {
    const chosenButton = document.querySelector(".chosen");
    switch (chosenButton.textContent) {
        case "Black":
            this.style.opacity = "1";
            this.style.backgroundColor = "Black";
            break;
        case "Erase":
            this.style.opacity = "1";
            this.style.backgroundColor = "White";
            break;
        case "Rainbow":
            this.style.opacity = "1";
            this.style.backgroundColor = `rgb(${randomNumber()}, 
                ${randomNumber()}, ${randomNumber()})`;
            break;
        case "Shade":
            if (this.style.opacity !== "1") {
                this.style.opacity = (+this.style.opacity + 0.1).toString();
                if (this.style.opacity >= "1") {
                    this.style.opacity = "0.99";
                }
            } else {
                this.style.backgroundColor = "Black";
                this.style.opacity = "0.1";
            }
        default:
            this.style.backgroundColor = "Black";
    } 
}

function listenForColorChange() {
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn =>
        btn.addEventListener('click', () => {
            // remove chosen class from previous button, default = black
            const previousChosenButton = document.querySelector(".chosen");
            previousChosenButton.classList.toggle("chosen");
            // newly clicked button will "receive" this class
            btn.classList.toggle("chosen");
    }));
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
    let answer = Math.round(prompt("How many squares do you want??"));
    if (Math.round(answer) > 0 && Math.round(answer) < 101) {
        removeChildren();
        fillContainer(answer);
        listenForHover();
        listenForColorChange();
    } else {
        alert("ERROR");
    }
}