const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgs = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg",
 "images/pic5.jpg"]

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let img of imgs) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', img);
    newImage.setAttribute('alt', `Image of ${img}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", function() {
        displayedImage.setAttribute("src", this.getAttribute("src"));
        displayedImage.setAttribute("alt", this.getAttribute("alt"));
    })
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function() {
    if (btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
