// Smooth scrolling effect for navigation
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Offset for the fixed navigation
            behavior: 'smooth'
        });
    });
});

// Example: Display an alert on clicking the Contact Me button (Optional)
document.getElementById('contact-btn').addEventListener('click', (e) => {
    alert('Your email client will open soon!');
});
