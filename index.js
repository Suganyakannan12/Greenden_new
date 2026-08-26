var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function(){
    sidenav.classList.remove("translate-x-full"); 
});

closenav.addEventListener("click", function(){
    sidenav.classList.add("translate-x-full"); 
});