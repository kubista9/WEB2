// 05 Exercises: Asynchronous Programming

//1. A Childhood Callback
const xhr = new XMLHttpRequest()
xhr.open("GET","https://pokeapi.co/api/v2/pokemon/wartlotle")
xhr.onload = () => {
    if (xhr.status == 200) console.log(JSON.parse(xhr.responseText).name)
}
xhr.onerror = () => console.log("Network Error!")
xhr.send()
