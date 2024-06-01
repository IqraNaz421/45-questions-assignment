"use strict";
function makeSandwich(item) {
    console.log("\nMaking your sandwich with:");
    item.forEach(element => console.log("- " + element));
    console.log("Enjoy your sandwich !\n");
}
makeSandwich(["Ham", "Cheese", "Lettuce"]);
makeSandwich(["Turkey", "Bacon"]);
makeSandwich(["Peanut butter", "Jelly"]);
