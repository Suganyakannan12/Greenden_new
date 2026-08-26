
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function(){
    // Changed 0 into a string value with a clear unit
    sidenav.style.right = "0%"; 
});

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%";
});