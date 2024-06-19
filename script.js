document.addEventListener('DOMContentLoaded', (event) => {
    const myButton = document.getElementById('myButton')
    myButton.addEventListener('click', () => {
        // Change the button text when clicked
        myButton.textContent = 'You Clicked Me!';
    });
})