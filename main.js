const primaryHeader = document.querySelector('.primary-header');
const navToggleBtn = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

const hamburgerIcon = document.querySelector('.icon-hamburger');

navToggleBtn.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
        ? navToggleBtn.setAttribute('aria-expanded', false)
        : navToggleBtn.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');

    primaryHeader.toggleAttribute('data-overlay');

    setHamburgerIconSrcAttribute();
});

function setHamburgerIconSrcAttribute() {

    if (hamburgerIcon.getAttribute('src') === 'images/icon-hamburger.svg') {
        hamburgerIcon.setAttribute('src', 'images/icon-close.svg');
    } else if (hamburgerIcon.getAttribute('src') === 'images/icon-close.svg') {
        hamburgerIcon.setAttribute('src', 'images/icon-hamburger.svg');
    }
}