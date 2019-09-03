const myButton = document.querySelector('.button')

myButton.tabIndex = 0

myButton.addEventListener('click', ()=>{
    alert('Here are 1000 Bitcoins!')
})


window.addEventListener('keydown', e=>{
    const key = e.keyCode
    if((key === 13 || key === 32) && document.activeElement === myButton){
        myButton.click()
    }
})