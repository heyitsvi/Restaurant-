import { pageload } from "./pageload.js";
import {displayAbout} from "./about.js";
import {displayMenu} from "./menu.js";
import {displayContact} from "./contact.js";


pageload();

function clickTab(){
    const Btn1 = document.querySelector("#Btn1");
    const Btn2 = document.querySelector("#Btn2");
    const Btn3 = document.querySelector("#Btn3");
    const Btns = document.querySelector(".tabBtn");

    Btn1.addEventListener("click", about());

    Btn2.addEventListener("click", menu());
}
clickTab();