import { pageload } from "./pageload.js";
import {displayAbout} from "./about.js";
import {displayMenu} from "./menu.js";
import {displayContact} from "./contact.js";


pageload();

function clearDisplay(){
    let divs = document.querySelector("#content");
    while (divs.firstChild) {
        divs.removeChild(divs.firstChild);
    }
}


function clickTab(){
    const Btn1 = document.querySelector("#Btn1");
    const Btn2 = document.querySelector("#Btn2");
    const Btn3 = document.querySelector("#Btn3");
    const Btns = document.querySelector(".tabBtn");

    Btn1.addEventListener("click", event => {
        clearDisplay();
        displayAbout()});

    Btn2.addEventListener("click", event => {
        clearDisplay();
        displayMenu()});

    Btn3.addEventListener("click", event => {
        clearDisplay();
        // displayContact()
    });
}
clickTab();