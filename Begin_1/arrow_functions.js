// global context in browser is window
// but in node it is empty object
/*
this Binding:

Normal Function:
Normal functions have their own this context, 
which is determined by how they are called. 
The value of this can change based on the function invocation, 
making it suitable for methods in objects and constructor functions.

Arrow Function:
Arrow functions do not have their own this context; 
they inherit the this value from the enclosing lexical (surrounding) context. 
This behavior can be useful in situations where you 
want to maintain the this value of the surrounding code.
*/

function mynum()
{
    console.log(this);
}
//mynum()

const myobj = {
    name : "Anil",
    doFun: function()
            {
                console.log(`${this.name}, you are welcome`);
                console.log(this)
            }
}
//myobj.doFun()

const myfunction = (n1,n2) => {
    console.log(this);
    return n1+n2
}
//console.log(myfunction(2,3));

// const ff1 = (n1,n2) => n1+n2
// console.log(ff1(2,3));

const ff1 = (n1,n2) => (n1+n2)      //called implicit return
//console.log(ff1(2,3));

const f2 = () => ({name: "Anil", age:12})
console.log(f2());

