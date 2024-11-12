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

class CollapsibleSection extends HTMLElement {
    constructor() {
        super();
        // Create a container for the content (the original inner content)
        const content = document.createElement('div');
        content.classList.add('collapsible-content');
        // Move all inner content inside the custom element into the content div
        content.innerHTML = this.innerHTML;
        // Clear the original content inside the custom element (this gets replaced)
        this.innerHTML = '';

        // Create the button/banner for collapsing/expanding
        const button = document.createElement('button');
        button.classList.add('collapsible-button');
        button.textContent = this.getAttribute('text') || 'Expand'; // Default button text

        // Append the button and content to the custom element
        this.appendChild(button);
        this.appendChild(content);

        // Initially hide the content
        content.style.display = 'none';

        // Add event listener to toggle visibility of the content
        button.addEventListener('click', () => {
            const isVisible = content.style.display === 'block';
            if (isVisible) {
                content.style.display = 'none';
                button.textContent = this.getAttribute('text') || 'Expand';
            } else {
                content.style.display = 'block';
                button.textContent = this.getAttribute('text') || 'Collapse'; // Change button text when expanded
            }
        });
    }
}

// Define the custom element
customElements.define('collapsible-section', CollapsibleSection);