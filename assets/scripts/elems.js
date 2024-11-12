// Define custom navigation bar element
class CustomNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="academics.html">Academics</a></li>
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

class BibItem extends HTMLElement {
    constructor() {
        super();

        // Extract attributes
        const title = this.getAttribute('title');
        const authors = this.getAttribute('authors');
        const year = this.getAttribute('year');
        const source = this.getAttribute('source');
        const thumbnail = this.getAttribute('thumbnail');
        const abstract = this.getAttribute('abstract');
        const pdfLink = this.getAttribute('pdf-link');
        const codeLink = this.getAttribute('code-link');
        const websiteLink = this.getAttribute('website-link');

        // HTML structure for the bibliography item
        this.innerHTML = `
            <div class="bib-item">
                ${thumbnail ? `<img src="${thumbnail}" class="thumbnail" alt="${title}">` : ''}
                <div class="bib-content">
                    <p class="title">${title}</p>
                    ${authors ? `<p class="authors">${authors}</p>` : ''}
                    ${source && year ? `<p class="source-year">${source}, ${year}</p>` : ''}
                    <div class="buttons">
                        ${abstract ? `<button class="collapsible">Abstract</button>` : ''}
                        ${pdfLink ? `<a href="${pdfLink}" class="button" target="_blank">PDF</a>` : ''}
                        ${codeLink ? `<a href="${codeLink}" class="button" target="_blank">Code</a>` : ''}
                        ${websiteLink ? `<a href="${websiteLink}" class="button" target="_blank">Website</a>` : ''}
                    </div>
                    ${abstract ? `<div class="abstract-content">${abstract}</div>` : ''}
                </div>
            </div>
        `;

        // Initialize collapsible functionality if abstract is provided
        if (abstract) {
            this.initializeCollapsible();
        }
    }

    initializeCollapsible() {
        const collapsibleButton = this.querySelector('.collapsible');
        const abstractContent = this.querySelector('.abstract-content');

        // Event listener for collapsible button
        collapsibleButton.addEventListener('click', () => this.toggleAbstract(collapsibleButton, abstractContent));
    }

    toggleAbstract(button, content) {
        content.classList.toggle('active');
        button.textContent = content.classList.contains('active') ? 'Hide Abstract' : 'Abstract';
    }
}

customElements.define('bib-item', BibItem);