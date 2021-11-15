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
    });
});