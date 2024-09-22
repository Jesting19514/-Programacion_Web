
window.onscroll = function() {
    const contactSection = document.querySelector('#contact');
    const footer = document.querySelector('footer');
    const maxScroll = contactSection.offsetTop + contactSection.offsetHeight - window.innerHeight;

    if (window.scrollY > maxScroll) {
        window.scrollTo(0, maxScroll);
    }
};
