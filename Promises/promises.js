/*const first = new Promise(function(resolve, reject){
    console.log('Promise created');
    setTimeout(() => {
        console.log('time out called');
    }, 2000);

    resolve();
})

first.then(function(){
    console.log('promise consumed');
})


new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error)
        {
            resolve({username : "ankuma", password:123})
        }
        else
        {
            reject('Error')
        }
    }, (3000));
}).
then(function(user)
{
    console.log(user);
}).
catch((error)=>{
    console.log(error);
} ).finally(function(){
    console.log('finally called');
})
*/

//through async await
/*
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let error =true;
        if(!error)
        {
            resolve({username : "ankuma", password:123})
        }
        else
        {
            reject('Error during response')
        }
    },1000)
})

async function consumer(){
    try {
        const response = await promiseOne
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumer()
*/

//getting user data through async await

/*
async function getUsers(){
    try {
        const response = await fetch('https://reqres.in/api/user')
        let res = await response.json()
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

getUsers()
*/

//getting the same users through then and catch


fetch('https://reqres.in/api/user')
.then(function(response){
    return response.json()
    
}).then((data)=>{
    console.log(data);
}).catch(function(error){
    console.log(error);
})
    
