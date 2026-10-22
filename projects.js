/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [

    {
        title: "IsaacBot",

        featured: true,

        image: "images/projects/isaacbot.jpg",

        imageAlt: "IsaacBot chat: asked whether to buy a used or new bike, it answers in casual texting style, and when asked if it is really Isaac it says it is a simulation",

        description:
            "A retrieval-augmented chatbot that recreates my twin brother's texting style from about 46,000 of our messages, and can reply out loud in his voice, cloned with ElevenLabs with his permission. I built the cleaning and sessionization pipeline, a session-level train/validation/test split, an embedding index with cosine-similarity retrieval, and an evaluation suite comparing response length, emoji use, and semantic similarity.",

        category: "Data and AI",

        technologies: [
            "Python",
            "OpenAI API",
            "Embeddings",
            "RAG",
            "NumPy",
            "Streamlit",
            "ElevenLabs"
        ],

        // The live app (isaacbot.streamlit.app) is invite-only because it is
        // built on private messages, so visitors request access by email.
        linkText: "Request a Demo",

        link: "mailto:aaron.m.underhill@gmail.com?subject=IsaacBot%20demo%20request",

        external: false,

        github: "https://github.com/aaron-underhill/isaacbot"
    },


    {
        title: "Biketown Alert",

        featured: true,

        image: "images/projects/biketown-alert.svg",

        imageAlt: "Diagram of e-bikes within a 3 minute walk of home and a phone notification saying only 2 bikes are nearby",

        description:
            "I commute on Biketown e-bikes, and every so often the nearest one is 10+ minutes away instead of the usual one or two. I would only notice on my way out the door, and end up late for work. So I built a fix: an hour before each shift, it checks Biketown's live data and alerts my phone whether there are plenty of bikes nearby, only a few, or none, then updates me only if that changes. It runs free on GitHub Actions with automated tests on every push.",

        category: "Data and AI",

        technologies: [
            "Python",
            "GitHub Actions",
            "GBFS API",
            "Push Notifications",
            "CI / Unit Testing"
        ],

        github: "https://github.com/aaron-underhill/biketown-alert"
    },


    {
        title: "Food Hero Calculator (OSU Capstone)",

        featured: true,

        image: "images/projects/food-hero.jpg",

        imageAlt: "Food Hero Calculator page: a grid of foods to pick from and a My Calculator panel with Compare and Calculate buttons",

        description:
            "An educational web app that teaches kids in grades 3–8 how food choices affect nutrition and the planet, combining nutrition facts with carbon and water footprints. On a six-person team, I built the landing page and results features, integrated the food data, and handled deployment.",

        category: "Web Apps",

        technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Supabase",
            "Vercel"
        ],

        // Shown under the description as a status note.
        note:
            "Heads up: the food data lives in our project partner's database, which is currently offline, so the live calculator may not load foods right now. The full code is on GitHub.",

        linkText: "View Live Project",

        link: "https://healthy-games-for-healthy-people-an-xi.vercel.app/",

        external: true,

        github: "https://github.com/tarynlucia/healthy-games-for-healthy-people-and-healthy-planet"
    },


    {
        title: "Higher or Lower: Movie Ratings Edition",

        image: "images/projects/higher-or-lower.jpg",

        imageAlt: "Three screens from the Higher or Lower Android app: the home screen, a round comparing two movies with their ratings and the current score, and a movie details page with an embedded YouTube trailer",

        description:
            "An Android game where players guess which of two movies is rated higher, using live data from The Movie Database API. On a four-person team, I designed the game screen with movie posters, built the movie details screen with embedded YouTube trailers, added animated posters to the home screen, and redesigned the scoreboard for a consistent look.",

        category: "Mobile",

        technologies: [
            "Kotlin",
            "Android",
            "Retrofit",
            "Room",
            "TMDB API",
            "YouTube IFrame API"
        ],

        github: "https://github.com/osu-cs492-w26/final-project-cs492-team10"
    },


    {
        title: "Portfolio Website",

        image: "images/projects/portfolio.jpg",

        imageAlt: "Home page of this portfolio website",

        description:
            "A personal portfolio built from scratch to showcase my projects, skills, and development work.",

        category: "Web Apps",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Git"
        ],

        linkText: "You're already here!",

        link: "index.html",

        external: false,

        github: "https://github.com/aaron-underhill/aaron-underhill.github.io"
    },


    {
        title: "Unreal Coffee Database",

        image: "images/projects/unreal-coffee.svg",

        imageAlt: "Database diagram: employees and customers place orders, and each order links to drinks through an orders_drinks table",

        description:
            "A full-stack database application for managing customers, drinks, employees, orders, and related business data.",

        category: "Web Apps",

        technologies: [
            "JavaScript",
            "Node.js",
            "Express",
            "Handlebars",
            "Neon",
            "PostgreSQL",
            "CSS"
        ],

        linkText: "View Live Project",

        link: "https://latte-larrys-database.vercel.app/",

        external: true,

        github: "https://github.com/aaron-underhill/latte-larrys-database"
    }

];



/* =========================================================
   DOM REFERENCES
   ========================================================= */

const projectGrid =
    document.querySelector("#project-grid");

const projectSearch =
    document.querySelector("#project-search");

const filterButtons =
    document.querySelectorAll(
        ".project-filters button"
    );



/* =========================================================
   APPLICATION STATE
   ========================================================= */

let selectedCategory = "All";



/* =========================================================
   CREATE ONE PROJECT CARD
   ========================================================= */

function createProjectCard(project) {

    const article =
        document.createElement("article");

    article.classList.add("project-card");


    // Optional picture across the top of the card.
    if (project.image) {

        const image =
            document.createElement("img");

        image.classList.add("project-image");

        image.src = project.image;

        image.alt = project.imageAlt || "";

        image.loading = "lazy";

        article.append(image);
    }


    const title =
        document.createElement("h2");

    title.textContent =
        project.title;


    const description =
        document.createElement("p");

    description.textContent =
        project.description;


    const technologies =
        document.createElement("p");

    technologies.classList.add(
        "project-technologies"
    );

    technologies.textContent =
        project.technologies.join(" • ");


    const projectLink =
        document.createElement("a");

    projectLink.classList.add(
        "project-link"
    );

    projectLink.textContent =
        project.linkText;

    projectLink.href =
        project.link;


    if (project.external) {

        projectLink.target = "_blank";

        projectLink.rel =
            "noopener noreferrer";
    }


    article.append(
        title,
        description,
        technologies
    );


    // Optional status note, such as a live demo being temporarily down.
    if (project.note) {

        const note =
            document.createElement("p");

        note.classList.add("project-note");

        note.textContent =
            project.note;

        article.append(note);
    }


    // Buttons share one row, pinned to the bottom of the card.
    const links =
        document.createElement("div");

    links.classList.add("project-links");


    // Only show the link once the project has one.
    if (project.link) {

        links.append(projectLink);
    }


    // Every project with a public repository gets the same GitHub button.
    if (project.github) {

        const githubLink =
            document.createElement("a");

        githubLink.classList.add(
            "project-link",
            "project-link-secondary"
        );

        githubLink.textContent =
            "View on GitHub";

        githubLink.href =
            project.github;

        githubLink.target = "_blank";

        githubLink.rel =
            "noopener noreferrer";

        links.append(githubLink);
    }


    if (links.children.length > 0) {

        article.append(links);
    }


    return article;
}



/* =========================================================
   RENDER PROJECTS
   ========================================================= */

function renderProjects(projectsToRender) {

    projectGrid.replaceChildren();


    if (projectsToRender.length === 0) {

        const message =
            document.createElement("p");

        message.textContent =
            "No projects matched your search.";

        projectGrid.append(message);

        return;
    }


    projectsToRender.forEach(function (project) {

        const card =
            createProjectCard(project);

        projectGrid.append(card);

    });
}



/* =========================================================
   SEARCH + CATEGORY FILTERING
   ========================================================= */

function updateProjects() {

    const searchTerm =
        projectSearch.value
            .toLowerCase()
            .trim();


    const filteredProjects =
        projects.filter(function (project) {

            const searchableText =
                (
                    project.title +
                    " " +
                    project.description +
                    " " +
                    project.category +
                    " " +
                    project.technologies.join(" ")
                ).toLowerCase();


            const matchesSearch =
                searchableText.includes(searchTerm);


            const matchesCategory =
                selectedCategory === "All" ||
                project.category === selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );
        });


    renderProjects(filteredProjects);
}



/* =========================================================
   PROJECTS PAGE: search, filters, and the full list
   ========================================================= */

function setUpProjectsPage() {

    /* =========================================================
       SEARCH EVENT
       ========================================================= */

    projectSearch.addEventListener(
        "input",
        updateProjects
    );



    /* =========================================================
       CATEGORY BUTTON EVENTS
       ========================================================= */

    let selected = filterButtons[0];

    filterButtons[0].classList.add("selected");


    filterButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                selectedCategory =
                    button.dataset.category;


                button.classList.add("selected");

                selected.classList.remove("selected");

                selected = button;


                button.classList.add("flash");


                updateProjects();
            }
        );


        button.addEventListener(
            "animationend",
            function (event) {

                if (
                    event.animationName === "button-flash"
                ) {

                    button.classList.remove("flash");
                }

            }
        );

    });



    /* =========================================================
       INITIAL RENDER
       ========================================================= */

    updateProjects();
}



/* =========================================================
   HOME PAGE: featured projects
   ========================================================= */

function renderFeaturedProjects(grid) {

    projects
        .filter(function (project) {
            return project.featured;
        })
        .forEach(function (project) {
            grid.append(createProjectCard(project));
        });
}



/* =========================================================
   START
   This file is shared by both pages, so only set up the
   parts that exist on the current page.
   ========================================================= */

if (projectGrid) {

    setUpProjectsPage();
}


const featuredGrid =
    document.querySelector("#featured-grid");

if (featuredGrid) {

    renderFeaturedProjects(featuredGrid);
}
