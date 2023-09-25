function login(username)
{
    if(username === undefined)  // user if(!undefined) instead of this 
    {
        console.log("Please enter a username");
        return
    }
    console.log(`${username} has just logged in`);

}

login()

