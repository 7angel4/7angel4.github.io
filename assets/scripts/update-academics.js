const TIMELINE_ELEM = document.getElementById("academic-trajectory");

function addTimeBlock(color, date, title, subjectList) {
    const timeBlockLi = document.createElement('li');
    timeBlockLi.style = `--accent-color: ${color}`;
    let dateDiv = createTimeBlockDiv('date', date);
    let titleDiv = createTimeBlockDiv('title', title);
    let descDiv = createTimeBlockDiv('desc', "");

    // add contents
    const subjectUl = document.createElement('ul');
    subjectList.forEach((subject) => {
        let li = document.createElement('li');
        li.innerHTML = subject;
        subjectUl.appendChild(li);
    });

    descDiv.appendChild(subjectUl);
    timeBlockLi.appendChild(dateDiv);
    timeBlockLi.appendChild(titleDiv);
    timeBlockLi.appendChild(descDiv);
    TIMELINE_ELEM.appendChild(timeBlockLi);
}

function createTimeBlockDiv(className, text) {
    let div = document.createElement('div');
    div.className = className;
    div.innerHTML = text;
    return div;
}

addTimeBlock('#41516C', '2021', "UMEP Maths at Yr12 (Secondary school)",
    [
        'MAST10018, Linear Algebra Extension Studies',
        'MAST10019, Linear Algebra Extension Studies'
    ]
);
addTimeBlock('#1B5F8C', '2022 Summer', "Intro to CS!",
    [
        'COMP10001, Foundations of Computing'
    ]
);