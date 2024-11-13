function _addHonour(name, year, sponsor, amount = '', description = '') {
    const honourSection = document.getElementById('honours-list');

    // Create container for each honour
    const honourEntry = document.createElement('div');
    honourEntry.classList.add('honour-entry');

    // Create and append name and year
    const honourName = document.createElement('p');
    honourName.classList.add('honour-name');
    honourName.innerHTML = `<strong>${name}</strong> (${year})`;
    honourEntry.appendChild(honourName);

    // Create and append sponsor
    if (sponsor) {
        const honourSponsor = document.createElement('p');
        honourSponsor.classList.add('honour-sponsor');
        honourSponsor.textContent = sponsor;
        honourEntry.appendChild(honourSponsor);
    }

    // Create and append amount if provided
    if (amount) {
        const honourAmount = document.createElement('p');
        honourAmount.classList.add('honour-amount');
        honourAmount.textContent = `Amount: ${amount}`;
        honourEntry.appendChild(honourAmount);
    }

    // Create and append description if provided
    if (description) {
        const honourDescription = document.createElement('p');
        honourDescription.classList.add('honour-description');
        honourDescription.textContent = description;
        honourEntry.appendChild(honourDescription);
    }

    // Append the complete honour entry to the honours section
    honourSection.appendChild(honourEntry);
}

const addHonour = (honour) => _addHonour(honour['name'], honour['year'], honour['sponsor'],
                                               honour['amount'], honour['description'])

// Example usage
const honours = [
    {
        name: "Dean’s List with High Honors",
        year: "2024",
        sponsor: "Carnegie Mellon University – School of Computer Science",
        amount: "",
        description: ""
    },
    {
        name: "Science Students Excellence Awards: Dean’s Honours List",
        year: "2024",
        sponsor: "University of Melbourne",
        amount: "",
        description: ""
    },
    {
        name: "Engineering and IT Foundation Graduate Scholarship",
        year: "2024",
        sponsor: "University of Melbourne – Faculty of Engineering and Information Technology",
        amount: "AUD $10,000.00",
        description: "Awarded to the highest-scored candidates."
    },
    {
        name: "Mathematics and Statistics Vacation Scholarship",
        year: "2023",
        sponsor: "University of Melbourne – School of Mathematics and Statistics",
        amount: "AUD $2,000.00",
        description: ""
    },
    {
        name: "Airwallex Excellence in Technology Scholarship",
        year: "2023",
        sponsor: "Airwallex, University of Melbourne – Faculty of Engineering and Information Technology",
        amount: "AUD $30,000.00",
        description: ""
    },
    {
        name: "Mobility Awards: USA Foundation Travelling Scholarship",
        year: "2023",
        sponsor: "University of Melbourne",
        amount: "AUD $2,500.00",
        description: ""
    },
    {
        name: "IMC Trading Prize for Women in Tech",
        year: "2023",
        sponsor: "IMC Financial Markets, University of Melbourne",
        amount: "AUD $2,500.00",
        description: ""
    },
    {
        name: "Melbourne Chancellor’s Scholarship",
        year: "2022",
        sponsor: "University of Melbourne",
        amount: "Full fee remissions & Bi-annual payment of AUD $5,000.00 p.a.",
        description: ""
    },
    {
        name: "Australian Tertiary Admission Rank (ATAR): 99.95 (top 0.05%, highest rank)",
        year: "2022",
        sponsor: "Premier’s VCE Awards",
        amount: "",
        description: "Top All Round VCE High Achievers"
    },
    {
        name: "Premier’s VCE Awards: Study Award in Chemistry",
        year: "2022",
        sponsor: "Victorian Certificate of Education (VCE)",
        amount: "",
        description: ""
    },
    {
        name: "Gilman Jones Scholarship",
        year: "2021",
        sponsor: "Melbourne Girls Grammar",
        amount: "AUD $4,000.00",
        description: ""
    },
    {
        name: "High Distinction: ICAS Mathematics",
        year: "2018",
        sponsor: "UNSW Global – International Competitions and Assessments for Schools",
        amount: "",
        description: ""
    },
    {
        name: "High Distinction: Australian Mathematics Competition; Noether Mathematics Challenge for Young Australians; Mathematics Challenge for Young Australians",
        year: "2017 – 2019",
        sponsor: "Australian Mathematics Trust",
        amount: "",
        description: ""
    }
];

honours.forEach(honour => {
    addHonour(honour);
});