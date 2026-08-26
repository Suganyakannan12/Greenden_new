// 1. Sidebar Logic
const sidenav = document.getElementById("sidenav");
const menuicon = document.getElementById("menuicon");
const closenav = document.getElementById("closenav");

// Added strict percentage unit to match your CSS layout boundaries
menuicon.addEventListener("click", () => sidenav.style.right = "0%");
closenav.addEventListener("click", () => sidenav.style.right = "-60%");

// 2. Search Logic
const search = document.getElementById("search");
const productList = document.querySelectorAll("#product-container .product-card");

search.addEventListener("keyup", (event) => {
    const enteredValue = event.target.value.toUpperCase();

    productList.forEach((card) => {
        const productName = card.querySelector("h1").textContent.toUpperCase();
        
        if (productName.includes(enteredValue)) {
            card.style.display = ""; // Matches, so use default display
        } else {
            card.style.display = "none"; // Doesn't match, hide it
        }
    });
});