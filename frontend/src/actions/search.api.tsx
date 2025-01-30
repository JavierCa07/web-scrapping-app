export const onSearchAction = (query: string) => {
    return new Promise((resolve) => {
        // we make the actual call to the search endpoint
        // we are calling to "localhost". This means both front and back must be running on the same machine
        fetch('http://localhost:5000/search',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({query})
            }
        )
            .then(response => response.json()) // we get the response in JSON format
            .then(data => resolve(data)) // resolve the Promise with the data
    })
}
