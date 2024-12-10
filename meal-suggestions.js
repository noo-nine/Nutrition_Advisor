// Handle Meal Suggestions form submission
function handleMealSuggestion(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const cuisine = document.getElementById('cuisine').value;
    const preferences = document.getElementById('preferences').value;

    // Validate the inputs
    if (cuisine === '' || preferences === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate meal suggestions (replace with AI-based suggestions or database calls)
    const suggestions = [
        `Spicy ${cuisine} dish with your preference: ${preferences}`,
        `Healthy ${cuisine} dish with your preference: ${preferences}`
    ];

    // Show the suggestions
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
    });
}

// Attach event listener to the form
document.getElementById('mealSuggestionForm').addEventListener('submit', handleMealSuggestion);
