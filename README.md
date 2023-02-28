## Cypress
Qa Academy  Avanade

### To run this project on your machine, you must have the software below installed.

 - [Visual Studio Code](https://code.visualstudio.com/)
 - [Node.js](https://nodejs.org/en/download/)


#### Perform git clone of the project
```
git clone https://github.com/cypress-qaavanade/cypress-test.git
```
Run the command to install the plugins and generate the node_modules
````
npm install
````

Project architecture
````
📦cypress
 ┣ 📂downloads
 ┣ 📂e2e
 ┃ ┣ 📂features
 ┃ ┃ ┣ 📜cart.feature
 ┃ ┃ ┣ 📜color.feature
 ┃ ┃ ┣ 📜login.feature
 ┃ ┃ ┗ 📜products.feature
 ┃ ┣ 📂page
 ┃ ┃ ┣ 📜cart.page.js
 ┃ ┃ ┣ 📜color.page.js
 ┃ ┃ ┣ 📜login.page.js
 ┃ ┃ ┗ 📜products.page.js
 ┃ ┗ 📂step
 ┃ ┃ ┣ 📜cart.step.js
 ┃ ┃ ┣ 📜color.step.js
 ┃ ┃ ┣ 📜login.step.js
 ┃ ┃ ┗ 📜products.step.js
 ┣ 📂fixtures
 ┃ ┗ 📜example.json
 ┣ 📂screenshots
 ┗ 📂support 
 ┃ ┣ 📜commands-login.js
 ┃ ┗ 📜e2e.js 
 ````
<br> 

 # Plugins

Plugins used to implement the page object in the version of cypress 12.3.0
  - [Webpack](https://github.com/cypress-io/cypress/tree/master/npm/webpack-preprocessor)
   - [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor)


<br>
<br>

# Bibliography
