let sum = add(4, 5);
console.log("Sum is: ", sum);

function add(a, b) {
  return a + b; //calculate sum
}



function looping() {
  for (var i = 0; i < 5; i++) {
    // var is global scope we can use it anywhere in program
    console.log(i); // it will print upto 4
  }
  console.log(i); // It will print 5
}

looping();



function looping1() {
  for (let i = 0; i < 5; i++) {
    // let is not  global scope .we can use it only the block where it is declared in program
    console.log(i); // it will print upto 4
  }
  //console.log(i);
   // error
}

looping1();




const pie = 3.14; // const variable is used to use the constant value throughout the program
let r = 10,
  ar;
let area = () => {
  // arrow function
  ar = pie * r * r; // calculate area
  console.log("Area of circle is: ", ar); //print area
};

area(); // call function area()





let b = 10,
  c = "bishal",
  d = new Number(30),
  e = Number(80);

console.log(typeof b, typeof c, c.concat("Koirala"), typeof d, typeof e);
// print data as well as their data type. keyword typeof show data types




let f = 123456789123456789123456789n;
f = BigInt(12345678912345678912345678912);
//BigInt is applicable for large number and it always ends with n if it is written without bigint data type.
// we can worked bigint with number..bigint with bigint is possible and number with number is possible 
// no need of new operator for it

let g = 123456789123456789; //Number is applicabe only for 16 digits number otherwise it will round off the value and then print
console.log(typeof f, f, typeof g, g);

console.log(f + 1n);
console.log(g + 1);




let m = true; //Boolean
m = new Boolean(false); // Boolean
console.log(typeof m, m);



let p; //undefined datatype variables. those variable whose values are not defined.
console.log(typeof p,p); // it will print undefined data type with undefined data


//console.log( j); 
//in this case j is not defined. so we can call it as undefined.
//let j = 90;



let k = null; // null data type
console.log(typeof k, k);


// creating objects

let student = {  //student is an object
   name:"Bishal Koirala",  //name is a key
   age:20, // age is a key
};
// object data type is normally written with key and value inside the curly brackets ({})
console.log(typeof student);// print the data type of student
console.log(student.name, student.age); // print name and age of object student




//template literals

let firstName = "Bishal",
    lastName = "Koirala";

console.log("My name is " + firstName + " " +  lastName +" .");
//We can print the firstname and last name using template literals also. 
//template literals is also known as string literals. because we use it minly for string
// template literals can achieve any expressions.

console.log(`My name is ${firstName} ${lastName} .`); 
// using template literals. template literals has expression like `${}` where `` is a backtick.


// nested template literals
console.log(`My name is ${`${firstName} ${lastName}`.toLowerCase()}`.toUpperCase()); 

let num = "2",
    num2 = "3";

console.log(num+num2); //print 23 because 2 and 3 are string and + sign concate the strings.
console.log(parseInt(num) + parseInt(num2)); 
// print the sum of numbers i.e 3+2=5 . because strings are converted into integers using parseInt() 
//We can use + sign instead of parseInt()

console.log(+num + +num2);  // also print the sum of numbers i.e 3+2=5 .
//we can use + sign at the time of declaration.



let data = bishal`My name is ${firstName} ${lastName}`; 
// bishal is any name that is used as tag for template literals. that's why we can call it as
//tagged template literals and they are used for modification the existing data 
//and return it to the original variable

function bishal( strings, exp1, exp2){
   console.log(strings);
   console.log(exp1);
   console.log(exp2);
   return (exp1 + " " + exp2 + ". I am software engineer.");
}

console.log("data = ", data);





const isNepali = true;

isNepali ? console.log("I am a Nepali.") : console.log("I am not a Nepali.");
// Ternary operator 
//?:





let a = null; //or you can use undefined

console.log("a = ",a ?? 10); // nullish operator(??) provide the default value





let x = "10",
    y= 10;

x == y ? console.log("same"): console.log("not same"); // == only check value
x === y ? console.log("same"): console.log("not same"); // === check both type and string





