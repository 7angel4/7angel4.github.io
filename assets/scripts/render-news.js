import { NEWS } from '../data/news.js';

document.querySelectorAll('[data-news-list]').forEach((container) => {
    NEWS.forEach(({ date, html }) => {
        const li = document.createElement('li');
        li.className = 'news-item';
        li.innerHTML = `<span class="news-date">${date}</span><span class="news-text">${html}</span>`;
        container.appendChild(li);
    });
});
