const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')


buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
            // buttons.style.backgroundColor = '';
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'aquamarine'){
            body.style.backgroundColor = e.target.id
        }
    })

})