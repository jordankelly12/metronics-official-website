$(document).ready(() => {
    // Send general inquiry email
    $('#contact-form').on('submit', e => {
        e.preventDefault();
        // Capture form data
        const formData = Object.fromEntries(new FormData(e.target));
        console.log(formData)

        // TODO: send data to server.

        // Reset form fields
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
    });
});