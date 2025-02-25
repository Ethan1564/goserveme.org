document.addEventListener('DOMContentLoaded', () => {
    const opportunityList = document.getElementById('opportunity-list');
    const contactForm = document.getElementById('contact-form');

    // Sample volunteer opportunities
    const opportunities = [
        { title: 'Community Garden Helper', organization: 'Green Thumbs MN', location: 'Minneapolis', date: '2025-03-15' },
        { title: 'Food Bank Volunteer', organization: 'MN Food Share', location: 'St. Paul', date: '2025-03-20' },
        { title: 'Senior Center Assistant', organization: 'Elder Care MN', location: 'Duluth', date: '2025-03-25' },
        { title: 'Animal Shelter Walker', organization: 'Paws and Claws Rescue', location: 'Rochester', date: '2025-04-01' },
    ];

    // Display opportunities
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

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Find opportunities button
    document.getElementById('find-opportunities').addEventListener('click', () => {
        document.getElementById('opportunities').scrollIntoView({ behavior: 'smooth' });
    });
});

function applyForOpportunity(title) {
    alert(`You've applied for: ${title}`);
    // Here you would typically send this data to your server
}
