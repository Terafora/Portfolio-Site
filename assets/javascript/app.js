function copyEmail() {
  console.log("click")
    navigator.clipboard.writeText("charlie.stone649@gmail.com")
}

function copyNum() {
  console.log("click")
    navigator.clipboard.writeText("+44 07369 279 305")
}

// light/dark mode

let mainBG = document.getElementById("page-background")
let theme = document.getElementsByClassName("section-alt")
let cards = document.getElementsByClassName("card")

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
  } else {
    //lightmode code
    mainBG.style.backgroundColor = "#FFF"
    for(var i = 0; i < theme.length; i++){
      theme[i].style.backgroundColor = "#F9FAFB"
      theme[i].style.color = "#858C96"
    }
    for(var i = 0; i < cards.length ; i++){
      cards[i].style.backgroundColor = "#FFF"
    }
  }
  themeChange = !themeChange
}


//language select

const englishLang = document.querySelectorAll(".english")
const frenchLang = document.querySelectorAll(".french")
const japaneseLang = document.querySelectorAll(".japanese")

let englishActive = true
let frenchActive = false
let japaneseActive = false

function hideElements(elements) {
  elements.forEach((element) => {
    element.style.display = "none";
  });
}

function japaneseLanguageSwitch(){
  if(!japaneseActive){
    japaneseActive = true

    if(englishActive){
      englishActive = false
      hideElements(englishLang)
    } else {
      frenchActive = false
      hideElements(frenchLang)
    }
    
    japaneseLang.forEach((element) => {
      element.style.display = "block";}
    )
  }
}

document.getElementById("japanese-switch").addEventListener("click", console.log("click"));

//scroll animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))
