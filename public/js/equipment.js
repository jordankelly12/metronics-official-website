$(document).ready(() => {
    // Change active page-anchor
    const pageAnchors = document.querySelectorAll('.page-anchor');
    const productSections = document.querySelectorAll('.product-section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting === true) {
                pageAnchors.forEach(link => link.classList.remove('active'));
                switch (entry.target.id) {
                    case 'machines':
                        pageAnchors[0].classList.add('active');
                        break;
                    case 'accessories':
                        pageAnchors[1].classList.add('active');
                        break;
                    case 'tools':
                        pageAnchors[2].classList.add('active');
                        break;
                    case 'consumables':
                        pageAnchors[3].classList.add('active');
                        break;
                }
            }
        });
    }, {
        root: null,
        threshold: 0,
        rootMargin: '-50%',
    });
    productSections.forEach(section => {
        observer.observe(section);
    });
});