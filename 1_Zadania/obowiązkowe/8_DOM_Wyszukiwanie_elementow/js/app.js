document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    const titleEl = document.querySelector("div .title");

    function getDataAnimation(element){
        return element.getAttribute("data-animation");
    }

    console.log(getDataAnimation(titleEl));


    // Zadanie 1

    const home = document.querySelector("#home");
    const home2 = document.getElementById("home");
    const lielement = document.querySelector('li[data-direction]');
    const element = document.querySelector(".block");


    // Zadanie 2

    const list = document.querySelectorAll("nav li");
    const paragraphs = document.querySelectorAll("div p");
    const divs = document.querySelectorAll("article div");

    console.log(list);
    console.log(paragraphs);
    console.log(divs);


    // Zadanie 3

    const article = document.querySelector("article.first");
    let result = article.getElementsByTagName("h1");
    
    console.log(result.length);
});