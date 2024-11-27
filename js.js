document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Get the target element's ID
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element with an offset
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust 100px higher than the target element
                    behavior: "smooth"
                });
            }
        });
    });
});

// Show/Hide button based on scroll position
const scrollButton = document.createElement('button');
scrollButton.innerText = "Scroll to Top";
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '20px';
scrollButton.style.right = '20px';
scrollButton.style.display = 'none';
scrollButton.style.padding = '10px';
scrollButton.style.backgroundColor = '#007bff';
scrollButton.style.color = '#fff';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '5px';
scrollButton.style.cursor = 'pointer';
scrollButton.style.zIndex = '1000';

// Append button to the body
document.body.appendChild(scrollButton);

// Event listener to scroll to top when button is clicked
scrollButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show button when scrolled down a certain amount
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});