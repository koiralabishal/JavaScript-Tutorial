
//for loop
let students = ["Ram", "Shyam"];

for(let i = 0; i<students.length; i++){
    console.log(students[i]);
}

//types of for loop
// 1) For each loop
// 2) For in loop
// 3) For of loop


// for each loop

students.forEach(function(value){
    console.log(value);
})

//for of loop

for(let std of students){
    console.log(std);
}

// for in loop
// applicable in both array and objects
// provide index in array and key in objects
for(let std in students){
    console.log(std);
    console.log(students[std]);
}


// using for in loop for object
let studentList = new Object({
    name: "Bishal",
    age: 20,
    address:{
        city: "Pokhara",
        lat:1,
        long:2,
    },

});

for (let std in studentList){
    console.log(std);
    console.log(studentList[std])

    if(typeof studentList[std] === "object"){  // only for nested object
        for(let s in studentList[std]){
            console.log(s);
            console.log(studentList[std][s]);
        }
    }else{
        console.log(studentList[std])
    }
}