const themeButton = document.querySelector("#theme-toggle");

const themes = [
    "default",
    "tech",
    "color"
];

let currentTheme =
    localStorage.getItem("theme") || "default";


function applyTheme(theme) {

    document.documentElement.classList.remove(
        "tech-theme",
        "color-theme"
    );

    if (theme === "default") {
        themeButton.textContent = "Tech Theme";
    }

    else if (theme === "tech") {
        document.documentElement.classList.add("tech-theme");
        themeButton.textContent = "Color Theme";
    }

    else if (theme === "color") {
        document.documentElement.classList.add("color-theme");
        themeButton.textContent = "Earth Theme";
    }
}


applyTheme(currentTheme);


themeButton.addEventListener("click", function () {

    const currentIndex =
        themes.indexOf(currentTheme);

    const nextIndex =
        (currentIndex + 1) % themes.length;

    currentTheme =
        themes[nextIndex];

    localStorage.setItem(
        "theme",
        currentTheme
    );

    applyTheme(currentTheme);
});