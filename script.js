// Geolocation Script to find user's location and show it on the map
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLat = position.coords.latitude;
        var userLng = position.coords.longitude;
        
        console.log("User's location: ", userLat, userLng);

        // You can use these coordinates to place a marker on the map or show a location to the user
        var userLocation = { lat: userLat, lng: userLng };
        initMap(userLocation);
    }, function(error) {
        console.log("Geolocation Error: ", error);
        alert("Unable to fetch your location.");
    });
} else {
    alert("Geolocation is not supported by your browser.");
}

// Initialize Google Map with the user's location (or fallback to Woodbury, MN)
function initMap(userLocation = { lat: 44.8746, lng: -92.9480 }) {
    var map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 12,
        center: userLocation
    });

    var marker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Your Location"
    });
}

// Volunteer Form Submission
function submitVolunteerForm(event) {
    event.preventDefault();

    // Get form data
    const form = document.getElementById("volunteer-form");
    const opportunityName = form.elements["name"].value;
    const opportunityDescription = form.elements["description"].value;
    const contactInfo = form.elements["contact"].value;

    // Display the submitted information for now (you could later save this to a database or display it on the website)
    console.log("Volunteer Opportunity Submitted: ", opportunityName, opportunityDescription, contactInfo);

    alert("Thank you for submitting a volunteer opportunity!");

    // Clear the form fields
    form.reset();
}

// Event listener for form submission
document.getElementById("volunteer-form").addEventListener("submit", submitVolunteerForm);

// You can add more functionality as needed based on the features you want
