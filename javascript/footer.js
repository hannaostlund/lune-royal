// Reusable footer setup in JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const footerTemplate = document.createElement('footer');
    footerTemplate.classList.add('site-footer');
    footerTemplate.innerHTML = `
        <div class="name-footer">
            <h1 class="footer-h1">Lune Royal</h1>
            <p class="footer-address">Stora Gatan 28 Västerås</p>
            <p class="footer-text">Follow us on social media for the latest updates</p>
        <div class="social-icons">
            <a href="/">
                <img src="/Images/instagram.svg" alt="instagram icon" />
            </a>     
            <a href="/">
                <img src="/images/facebook.svg" alt="facebook icon" />
            </a>     
        </div>
        </div>

    `;

    const footerPlaceholder = document.getElementById('footer-content'); // Placeholder in HTML
    if (footerPlaceholder) {
        footerPlaceholder.appendChild(footerTemplate);
    } else {
        console.error('Footer placeholder element not found.');
    }
});
