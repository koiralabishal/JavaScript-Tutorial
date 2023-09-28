//Inbuilt higher order functions
// 1) forEach() - loop through the array
// 2) map() - transform the data into new ones
// 3) reduce() - reduce the data into a single value
// 4) sort() - sort the data
// 5) filter() - filter the data as per the condition




// forEach()
// has three parameters: data, index, array
// data is the data that is going to be looped through
// index is the index of the data that is going to be looped through
// array is the array that is going to be looped through


let numbers = [1,2,3,4,5,6,7];

numbers.forEach(function(num,index,array){
    console.log(num);
    console.log(index);
    console.log(array);
})






// map() - transform the data into new ones
// the data returned by map( ) function will be always transformed into a new array
// has three parameters: data, index, array


let number = [1,2,3,4];

let newNumber = number.map((num)=> Math.pow(num,3))

console.log(newNumber);







// filter() - filter the data in the array as per the condition 
// has three parameters: data, index, array
let colors =["black","red","red","blue","black","green","blue"];

let newColors = colors.filter((colors) => (colors == "red"))

console.log(newColors);






// another example

let  num = [1,2,4,6,7,89,2,4,0,6,8,5,9,3,4];

let newNum = num.filter((num) =>(num == 2 || num == 4))

console.log(newNum);





// another example

let Students = [
    {
    name : "John",
    age : 23,
    gender : "male",
    },
    {
        name : "Mary",
        age : 24,
        gender : "female",
    },
    {
        name : "Peter",
        age : 25,
        gender : "male",
    },
    {
        name : "Sara",
        age : 26,
        gender : "female",
    }
]


let newStudents = Students.filter((student)=>student.age >= 25);  

console.log(newStudents);





// reduce() - reduce the data of the array into a single data
// mainly used for mathematical operations
// has four parameters: previousValue, currentValue, currentIndex, array
// previousValue is the first element of the array
// currentValue is the remaining elements of the array


let marks = [50,80,90,100];

// working mechanisms
// let marks = [50,80,90,100];
// let marks = [130,90,100];
// let marks = [220,100];
// let marks = [320];

let totalMarks = marks.reduce((previousValue, currentValue) => previousValue+currentValue);

console.log(totalMarks);




// sort() - sort the data in the array as per the condition
// has two parameters: a,b
// a is the first element of the array
// b is the second element of the array
// change the actual array to a new array

let data =[8,6,3,5,100];

// data.sort((a,b) => a-b) // sorted the data in ascending order (a-b)

data.sort((a,b)=> b-a) // sorted the data in descending order (b-a)
// no need to assign a new array to the data variable because it changes the original array

console.log(data)


