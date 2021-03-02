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
let endpoint = "https://data.cityofchicago.org/resource/aksk-kvfp.json";

let url = endpoint;

let filter_button = document.querySelector("#filter_search");



/*
let communities_unique = [];
communities_unique.sort();

fetch (url)
    .then( (response) => {
        return response.json()})
    .then( (data) => {
        // work with data
        
        data.forEach( (entry) => {
            if(!communities_unique.includes(entry["community_area_name"])) {
                communities_unique.push(entry["community_area_name"]);
            }
        });
    });


console.log(communities_unique);
*/



//get land data

//construct url by filtering data

// end of the Form functionality


// Data:
// let filter_name = ;
// let filter_value = ;
// let search_value = document.querySelector("?" + filter_name + "=" + filter_value);
