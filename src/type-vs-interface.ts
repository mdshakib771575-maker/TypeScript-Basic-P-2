// type alius vs interface
// ? interface is genarelly connedted to object.
// ? type alius is more connceted to literls,union,tupple,primitives

//TODO : type alias

type Id = number;
// ! interface Id = numbere

type Role = "admin" | "user"
// ! interface Role = admin | user

interface User {
    id: Id,
    name: string,
    role: Role
}

const user: User = {
    id: 123,
    name: "oi",
    role: "user"
}

//TODO : interface

interface Animal {
  spicies :  string
}

interface Cat extends Animal {
    breed : string
}

const cat : Cat ={
    breed :"persian",
    spicies :"Felix catus"
}

type  Vehecal = {
    model : string
}

type Car  = Vehecal &{
    brand : string
}

const car : Car = {
    brand : "Toyota ",
    model : "Corolla"
   
    
}


interface Iemploy  {
    name : string
}

interface Iemploy {
    id: number
}

const employ : Iemploy ={
    id: 1215,
    name:"Shakib"
} 

// ! this is not posible type
// type Temploy = {
//     name : string
// }
// type Temploy = {
//     name : string
// }