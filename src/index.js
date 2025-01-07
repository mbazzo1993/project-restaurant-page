import "./style.css";
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";

// console.log("This is your new restaurant page app!");

class DOMControl {
    // elements
    contentElem = document.getElementById('content');
    navElem = document.getElementById('btn-menu');

    // event listeners
    handleMenuButtonClick = this.navElem.addEventListener("click", (event) => {
        const selection = event.target.innerText;
        if (selection === 'Home') {
            this.clearContent()
            this.loadHomePageContent();
        }
        if (selection === 'Menu') {
            this.clearContent()
            this.loadMenuContent();
        }
        if (selection === 'Contact') {
            this.clearContent()
            this.loadContactContent();
        }
    })


    // methods
    constructor() {
        this.loadHomePageContent();
    }

    clearContent() {
        while (this.contentElem.lastElementChild) {
            this.contentElem.removeChild(this.contentElem.lastElementChild);
        }
    }

    loadHomePageContent() {
        const homePageContent = loadHomePage();

        this.contentElem.appendChild(homePageContent.bannerElem);
        this.contentElem.appendChild(homePageContent.descriptionElem);
    }

    loadMenuContent() {
        const menuContent = loadMenuPage();

        this.contentElem.appendChild(menuContent.menuElem);
    }

    loadContactContent() {
        const contactContent = loadContactPage();

        this.contentElem.appendChild(contactContent.contactElem);
    }
}

const domControl = new DOMControl();