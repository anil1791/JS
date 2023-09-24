const firstName = "anil"
const secondName  = "Kumar"


// console.log(`my name is ${firstName.toUpperCase()} ${secondName}`)
// console.log(firstName[0]);

const clat = new String('anil-kuamr')
const newstring = clat.substring(0,clat.indexOf('-'))
//console.log(clat.replace('-',' '))


const  no =12321327
//console.log(no.toLocaleString('en-IN'));

const min = 6
const max = 12

const rno = Math.floor(Math.random()*(max - min +1)+min)
console.log(rno);