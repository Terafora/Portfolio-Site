function copyEmail() {
  navigator.clipboard.writeText("charlie.stone649@gmail.com")
}

function copyNum() {
  navigator.clipboard.writeText("+44 07369 279 305")
}

// light/dark mode

let mainBG = document.getElementById("page-background")
let theme = document.getElementsByClassName("section-alt")
let cards = document.getElementsByClassName("card")
let regular = document.getElementsByClassName("regular")

let themeChange = false

function themeChanger() {
  
  if(themeChange === false){
    //darkmode code
    mainBG.style.backgroundColor = "#000"

    for(var i = 0; i < theme.length; i++){
      theme[i].style.backgroundColor = "#575757"
      theme[i].style.color = "#FFF"
      
    }
    for(var i = 0; i < cards.length ; i++){
      cards[i].style.backgroundColor = "#000"
    }
    for(var i = 0; i < regular.length; i++){
      regular[i].style.color = "#FFF"
    }

  } else {
    //lightmode code
    mainBG.style.backgroundColor = "#FFF"
    for(var i = 0; i < theme.length; i++){
      theme[i].style.backgroundColor = "#F9FAFB"
      theme[i].style.color = "#858C96"
      regular[i].style.color = "#4a4d50"
    }
    for(var i = 0; i < cards.length ; i++){
      cards[i].style.backgroundColor = "#FFF"
    }
    for(var i = 0; i < regular.length; i++){
      regular[i].style.color = "#4a4d50"
    }
  }
  themeChange = !themeChange
}