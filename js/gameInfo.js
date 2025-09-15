const info = document.getElementById("info");
const listItems = document.querySelectorAll("li");
listItems.forEach(item => {
  item.addEventListener("mousemove", _0x24c5d1 => {
    console.log("Item with ID: " + item.id + ", Image Path: " + ("images/games/" + item.id + ".png"));
    console.log(item.parentElement.classList.contains("grid-view"));
    if (item.parentElement.classList.contains("grid-view")){
        info.style.width = "0px";
        info.style.height = "0px";
        return
    }

    info.style.width = window.innerWidth * 7/100 + "px";
    info.style.height = window.innerWidth * 7/100 + "px";
    
    info.style.backgroundImage = "url(../../images/games/" + item.id + ".png)";
    info.style.top = _0x24c5d1.clientY - 50 + "px";
    console.log(window.scrollY);
    info.style.left = _0x24c5d1.clientX + 30 + "px";
    info.style.display = "block";
    if (parseFloat(info.style.top) > window.innerHeight - 100) {
      info.style.top = _0x24c5d1.clientY - 100 + "px";
    }
  });
  item.addEventListener("mouseout", _0x4959f8 => {
    info.style.display = "none";
  });
});

