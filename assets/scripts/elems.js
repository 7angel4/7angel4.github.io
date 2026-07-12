// Shared custom elements: <custom-nav>, <custom-footer>, <collapsible-section>

const NAV_LINKS = [
    { href: 'index.html', label: 'About' },
    { href: 'research.html', label: 'Research' },
    { href: 'education.html', label: 'Education' },
    { href: 'miscellaneous.html', label: 'Miscellaneous' },
];

class CustomNav extends HTMLElement {
    connectedCallback() {
        const current = window.location.pathname.split('/').pop() || 'index.html';
        const links = NAV_LINKS.map(({ href, label }) =>
            `<li><a href="${href}" ${href === current ? 'class="active" aria-current="page"' : ''}>${label}</a></li>`
        ).join('');
        this.innerHTML = `
            <nav class="site-nav">
                <a class="nav-wordmark" href="index.html">Angel Y. He</a>
                <ul>${links}</ul>
            </nav>
        `;
    }
}
customElements.define('custom-nav', CustomNav);

class CustomFooter extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
            <footer class="site-footer">
                <div class="footer-icons">
                    <a href="mailto:angel.heyongxi.2004@gmail.com" aria-label="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/angel-he-82b4221a9/" target="_blank" rel="noopener" aria-label="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/7angel4" target="_blank" rel="noopener" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <p>&copy; ${currentYear} <a href="https://github.com/7angel4" target="_blank" rel="noopener">Angel Y. He</a>
                   &middot; brewed with lots of coffee ☕</p>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);

class CollapsibleSection extends HTMLElement {
    connectedCallback() {
        if (this.dataset.initialized) return;
        this.dataset.initialized = 'true';

        const content = document.createElement('div');
        content.classList.add('collapsible-content');
        content.innerHTML = this.innerHTML;
        this.innerHTML = '';

        const button = document.createElement('button');
        button.classList.add('collapsible-button');
        button.type = 'button';
        button.textContent = this.getAttribute('text') || 'Expand';

        this.appendChild(button);
        this.appendChild(content);

        const startOpen = this.hasAttribute('open');
        content.style.display = startOpen ? 'block' : 'none';
        button.classList.toggle('open', startOpen);

        button.addEventListener('click', () => {
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
            button.classList.toggle('open', !isVisible);
        });
    }
}
customElements.define('collapsible-section', CollapsibleSection);
