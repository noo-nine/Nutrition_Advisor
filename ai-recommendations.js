// Handle AI Recommendations form submission
function handleAIRecommendations(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const goal = document.getElementById('goal').value;
    const preferences = document.getElementById('preferences').value;

    // Validate the inputs
    if (goal === '' || preferences === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate AI recommendations (replace with real AI logic)
    const recommendations = [
        `AI recommends a diet for ${goal} with your preference: ${preferences}`,
        `AI recommends healthy alternatives for ${goal} with your preference: ${preferences}`
    ];

    // Show the recommendations
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = '';
    recommendations.forEach(recommendation => {
        const li = document.createElement('li');
        li.textContent = recommendation;
        recommendationsList.appendChild(li);
    });
}

// Attach event listener to the form
document.getElementById('aiRecommendationForm').addEventListener('submit', handleAIRecommendations);
