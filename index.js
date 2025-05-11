import { a11yInit } from '../libs/a11y/a11y.js';

document.addEventListener('DOMContentLoaded', function () {
    const a11yOpenButton = document.querySelector('.a11y-open');
    const a11yParameters = JSON.parse(a11yOpenButton.getAttribute('data-params'));

    a11yInit({
        openButtonClassname: 'a11y-open',
        ...a11yParameters
    });
});
