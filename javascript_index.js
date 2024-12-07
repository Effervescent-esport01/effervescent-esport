// Get the modal and popup elements
var modal = document.getElementById("myModal");
var popup = document.getElementById('popup');

// Get the <span> element that closes the modal and the close button for the popup
var span = document.getElementById("closeModal");
var closeBtn = document.getElementById('closeBtn');

// Automatically open the modal when the page loads
window.onload = function() {
    modal.style.display = "block"; // Show the modal
}

// When the user clicks on <span> (x), close the modal and set a timer to show the popup
span.onclick = function() {
    modal.style.display = "none"; // Close the modal

   setTimeout(function(){
		   popup.style.display = "block"; // Show the popup after 5 seconds
        }, 1000);
}

// When the user clicks anywhere outside of the modal, close it and set a timer to show the popup
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Close the modal

       setTimeout(function(){
		   popup.style.display = "block"; // Show the popup after 5 seconds
        }, 1000);
    }
}

// Close the popup when the button is clicked
closeBtn.onclick = function() {
    popup.style.display = 'none'; // Hide the popup
    localStorage.setItem('popupShown', 'true'); // Set the key in local storage
};
