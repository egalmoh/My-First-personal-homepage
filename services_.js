const images = ["img/happycat.gif", "img/egal_resized.jpg"];
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("img-pr-1").src = images[currentIndex];
}, 4000);


function toggleMenu()
{
    var menu = document.getElementById("menu");
    if (menu.style.display === "block")
    {
        menu.style.display = "none";
    }
    else
    {
        menu.style.display = "block";
    }
}

window.addEventListener('resize', function() {
    var menu0 = document.getElementById("menu");
    if (window.innerWidth >= 700) {
        menu0.style.display = "block";
    } else {
        menu0.style.display = "none";
    }
});