
function setUsername(username)
{
    this.username = username
}

function createUser(username, email, password)
{
    //this.username = username
    setUsername.call(this,username)             //function called explicitly
    this.password = password
    this.email = email
}

const user = new createUser("Anil", "anil@abc.com", "abc123")

console.log(user);