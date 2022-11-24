function togglemenu() {
    var menubar = document.getElementById("menubar");
        if (menubar.style.maxHeight === "0px")
        {
            menubar.style.maxHeight = "180px"
        }
        else
        {
            menubar.style.maxHeight = "0px"
        }
}