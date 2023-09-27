
let  flowers = ["Marigold", "Rose", "Lotus"];

//access the data using normal method i.e indexing method;

let flower1 = flowers[0];
let flower2 = flowers[1];

console.log(flower1,flower2);


//access the data using destructuring assignment

let [flower3, flower4, flower7] = flowers;
console.log(flower3,flower4, flower7);


let  [flower5,flower6] = ["Marigold", "Rose"]; // also a destructuring assignment
console.log(flower5,flower6)

// acess the required data only
let [student1, ,student2] = ["ram", "shyam", "hari"];
console.log(student1,student2)


// assign the default value

let numbers=[1,2];
let [number1,number2,number3]=numbers;

console.log(number1,number2,number3 =5)



//spread operator(...variableName). returns the data in array.also used to merge two array
let car = ["Tesla", "susuki", "Mahindra", "tata"];
let bike =["pulsar", "honda"];
const [car1, ...remaining] = car;
console.log(car1, remaining)

const vehicles = [...car,...bike];
console.log(vehicles);


//can used for object also

let student = {
    name: "bishal",
    age:21,

    address:{
        city: "pkr"
    }
};
//destructuring assignment 
// const{name,age} = student;
// name
// age


const{name:studentName, age:studentAge} = student; //acess data using nickname
studentName
studentAge

//spread operator

const{name, ...rest} = student;
name
rest
 
// destructuring assignment for nested objects
const {address:{city}} = student;
city


let a = Object.assign({},student);
a

//another way to assign
let b = {...student};
b

