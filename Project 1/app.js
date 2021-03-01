// Javascript for the SPA: Project 1 - IT 202


// The functionality for the navbar:
let home_screen = document.querySelector("#Home-Instructions");
home_screen.style.display = "block"; // sets the home screen

let NavBarAnchors = document.querySelectorAll("ul#navbar a");

NavBarAnchors.forEach( (anchor) => {
    anchor.addEventListener("click", (event) => {

        document.querySelectorAll(".screen").forEach( (screen) => {
            screen.style.display = "none";
        });
        
        let screen = event.target.getAttribute("data-screen");
        let targetScreen = document.querySelector("#" + screen); //changed recently
        targetScreen.style.display = "block";
    });

})
// end of the navbar functionality


// The functionality for the Form: Allows the user to filter the data for the City-Owned Land Inventory
let response = fetch("https://data.cityofchicago.org/resource/aksk-kvfp.json");

let land_data = response.json();

console.log(land_data);
// end of the Form functionality