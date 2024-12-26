console.log(window.location)

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
    window.location.top.replace("about:blank")
}
