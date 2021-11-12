$(document).ready(() => {
    // Navigation links
    $('#brand').on('click', e => {
        e.preventDefault();
        window.location.pathname = ('/');
    });
    $('.nav-link').on('click', e => {
        e.preventDefault();
        const page = e.target.innerHTML.toLowerCase();
        window.location.pathname = (`/${page}`);
    });
    $('.btn-equipment').on('click', e => {
        e.preventDefault();
        window.location.pathname = ('/equipment');
    })

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

    // Equipment page side-navbar display changes

});