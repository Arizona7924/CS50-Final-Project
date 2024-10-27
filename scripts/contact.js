document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact-info');
    const resultMessage = document.querySelector('.result');

    const getQueryParams = () => {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");

        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            if (key) {
                params[decodeURIComponent(key)] = decodeURIComponent(value || '');
            }
        }

        return params;
    };

    const queryParams = getQueryParams();

    if(queryParams.session) {
        form.session.value = queryParams.session;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Clear previous result message
        resultMessage.textContent = '';

        // Validate form fields
        const firstName = form.fname.value.trim();
        const lastName = form.lname.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const message = form.message.value.trim();

        // Basic validation
        if (!firstName || !lastName || !email || !phone) {
            resultMessage.textContent = 'Please fill in all required fields.';
            resultMessage.style.color = 'red';
            return;
        }

        // Email format validation (simple regex)
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            resultMessage.textContent = 'Please enter a valid email address.';
            resultMessage.style.color = 'red';
            return;
        }

        // Here you can handle the form submission, e.g., send data to a server
        // For demonstration, we'll just show a success message
        resultMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        resultMessage.style.color = 'green';

        // Clear form fields after submission
        form.reset();

        setTimeout(() => {
            resultMessage.classList.add('fade-out'); // Trigger the fade-out effect

            // Clear the message after the fade-out transition
            setTimeout(() => {
                resultMessage.textContent = '';
                resultMessage.classList.remove('fade-out'); // Reset for future use
            }, 1000); // Match this duration to the CSS transition duration
        }, 3000);
    });
});