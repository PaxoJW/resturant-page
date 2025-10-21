import "./style.css";

import {createHomePage} from "./first-page.js";
import {createSecondPage} from "./second-page.js";
import {createThirdPage}  from "./third-page.js";

const homeBtn = document.getElementById("homePageBtn");
const menuBtn = document.getElementById("menuBtn");
const workBtn = document.getElementById("workBtn"); 

//For each button assign the relative page. Wipe the content before loading the correct one

homeBtn.addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    createHomePage();
})

menuBtn.addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    createSecondPage();
});

workBtn.addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    createThirdPage();
})

//load the home page at startup
createHomePage();
