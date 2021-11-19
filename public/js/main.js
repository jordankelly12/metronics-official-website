$(document).ready(() => {
    // Navigation links
    $('.brand').on('click', e => {
        e.preventDefault();
        window.location.pathname = ('/');
    });
    $('.nav-link').on('click', e => {
        e.preventDefault();
        const page = e.target.innerHTML.toLowerCase();
        window.location.pathname = (`/${page}`);
    });
    $('.equipmentLink').on('click', e => {
        e.preventDefault();
        window.location.pathname = ('/equipment');
    });

    // Toggle navigation menu for small screens
    let showMenu = false;
    $('.btn-menu').on('click', e => {
        e.preventDefault();
        if (!showMenu) {
            $('.btn-menu')[0].classList.add('close');
            $('.nav-menu')[0].classList.add('show');
            showMenu = true;
        } else {
            $('.btn-menu')[0].classList.remove('close');
            $('.nav-menu')[0].classList.remove('show');
            showMenu = false;
        }
    })

    // Toggle service-form modal display
    $('.modalToggle').on('click', e => {
        e.preventDefault();
        const modal = document.getElementById('service-modal');
        if (modal.style.display === 'none') {
            modal.style.display = 'block';
        } else {
            modal.style.display = 'none';
        }
    });

    $('#modal-form').on('submit', e => {
        e.preventDefault();
        // Capture form data
        const formData = Object.fromEntries(new FormData(e.target));
        console.log(formData)

        // TODO: send data to server.

        // Reset form fields
        e.target.businessName.value = '';
        e.target.contactName.value = '';
        e.target.phone.value = '';
        e.target.street1.value = '';
        e.target.street2.value = '';
        e.target.city.value = '';
        e.target.zipcode.value = '';
        e.target.problemNotes.value = '';

        // Close modal
        $('#service-modal')[0].style.display = 'none';
    });

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