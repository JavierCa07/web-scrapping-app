export const onSearchAction = (query: string) => {
    return new Promise((resolve) => {
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
