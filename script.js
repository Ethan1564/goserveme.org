document.addEventListener('DOMContentLoaded', () => {
    const opportunityList = document.getElementById('opportunity-list');
    const impactStats = document.getElementById('impact-stats');
    const contactForm = document.getElementById('contact-form');

    // Sample volunteer opportunities
    const opportunities = [
        { title: 'Community Garden Helper', location: 'Minneapolis', date: '2025-03-15' },
        { title: 'Food Bank Volunteer', location: 'St. Paul', date: '2025-03-20' },
        { title: 'Senior Center Assistant', location: 'Duluth', date: '2025-03-25' },
        { title: 'Animal Shelter Walker', location: 'Rochester', date: '2025-04-01' },
    ];

    // Display opportunities
    opportunities.forEach(opportunity => {
        const card = document.createElement('div');
        card.classList.add('opportunity-card');
        card.innerHTML = `
            <h3>${opportunity.title}</h3>
            <p>Location: ${opportunity.location}</p>
            <p>Date: ${opportunity.date}</p>
            <button>Sign Up</button>
        `;
        opportunityList.appendChild(card);
    });

    // Display impact stats
    const stats = [
        { label: 'Volunteers', value: 1000 },
        { label: 'Hours Served', value: 5000 },
        { label: 'Communities Impacted', value: 50 },
    ];

    stats.forEach(stat => {
        const statElement = document.createElement('div');
        statElement.innerHTML = `
            <div class="stat">${stat.value}</div>
            <div>${stat.label}</div>
        `;
        impactStats.appendChild(statElement);
    });

    // Animate stats on scroll
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat');
        stats.forEach(stat => {
            const value = parseInt(stat.textContent);
            let current = 0;
            const increment = value / 100;
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.round(current);
                if (current >= value) {
                    clearInterval(timer);
                    stat.textContent = value;
                }
            }, 10);
        });
    };

    // Trigger animation when impact section is in view
    const impactSection = document.getElementById('impact');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
            observer.unobserve(impactSection);
        }
    });
    observer.observe(impactSection);

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Get started button smooth scroll
    document.getElementById('get-started').addEventListener('click', () => {
        document.getElementById('opportunities').scrollIntoView({ behavior: 'smooth' });
    });
});
