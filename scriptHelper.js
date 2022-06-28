// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let planetInfo = document.getElementById("missionTarget");
    planetInfo.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot.value) === "Is a Number") {
        alert("Please enter a valid pilot name.");
        return "Error";
    } else {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} Ready`;
    };
    if (validateInput(copilot.value) === "Is a Number") {
        alert("Please enter a valid copilot name.");
        return "Error";
    } else {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} Ready`;
    };
    if (validateInput(fuelLevel.value) === "Not a Number") {
        alert("Please enter a valid fuel level.");
        return "Error";
    };
    if (validateInput(cargoLevel.value) === "Not a Number") {
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
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
    };
}

async function myFetch() {
    let planetsReturned = [];

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
            
    
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
