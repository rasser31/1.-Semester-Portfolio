// -------------------
// Javascript dokument
// -------------------

// --------------------------------------------------------------------------------------
// For at kunne lave mine modal bokse, har jeg benyttet linket nedenunder
// https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page
// --------------------------------------------------------------------------------------

// Her laver jeg en variabel jeg kan benytte med min knap
var btn = document.querySelectorAll("button.modal-button");

// Her laver jeg en variabel som danner en sammenhæng mellem alle mine modal bokse
var modals = document.querySelectorAll('.modal');

// Her laver jeg en variabel som benytter classet "close" (Se <span> i HTML, eller "close" classet i CSS)
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (var index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
        }
    }
}