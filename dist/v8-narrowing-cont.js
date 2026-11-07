const printAll = (x) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
    }
};
printAll(null);
const print = (x) => {
    if (x !== null) {
        if (typeof x == "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
};
print(null);
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
// instanceof cheak
// const date = new Date();
// const err = new Error("something went wrong")
// console.log(date instanceof Date);
// console.log(err instanceof Error);
const ShowDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date();
    console.log(date.toISOString());
};
ShowDate("10-10-2000");
export {};
