import menu from "./menu.js";
import question from "./question.js";
import slider from "./slider.js";

let d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  slider(".testimony__body", "#before", "#next");

  question(".questions__show", ".questions__title", ".questions__img");
  menu(".menuImg", ".nav__close", ".nav__link");
});
