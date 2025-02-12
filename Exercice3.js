const click = document.querySelector('button'); 
let count = 0 

click.addEventListener('click', (event) => {
    click.innerHTML = `count : ${event.detail}`
})
   