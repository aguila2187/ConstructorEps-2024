function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;
}

let socialBtn = document.querySelector("#social-btn");
let socialIcons = document.querySelector("#social-icons");

socialBtn.onclick = () => {
    // Cambiar entre "+" y "X"
    if (socialIcons.style.display === "block") {
        socialIcons.style.display = "none";
        socialBtn.textContent = "+"; // Cambiar a "+"
    } else {
        socialIcons.style.display = "block";
        socialBtn.textContent = "X"; // Cambiar a "X"
    }
};

