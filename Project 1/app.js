let NavBarAnchors = document.querySelectorAll("ul#navbar a");

NavBarAnchors.forEach( (anchor) => {
    anchor.addEventListener("click", (event) => {
        document.querySelectorAll(".screen"),forEach( (screen) => {
            screen.style.display = "none";
        });

        let screen = event.target.getAttribute("data-screen");

        let targetScreen = document.querySelectorAll("#" + screen);

        targetScreen.style.display = "block";
    })
})