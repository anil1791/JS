// immediately invoked function expression

// to prevent from the pollution of the global variables

(function myfun(){
    console.log("this is an iife");
})();

(()=>{console.log(`this is from second function`)})(); 

((name) => {console.log(`${name} is now writing a code in JS`)})('ANil');