// JavaScript Document

var count = 1;
var background = document.querySelector('.background' + count);

const goombas = document.querySelectorAll(".goombas");
let pageWidth = document.body.clientWidth;

window.addEventListener("resize", function () {
    pageWidth = document.body.clientWidth;
});

// voor elke img met class goomba doe je hetzelfde (uit de code van Sanne CodePen, het stukje forEach)
// bron: https://stackoverflow.com/questions/21944523/random-movement-in-html5-and-javascript
goombas.forEach(goomba => {

    function moveGoomba() {

        // Genereer een random lengte voor de goomba te lopen
        const distance = Math.floor(Math.random() * (pageWidth - goomba.clientWidth));

        // genereer een random snelheid die de goomba loopt
        const speed = Math.floor(Math.random() * 5) + 1; // tussen 1px and 5px

        // Stel transform in met de gegenereerde distance en speed
        goomba.style.transform = `translateX(${distance}px)`;
        goomba.style.transition = `transform ${speed}s linear`;

        // MoveGoomba wordt na een random delay uitgevoerd
        setTimeout(moveGoomba, speed * 1000);
    }

    moveGoomba();
});


// functie: toggleGoomba
goombas.forEach(function (goomba) {
    goomba.addEventListener('click', function (event) {
        toggleGoomba(event.target);
    });
});

function toggleGoomba(img) {
    const information = document.getElementById('information' + count);




    // count body element voor de achtergrond (count body element met hulp van Alex)
    count++;
    console.log(count);

    const nextInfo = document.getElementById('information' + count);

    if (nextInfo) {

        // hide geklikte goomba
        img.classList.remove('show');
        img.classList.add('hide');

        information.classList.remove('show');
        information.classList.add('hide');


        nextInfo.classList.remove('hide');
        nextInfo.classList.add('show');

        // de volgende sibling image element met class 'goomba' (stukje gegenereerd door AI)
        var nextImg = img.nextElementSibling;
        while (nextImg && !nextImg.classList.contains('goombas')) {
            nextImg = nextImg.nextElementSibling;
        }

        // laat de volgende image zien en de volgende background image
        if (nextImg) {
            nextImg.classList.remove('hide');
            nextImg.classList.add('show');
            document.body.className = "background" + count;
        }
    } else {
        alert("he, doe es niet!")
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
        const howToPlayText = "Click on the goombas to defeat them and spawn a new generation!";
        const howToPlayPara = document.createElement("p");
        howToPlayPara.textContent = howToPlayText;
        dialogBox.appendChild(howToPlayPara);
        howToPlayAdded = true;
    }
});

// Audio button 

// const audioBtn = document.querySelector("header button");

// audioBtn.addEventListener("click", () => {
//     console.log("audio");
// });

// function playAudio() {
//     var audio = document.getElementById("audio");
//     audio.play();
// }

// Audio Button (Bron: https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48)

const audioBtn = document.querySelector('header button');
const audio = new Audio('audio/themesong.mp3');
audioBtn.addEventListener('click', toggleAudio);

function toggleAudio() {

    if (audio.paused) {
        audio.play();
        audioBtn.innerHTML = 'PAUSE AUDIO'
    } else {
        audio.pause();
        audioBtn.innerHTML = 'PLAY AUDIO'
    }
};

// refresh button (bron: https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/#:~:text=You%20can%20use%20the%20location,method%20responsible%20for%20page%20reloading.)
const refreshBtn = document.getElementById('refresh-btn');

refreshBtn.addEventListener('click', function () {
    location.reload();
});

// klikken op img (bron: https://stackoverflow.com/questions/59054548/js-get-the-clicked-element-with-event-target)
document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter' || event.code === 'Space') {
        event.preventDefault();
        event.target.click();
    }
});