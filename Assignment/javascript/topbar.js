function toggleTopbar() {
    var x = document.querySelector(".topbar");

    // toggle the top bar to display submenu
    if (x.className === "topbar") {
        x.className += " responsive";
    } else {
        x.className = "topbar";
    }
}