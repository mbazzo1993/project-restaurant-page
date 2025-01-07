const menuHeaderText = "Menu";
const menuItemsArray = [
    {
        name: "Porchetta",
        desc: "Roasted suckling pig seasoned with herbs.",
        price: "$50.00"
    },
    {
        name: "Cotechino",
        desc: "Special pork sausage made from rind, pork meat, and fat. Requires slow cooking.",
        price: "$15.00"
    },
    {
        name: "Prosciutto Crudo",
        desc: "Dry-cured ham.",
        price: "$8.00 per 100g"
    },
    {
        name: "Soppressata di Calabria",
        desc: "A spicy salame created from fine meat cuts.",
        price: "$7.00 per 100g"
    },
    {
        name: "Salsicia Barese",
        desc: "A sausage made from pork and lamb, prepared in a southern-Italian style.",
        price: "$8.00 per pound"
    }
]

export function loadMenuPage() {
    const menuElem = document.createElement('div');
    menuElem.classList.add("menu-container");

    const menuHeaderElem = document.createElement('h2');
    menuHeaderElem.innerText = menuHeaderText;

    const menuUListElem = document.createElement('ul');
    let menuItem;
    for (menuItem of menuItemsArray) {
        const menuLItemElem = document.createElement('li');

        const menuItemNameElem = document.createElement('h3');
        menuItemNameElem.innerText = menuItem.name;
        const menuItemDescElem = document.createElement('p');
        menuItemDescElem.innerText = menuItem.desc;
        const menuItemPriceElem = document.createElement('p');
        menuItemPriceElem.innerText = menuItem.price;

        menuLItemElem.appendChild(menuItemNameElem);
        menuLItemElem.appendChild(menuItemDescElem);
        menuLItemElem.appendChild(menuItemPriceElem);

        menuUListElem.appendChild(menuLItemElem);
    }

    menuElem.appendChild(menuHeaderElem);
    menuElem.appendChild(menuUListElem);

    return {menuElem};

}