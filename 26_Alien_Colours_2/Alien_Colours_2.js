"use strict";
// Alien colours 2: Choose a color for an alien as you did in exercise 25
let alienColours = "green";
// write an if-else chain.
// if the alien colour is green.
// print a statement that the player just earned 6 points for shooting the alien
if (alienColours === "green") {
    console.log("Player just earned 6 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
// if the alien's colour isn't green, print a statement that the player just earned 10 points.
alienColours = "yellow";
if (alienColours === "green") {
    console.log("Player just earned 6 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
