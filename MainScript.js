// This is a comment which can help me understand my code later
/*This is a comment blockit can span multiple linesand then it
 can be closed like this
 */
// How to create variables:
var x;
 let y;
// How to use variables:
x = 5;
y = 6;
let z = x + y;
//
//let z = x + x;
// a const variable cannot be reassignedconst
PI = 3.141592653589793;
//PI = 10; 
// this code will not workconsole.log("PI: " + PI);
// const variables must be assigned a value
// this code will not work
//const PI2;//PI2 = 3.14159265359;
// always use const when you know the value should not be changed
// using camelCase is the most common way of naming variables
var firstName = "Anubhav";
var lastName = "Sharma";
let fullName = firstName + " " + lastName;
console.log("First Name: " + firstName + " Last Name: " + lastName);
console.log("Full Name " + fullName);
console.log("X: " + x + "\n" + "Y: " + y + "\n" + "Z: " + z);
console.log("this is" + " a " + "combined string with an integer: " + z);

let incrementNum = 0;
console.log("the number: " + incrementNum);
incrementNum++;
console.log("the incremented number: " + incrementNum);