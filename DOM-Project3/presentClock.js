const clock = document.querySelector('#clockBox')

console.log(clock)



setInterval(function(){
    const date = new Date()
    clock.innerText = date.toLocaleTimeString()
}, 1000)