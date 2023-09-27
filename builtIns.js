// Math() inbuilt function 

console.log(Math.sqrt(4));
console.log(Math.max(1,2,3,4,5))
console.log(Math.abs(-11))
console.log(Math.min(1,2,3,4,5,6,7,-11))
console.log(Math.pow(2,3))
console.log(Math.random())// provide the value between 0 and 1
console.log(Math.floor(2.999)) // provide the number before decimal
console.log(Math.ceil(2.3)) // provide the number Math.floor()+1

console.log(Math.floor(Math.random()*4));



// Date

console.log(new Date())
console.log(new Date().getFullYear())
console.log(new Date().getMonth())
//jan = 0
// feb = 1



// sep = 8

console.log(new Date().getDate())
console.log(new Date().getDay())
//Sun =0
// mon = 1


//sat =6
console.log(new Date().getHours())
console.log(new Date().getMinutes())
console.log(new Date().getSeconds())
console.log(new Date().getMilliseconds())
console.log(new Date().toISOString().split("T")[0])


// calculate age of a person
let currentDate = new Date().getFullYear();
let birthDate = new Date(2002,10,6).getFullYear();
let age = currentDate - birthDate;
console.log("Age = " + age)