$(document).ready(() => {
    $(document.body).on('click', 'h1', e => {
        e.preventDefault();
        window.location.pathname = (`/`);
    });
    $(document.body).on('click', '.nav-link', e => {
        e.preventDefault();
        const page = e.target.innerHTML.toLowerCase();
        window.location.pathname = (`/${page}`);
    });
})