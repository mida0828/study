const input = document.querySelector('#search-field')
const ul = document.querySelector(`.autocomplete-results`)

input.addEventListener('keyup', function(e){
    let value = e.target.value
    getData(value)
})

async function getData(value){
    ul.innerHTML = ''
   await fetch(`/autocomplete?keyword=${value}`)
    .then((res) => {
        return res.json() 
    }).then(function(data){
        data.map((item,index) => {
           return ul.innerHTML += `<li class="li li-${index}">${item}</li>` 
        })
        const list = document.querySelectorAll('.li');
        [...list].map(item => {
            item.addEventListener('click', function(){ 
               return  input.value = item.innerHTML
            })
        })
    }).catch((error) => {
        console.log(error)
    })
}
