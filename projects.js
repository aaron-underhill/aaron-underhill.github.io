/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [

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
        ]
    },


    {
        title: "Example Data Project",

        description:
            "A data analysis project exploring patterns in a real-world dataset.",

        category: "Data Science",

        technologies: [
            "Python",
            "Pandas",
            "Matplotlib"
        ]
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


    article.append(
        title,
        description,
        technologies
    );


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