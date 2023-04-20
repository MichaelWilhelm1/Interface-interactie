// JavaScript Document
console.log("Howdy!");

const goomba = document.querySelector(".goombas");
const pageWidth = document.body.clientWidth;

function moveGoomba() {
    // Generate a random distance for the block to move
    const distance = Math.floor(Math.random() * pageWidth);

    // Generate a random speed for the block to move
    const speed = Math.floor(Math.random() * 5) + 1; // between 1px and 5px

    // Set the transform style with the generated values
    goomba.style.transform = `translateX(${distance}px)`;
    goomba.style.transition = `transform ${speed}s linear`;

    // Call the moveBlock function again after a random delay
    setTimeout(moveGoomba, speed * 1000);
}

moveGoomba();