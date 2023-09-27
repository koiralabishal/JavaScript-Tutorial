// normal method
function add(){
    let a=20,
        b=30;
    return a+b;
}

console.log("sum = "+add());



//using arrow function or variable assigned function or anonymous function = having no function name

let add1 = (a,b)=>{
    return a+b;
}

// if there is one line code while using arrow function , there is no need of curly brackets and return keyword
// let add1 = (a,b)=> a+b;
// console.log(add1(2,3));

//calling technique 1
let sum = add1(20,30)

console.log("Sum = "+sum)




// calling technique 2

let sum1 = add1.call(add1,20,30);
console.log("Sum = "+sum1)



//nested function

function subtract(){
    return function sub (c,d){
        return c-d;
    }
}

let sub1 = subtract()(5,3);
console.log(sub1);



function arithmetic(a,b){
    console.log("addition = "+ (a+b))
    console.log("subtraction = "+ subtraction(6,2))
    function subtraction(c,d){
        return c-d;
    }
    
}

arithmetic(4,2);




//IIFE (Immediately Invoked Function Expression)
(()=>{
    let a =2,
        b=3
    console.log(a+b);
})();




//Function as object

function Student(name, age){
    this.name = name;
    this.age = age;
}

let std = new Student("bishal", 21) // creating object
console.log(std)      // display object

std.address = "Pokhara"              // adding property 
console.log(std)
console.log(Object.keys(std));    // show keys of object
console.log(Object.entries(std));     // show both keys and value in array
let std1 = Object.assign({},std);     // copy the object to another object
console.log(std1);
delete std1.address; // delete the property
console.log(std1)

std.name = "ram";
console.log(std)





//destructuring argument
function sub(a,b,[d,,e]){
    console.log("Subtraction = "+ (a-b-d-e));
    console.log(d,e)
}

sub(20,30,[40,50,60]);


//using spread operator (....variabalName)

function mul(a,b,...rest){
    console.log("Multiplication = "+ (a*b*rest[2]));
    console.log(rest)
}

mul(1,2,3,4,5,6);

let s= new Object({
    name:"Bishal",
    age: 20,
    address:{
        city:"pokhara",
    },
});


// using function to access the object
function student (obj){
    console.log(obj);
}


student(s);

// using destructuring argument

function student1({name, age,address:{city}}){
    console.log(name,age,city);
}

student1(s);


//using spread operator
function student2({name,...rest}){
      console.log(name,rest);
}

student2(s);