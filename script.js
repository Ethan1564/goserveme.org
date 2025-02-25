let map;
let userLocation;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.7296, lng: -94.6859}, // Center of Minnesota
        zoom: 7
    });
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);
                map.setZoom(10);
                fetchNearbyOpportunities(userLocation);
            },
            () => {
                alert('Error: The Geolocation service failed.');
            }
        );
    } else {
        alert('Error: Your browser doesn\'t support geolocation.');
    }
}

function fetchNearbyOpportunities(location) {
    // This would be replaced with an actual API call to fetch opportunities
    const mockOpportunities = [
        { title: 'Community Garden Helper', organization: 'Green Thumbs MN', location: 'Minneapolis', date: '2025-03-15' },
        { title: 'Food Bank Volunteer', organization: 'MN Food Share', location: 'St. Paul', date: '2025-03-20' },
        { title: 'Senior Center Assistant', organization: 'Elder Care MN', location: 'Duluth', date: '2025-03-25' },
        { title: 'Animal Shelter Walker', organization: 'Paws and Claws Rescue', location: 'Rochester', date: '2025-04-01' },
    ];

    displayOpportunities(mockOpportunities);
}

function displayOpportunities(opportunities) {
    const opportunityList = document.getElementById('opportunity-list');
    opportunityList.innerHTML = '';

    opportunities.forEach(opportunity => {
        const card = document.createElement('div');
        card.classList.add('opportunity-card');
        card.innerHTML = `
            <h3>${opportunity.title}</h3>
            <p>Organization: ${opportunity.organization}</p>
            <p>Location: ${opportunity.location}</p>
            <p>Date: ${opportunity.date}</p>
            <button onclick="applyForOpportunity('${opportunity.title}')">Apply</button>
        `;
        opportunityList.appendChild(card);
    });
}

function applyForOpportunity(title) {
    alert(`You've applied for: ${title}`);
    // Here you would typically send this data to your server
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    document.getElementById('find-opportunities').addEventListener('click', getUserLocation);

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
