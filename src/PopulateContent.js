import burgerIcon from "../assets/images/logo.png";

const content = document.getElementById("content");

function clearContent() {
    content.textContent = "";
}

function createElement(type, options = {}) {
    const element = document.createElement(type);

    if (options.classes){ // array of strings
        element.classList.add(...options.classes);
    }

    if (options.text){ // string
        element.textContent = options.text;
    }

    if (options.attributes){ // object in the form {attribute: value}
        Object.entries(options.attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    return element;
}

const populateHome = () => {
    clearContent();

    const logoContainer = createElement("div", {classes: ["logo"]});
    const logo = createElement("img", {attributes: {src: burgerIcon, alt: "logo",}});
    const logoName = createElement("p", {text: "Restaurant"});
    logoContainer.append(logo, logoName);

    const aboutContainer = createElement("div", {classes: ["about"]});
    const aboutHeader = createElement("h1", {text: "About Us"});
    const aboutInfo = createElement("p", {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc vehicula tincidunt. Sed sit amet sapien ut libero venenatis tincidunt. Integer non felis nec nulla facilisis fermentum. Curabitur ac orci ac lorem malesuada tincidunt.",
    });
    aboutContainer.append(aboutHeader, aboutInfo);
    

    content.append(logoContainer, aboutContainer);
}

const populateMenu = () => {
    clearContent();

    const menuContainer = createElement("div", {classes: ["menu-container"]});
    const menuItems = [
        {name: "Menu item 1", description: "Description of menu item 1"},
        {name: "Menu item 2", description: "Description of menu item 2"},
        {name: "Menu item 3", description: "Description of menu item 3"},
    ]

    menuItems.forEach(({name, description}) => {
        const menuItem = createElement("div", {classes: ["menu-item", "shadow"]});
        const itemName = createElement("h2", {text: name});
        const itemDescription = createElement("p", {text: description});

        menuItem.append(itemName, itemDescription);
        menuContainer.appendChild(menuItem);
    });

    content.appendChild(menuContainer);
}

const populateContact = () => {
    clearContent();

    const form = createElement("form", {classes: ["shadow"]});

    form.innerHTML = `
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>

    `;

    content.appendChild(form);

}

export { populateHome, populateMenu, populateContact };