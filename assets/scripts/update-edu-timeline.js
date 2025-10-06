const COLORS = [
    "#8D7B68",
    "#AD8B73",
    "#A4907C",
    "#CEAB93",
    "#C8B6A6",
    "#E3CAA5",
    "#DFD3C3",
    "#FFEBC1",
    "#B38B6D",
    "#D6A77A",
    "#B1A58D",
    "#D2C6A1",
    "#C0A78B",
    "#D8C6A1",
    "#C9B8A5",
    "#F1E0C6"
];
let colorIndex = 0;

function addTimeBlock(academicPeriod, timelineElemId) {
    const timelineElem = document.getElementById(timelineElemId);
    addTimeBlockFromData(academicPeriod.time, academicPeriod.title, academicPeriod.subjects, timelineElem);
    // After appending items dynamically
    const timelineContainer = document.getElementById('unimelb-history');
    timelineContainer.style.display = 'none'; // Temporarily hide the timeline
    timelineContainer.offsetHeight; // Trigger reflow
    timelineContainer.style.display = ''; // Show the timeline again
}

function addTimeBlockFromData(time, title, subjects, timelineElem) {
    const timeBlockLi = document.createElement('li');
    timeBlockLi.style.setProperty("--accent-color", COLORS[colorIndex++]);
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
    timelineElem.appendChild(timeBlockLi);
}

function createTimeBlockDiv(className, text) {
    let div = document.createElement('div');
    div.className = className;
    div.innerHTML = text;
    return div;
}

const addTimeBlocks = (academicPeriods, timelineElemId) => academicPeriods.forEach(p => addTimeBlock(p, timelineElemId))


// Oxford
const oxfordDPhil = [
]
addTimeBlocks(oxfordDPhil, "oxford-dphil-history");

const oxfordMSc = [
    {
        time: '2024 Michaelmas Term',
        title: 'First term at Oxford (& in UK)!',
        subjects: [
            'Bayesian Statistical Probabilistic Programming',
            'Computer-Aided Formal Verification',
            'Concurrent Algorithms & Data Structures',
            'Graph Representation Learning'
        ]
    },
    {
        time: '2025 Hilary Term',
        title: 'Last coursework term!',
        subjects: [
            'Automota, Logic and Games',
            'Foundations of Self-Programming Agents',
            'Geometric Deep Learning',
            'Uncertainty in Deep Learning'
        ]
    },
    {
        time: '2025 Trinity Term',
        title: 'Final term!',
        subjects: [
            'Thesis: <a href="academics.html">Uncertain Concurrent Stochastic Games</a>'
        ]
    }
    ];
addTimeBlocks(oxfordMSc, "oxford-msc-history");

// CMU
const springSem2024 = {
    time: '2024 Spring Sem',
    title: 'Final sem of BSc - on exchange!',
    subjects: [
        '10-422, Foundations of Learning & Game Theory',
        '15-322, Intro. to Computer Music',
        '15-451, Algorithms Design & Analysis',
        '16-224, IDeATe: Re-Crafting Computational Thinking with Soft Technologies',
        '94-413, Project Management'
    ]
}
addTimeBlock(springSem2024, "cmu-history");


const unimelb = [
    {
        time: '2021',
        title: "UMEP Maths at Yr12 (still a high school kid)",
        subjects: [
            'MAST10018, Linear Algebra Extension Studies',
            'MAST10019, Calculus Extension Studies'
    ]
    },
    {
        time: '2022 Summer',
        title: "Intro to CS!",
        subjects: ['COMP10001, Foundations of Computing']
    },
    {
        time: '2022 Sem 1',
        title: 'First formal semester at UoM!',
        subjects: [
            'COMP10002, Foundations of Algorithms',
            'ENVS10006, Mapping Environments',
            'MAST20004, Probability',
            "SCIE10005, Today's Science, Tomorrow's World"
        ]
    },
    {
        time: '2022 Sem 2',
        title: "Second year disguised as first year...",
        subjects: [
            'COMP20003, Algorithms and Data Structures',
            'COMP20008, Elements of Data Processing',
            'INFO20003, Database Systems',
            'SWEN20003, Object Oriented Software Development'
        ]
    },
    {
        time: '2023 Summer',
        title: 'Intensive summer!',
        subjects: [
            'FNCE10002, Principles of Finance',
            'MAST20005, Statistics'
        ]
    },
    {
        time: '2023 Sem 1',
        title: "Teaching begins!",
        subjects: [
            'COMP30023, Computer Systems',
            'COMP30027, Machine Learning',
            'MAST30025, Linear Statistical Models',
            'SWEN30006, Software Modelling and Design'
        ]
    },
    {
        time: '2023 Sem 2',
        title: 'Final sem at UoM...',
        subjects: [
            'COMP30022, IT Project',
            'COMP30026, Models of Computation',
            'MAST30001, Stochastic Modelling',
            'MAST30027, Modern Applied Statistics'
        ]
    }
];


// Unimelb
addTimeBlocks(unimelb, "unimelb-history");

// Others
const otherPrograms = [
    {
        time: 'Unimelb KLD (2021)',
        title: 'Kwong Lee Dow Young Scholars Program',
        subjects: []
    },
    {
        time: 'CMMRS 2024 (Jul &ndash; Aug 2024)',
        title: 'The Cornell, Maryland, Max Planck Pre-doctoral Research School in Computer Science',
        subjects: []
    },
    {
        time: 'SETAC 2024 (Sep 2024)',
        title: 'Society of Environmental Toxicology and Chemistry &ndash; SETAC Asia-Pacific 14th Biennial Meeting',
        subjects: []
    }
]
addTimeBlocks(otherPrograms, "other-history");

