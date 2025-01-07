import "./style.css";
import { loadHomePage } from "./home";

// console.log("This is your new restaurant page app!");

class DOMControl {
    // elements
    contentElem = document.getElementById('content');
    navElem = document.getElementById('btn-menu');

    // event listeners
    handleMenuButtonClick = this.navElem.addEventListener("click", (event) => {
        this.clearContent();
        const selection = event.target.innerText;
        if (selection === 'Home') {
            this.loadHomePageContent();
        }
        if (selection === 'Menu') {
            // do nothing
        }
        if (selection === 'About') {
            // do nothing
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
}

const domControl = new DOMControl();