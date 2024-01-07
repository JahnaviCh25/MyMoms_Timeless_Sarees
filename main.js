function showSubscribeForm() {
    document.getElementById('subscribe').style.display = 'block';
}

function showLikeAnimation() {
    // Create and display the flying heart animation
    const likeAnimation = document.createElement('div');
    likeAnimation.innerHTML = '❤';
    likeAnimation.classList.add('fly-animation');
    document.body.appendChild(likeAnimation);

    setTimeout(() => {
        document.body.removeChild(likeAnimation);
    }, 500); // Adjust the duration based on your animation duration
}

function submitForm(event) {
    // Prevent the form from actually submitting (for demonstration purposes)
    event.preventDefault();

    // Get the values of name and email
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Handle the form submission logic here
    alert(`Subscription successful!\nName: ${name}\nEmail: ${email}`);
    // Replace the alert with your actual logic to store the name and email
}

