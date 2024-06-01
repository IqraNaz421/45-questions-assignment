"use strict";
// Alien colours 3: turn your if-else chain from exercise 5-4 into an if-else chain.
// write three versions of this program , making sure each message is printed for the appropriate 
// colour alien.
let alienColours = "green";
// if the alien is green , print a message that the player earned 5 points.
// if the alien is yellow , print a message that the player earned 10 points.
// if the alien is red , print a message that the player earned 15 points.
// Version 1 of the program
if (alienColours === "green") {
    console.log("Version 1 : Player earned 5 points.");
}
else if (alienColours === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColours === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select right answer");
}
// Version 2 of the program
alienColours = "Yellow";
if (alienColours === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColours === "yellow") {
    console.log("Version 2 : Player earned 10 points.");
}
else if (alienColours === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select right answer");
}
// Version 3 of the program
alienColours = "red";
if (alienColours === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColours === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColours === "red") {
    console.log("Version 3 : Player earned 15 points.");
}
else {
    console.log("Please select right answer");
}
