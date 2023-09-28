// callback function
// is a function that is passed as an argument to another function and is executed after 
// the parent function has finished executing.
// is a usecase of HOF (high order function) but not totally hof
// difference is ,
// HOF is used for code optimitation i.e DRY code principle (do not repeat your code)
// but callbacks function is used to execute code immediately after the parent function has finished executing.


// callback function

function callbackFunction(arg1, arg2) {
    console.log(arg1, arg2);
}

// parent function

function parentFunction(arg1, arg2, callback) {
    console.log(arg1, arg2);
    callback(arg1, arg2);
}

parentFunction(1, 2, callbackFunction);


// another example

function Add(a,b){
    console.log(a+b);
}

function Subtraction(a,b,callback){
    callback(a,b);
    console.log(a-b);
   
}

Subtraction(3,4,Add)