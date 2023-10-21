String.prototype.ActualLength = function()
{
    console.log(`Current string is ${this}`);
    console.log(`The actual length of the string is ${this.trim().length}`);
}


let abc = "Anil     "

abc.ActualLength()



let newstring = "Adsf fdf gdgf   ggg"
newstring.ActualLength()