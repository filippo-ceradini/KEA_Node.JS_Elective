function writeInVisitorLog(){
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: ""
        }
        fetchOptions.body = JSON.stringify(updatedProductObject);
        fetch("/api/visitors", fetchOptions).then
}

fetch("/api/visitors")// gets a bytestream that contains 
        .then(response => response.json()) // Parse the response as JSON
        .then(result => {
            console.log(result.data)
            visitorsCountP = document.getElementById("visitorsCount")
            visitorsCount.innerText = result.data
        })
        .catch(error => {
            console.error(error);
        });