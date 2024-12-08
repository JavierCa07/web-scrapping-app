export const onSearchAction = (query: string) => {
    // TODO: replace dummy route by our real one
    return new Promise((resolve) => {
        // fetch('https://my-json-server.typicode.com/JavierCa07/web-scrapping-mock-server/results')
        fetch('http://localhost:5000/search',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({query})
            }
        )
            .then(response => response.json())
            .then(data => resolve(data))
    })
}
