
document.querySelector('button').addEventListener('click', (event)=>{
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const resultDiv = document.querySelector('#result')
    if(!isNaN(height)&&!isNaN(weight))
    {
        const BMI = weight/(height*height)
        resultDiv.textContent= `Your BMI is ${BMI.toFixed(2)}`
    }
    else{
        alert('Please enter height and weight')
    }


})