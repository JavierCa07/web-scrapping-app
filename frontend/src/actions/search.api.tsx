export const onSearchAction = () => {
    // call endpoint here
    // 1. definir el endpoint (ruta + metodo)
    // 2. llamarlo
    // fetch('http://localhost:5000/api/search')
    // TODO: replace dummy route by our real one
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => console.log(data))
}