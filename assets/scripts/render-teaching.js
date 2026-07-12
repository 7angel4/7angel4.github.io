import { TEACHING } from '../data/teaching.js';

const container = document.getElementById('teaching-list');
if (container) {
    TEACHING.forEach(({ code, codeUrl, name, institution }) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="course-code">${codeUrl ? `<a href="${codeUrl}" target="_blank" rel="noopener">${code}</a>` : code}</span>
            <span class="course-name">${name}</span>
            <span class="institution">@ ${institution}</span>
        `;
        container.appendChild(li);
    });
}
