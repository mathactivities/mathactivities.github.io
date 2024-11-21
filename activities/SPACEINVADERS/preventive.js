window.addEventListener("dblclick", prevent)
window.addEventListener("contextmenu", prevent)
function prevent(e) {
    e.preventDefault()
}