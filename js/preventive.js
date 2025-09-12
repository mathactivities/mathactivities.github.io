console.log(window.location)

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});



window.addEventListener("keydown", (e) => {
    if (e.ctrlKey){
        e.stopPropagation();
        e.preventDefault()
    }
    if (window.location.href.includes("view-source:")){
        window.replace("//classroom.google.com")
    }
})
window.addEventListener("click", () => {
    if (window.location.href.includes("view-source:")){
        window.location.href.replace("//classroom.google.com")
    }
})
window.addEventListener("contextmenu", (e) => {
    e.preventDefault()
})
window.addEventListener('keydown', (e) => {
    if (e.key=='`'){
        window.top.location.replace('https://classroom.google.com')
    }
})

if (window.location.top.includes("activities/flash/")){
    //window.location.top.replace("about:blank")
}
