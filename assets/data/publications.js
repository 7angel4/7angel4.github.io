/**
 * All publications & projects, newest first.
 *
 * To add a new entry, copy an existing object and edit it. Fields:
 *   title      (required) — plain text or HTML
 *   authors    (optional) — comma-separated string; "Angel Y. He" is auto-highlighted
 *   venue      (optional) — where it appeared
 *   year       (optional) — number or string
 *   thumbnail  (optional) — path to an image under assets/resources/thumbnails/
 *   abstract   (optional) — HTML string; shown behind an "Abstract" toggle
 *   note       (optional) — short highlight line shown under the venue (e.g. "Oral presentation")
 *   selected   (optional) — true = featured in the homepage Research section
 *   category   (required) — 'publication' (papers/theses) or 'project' (other work)
 *   links      (optional) — any of: paper, extended, code, website, poster, talk
 */
export const PUBLICATIONS = [
    {
        title: "Robust PAC Learning of Concurrent Stochastic Games",
        authors: "Angel Y. He, David Parker",
        venue: "arXiv preprint",
        year: 2026,
        thumbnail: "assets/resources/thumbnails/robust-pac-csg-thumbnail.png",
        selected: true,
        category: "publication",
        abstract: `We introduce the first Probably Approximately Correct (PAC) learning framework for
            general-sum concurrent stochastic games (CSGs) with transition uncertainty, while addressing the
            challenge of Nash equilibrium (NE) existence. Our algorithm maintains data-driven
            L<sup>1</sup> confidence sets over transition kernels and solves a robust CSG to compute a
            social-welfare optimal &epsilon;-NE, using a robust MDP-based exploration mechanism to drive joint
            state-action coverage. Crucially, we introduce a <i>Nash margin</i> characterisation that enables
            principled reasoning about equilibrium existence: the framework either returns an
            &epsilon;-approximate NE whose social-welfare value is &epsilon;-close to optimal, or provides a
            sound certificate that no exact NE exists. Under a minimum reachability condition
            <i>p</i><sub>reach</sub> &gt; 0 over relevant state-action pairs, the algorithm terminates after a
            polynomial number of trajectory samples, with sample complexity
            &Otilde;(<i>R</i><sub>max</sub><sup>2</sup> <i>H</i><sup>4</sup> |<i>S</i>|<sup>2</sup> |<i>A</i>| /
            (<i>p</i><sub>reach</sub> &epsilon;<sup>2</sup>)). Empirical results on benchmark CSGs demonstrate
            near-optimal performance, correct handling of equilibrium (non-)existence, and sample complexity
            consistent with theory.`,
        links: {
            paper: "https://arxiv.org/abs/2609.04189",
        },
    },
    {
        title: "Robust Verification of Concurrent Stochastic Games",
        authors: "Angel Y. He, David Parker",
        venue: "32nd International Conference on Tools and Algorithms for the Construction and Analysis of Systems (TACAS)",
        year: 2026,
        thumbnail: "assets/resources/thumbnails/RCSG-tacas26-thumbnail.png",
        selected: true,
        category: "publication",
        abstract: `Autonomous systems often operate in multi-agent settings and need to make concurrent,
            strategic decisions, typically in uncertain environments. Verification and control problems for
            these systems can be tackled with concurrent stochastic games (CSGs), but this model requires
            transition probabilities to be precisely specified &mdash; an unrealistic requirement in many real-world
            settings. We introduce <i>robust CSGs</i> and their subclass <i>interval CSGs</i> (ICSGs), which capture
            epistemic uncertainty about transition probabilities in CSGs. We propose a novel framework for
            <i>robust</i> verification of these models under worst-case assumptions about transition
            uncertainty. Specifically, we develop the underlying theoretical foundations and efficient
            algorithms, for finite- and infinite-horizon objectives in both zero-sum and nonzero-sum settings,
            the latter based on (social-welfare optimal) Nash equilibria. We build an implementation in the
            PRISM-games model checker and demonstrate the feasibility of robust verification of ICSGs across a
            selection of large benchmarks.`,
        links: {
            paper: "https://link.springer.com/chapter/10.1007/978-3-032-22752-2_26",
            extended: "https://arxiv.org/abs/2601.12003",
            code: "https://github.com/7angel4/prism-games/tree/tacas-26",
            poster: "https://etaps.org/files/2026/etaps_poster_book.pdf",
            talk: "https://github.com/7angel4/prism-games/blob/tacas-26/deliverables/presentation-TACAS.pdf",
        },
    },
    {
        title: "All In: Give me your money!",
        authors: "Angel Y. He, Mark Holmes",
        venue: "arXiv preprint",
        year: 2024,
        thumbnail: "assets/resources/thumbnails/all-in-thumbnail.png",
        selected: false,
        category: "publication",
        abstract: `We present a computer assisted proof for a result concerning a three player betting game,
            introduced by Angel and Holmes. The three players start with initial capital x,y,z&gt;0 respectively.
            At each step of this game two players are selected at random to bet on the outcome of a fair coin
            toss, with the size of the bet being the largest possible, namely the total capital held by the
            poorer of the two players at that time. The main quantity of interest is the probability of
            player 1 being eliminated (reaching 0 capital) first. Angel and Holmes have shown that this
            probability is not monotone decreasing as a function of the initial capital x of player 1.
            They conjecture that if x&lt;y&lt;z then player 1 would be better off (less likely to be eliminated
            first) by swapping their capital with another player.
            <br>
            In this paper we present a computer-assisted proof of this conjecture. To achieve this, we
            introduce the theoretical framework MeshItUp, and then perform a two-stage reduction to make
            MeshItUp computationally feasible, through the use of mixed-integer programming.`,
        links: {
            paper: "https://arxiv.org/pdf/2410.15329",
            code: "https://github.com/7angel4/betting-game-proof",
        },
    },
    {
        title: "MSc Thesis: Uncertain Concurrent Stochastic Games",
        authors: "Angel Y. He",
        venue: "University of Oxford, MSc in Advanced Computer Science",
        year: 2025,
        thumbnail: "assets/resources/thumbnails/UCSG-thumbnail.png",
        selected: false,
        category: "project",
        abstract: `Autonomous systems often operate in multi-agent environments where decisions are
            stochastic, strategic, and concurrent. Concurrent stochastic games (CSGs) capture these dynamics
            but assume precise transition probabilities &mdash; an unrealistic requirement in many real-world
            settings. Robust MDPs (RMDPs) address uncertainty, but only in single-agent scenarios.
            We introduce <b>uncertain CSGs</b> (UCSGs), the first verification framework that unifies CSGs
            and RMDPs by combining transition uncertainty with multi-agent concurrency. We focus on the
            subclass of <b>interval CSGs</b> (ICSGs), which model interval-bounded uncertainty. For
            two-player ICSGs, we develop robust model checking and strategy synthesis algorithms across
            finite- and infinite-horizon, zero- and nonzero-sum quantitative objectives.
            Our implementation in the PRISM-games tool demonstrates that, in the zero-sum
            setting, ICSG verification achieves performance comparable to the state-of-the-art CSG model checker
            in PRISM-games, while in the nonzero-sum case the higher complexity underscores the intrinsic
            challenges of robust multi-agent reasoning.`,
        links: {
            code: "https://github.com/7angel4/prism-games/tree/two-player-icsg",
        },
    },
    {
        title: "Hitting probabilities in 3-player betting games",
        authors: "Angel Y. He",
        venue: "University of Melbourne, School of Mathematics Vacation Scholarships Program",
        year: 2023,
        thumbnail: "assets/resources/thumbnails/3-player-betting-game-thumbnail.png",
        selected: false,
        category: "project",
        abstract: `We study two variants of the models examined by Prof. Persi Diaconis.
            Denote the players&rsquo; fortunes at each round as (X&#8345;,Y&#8345;,Z&#8345;) &isin; &#8469;&sup3;,
            which evolves as a Markov chain. Write (X&#8320;,Y&#8320;,Z&#8320;) = (x,y,z).
            <br>
            * Game 1: At each round, a giver and receiver are chosen at random.
            The giver transfers the minimum of their fortunes to the receiver.<br>
            * Game 2: Only a receiver is chosen each round to receive min(x,y,z).
            <br>
            Define the following terminology / representations:<br>
            * Loser: First player to reach 0 (if tied in Game 2, pick one randomly).<br>
            * Winner: First player to have all the money.<br>
            * L(x,y,z): Probability that player 1 loses, given initial state (x,y,z).
            <br>
            The research problem addressed is the difficulty of attaining L(x,y,z) by hand.
            <br>
            This poster presents an overview of the program produced in response, and some further analysis
            on the first-hand data.`,
        links: {
            poster: "https://ms.unimelb.edu.au/__data/assets/pdf_file/0005/4869815/heangel_189576_18102286_3-player-betting-games-poster-AYH-A2.pdf",
            code: "https://github.com/7angel4/3-person-betting-game",
        },
    },
    {
        title: "PlaniWiki: Educational Website for Planimation",
        year: 2023,
        thumbnail: "assets/resources/thumbnails/planiwiki-thumbnail.png",
        category: "project",
        links: {
            code: "https://github.com/planimation/documentation",
        },
    },
    {
        title: "Simple RPC Server",
        year: 2023,
        thumbnail: "assets/resources/thumbnails/rpc-thumbnail.png",
        category: "project",
        links: {
            code: "https://github.com/7angel4/RPC",
        },
    },
    {
        title: "Simulated Process Manager: Scheduler + Memory Allocator",
        year: 2023,
        thumbnail: "assets/resources/thumbnails/process-manager-thumbnail.png",
        category: "project",
        links: {
            code: "https://github.com/7angel4/process-manager/",
        },
    },
    {
        title: "PacMan in the TorusVerse: PacMan maze game with map editor",
        year: 2023,
        thumbnail: "assets/resources/thumbnails/pacman-thumbnail.png",
        category: "project",
        links: {
            code: "https://github.com/Unimelb-SWEN30006/2023-sem1-projectassignment2-fri-13-00-team-07",
        },
    },
    {
        title: "Classification of Goodreads Book Readings",
        year: 2023,
        thumbnail: "assets/resources/thumbnails/goodreads-classification-thumbnail.png",
        category: "project",
        links: {
            code: "https://github.com/7angel4/COMP30027_A2/tree/main/Final",
        },
    },
    {
        title: "Dijkstra's Flow Free Solver",
        year: 2023,
        thumbnail: "assets/resources/thumbnails/flow-free-thumbnail.png",
        category: "project",
        links: {
            code: "https://github.com/7angel4/flow-free-solver",
        },
    },
];
