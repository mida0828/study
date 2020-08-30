const input = document.querySelector('#search-field')
const ul = document.querySelector(`.autocomplete-results`)

input.addEventListener('keyup', function(e){
    let value = e.target.value
    getData(value)
})

function getData(value){
    ul.innerHTML = ''
    fetch(`/autocomplete?keyword=${value}`)
    .then((res) => {
        return res.json() 
    }).then(function(data){
        data.map(item => {
           return ul.innerHTML += `<li>${item}</li>` 
        })
    }).catch((error) => {
        console.log(error)
    })
}
