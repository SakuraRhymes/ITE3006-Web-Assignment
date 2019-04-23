function onHoverChangeiframe(planetName) {
    var iframe = document.querySelector("#iframe_planet");
    iframe.src = "iframe_intro/" + planetName + "_intro.html";
    // var topbar = iframe.contentDocument.getElementsByClassName("topbar");
    // topbar.item(0).style.display = "none";
    switch (planetName) {
        case "sun":
            iframe.style.left = "25%";
            break;
        case "mercury":
            iframe.style.left = "30%";
            break;
        case "venus":
            iframe.style.left = "35%";
            break;
        case "earth":
            iframe.style.left = "40%";
            break;
        case "mars":
            iframe.style.left = "45%";
            break;
        case "jupiter":
            iframe.style.left = "63%";
            break;
        case "saturn":
            iframe.style.left = "21%";
            break;
        case "uranus":
            iframe.style.left = "35%";
            break;
        case "neptune":
            iframe.style.left = "40%";
            break;
    }
}
