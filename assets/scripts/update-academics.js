const TIMELINE_ELEM = document.getElementById("academic-trajectory");
const COLORS = ["white", "black", "white", "black", "white", "black"];
let colorIndex = 0;

function addTimeBlock(academicPeriod) {
    addTimeBlockFromData(academicPeriod.time, academicPeriod.title, academicPeriod.subjects);
}

function addTimeBlockFromData(time, title, subjects) {
    const timeBlockLi = document.createElement('li');
    timeBlockLi.style = `--accent-color: ${COLORS[colorIndex]}`;
    let dateDiv = createTimeBlockDiv('time', time);
    let titleDiv = createTimeBlockDiv('title', title);
    let subjectsDiv = createTimeBlockDiv('subjects', "");

    // add contents
    const subjectDl = document.createElement('dl');
    subjects.forEach((subject) => {
        let dt = document.createElement('dt');
        dt.innerHTML = subject;
        subjectDl.appendChild(dt);
    });

    subjectsDiv.appendChild(subjectDl);
    timeBlockLi.appendChild(dateDiv);
    timeBlockLi.appendChild(titleDiv);
    timeBlockLi.appendChild(subjectsDiv);
    TIMELINE_ELEM.appendChild(timeBlockLi);
}

function createTimeBlockDiv(className, text) {
    let div = document.createElement('div');
    div.className = className;
    div.innerHTML = text;
    return div;
}

const umep2021 = {
    time: '2021',
    title: "UMEP Maths at Yr12 (Secondary school)",
    subjects: [
        'MAST10018, Linear Algebra Extension Studies',
        'MAST10019, Linear Algebra Extension Studies'
    ]
};

const summer2022 = {
    time: '2022 Summer',
    title: "Intro to CS!",
    subjects: ['COMP10001, Foundations of Computing']
};

const semOne2022 = {
    time: '2022 Sem 1',
    title: 'First formal semester at UoM!',
    subjects: [
        'COMP10002, Foundations of Algorithms',
        'ENVS10006, Mapping Environments',
        'MAST20004, Probability',
        "SCIE10005, Today's Science, Tomorrow's World"
    ]
};

const semTwo2022 = {
    time: '2022 Sem 2',
    title: "Second year disguised as first year...",
    subjects: [
        'COMP20003, Algorithms and Data Structures',
        'COMP20008, Elements of Data Processing',
        'INFO20003, Database Systems',
        'SWEN20003, Object Oriented Software Development'
    ]
};

const summer2023 = {
    time: '2023 Summer',
    title: 'Intensive summer!',
    subjects: [
        'FNCE10002, Principles of Finance',
        'MAST20005, Statistics'
    ]
};

const semOne2023 = {
    time: '2023 Sem 1',
    title: "Teaching begins!",
    subjects: [
        'COMP30023, Computer Systems',
        'COMP30027, Machine Learning',
        'MAST30025, Linear Statistical Models',
        'SWEN30006, Software Modelling and Design'
    ]
}

const semTwo2023 = {
    time: '2023 Sem 2',
    title: 'Final sem at UoM...',
    subjects: [
        'COMP30022, IT Project',
        'COMP30026, Models of Computation',
        'MAST30001, Stochastic Modelling',
        'MAST30027, Modern Applied Statistics'
    ]
};

addTimeBlock(umep2021);
addTimeBlock(summer2022);
addTimeBlock(semOne2022);
addTimeBlock(semTwo2022);
addTimeBlock(summer2023);
addTimeBlock(semOne2023);
addTimeBlock(semTwo2023);