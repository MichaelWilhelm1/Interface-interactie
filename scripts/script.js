// JavaScript Document
console.log("Howdy!");

const goomba = document.querySelector(".goombas");
const pageWidth = document.body.clientWidth;

function moveGoomba() {
    // Genereer een random lengte voor de goomba te lopen
    const distance = Math.floor(Math.random() * pageWidth);

    // Generen van een random tijd dat het blok beweegt
    const speed = Math.floor(Math.random() * 5) + 1; // tussen 1px en 5px

    // Transform style met gegenereerde waarden
    goomba.style.transform = `translateX(${distance}px)`;
    goomba.style.transition = `transform ${speed}s linear`;

    // Na random delay wordt MoveGoomba weer afgespeelt
    setTimeout(moveGoomba, speed * 1000);
}

moveGoomba();