function searchOpportunities() {
    const location = document.getElementById('location').value;
    const results = document.getElementById('results');
    results.innerHTML = `<p>Searching for opportunities in ${location}...</p>`;
    // Add API call or logic to fetch opportunities
}
