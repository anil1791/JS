//object literals

const sym1 = Symbol("asdf")

const myobj = {
    name : "anil",
    [sym1] : "23432"            //remember this symbol syntax
    
}

console.log(typeof myobj[sym1]);