"use strict";
// Create a variable called alien_color
let alien_color = "green";
// Write an if statement to test whether the alien's color is green . if it is , print a message that
//the player just earned 6 points.
if (alien_color === 'green') {
    console.log("Player just earned 6 points !");
}
// write one version of this program that passes the if test and another that fails.
alien_color = "yellow";
if (alien_color === "green") {
    console.log("Player just earned 6 points !");
}
