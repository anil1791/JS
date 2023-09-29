const arr = [
    "apple",
    "banana",
    "cherry",
    "date",
    "grape",
    "kiwi",
    "lemon",
    "orange",
    "peach",
    "strawberry"
  ];

arr.forEach( function(val){
    console.log(val.toUpperCase());
});
function italicizeText(text) {
    console.log( `<em>${text}</em>`);
  }
arr.forEach( italicizeText);

/*  
let i = 0;
do{ 
    console.log(arr[i]);
    i++

}while (i<=9)
for(const num of arr)
{
    console.log(num);
}


const s = "hello world"
for(const c of s)
{
    console.log(`the current character is ${c}`);
}
*/