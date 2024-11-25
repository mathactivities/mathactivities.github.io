document.body.innerHTML = `<div id = "load" style="text-align:center; padding-top: 100px; font-size: 60px;  position: absolute; top: 0; z-index: 10000000;visibility: visible;  width: 100%; height: 100vh;display: block; color: rgb(255, 255, 255); background-color: rgb(18, 18, 18); position: absolute; z-index: 2147483647;">Loading...</div>` + document.body.innerHTML
const loading = document.getElementById("load")
window.addEventListener('onload', () => {
    loading.style.visibility = "hidden"
})