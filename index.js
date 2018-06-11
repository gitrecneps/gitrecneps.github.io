
var modal = document.getElementById('myModal1');
var button = document.getElementById("myBtn1");

button.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}