// Geolocation functionality
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("User's Location:", lat, lon);
        
        // Optional: You can use this data to show nearby volunteer opportunities dynamically
    }, function(error) {
        alert("Geolocation failed: " + error.message);
    });
} else {
    alert("Geolocation is not supported by your browser.");
}
