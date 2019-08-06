const text = document.getElementById('learn').textContent

const linkAfter = () =>{
    const afterText = text.replace(/-/g, " ").toLocaleLowerCase()
    document.getElementById('learn').innerHTML = afterText
   
}