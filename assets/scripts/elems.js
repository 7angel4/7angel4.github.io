// Define custom navigation bar element
class CustomNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="work.html">Work Experience</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="education.html">Education</a></li>
                    <li><a href="miscellaneous.html">Miscellaneous</a></li>
                </ul>
            </nav>
        `;
    }
}

// Define custom footer element
class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer>
                <p>&copy; 2023 <a href="https://github.com/7angel4">@7angel4</a></p>
            </footer>
        `;
    }
}

// Register custom elements
customElements.define('custom-nav', CustomNav);
customElements.define('custom-footer', CustomFooter);