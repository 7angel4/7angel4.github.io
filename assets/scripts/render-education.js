import { EDUCATION } from '../data/education.js';

const COLORS = [
    "#8D7B68", "#AD8B73", "#A4907C", "#CEAB93",
    "#C8B6A6", "#E3CAA5", "#DFD3C3", "#FFEBC1",
    "#B38B6D", "#D6A77A", "#B1A58D", "#D2C6A1",
    "#C0A78B", "#D8C6A1", "#C9B8A5", "#F1E0C6",
];
let colorIndex = 0;

function createDiv(className, html) {
    const div = document.createElement('div');
    div.className = className;
    div.innerHTML = html;
    return div;
}

function addTimeBlock({ time, title, subjects }, timelineElem) {
    const li = document.createElement('li');
    li.style.setProperty('--accent-color', COLORS[colorIndex++ % COLORS.length]);

    const subjectsDiv = createDiv('subjects', '');
    const dl = document.createElement('dl');
    subjects.forEach((subject) => {
        const dt = document.createElement('dt');
        dt.innerHTML = subject;
        dl.appendChild(dt);
    });
    subjectsDiv.appendChild(dl);

    li.appendChild(createDiv('time', time));
    li.appendChild(createDiv('title', title));
    li.appendChild(subjectsDiv);
    timelineElem.appendChild(li);
}

EDUCATION.forEach(({ target, periods }) => {
    const timelineElem = document.getElementById(target);
    if (!timelineElem) return;
    if (periods.length === 0) {
        const note = document.createElement('p');
        note.className = 'timeline-empty';
        note.textContent = 'Coming soon...';
        timelineElem.replaceWith(note);
        return;
    }
    periods.forEach((p) => addTimeBlock(p, timelineElem));
});
