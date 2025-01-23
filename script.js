// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission (you can replace this with an actual API call)
    console.log('Form submitted successfully!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Show success message
    alert('Thank you for contacting us! We will get back to you soon.');

    // Clear the form
    document.getElementById('contact-form').reset();
});