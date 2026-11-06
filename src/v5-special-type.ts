
// top type
let hello: any = " hi shakib"

hello.length

hello = 123

const something: unknown = "Hello World"

// something.length

// Core type
const num: number = 123;

let something2: unknown;

something2 = num;

// nalish type
interface User {
    name: string
}
type Loggedin = User | null

const CurrentUser: Loggedin = null

// unit type

const greet = () => {
    console.log("Heppy Sopping");
}

greet();

// sub type of unit type

const AnotherGreet = (): undefined => {
    console.log("hello world");
}

const greeting: void = AnotherGreet();
console.log(greeting);

// bottom type 

const getEroor = (meg:string)=>{
   throw new Error(meg)
};
const x : string = getEroor("ABC")

