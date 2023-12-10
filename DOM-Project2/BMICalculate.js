const form = document.querySelector('form')

form.addEventListener('click', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerText = `Please give a valid height ${height}`
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerText = `Please give a valie weight ${weight}`
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        results.innerText = `${bmi}`
    }

    const weightGuide = document.querySelector('#weight-guide')

    if(results < 18.6){
        // weightGuide.innerText = `You are Under weight ${results}`
        
        
    } else if(results >= 18.6){
        weightGuide.innerText = `You are Normal range ${results}`
    } else if(results >= 24.9){
        weightGuide.innerText = `You are Overweight ${results}`
    }

    const underWeight = document.querySelector('.underWeight')

    console.log(underWeight)
    
    

})