// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission to allow validation

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation on the input fields
    if (username === '' || password === '') {
        alert('Please fill in both username and password.');
        return; // Stop the function if validation fails
    }

    // Simulate successful login (In a real scenario, you'd send data to the server here)
    if (username === 'user' && password === 'password123') {
        // Redirect to the home page or dashboard after successful login
        window.location.href = 'home.html'; // Change to the actual homepage
    } else {
        // Show error if login credentials are incorrect
        alert('Invalid username or password. Please try again.');
    }
}

// Attach event listener to the login form
document.getElementById('loginForm').addEventListener('submit', handleLogin);
