import { PUBLICATIONS } from '../data/publications.js';

const MY_NAME = 'Angel Y. He';
const LINK_LABELS = [
    ['paper', 'Paper'],
    ['extended', 'Extended'],
    ['code', 'Code'],
    ['website', 'Website'],
    ['poster', 'Poster'],
    ['talk', 'Talk'],
];

const FILTERS = {
    selected: (p) => p.selected,
    publication: (p) => p.category === 'publication',
    project: (p) => p.category === 'project',
    all: () => true,
};

function highlightMe(authors) {
    return authors.replaceAll(MY_NAME, `<span class="me">${MY_NAME}</span>`);
}

function renderLinks(links = {}) {
    return LINK_LABELS
        .filter(([key]) => links[key] && links[key].trim())
        .map(([key, label]) => `<a href="${links[key]}" class="pub-link" target="_blank" rel="noopener">${label}</a>`)
        .join('');
}

function renderPub(pub) {
    const item = document.createElement('article');
    item.className = 'pub-item';
    item.innerHTML = `
        ${pub.thumbnail ? `<div class="pub-thumb"><img src="${pub.thumbnail}" alt="${pub.title}" loading="lazy"></div>` : '<div class="pub-thumb pub-thumb-empty"></div>'}
        <div class="pub-content">
            <h3 class="pub-title">${pub.title}</h3>
            ${pub.authors ? `<p class="pub-authors">${highlightMe(pub.authors)}</p>` : ''}
            ${pub.venue ? `<p class="pub-venue">${pub.venue}${pub.year ? `, ${pub.year}` : ''}</p>`
                        : (pub.year ? `<p class="pub-venue">${pub.year}</p>` : '')}
            ${pub.note ? `<p class="pub-note">${pub.note}</p>` : ''}
            <div class="pub-links">
                ${pub.abstract ? `<button class="pub-link pub-abstract-toggle" type="button">Abstract</button>` : ''}
                ${renderLinks(pub.links)}
            </div>
            ${pub.abstract ? `<div class="pub-abstract">${pub.abstract}</div>` : ''}
        </div>
    `;
    const toggle = item.querySelector('.pub-abstract-toggle');
    if (toggle) {
        const abstract = item.querySelector('.pub-abstract');
        toggle.addEventListener('click', () => {
            const open = abstract.classList.toggle('open');
            toggle.classList.toggle('active', open);
        });
    }
    return item;
}

document.querySelectorAll('[data-pub-list]').forEach((container) => {
    const filter = FILTERS[container.dataset.filter || 'all'] || FILTERS.all;
    PUBLICATIONS.filter(filter).forEach((pub) => container.appendChild(renderPub(pub)));
});
