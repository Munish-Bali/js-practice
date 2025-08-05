let name = "Munish";

// let score = "33";
// let score = null;
// let score = "33abc";
// let score = undefined;
// let score = true;
let score ="Munish";


// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//Nan : If we convert a non number string value (eg; 33abc) to a number value, it will convert into number but the actual value in the number would be a NaN. So make sure to check the value before using it.
//Null : same in the case, if we convert a NUll Value to a number, it will give us a 0 in the the variable.
//Undefined : Undefined also give us a NAN Value
// Boolean value: It will give us 0 or 1 according to true and false;
// String: if we try to convert a string into a number which is not going to convert into number,then we will get NAN as a value in variable.


//"33" => Number
//"33abc" => NaN
// true => 1;
//flase => 0;


// let isLoggedIN = 1;
// let isLoggedIN = "";
let isLoggedIN = "Munish";

let booleanIsLoggedIN = Boolean(isLoggedIN);
// console.log(booleanIsLoggedIN);
// console.log(typeof isLoggedIN);
// console.log(isLoggedIN);

// 1 => true;
// "" => false;
// "Munish" => true;

let number = 33;
let stringNumber = String(number);
console.log(stringNumber);
console.log(typeof stringNumber);