// Javascript for the SPA: Project 1 - IT 202


// The functionality for the navbar:
let home_screen = document.querySelector("#Home-Instructions");
home_screen.style.display = "block"; // sets the home screen

let NavBarAnchors = document.querySelectorAll("ul#navbar a");

NavBarAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {

        document.querySelectorAll(".screen").forEach((screen) => {
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

// Form search
let filter_by_id_button = document.querySelector("#filter_search_id");
let filter_by_pin_button = document.querySelector("#filter_search_pin");

// id filter
filter_by_id_button.addEventListener("click", (event) => {
    let id = document.querySelector("#id_filter").value;
    new_url = url + "?id=" + id;
    fetch(new_url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // work with data
            console.log(data);
        });
})

// pin filter
filter_by_pin_button.addEventListener("click", (event) => {
    let pin = document.querySelector("#pin_filter").value;
    new_url = url + "?pin=" + pin;
    fetch(new_url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // work with data
            console.log(data);
        });
})

// // get the filter data 
// filter_button.addEventListener("click", (event) => {
//     let filter_value = document.querySelector("#filter").value;
//     console.log(filter_value);

//     let communities_unique = [];
//     // communities_unique.sort();

//     // use the filter 
//     fetch (url)
//         .then( (response) => {
//             return response.json()})
//         .then( (data) => {
//         // work with data

//             data.forEach( (entry) => {
//                 if(entry.includes(filter_value.values(entry))) {
//                     console.log(entry);
//                 } 

//                 // // if(!communities_unique.includes(entry["community_area_name"])) {
//                 // //     communities_unique.push(entry["community_area_name"]);
//                 // }
//             });
//         });

//     // console.log(communities_unique);
// })



// make an array of all the community names
let communities_unique = [];
communities_unique.sort();

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // work with data

        data.forEach((entry) => {
            if (!communities_unique.includes(entry["community_area_name"])) {
                communities_unique.push(entry["community_area_name"]);
            }
        });

        // dropdown menu for community names
        let dropdown_community_options_array = [];
        dropdown_community_options_array.push("<option value='' selected></option>")
        communities_unique.forEach((element) => {
            dropdown_community_options_array.push("<option value=''>" + element + "</option>");
        });
        document.getElementById("dropdown_community_options").innerHTML = dropdown_community_options_array.join();
    });



//get land data

//construct url by filtering data

// end of the Form functionality


// Data:
// let filter_name = ;
// let filter_value = ;
// let search_value = document.querySelector("?" + filter_name + "=" + filter_value);
