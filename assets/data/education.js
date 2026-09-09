/**
 * Education timelines, one array per institution/program.
 * Each entry: { time, title, subjects: [...] } — subjects may contain HTML.
 * The `target` is the id of the <ul class="timeline"> element on education.html.
 */
export const EDUCATION = [
    // The DPhil section on education.html is a direct link to the AIMS CDT site
    // rather than a timeline; add an entry with target "oxford-dphil-history"
    // (and a matching <ul> on the page) to turn it back into one.
    {
        target: "oxford-msc-history",
        heading: "University of Oxford – MSc in Advanced Computer Science",
        periods: [
            {
                time: "2024 Michaelmas Term",
                title: "First term at Oxford (& in UK)!",
                subjects: [
                    "Bayesian Statistical Probabilistic Programming",
                    "Computer-Aided Formal Verification",
                    "Concurrent Algorithms & Data Structures",
                    "Graph Representation Learning",
                ],
            },
            {
                time: "2025 Hilary Term",
                title: "Last coursework term!",
                subjects: [
                    "Automata, Logic and Games",
                    "Foundations of Self-Programming Agents",
                    "Geometric Deep Learning",
                    "Uncertainty in Deep Learning",
                ],
            },
            {
                time: "2025 Trinity Term",
                title: "Final term!",
                subjects: [
                    'Thesis: <a href="research.html">Uncertain Concurrent Stochastic Games</a>',
                ],
            },
        ],
    },
    {
        target: "cmu-history",
        heading: "Carnegie Mellon University – BSc Exchange",
        periods: [
            {
                time: "2024 Spring Sem",
                title: "Final sem of BSc - on exchange!",
                subjects: [
                    "10-422, Foundations of Learning & Game Theory",
                    "15-322, Intro. to Computer Music",
                    "15-451, Algorithms Design & Analysis",
                    "16-224, IDeATe: Re-Crafting Computational Thinking with Soft Technologies",
                    "94-413, Project Management",
                ],
            },
        ],
    },
    {
        target: "unimelb-history",
        heading: "University of Melbourne – BSc in Computing & Software Systems",
        periods: [
            {
                time: "2021",
                title: "UMEP Maths at Yr12 (still a high school kid)",
                subjects: [
                    "MAST10018, Linear Algebra Extension Studies",
                    "MAST10019, Calculus Extension Studies",
                ],
            },
            {
                time: "2022 Summer",
                title: "Intro to CS!",
                subjects: ["COMP10001, Foundations of Computing"],
            },
            {
                time: "2022 Sem 1",
                title: "First formal semester at UoM!",
                subjects: [
                    "COMP10002, Foundations of Algorithms",
                    "ENVS10006, Mapping Environments",
                    "MAST20004, Probability",
                    "SCIE10005, Today's Science, Tomorrow's World",
                ],
            },
            {
                time: "2022 Sem 2",
                title: "Second year disguised as first year...",
                subjects: [
                    "COMP20003, Algorithms and Data Structures",
                    "COMP20008, Elements of Data Processing",
                    "INFO20003, Database Systems",
                    "SWEN20003, Object Oriented Software Development",
                ],
            },
            {
                time: "2023 Summer",
                title: "Intensive summer!",
                subjects: [
                    "FNCE10002, Principles of Finance",
                    "MAST20005, Statistics",
                ],
            },
            {
                time: "2023 Sem 1",
                title: "Teaching begins!",
                subjects: [
                    "COMP30023, Computer Systems",
                    "COMP30027, Machine Learning",
                    "MAST30025, Linear Statistical Models",
                    "SWEN30006, Software Modelling and Design",
                ],
            },
            {
                time: "2023 Sem 2",
                title: "Final sem at UoM...",
                subjects: [
                    "COMP30022, IT Project",
                    "COMP30026, Models of Computation",
                    "MAST30001, Stochastic Modelling",
                    "MAST30027, Modern Applied Statistics",
                ],
            },
        ],
    },
    {
        target: "other-history",
        heading: "Other academic programs",
        periods: [
            {
                time: "Unimelb KLD (2021)",
                title: "Kwong Lee Dow Young Scholars Program",
                subjects: [],
            },
            {
                time: "CMMRS 2024 (Jul – Aug 2024)",
                title: "The Cornell, Maryland, Max Planck Pre-doctoral Research School in Computer Science",
                subjects: [],
            },
            {
                time: "SETAC 2024 (Sep 2024)",
                title: "Society of Environmental Toxicology and Chemistry – SETAC Asia-Pacific 14th Biennial Meeting",
                subjects: [],
            },
        ],
    },
];
