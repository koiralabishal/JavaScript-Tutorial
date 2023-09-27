let students = ["Bishal","Ram"];
let course = ["Software", "Computer"];
students[0] = "Ganga" // update the data 

console.log(students);

students.push("Shyam","Hari")  //insert data at the last 

console.log(students)

students.pop(); //delete the last elements

console.log(students)

students.unshift("Puppy") // insert data at first

console.log(students)

students.shift(); // delete the first data

console.log(students)

console.log(students.join()); //convert array into string

console.log(students.concat(course)) //merge two arrays

console.log(students);

console.log(students.reverse())//revesre the array

console.log(students)

console.log(students.slice(-3)) //return the portion of the array from the last

console.log(students.slice(1,3))

console.log(students.slice(1,2))

console.log(students.fill("Bishal",1,3)) // to fill the array with new one
