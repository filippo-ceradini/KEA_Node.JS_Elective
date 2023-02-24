//Api Address
const localTanksApi = "http://localhost:8080/api/tanks"

//Load the main function on document load
document.addEventListener("DOMContentLoaded", () => {
    getTanks()
});

//REST Functions
function getTanks() {
    // Send a GET request to the API endpoint
    fetch(localTanksApi)// gets a bytestream that contains 
        .then(response => response.json()) // Parse the response as JSON
        .then(result => {
            tankDiv = document.getElementById("tanks-wrapper")
            displayTanksTable(result.data)
        })
        .catch(error => {
            console.error(error);
        });
}


// Display tanks in div
//Function to display the Tanks
function displayTanksTable(tanks) {
    // Clear the table
    document.getElementById("tanks-table-body").innerHTML = "";
    // Loop through the list of tanks
    for (let i = 0; i < tanks.length; i++) {
        const tank = tanks[i];

        // Create the table row
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.innerText = tank.name;
        console.log(tank.name);
        row.appendChild(nameCell);

        //XXS cross site scripting attach! no InnerHTML

        document.getElementById("tanks-table-body").appendChild(row);
    }
}
