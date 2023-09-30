const buttonArr = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttonArr.forEach((button) => {
    //console.log(button);
    button.addEventListener('click', (event)=>{
        //console.log(event);
        //console.log(event.target);
        switch (event.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey'
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
        
            default:
                break;
        }
    })
    
})