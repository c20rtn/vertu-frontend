const mobileMenuButton = document.getElementById("mobileMenuButton"),
    mobileOverlayClose = document.getElementById("mobileOverlayClose"),
    searchIcon = document.getElementById("searchIcon"),
    closeSearchModal = document.getElementsByClassName("close")[0],
    modal = document.getElementById('searchModal');

searchIcon.onclick = function () {
    modal.style.display = "block";
}

closeSearchModal.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//MOBILE OVERLAY
function openNav() {
    document.getElementById("mobileOverlay").style.height = "100%";
}
function closeNav() {
    document.getElementById("mobileOverlay").style.removeProperty("height");
}
mobileMenuButton.onclick = function () {
    openNav();
}
mobileOverlayClose.onclick = function () {
    closeNav();
}