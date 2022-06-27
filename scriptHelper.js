// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a number";
    } else {
        return "Is a number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot.value) === "Is a number") {
        alert("Please enter a valid pilot name.");
        return "Error";
    } else {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} Ready`;
    };
    if (validateInput(copilot.value) === "Is a number") {
        alert("Please enter a valid copilot name.");
        return "Error";
    } else {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} Ready`;
    };
    if (validateInput(fuelLevel.value) === "Not a number") {
        alert("Please enter a valid fuel level.");
        return "Error";
    };
    if (validateInput(cargoLevel.value) === "Not a number") {
        alert("Please enter a valid cargo level.");
        return "Error";
    };
    if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too great for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        return "Error";
    } else if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        return "Error";
    } else if (cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too great for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        return "Error";
    } else {
        list.style.visibility = "hidden";
    };
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
