function toggleTopbar() {
    var x = document.querySelector(".topbar");
    if (x.className === "topbar") {
        x.className += " responsive";
    } else {
        x.className = "topbar";
    }
}