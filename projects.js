

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

const projectGrid =
    document.querySelector("#project-grid");

const projectSearch =
    document.querySelector("#project-search");




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


renderProjects(projects);



projectSearch.addEventListener(
    "input",
    function () {

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


                return searchableText.includes(
                    searchTerm
                );
            });


        renderProjects(filteredProjects);
    }
);

