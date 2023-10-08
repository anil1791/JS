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
*/

new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true;
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
} )