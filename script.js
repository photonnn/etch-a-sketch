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

    while (number != 0) {
        const div = document.createElement("div");
        div.classList.add("in-div");
        div.style.height = `${height}px`;
        div.style.width = `${width}px`;
        div.c_o_u_n_t_e_r = 1;
        container.appendChild(div);
        number--;
    }
}

// counter for alpha, each div has its own - necessary to reset it when its
// color changes
function applyColor() {
    const chosenButton = document.querySelector(".chosen");
    switch (chosenButton.textContent) {
        case "Black":
            this.c_o_u_n_t_e_r = 1;
            this.style.backgroundColor = "Black";
            break;
        case "Erase":
            this.c_o_u_n_t_e_r = 1;
            this.style.backgroundColor = "White";
            break;
        case "Rainbow":
            this.c_o_u_n_t_e_r = 1;
            this.style.backgroundColor = `rgb(${randomNumber()}, 
                ${randomNumber()}, ${randomNumber()})`;
            break;
        case "Shade":
            this.style.backgroundColor = `rgba(0, 0, 0, ${0.1 * 
                this.c_o_u_n_t_e_r})`;
            this.c_o_u_n_t_e_r++;
            break;
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