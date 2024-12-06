// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Input fields
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const subject = form.querySelector('input[placeholder="Enter your Subject"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Validation checks
    if (name === '') {
        alert('Please enter your name');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (subject === '') {
        alert('Please enter a subject');
        return;
    }

    if (message === '') {
        alert('Please enter your message');
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
