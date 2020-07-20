const textInput = document.getElementById('input');
const jokeButton = document.getElementById('joke');
const goBack = document.getElementById('goback');

jokeButton.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const joke = data.value;
            textInput.textContent = joke;
            return joke;
        });
});

goBack.addEventListener('click', getPreviousJoke);

function getPreviousJoke(t) {
    textInput.textContent = t;
};