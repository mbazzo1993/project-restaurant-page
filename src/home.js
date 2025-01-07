
const bannerText1 = 'Welcome to';
const bannerText2 = 'Porca Miseria';
const bannerText3 = 'Purveyors of Italian pork products since 1869';
const descHeaderText = 'About Us';
const descText = "At Porca Miseria, we take pride in our authentic Italian pork products, which have been perfected after years of dedication to the craft of Italian butchery and deli meats. In addition to our wide selection of delicious product, we also offer courses in butchery and curing so that you can create your own products at home."
const hoursHeaderText = 'Hours';
const hoursTextArr = [
    "Monday: 10am - 10pm",
    "Tuesday: 10am - 10pm",
    "Wednesday: 10am - 10pm",
    "Thursday: 10am - 10pm",
    "Friday: 10am - 10pm",
    "Saturday: 10am - 10pm",
    "Sunday: 12pm - 6pm"
]
const locationHeaderText = "Location";
const locationText = '123 Fake Street, Toronto, Ontario';

export function loadHomePage() {

    // construct banner and content
    const bannerElem = document.createElement('div');
    bannerElem.classList.add("banner");

    const imageElem = document.createElement('div');
    imageElem.classList.add('image');

    const headerElem = document.createElement('div');
    headerElem.classList.add('header-container');

    const bannerText1Elem = document.createElement('p');
    bannerText1Elem.innerText = bannerText1;

    const bannerText2Elem = document.createElement('div');
    bannerText2Elem.classList.add('header');
    bannerText2Elem.innerText = bannerText2;

    const bannerText3Elem = document.createElement('p');
    bannerText3Elem.innerText = bannerText3;

    headerElem.appendChild(bannerText1Elem);
    headerElem.appendChild(bannerText2Elem);
    headerElem.appendChild(bannerText3Elem);

    imageElem.appendChild(headerElem);

    bannerElem.appendChild(imageElem);

    // construct description and content
    const descriptionElem = document.createElement('div');
    descriptionElem.classList.add('desc');

    const descHeaderElem = document.createElement('h2');
    descHeaderElem.innerText = descHeaderText;

    const descriptionTextElem = document.createElement('p');
    descriptionTextElem.innerText = descText;

    const hoursHeaderElem = document.createElement('h2');
    hoursHeaderElem.innerText = hoursHeaderText;

    const hoursUListElem = document.createElement('ul');
    let hoursText = '';
    for (hoursText of hoursTextArr) {
        const hoursLItemElem = document.createElement('li');
        hoursLItemElem.innerText = hoursText;
        hoursUListElem.appendChild(hoursLItemElem);
    }

    const locationHeaderElem = document.createElement('h2');
    locationHeaderElem.innerText = locationHeaderText;

    const locationTextElem = document.createElement('p');
    locationTextElem.innerText = locationText;

    descriptionElem.appendChild(descHeaderElem);
    descriptionElem.appendChild(descriptionTextElem);
    descriptionElem.appendChild(hoursHeaderElem);
    descriptionElem.appendChild(hoursUListElem);
    descriptionElem.appendChild(locationHeaderElem);
    descriptionElem.appendChild(locationTextElem);


    return {bannerElem, descriptionElem};
    
}