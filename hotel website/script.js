// Getting references to elements
const orderButton = document.querySelector('.hero button');
const menuItems = document.querySelectorAll('.menu-item');
const contactForm = document.querySelector('form');
const nameInput = contactForm.querySelector('input[type="text"]');
const emailInput = contactForm.querySelector('input[type="email"]');
const messageInput = contactForm.querySelector('textarea');


// Order button click handler
orderButton.addEventListener('click', function() {
    alert('Your order has been placed! We will contact you shortly.');
});

// Menu item click handlers to show some alert on clicking
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const itemName = item.querySelector('h3').textContent;
        alert(`You have selected ${itemName}. Please proceed to the checkout.`);
    });
});

// Contact form submission handling
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from actually submitting to the server

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Validate the form inputs (basic example)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Optionally, reset the form
        contactForm.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});



