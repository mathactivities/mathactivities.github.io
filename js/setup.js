function createIframe(){
    const iframe = document.createElement("iframe")
    iframe.src = "activities/flash/main.html"
    iframe.style.width = "100%"
    iframe.style.height = "100vh"
    iframe.style.border = "none"
    iframe.style.position = "absolute"
    iframe.style.top = "0"
    iframe.style.zIndex = "5000"
    document.body.style.overflow = "hidden"
    window.scrollTo({
        top: 0,
        left: 0,
    });
    document.body.appendChild(iframe)
    iframe.focus()
}