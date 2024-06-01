
// Stages of life : write an if-else chain that determines a person's stage of life

// set a value for the variable age and then :

let age : number = 25 ;

// if the person is less than 2 years old , print a message that the person is a baby.
// if the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// if the person is atleast 4 years old but less than 13, print a message that the person is a kid.
// if the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// if the person is at least 20 years old but less than 65, print a message that the person is an adult.
//if the person is age 65 or older , print a message that the person is an elder.

if(age < 2) {
    console.log("Person is a baby.");
} 
else if(age >= 2 && age < 4) {
    console.log("Person is a toddler.");
}
else if(age >= 4 && age < 13) {
    console.log("Person is a kid");
}
else if(age >= 13 && age < 20) {
    console.log("Person is a teenager");
}
else if(age >= 20 && age < 65) {
    console.log("Person is an adult.");
}
else {
    console.log("Person is an elder");
}