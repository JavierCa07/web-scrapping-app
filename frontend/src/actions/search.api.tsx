export const onSearchAction = () => {
    // TODO: replace dummy route by our real one
    return new Promise((resolve) => {
        fetch('https://my-json-server.typicode.com/JavierCa07/web-scrapping-mock-server/results')
            .then(response => response.json())
            .then(data => resolve(data))
    })
}