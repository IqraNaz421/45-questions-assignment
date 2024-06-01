
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:



//Equality and Inequality Test1
console.log("Equality test with strings: ", "Apple" === "Apple");
//Equality and Inequality Test2
console.log("Inequality test with strings: ", ("Apple" as string) != "orange");


//Tests using lower case function
console.log("Lower Case function test: ", "Hey".toLowerCase() === "hey");


//Numerical tests involving equality 
console.log("Equality test with numbers: " , 26 === 26);
//Numerical tests involving Inequality 
console.log("Inequality test with numbers: " , (26 as number) != 30);


//Greater than test
console.log("Greater than test: " , 10 > 6);
//Less than test
console.log("Less than test: " , 6 > 10);


//Greater than or equal to
console.log("Greater than and equal to test: " , 20 >= 20);
//less than or equal to
console.log("Less than and equal to test: " , 4 <= 10);


//Tests using "&" operator
console.log("And operator test: " , 5 === 5 && 10 > 5);
//Test using "|" operator
console.log("or operator test: " , 5 === 5 || false);


//Test wheather an item is in array
const colours: string[] = ["Yellow" , "Pink" , "Purple"];
console.log('Test "Yellow" in the array: ' , colours.includes("Yellow"));

//Test wheather an item is not in array
console.log('Test "Black" is not in array: ' , !colours.includes('Black'));

