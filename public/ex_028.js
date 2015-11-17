
var addEventToButton = function(button) {
	// the button click handler
	var handler = function(ev) {
		// Unsubscribe from the button event.
		button.removeEventListener("click", handler);

		alert("Button was clicked. Unsubscribing from event.");
	};

	// add the button click handler
	button.addEventListener("click", handler);
}

console.log($("#clickme"));

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
	console.log(document.querySelector("#clickme"));
	addEventToButton(document.querySelector("#clickme"));
});



// addEventToButton();