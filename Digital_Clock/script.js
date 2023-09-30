

setInterval(function(){
    const currentTime = new Date()    
    document.querySelector('.clock').innerHTML = currentTime.toLocaleTimeString()
},1000)