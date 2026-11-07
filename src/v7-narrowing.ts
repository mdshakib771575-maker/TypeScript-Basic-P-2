// typeof

let x = 123

console.log(typeof x === "number");
// type Guard

const print = (value: number | string) => {

    if (typeof value === "string") {

        return value.toUpperCase();
    } else {
        return value
    }
}
// truethiness

type User = {
    name: string,
    address?: {
        streed: string
    }
} | null

const user : User = {

    name:"sha",
    address:{
        streed:"abc"
    }

}

const showAdress =(user:User)=>{
    // if(user && user.address){
        
    //     console.log(user.address.streed); 
    //     return 
    // }
    console.log(user?.address?.streed)
}
showAdress(user)