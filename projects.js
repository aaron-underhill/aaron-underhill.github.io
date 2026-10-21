/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [

    {
        title: "IsaacBot",

        description:
            "A retrieval-augmented chatbot that recreates my twin brother's texting style from about 46,000 of our messages. I built the cleaning and sessionization pipeline, a session-level train/validation/test split, an embedding index with cosine-similarity retrieval, and an evaluation suite comparing response length, emoji use, and semantic similarity.",

        category: "Data Science",

        technologies: [
            "Python",
            "OpenAI API",
            "Embeddings",
            "RAG",
            "NumPy",
            "Streamlit"
        ],

        // The live app (isaacbot.streamlit.app) is invite-only because it is
        // built on private messages, so visitors request access by email.
        linkText: "Live Demo Available on Request",

        link: "mailto:aaron.m.underhill@gmail.com?subject=IsaacBot%20demo%20request",

        external: false,

        codeLink: "https://github.com/aaron-underhill/isaacbot"
    },


    {
        title: "Food Hero Calculator (OSU Capstone)",

        description:
            "An educational web app that teaches kids in grades 3–8 how food choices affect nutrition and the planet, combining nutrition facts with carbon and water footprints. On a six-person team, I built the landing page and results features, integrated the food data, and handled deployment.",

        category: "Software Engineering",

        technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Supabase",
            "Vercel"
        ],

        linkText: "View Live Project",

        link: "https://healthy-games-for-healthy-people-an-xi.vercel.app/",

        external: true
    },


    {
        title: "Portfolio Website",

        description:
            "A personal portfolio built from scratch to showcase my projects, skills, and development work.",

        category: "Software Engineering",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Git"
        ],

        linkText: "You're already here!",

        link: "index.html",

        external: false
    },


    {
        title: "Unreal Coffee Database",

        description:
            "A full-stack database application for managing customers, drinks, employees, orders, and related business data.",

        category: "Software Engineering",

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

        external: true
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


    // Only show the link once the project has one.
    if (project.link) {

        article.append(projectLink);
    }


    // Optional second button for projects with public source code.
    if (project.codeLink) {

        const codeLink =
            document.createElement("a");

        codeLink.classList.add(
            "project-link"
        );

        codeLink.textContent =
            "View Code";

        codeLink.href =
            project.codeLink;

        codeLink.target = "_blank";

        codeLink.rel =
            "noopener noreferrer";

        article.append(codeLink);
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