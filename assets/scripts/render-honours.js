import { HONOURS } from '../data/honours.js';

const container = document.getElementById('honours-list');
if (container) {
    HONOURS.forEach(({ name, year, sponsor, amount, description }) => {
        const entry = document.createElement('div');
        entry.className = 'honour-entry';
        entry.innerHTML = `
            <p class="honour-name"><strong>${name}</strong> <span class="honour-year">(${year})</span></p>
            ${sponsor ? `<p class="honour-sponsor">${sponsor}</p>` : ''}
            ${amount ? `<p class="honour-amount">${amount}</p>` : ''}
            ${description ? `<p class="honour-description">${description}</p>` : ''}
        `;
        container.appendChild(entry);
    });
}
