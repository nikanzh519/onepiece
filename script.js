// Fetch a random joke from the Official Joke API and display it
document.getElementById('joke-btn').addEventListener('click', getJoke);

async function getJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        const joke = `${data.setup} - ${data.punchline}`;
        document.getElementById('joke').textContent = joke;
    } catch (error) {
        document.getElementById('joke').textContent = 'Oops! Something went wrong. Please try again.';
        console.error('Error fetching the joke:', error);
    }
}
