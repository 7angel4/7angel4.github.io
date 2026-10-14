// Shared custom elements: <custom-nav>, <custom-footer>, <collapsible-section>

const NAV_LINKS = [
    { href: 'index.html', label: 'About' },
    { href: 'research.html', label: 'Research' },
    { href: 'education.html', label: 'Education' },
    { href: 'miscellaneous.html', label: 'Miscellaneous' },
];

class CustomNav extends HTMLElement {
    connectedCallback() {
        // Optional attributes for pages in subfolders (e.g. project pages):
        //   base="../"              prefix for the nav links
        //   active="research.html"  which nav entry to highlight
        const base = this.getAttribute('base') || '';
        const active = this.getAttribute('active');
        const current = active || window.location.pathname.split('/').pop() || 'index.html';
        const links = NAV_LINKS.map(({ href, label }) => {
            // a subfolder page highlights its section, but is not that page itself (so no aria-current)
            const state = href !== current ? '' : (active ? 'class="active"' : 'class="active" aria-current="page"');
            return `<li><a href="${base}${href}" ${state}>${label}</a></li>`;
        }).join('');
        this.innerHTML = `
            <nav class="site-nav">
                <a class="nav-wordmark" href="${base}index.html">Angel Y. He</a>
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
