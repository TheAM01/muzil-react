# Getting started

Start by cloning this repository to your local machine.

run ` git clone https://github.com/TheAM01/muzil-react `

and ` cd muzil-react `

Make sure you have the latest [Node.js binaries](https://nodejs.org/en/download). Then install all the neccessary dependencies by running ` npm install `

To start the project sinply run ` npm start `

## Project model

### `/Public`

Contains all the static frontend files and templates.

### `/src`

Contains all the working files.

---

## Working

The ` /src/App.js ` file will be your main file. All the components will be imported with the in the ` App.js ` file. 

The ` index.js ` file is the main file. I don't really know what it does to be honest.

` /src/Components ` contains all the react components that are imported in the main file and other files.

` /src/Styles ` contains stylesheets whihc are sent alongside the html file. To add another stylesheet, add one in the directory and reference it in ` /public/index.html ` file.

` /src/Data ` contains all data stored as a JavaScript file. The reason a JSON file wasn't used instead is because JSON files are difficult to read in the frontend context. 

---

_Made by [TheAM](https://theam.ga) in React_