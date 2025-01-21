import "./styles.css";
import { populateHome, populateMenu, populateContact } from "./PopulateContent";

document.addEventListener("DOMContentLoaded", (e) => {
    const buttons = [
        {id: "home", action: populateHome},
        {id: "menu", action: populateMenu},
        {id: "contact", action: populateContact},
    ];

    buttons.forEach(({id, action}) => {
        const button = document.getElementById(id);
        button.addEventListener("click", action);
    });

    // default screen on page load
    populateHome();
});