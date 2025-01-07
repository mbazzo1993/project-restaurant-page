
const headerText1 = 'Welcome to';
const headerText2 = 'Porca Miseria';
const headerText3 = 'Purveyors of Italian pork products since 1869';
const descText = "At Porca Miseria, we take pride in our authentic Italian pork products, which have been perfected after years of dedication to the craft of Italian butchery and deli meats. In addition to our wide selection of delicious product, we also offer courses in butchery and curing so that you can create your own products at home."


export function loadHomePage() {
    const bannerElem = document.createElement('div');
    bannerElem.classList.add("banner");

    const imageElem = document.createElement('div');
    imageElem.classList.add('image');

    const headerElem = document.createElement('div');
    headerElem.classList.add('header-container');

    const headerText1Elem = document.createElement('p');
    headerText1Elem.innerText = headerText1;

    const headerText2Elem = document.createElement('div');
    headerText2Elem.classList.add('header');
    headerText2Elem.innerText = headerText2;

    const headerText3Elem = document.createElement('p');
    headerText3Elem.innerText = headerText3;

    headerElem.appendChild(headerText1Elem);
    headerElem.appendChild(headerText2Elem);
    headerElem.appendChild(headerText3Elem);

    imageElem.appendChild(headerElem);

    bannerElem.appendChild(imageElem);

    const descriptionElem = document.createElement('div');
    descriptionElem.classList.add('desc');

    const descriptionTextElem = document.createElement('p');
    descriptionTextElem.innerText = descText;

    descriptionElem.appendChild(descriptionTextElem);


    return {bannerElem, descriptionElem};
    
}