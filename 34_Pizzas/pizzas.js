"use strict";
// Pizzas: Think of atleast three kinds of your favorite pizza. store these pizza names in a array. and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza . for each pizza you should have one line of output containing a simple statement like , I like pepperoni pizza 
// Add a line at the end of your program , outside the for loop , that start how much you like pizza. The output should consists of three or more lines about the kinds of pizza you like and then an additional sentence , such as I already love pizza!
let Pizzas = ["Pepperoni", "Cuban", "BBQ Chicken"];
for (let Pizza of Pizzas) {
    console.log(`I like ${Pizza} pizza..`);
}
console.log(`I really love pizza`);
