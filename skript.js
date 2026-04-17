// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll('.nav-links a');
const checkbox = document.getElementById('check');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
    });
});

