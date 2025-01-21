import burgerIcon from "../assets/images/logo.png";

const populateHome = () => {
    const content = document.getElementById("content");

    const logoContainer = document.createElement("div");
    const aboutContainer = document.createElement("div");
    const logo = document.createElement("img");
    const logoName = document.createElement("p");
    const aboutHeader = document.createElement("h1");
    const aboutInfo = document.createElement("p");

    logoContainer.classList.add("logo");
    logo.src = burgerIcon;
    logo.alt = "logo";
    logoName.textContent = "Restaurant";
    aboutContainer.classList.add("about");
    aboutHeader.textContent = "About Us"
    aboutInfo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc vehicula tincidunt. Sed sit amet sapien ut libero venenatis tincidunt. Integer non felis nec nulla facilisis fermentum. Curabitur ac orci ac lorem malesuada tincidunt."

    logoContainer.appendChild(logo);
    logoContainer.appendChild(logoName);
    content.appendChild(logoContainer);
    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutInfo);
    content.appendChild(aboutContainer);
}

export {populateHome};