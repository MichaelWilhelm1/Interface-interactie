// JavaScript Document

var count = 1;
var background = document.querySelector('.background' + count);

const goombas = document.querySelectorAll(".goombas");
let pageWidth = document.body.clientWidth;

window.addEventListener("resize", function () {
    pageWidth = document.body.clientWidth;
});

// voor elke img met class goomba doe je hetzelfde
goombas.forEach(goomba => {

    function moveGoomba() {

        // Genereer een random lengte voor de goomba te lopen
        const distance = Math.floor(Math.random() * (pageWidth - goomba.clientWidth));

        // genereer een random snelheid die de goomba loopt
        const speed = Math.floor(Math.random() * 5) + 1; // between 1px and 5px

        // Set the transform style with the generated values
        goomba.style.transform = `translateX(${distance}px)`;
        goomba.style.transition = `transform ${speed}s linear`;

        // MoveGoomba wordt na een random delay uitgevoerd
        setTimeout(moveGoomba, speed * 1000);
    }

    moveGoomba();
});

function toggleGoomba(img) {
    // hide geklikte goomba
    img.classList.remove('show');
    img.classList.add('hide');
    count++;
    console.log(count);


    // de volgende sibling image element met class 'goomba'
    var nextImg = img.nextElementSibling;
    while (nextImg && !nextImg.classList.contains('goombas')) {
        nextImg = nextImg.nextElementSibling;
    }

    // laat de volgende image zien
    if (nextImg) {
        nextImg.classList.remove('hide');
        nextImg.classList.add('show');
        document.body.className = "background" + count;
    }
}

// Startscreen - dialog
const dialogBox = document.getElementById("dialog-box");
const closeBtn = document.getElementById("close-btn");
const howToPlayBtn = document.getElementById("how-to-play-btn");

closeBtn.addEventListener("click", () => {
    dialogBox.close();
});

let howToPlayAdded = false;

howToPlayBtn.addEventListener("click", () => {
    if (!howToPlayAdded) {
        const howToPlayText = "Click on the goombas to kill them and spawn a new generation!";
        const howToPlayPara = document.createElement("p");
        howToPlayPara.textContent = howToPlayText;
        dialogBox.appendChild(howToPlayPara);
        howToPlayAdded = true;
    }
});