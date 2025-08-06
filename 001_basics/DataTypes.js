//Primitive Datatypes: Call by value

//String, Number, Boolean, Null, Undefined,Symbol,BigInt
//JS is a dynamically Typed Language.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn  = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');


console.log(id === anotherId);

// const bigNumber = 2134567652345654356456n;  // value of bigInt is Undefined.

// Non Primitve Type : or Reference Type
//Arrays, Objects, Functions


const heros = ["Munish", "shaktiman","vanraj", "naagraj"]; // return type Object
let obj = {
    name: "munish",
    age: 22,  // Return Type ; Object
}  // objects are always in key value pair

const myFunction = function(){  // return type Function
   console.log("hello My Function");
}

console.log(typeof bigNumber);