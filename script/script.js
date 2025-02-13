let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let slider = document.querySelector('#skills-container');

nextBtn.addEventListener('click', function() {
    slider.append(slider.querySelector('.competences:first-child'));
});

prevBtn.addEventListener('click', function() {
    slider.prepend(slider.querySelector('.competences:last-child'));
});

const hoverImage = document.getElementById("hover-image");

// Sélectionne tous les éléments qui doivent afficher une image au survol
document.querySelectorAll(".hover-area").forEach(element => {
    element.addEventListener("mouseenter", function () {
        // Change l’image affichée en fonction du data-image de l'élément
        hoverImage.src = this.getAttribute("data-image");
        hoverImage.style.display = "block";
        hoverImage.style.opacity = 1; // Rend l'image visible
    });

    element.addEventListener("mouseleave", function () {
        hoverImage.style.opacity = 0; // Rend l'image invisible
        hoverImage.style.display = "none";
    });

    element.addEventListener("mousemove", function (e) {
        hoverImage.style.left = e.pageX + 20 + "px";
        hoverImage.style.top = e.pageY + 20 + "px";
    });
});




