console.log("fetch (URL) using Promise chaining")
fetch(URL)
    .then((response) => {
        console.log(response)
        return response.json()
    }).then((data) => {
        console.log(data)
        for(item in data){
            console.log(data[item])
        }
    })