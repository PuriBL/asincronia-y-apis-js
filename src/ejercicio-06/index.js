fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((responde) => responde.json())
.then((data) => {
    console.log(data)
})
