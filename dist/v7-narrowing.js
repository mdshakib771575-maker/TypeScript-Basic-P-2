// typeof
let x = 123;
console.log(typeof x === "number");
// type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const user = {
    name: "sha",
    address: {
        streed: "abc"
    }
};
const showAdress = (user) => {
    // if(user && user.address){
    //     console.log(user.address.streed); 
    //     return 
    // }
    console.log(user?.address?.streed);
};
showAdress(user);
export {};
