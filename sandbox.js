//  the navigation styles 
const navList =  document.querySelector(".navigation-lists");
const menuBar = document.querySelector(".harmburger");

menuBar.addEventListener("click", ()=> {
    navList.classList.toggle("show-lists");
});