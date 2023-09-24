var project1 = document.querySelector(".p1");
var project2 = document.querySelector(".p2");
var project3 = document.querySelector(".p3");

var text1 = document.querySelector(".text1");
var text2 = document.querySelector(".text2");
var text3 = document.querySelector(".text3");
console.log(text1)

project1.addEventListener('click', () => {
    text1.style.display = "flex";
    text2.style.display = "none";
    text3.style.display= "none";
});

project2.addEventListener('click', () => {
    text2.style.display = "flex";
    text1.style.display = "none";
    text3.style.display= "none";
});

project3.addEventListener('click', () => {
    text3.style.display = "flex";
    text1.style.display = "none";
    text2.style.display= "none";
});
