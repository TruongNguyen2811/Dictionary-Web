const menu=document.querySelector(".navbar-links")
const menuButton=document.querySelector(".navbar-icons")

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar-open");
    menuButton.classList.toggle("open");
})



const searchWord = document.querySelector(".body-input");
const retWord =document.getElementById("word-out");
const pronunciation = document.getElementById("pronunciation-out");
const wordType =document.getElementById("type-out");
const vnMean = document.getElementById("vn-out");
const enMean =document.getElementById("en-out")
const example=document.getElementById("example-out") ;
const synonym =document.getElementById("synonym-out") ;


var tempWord;
var tempPronunciation;
var tempWordType;
var tempVnMean;
var tempEnMean;
var tempExample;
var tempSynonym;



const searchButton =document.querySelector(".search-button");

searchButton.addEventListener("click", ()=>{
    tempWord = searchWord.value;
    if(tempWord == "play"){
        retWord.textContent ="Play";
        wordType.textContent="verbs";
        vnMean.textContent = "choi";
        enMean.textContent = "act stupid";
        example.textContent= "they play so bad";
        synonym.textContent = "recreate , chill with da flow";
    } else{
        retWord.textContent = "occko";
    }
});