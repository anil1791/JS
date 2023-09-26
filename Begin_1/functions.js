function login(username)
{
    if(username === undefined)  // user if(!undefined) instead of this 
    {
        console.log("Please enter a username");
        return
    }
    console.log(`${username} has just logged in`);

}

//login()

function calculateCartPrice(...list)
{
    let res = 0;
    for(let i=0;i<list.length;i++)
    {
        res += list[i]
    }

    return res;
}

console.log(calculateCartPrice(200,300,200,400));


//let and const are block scoped
//var can be used globally


newfun(4)
function newfun(num)
{
    console.log(num +2);
}

var newfun2 = function(num)
{
    return num +2;
}
newfun2(2)

