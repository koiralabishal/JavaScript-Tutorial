//factorial

function fac(a){
    if (a==0) {
        return 1;
    }else{
        return a*fac(a-1);
    }
}

let factorial = fac(5);
console.log("Factorial = "+factorial);


//fibonacci

function fibo(a){
    if(a==0 || a==1){
        return a;
    }else{
        return fibo(a-1)+fibo(a-2);
    }
}

let fibonacci = fibo(8);
console.log("Nth term of fibonacci series = "+fibonacci)