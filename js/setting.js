const buttons = Array.from(document.getElementsByTagName("button"))
for (var i=0; i < buttons.length; i++){
    const button = buttons[i]
    const bee = button.textContent.toLowerCase().slice(7)
    if (bee == 'title'){
        button.addEventListener('click', () => {
            const buttonText = button.textContent.toLowerCase().slice(7)
            const customText = button.previousElementSibling.value
            console.log(button.previousElementSibling)
            localStorage.setItem(buttonText, customText)
            alert("Reload page to see effects")
        })
    }
    else {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.toLowerCase().slice(7)
            console.log(button.previousElementSibling)
            const fileInput = document.getElementById('file')
            const file = fileInput.files[0]
            const reader  = new FileReader()
            reader.addEventListener('load', () => {
                localStorage.setItem(buttonText, reader.result)
                alert("Reload page to see effects")
            })
            reader.readAsDataURL(file)
            
        })
    }
}

if (localStorage.getItem('title') || localStorage.getItem('image')){
    document.title = localStorage.getItem('title')
    document.querySelector("link[rel*='icon']").href = localStorage.getItem('image')
} 
else {
    
}

