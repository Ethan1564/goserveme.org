// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Animate elements on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: true
        }
    });
});

// Fetch and display volunteer opportunities
async function fetchOpportunities() {
    // This would be replaced with an actual API call
    const mockOpportunities = [
        { title: "Community Garden Helper", organization: "Green Thumbs MN", location: "Minneapolis", date: "2025-03-15" },
        { title: "Food Bank Volunteer", organization: "MN Food Share", location: "St. Paul", date: "2025-03-20" },
        { title: "Senior Center Assistant", organization: "Elder Care MN", location: "Duluth", date: "2025-03-25" },
        { title: "Animal Shelter Walker", organization: "Paws and Claws Rescue", location: "Rochester", date: "2025-04-01" }
    ];

    const opportunityList = document.getElementById('opportunity-list');
    opportunityList.innerHTML = '';

    mockOpportunities.forEach(opportunity => {
        const card = document.createElement('div');
        card.classList.add('opportunity-card');
        card.innerHTML = `
            <h3>${opportunity.title}</h3>
            <p><strong>Organization:</strong> ${opportunity.organization}</p>
            <p><strong>Location:</strong> ${opportunity.location}</p>
            <p><strong>Date:</strong> ${opportunity.date}</p>
            <button onclick="applyForOpportunity('${opportunity.title}')" class="cta-button">Apply Now</button>
        `;
        opportunityList.appendChild(card);
    });
}

function applyForOpportunity(title) {
    alert(`You've applied for: ${title}`);
    // Here you would typically send this data to your server
}

// Display impact statistics
function displayImpactStats() {
    const stats = [
        { label: "Volunteers", value: 10000 },
        { label: "Hours Served", value: 50000 },
        { label: "Communities Impacted", value: 87 }
    ];

    const statGrid = document.getElementById('impact-stats');
    statGrid.innerHTML = '';

    stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.classList.add('stat-item');
        statItem.innerHTML = `
            <div class="stat-number">${stat.value}</div>
            <div>${stat.label}</div>
        `;
        statGrid.appendChild(statItem);
    });
}

// Create 3D impact visualization
function createImpactVisualization() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('impact-visualization').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x50c878, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 10;

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

document.addEventListener('DOMContentLoaded', () => {
    fetchOpportunities();
    displayImpactStats();
    createImpactVisualization();

    document.getElementById('find-opportunities').addEventListener('click', () => {
        document.getElementById('opportunities').scrollIntoView({ behavior: 'smooth' });
    });
});
