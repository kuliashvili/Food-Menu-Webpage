const btn1 = document.getElementById("all");
const btn2 = document.getElementById("breakfast");
const btn3 = document.getElementById("lunch");
const btn4 = document.getElementById("shakes");

const el1 = document.getElementsByClassName("1");
const el2 = document.getElementsByClassName("2");
const el3 = document.getElementsByClassName("3");


btn1.addEventListener("click", function() {
    Array.from(el2).forEach(elem => elem.style.display = "flex");
    Array.from(el3).forEach(elem => elem.style.display = "flex");
    Array.from(el3).forEach(elem => elem.style.display = "flex");

});

btn2.addEventListener("click", function() {
    Array.from(el2).forEach(elem => elem.style.display = "none");
    Array.from(el3).forEach(elem => elem.style.display = "none");

    Array.from(el1).forEach(elem => elem.style.display = "flex");

});

btn3.addEventListener("click", function() {
    Array.from(el1).forEach(elem => elem.style.display = "none");
    Array.from(el3).forEach(elem => elem.style.display = "none");

    Array.from(el2).forEach(elem => elem.style.display = "flex");

});

btn4.addEventListener("click", function() {
    Array.from(el1).forEach(elem => elem.style.display = "none");
    Array.from(el2).forEach(elem => elem.style.display = "none");

    Array.from(el3).forEach(elem => elem.style.display = "flex");

});