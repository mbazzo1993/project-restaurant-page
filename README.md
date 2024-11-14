# project-restaurant-page

Project challenge from The Odin Project's [Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

## Assignment

### Development

1. [X] Create the ```package.json``` and set up Webpack.
    * [ ] Configure and install only the things you'll need for the project,
2. [X] Create a ```.gitignore``` file in the project root. Should contain ```node_modules``` and ```dist``` on separate lines.
3. [X] Set up an HTML skeleton inside ```src/template.html```:
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

### Deployment

1. [ ] Make a new branch to deploy from by running ```git branch gh-pages```.
2. [ ] Ensure all your work is committed.
3. [ ] Run ```git checkout gh-pages && git merge main --no-edit``` to change branches and sync all changes from ```main``` so that you're ready to deploy.
4. [ ] Bundle your application into ```dist``` with your build command ```npx webpack```.
5. [ ] Run the following commands in order:

```
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

6. [ ] In github, change your source branch to ```gh-pages```.