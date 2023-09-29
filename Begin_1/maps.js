const mp = new Map()

mp.set(0 , 'hi')
mp.set(1 , 'hello')
mp.set(2 , 'bye')

for(const [key, value] of mp)
{
    console.log(`key ${key} :- value ${value}`);
}

//  maps are iteratable but objects are not

const arr = [1,2,3,4,5,6,7,8,9]

const newarr = arr.map( (val) => val*10).map((val) => val+2)

console.log(newarr);


