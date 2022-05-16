const menu=document.querySelector(".navbar-links")
const menuButton=document.querySelector(".navbar-icons")

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar-open");
    menuButton.classList.toggle("open");
})




const editWord =document.getElementById("newWordInput");

editWord.value ="asdasd";
console.log(editWord.value);


const vnMean =document.getElementById("vnMeanInput");
vnMean.textContent = "asdasd";
console.log(vnMean.textContent);