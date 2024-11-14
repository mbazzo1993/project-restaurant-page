# project-restaurant-page

Project challenge from The Odin Project's [Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

## Assignment

1. [ ] Create the ```package.json``` and set up Webpack.
    * Configure and install only the things you'll need for the project,
2. [ ] Create a ```.gitignore``` file in the project root. Should contain ```node_modules``` and ```dist``` on separate lines.
3. [ ] Set up an HTML skeleton inside ```src/template.html```:
    * Inside the body add a ```<header>```
    * The header should contain a ```<nav>``` with buttons for differnt "tabs" (e.g. Home, Menu, About)
    * Below the header, add a single ```<div id="content">```.
4. [ ] Inside ```src/index.js``` write something to the console or an alert window then run ```npx webpack serve```. Open [http://localhost:8080](http://localhost:8080) and check if your JS is running.
5. [ ] Inside ```div#content```, create a homepage for your restaurant.
6. [ ] Remove everything inside ```div#content``` and instead create them using JS only.
    * [ ] Create a page load module in a separate file and import it into ```index.js```, then call the function from within the entry point file.
7. [ ] Enable tabbed browsing to access the menu and contact pages:
    * [ ] Put the contents of each tab inside its own module. Each module should export a function that creates a div element, adds appropriate content and styles, and then appends the element to the DOM.
    * [ ] Write the tab-switching logic inside of ```index.js```. Should have event listeners for each button in the header navbar that wipes out the current contents of ```div#content``` and hen runs the correct tab module to populate it with the new contents again.