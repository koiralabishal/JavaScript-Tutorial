// exploring objects in js

//CRUD in js ( Create Read/Access Update Delate)

// have limited features. we can access only its key value
//Create
"use strict"; 
// strictly check that the the key value are changed or not while using const variable and Object.freeze({})


let students = {
    name:"Bishal Koirala",
    age: 20,
    functions: function(){
        return this.name + " is a student of GCES."; 
        // can access the property as well as functions of object inside the function using 'this' keyword
    },
    //nested objects
    faculty:{
        title: "Science and Technology",
        //nested objects
        course:{
            subject: "Software Engineering",
        },

    },
};



// global interface called Object which enable us to work with objects.
console.log(Object.keys(students))//show the property of the objects
console.log(Object.assign({},students))// copy the objects to another object
console.log(Object.entries(students))
 //show the key and value of the objects



// display the data of students
//Access or Read
console.log(students.name)
console.log(students.age)
console.log(students.functions())
console.log(students.faculty.course.subject) 
//access the data of nested objects


//update the value 

students['name'] = "Rahul bhandari";
console.log(students.name)

// delete
console.log(students)
delete students.name;
console.log(students)

// add new property from outside
console.log(students)
students['address'] = "Pokhara";
console.log(students)




// another way to display the data

console.log(students["name"])
console.log(students['age'])
console.log(students['functions']())




// have many features. we can access other property as well as its key value

let book = new Object({ // best way of creating object
    name: "Muna Madan",
    author : "Laxmi Prasad Devkota"
});




//display the data of book
console.log(book.name)
console.log(book.author)




// not only using let varible but also using const variable, we can update the key value
const car = {
    name:"Tesla" ,
    price : 10000000,
};


car.name="suzuki";
console.log(car)


// avoid the above limitation

const bike = Object.freeze( { 
     // Object.freeze({}) lock the objects. that's why we cannot chage the key value but doesn't check strictly
     //doesn't lock the nested object
    name: "Pulsar",
    price: 200000
});

// bike.name = "Honda" 
console.log(bike.name)

console.log(Object.isFrozen(book))
console.log(Object.isFrozen(bike))