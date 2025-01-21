import "./styles.css";
import { populateHome, populateMenu } from "./PopulateContent";

document.addEventListener("DOMContentLoaded", populateHome);

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

homeButton.addEventListener("click", populateHome);
menuButton.addEventListener("click", populateMenu);