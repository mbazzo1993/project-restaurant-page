const contactHeaderText = "Contact Us"
const contactInfoArray = [
    {
        name: "Mario Rossi",
        position: "Manager",
        phone: "555-123-4567",
        email: "mrossi@porcamis.com",
    },
    {
        name: "Valentino Rossi",
        position: "Head Butcher",
        phone: "555-598-0934",
        email: "vrossi@porcamis.com",
    }
]

export function loadContactPage() {
    const contactElem = document.createElement('div');
    contactElem.classList.add("contact-container");

    const contactHeaderElem = document.createElement('h2');
    contactHeaderElem.innerText = contactHeaderText;

    const contactListElem = document.createElement('ul');
    let contactItem;
    for (contactItem of contactInfoArray) {
        const contactLItemElem = document.createElement('li');

        const contactItemNameElem = document.createElement('h3');
        contactItemNameElem.innerText = contactItem.name;
        const contactItemPosElem = document.createElement('p');
        contactItemPosElem.innerText = contactItem.position;
        const contactItemPhoneElem = document.createElement('p');
        contactItemPhoneElem.innerText = contactItem.phone;
        const contactItemEmailElem = document.createElement('p');
        contactItemEmailElem.innerText = contactItem.email;

        contactLItemElem.appendChild(contactItemNameElem);
        contactLItemElem.appendChild(contactItemPosElem);
        contactLItemElem.appendChild(contactItemPhoneElem);
        contactLItemElem.appendChild(contactItemEmailElem);

        contactListElem.appendChild(contactLItemElem);
    }

    contactElem.appendChild(contactHeaderElem);
    contactElem.appendChild(contactListElem);

    return {contactElem};

}