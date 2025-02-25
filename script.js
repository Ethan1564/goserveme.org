// Check if geolocation is available in the browser
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Get user's latitude and longitude
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        // Display user location in the console (or you can show it on the webpage)
        console.log(`You are located at Latitude: ${latitude}, Longitude: ${longitude}`);

        // You can use these coordinates to match volunteer opportunities by zip code or nearby locations
        // For now, let's display an alert as a placeholder
        alert(`Your current location is Latitude: ${latitude}, Longitude: ${longitude}`);
        
        // Here, you can extend this by matching zip codes or nearby places
        // Example: Fetch relevant volunteer opportunities based on location
    }, function(error) {
        alert("Unable to retrieve your location.");
    });
} else {
    alert("Geolocation is not supported by your browser.");
}

// Optional: Add a function to search by zip code (for users without geolocation)
function searchByZip(zipCode) {
    // Example of hardcoded data (could be dynamic from API)
    const opportunities = [
        { zip: "55125", opportunity: "Advisory Commissions", description: "Shape the future of Minnesota." },
        { zip: "55128", opportunity: "Chaplaincy Corps", description: "Provide spiritual guidance in crises." }
    ];

    // Find the opportunities matching the entered zip code
    const filteredOpportunities = opportunities.filter(opportunity => opportunity.zip === zipCode);

    if (filteredOpportunities.length > 0) {
        console.log("Found opportunities:", filteredOpportunities);
        alert(`Found volunteer opportunities: ${filteredOpportunities.map(op => op.opportunity).join(", ")}`);
    } else {
        alert("No opportunities found for this zip code.");
    }
}

// Example: Call the searchByZip function (you can replace this with an input field for dynamic search)
searchByZip("55125");
