// top type
let hello = " hi shakib";
hello.length;
hello = 123;
const something = "Hello World";
// something.length
// Core type
const num = 123;
let something2;
something2 = num;
const CurrentUser = null;
// unit type
const greet = () => {
    console.log("Heppy Sopping");
};
greet();
// sub type of unit type
const AnotherGreet = () => {
    console.log("hello world");
};
const greeting = AnotherGreet();
console.log(greeting);
export {};
