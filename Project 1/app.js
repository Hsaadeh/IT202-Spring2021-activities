let home_screen = document.querySelector("#Home-Instructions");
home_screen.style.display = "block";

let NavBarAnchors = document.querySelectorAll("ul#navbar a");

NavBarAnchors.forEach( (anchor) => {
    anchor.addEventListener("click", (event) => {
        //console.log(":/")
        document.querySelectorAll(".screen").forEach( (screen) => {
            screen.style.display = "none";
        });
        
        let screen = event.target.getAttribute("data-screen");
        let targetScreen = document.querySelector("#" + screen); //changed recently
        targetScreen.style.display = "block";
    });

    //console.log("oof");
})