document.addEventListener('DOMContentLoaded', (event) => {
    const myButton = document.getElementById('myButton')
    myButton.addEventListener('click', () => {
        // Change the button text when clicked
        myButton.textContent = 'You killed me!';
        setTimeout(() => {
            myButton.textContent = `I'm back!`;
        }, 5000); // 5000 milliseconds = 5 seconds
    });
})