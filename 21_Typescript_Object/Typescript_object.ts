// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


//Write a program that creates objects containing these items.

//Datatype of person.
interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}
// person object.
let person : person = {
    age : 20,
    name : 'Iqra Naz',
    nationality : 'Pakistan',
    student : true
}

console.log(person);

//Datatype of car
interface car {
    maker : string,
    colour : string,
    automatic : Boolean
}

// car object
let car : car = {
    maker : 'Toyota',
    colour : 'Black',
    automatic : true
}

console.log(car);