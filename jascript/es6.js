// Javascript let
// the let keyword allows you to declare a variable with block scope

var x = 10;
// x is 10
{
    let x = 2
    // x is 2
}
 // x is 10

 // The spread Operator (...)

 const q1 = ["Jan","Feb","Mar"]
 const q2 = ["Apr","may","june"]
 const q3 = ["July","Aug","Sep"]

//  console.log([q1,q2,q3]);

const num = [12,32,24,42,424,24];
console.log(Math.max(...num));


// The For/Of Loop

// looping over an array

const cars = ["Bmw","Od","Volvo","Mini"]
let txt = "";
for(let x of cars){
    txt += x + ",";
}
console.log(txt);

// looping over an String

let lang = "python";
let text = "";

for(let x of lang){
    text += x + ",";
}
console.log(text);

// javascript Maps

const fruits = new Map([
    ["apples",212],
    ["mango",615],
    ["banana",152],
    ["pineaple",641],
    ["watermelon",963],
])
console.log(fruits.get("banana"));


// javascript Sets

const letters = new Set();


letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);

// Javascript classes


class car {
    constructor(name,year){
        this.name = name ;
        this.year = year;
    }
    
}
const car1 = new car("Ford",2012)
const car2 = new car("Mahindra",2022)
const car3 = new car("swift",2017)
console.log(car1.name + " " + car3.name);

// Javascript Promises

// const myPromise = new Promise(function(myResolve,myReject){
//     setTimeout( functon() { myResolve("I am going ");},3000);
// })

// The Symbol Type

const person = {
    firstname:"john",
    lastname:"doe",
    age:50
};
let id =  Symbol('id');
person[id] = 12387;

console.log(person.id);


// function rest parameter

// String.includes()

let test = "Hello World, welcome to the universe."
console.log(test.includes("World"));

// Array keys()

const fruit = ["Banana","Orange","Apple","Gapes"]
const keys = fruit.keys()

let tetx = "";
for(let x of keys ){
    tetx += x + ",";
}
console.log(tetx);

//  New  Math Methods 

// Math.trunc()  it returns the integer part of the any number

console.log(Math.trunc(54.34));

// Math.sign()   it returns if number is negative,null or posititve

console.log(Math.sign(-43));

// The Number.isInteger() Method   returns true if the argument is an integer 

console.log(Number.isInteger(12.4));

// The is Nan() Method

console.log(isNaN("jd"));





