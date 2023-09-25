//object literals

const sym1 = Symbol("asdf")

const myobj = {
    name : "anil",
    [sym1] : "23432",            //remember this symbol syntax
    current_full_job: "SE",
    phone: "324123141"
}


const ob1 = { a: "123",b: "dfk1",c : "dfd"}
const obj2 = {g: "fdf",h : "popd"}

const final_obj = {...ob1,...obj2}//Object.assign({},ob1,obj2)

const arr1 = Object.entries(final_obj)
//console.log(arr1)

//object destructuring

const {current_full_job: job} = myobj

console.log(job);

