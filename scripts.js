var openB = false;
var sidebar = document.querySelector(".sidebar");

function openBar() {
    if (!openB) {
        sidebar.classList.add("sidebar-responsive");
        openB = true;
    }
}

function closeBar() {
    if (openBar) {
        sidebar.classList.remove("sidebar-responsive");
        openB = false;
    }
}
