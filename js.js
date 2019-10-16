'use strict';

//variable et méthode querySelector : 
const btn = document.querySelector("button");
let number = 1;

//fonction anonyme, pour méthode addEventListener (addElement) : 
const addElement = function () {

    const divElement = document.createElement("div");
    divElement.textContent = number;
    if (number%5 == 0) {
        divElement.classList.add("circle");
        //console.log("5element");
    }
    document.body.appendChild(divElement);
    number++; //incrément number +1
    //console.log("number");
};

// create méthode addEventListener : 
btn.addEventListener("click", addElement);