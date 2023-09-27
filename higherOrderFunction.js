// Naming convention:
// 1) camelCase - used for creating variables
// 2) PascalCase - used for creating classes or function
// 3) snake_case - mainly used in python
// 4) kebab-case



// First class function: - passing function as argument to another function
//                       - assigning function to a variable
//                       - returning function from another function



// higher order function (HOF) :
// if a function takes another function as parameter as well as return another function, then it is called HOF

let abc = (fxn) => {  // abc is a higher order function or first class function 
    return function xyx(){

    }
}


function add(a,b){
    return a+b;
}

function sub (a,b){
    return a-b;
}

function operation(fn){
    return fn(2,3);
}

console.log("Addition = " +operation(add));




function Students(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

}

let student = [
    new Students("Bishal", 21, "Pokhara"),
    new Students("Rahul", 21, "Kathmandu"),
    new Students("Sandy", 22, "Pokhara"),
    new Students ("Manish", 30, "Kathmandu")
]


//without using HOF
function FilterByAge(std, age){
    let result = [];
    for(let i =0; i<std.length;i++)
    {
        
        if(std[i].age == age ){
            result.push((std[i]));
        }
       
    }
    return result;
}


function FilterByAddress(std, add){
    let result = [];
    for(let i = 0 ; i<std.length; i++){
        if(std[i].address == add){
            result.push(std[i]);
        }
    }
    return result;

}




console.log(FilterByAge(student,21))
console.log(FilterByAddress(student, "Pokhara"))




// function FilterByAge(a){
//     if(a.age == 21){
//         return true;
//     }else{
//         return false;
//     }
// }



// code optimization i.e using HOF

// let FilterByAge = (a) => a.age == 21;
// let FilterByAddress = (a) => a.address == "Pokhara";

// function Filter(std,fn){
//     let result = [];
//     for(let i = 0 ; i<std.length; i++){
//         if(fn(std[i])){
//             result.push(std[i]);
//         }
//     }
//     return result;

// }
// console.log(Filter(student,FilterByAge))
// console.log(Filter(student,FilterByAddress))




// another example of HOF
let numbers = [1,2,3,4,5,6]; 
function Operation(num, fn){
    let result = []
    for(let n of numbers)
    {
        result.push(fn(n));
    }
    return result;
}


let square = (n) => Math.pow(n,2);
let cube = (n) => Math.pow(n,3);
let squareRoot = (n) => Math.sqrt(n);


console.log(Operation(numbers, square));
console.log(Operation(numbers,cube));
console.log(Operation(numbers,squareRoot));