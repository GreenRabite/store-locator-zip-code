# Store Locater Using Zip Codes - Coding Challenge

Store Locater - [Live Site Here](https://greenrabite.github.io/store-locator-zip-code/#/)

![Shipt]()

## How to View The Site
1. Live Site Can be Reached [Here](https://greenrabite.github.io/store-locator-zip-code/#/)
  * Input one of the following zip codes for seed data: `35203`, `98001`, `99515`
2. To Launch Manually
  * Download this repo
  * `npm install` and `webpack --watch` if `bundle` files haven't been built
  * Launch `index.html`
  * Input one of the following zip codes for seed data: `35203`, `98001`, `99515`

## Introduction
This is a web application that can be used to locate a store using a zipcode inputted from the end user. A valid zipcode will output various stores in alphabetical order. Each store will show its launched date or will display that it is available now. An invalid zipcode will warn the user the zipcode is invalid and to try again.

## Technologies Used
* React.js
* Webpack
* Babel

## File Structure
* Main `index.html` file can be found in the `root` directory.
* Javascript files are "hooked" in by `ReactDOM` from special div id `root` tag selector
* React components can be found under `frontend/components`. React components are transpile with `Babel` and compiled in a large `.js` file called `bundle.js` by `Webpack`. This is link near the bottom of the page to load the files asynchronously.
* React components are separated into different folder. These are the following: `navbar`, `main` section, and the `footer`.
* Stylesheets are loaded/imported into `main.css`. This file is link into `index.html`.

## Screenshots/GIFs

### Invalid Zipcode Flow
![InvalidZipcodeFlow](https://github.com/GreenRabite/store-locator-zip-code/blob/master/images/gifs/invalid-zipcode.gif?raw=true)

### Valid Zipcode Flow
![ValidZipcodeFlow](https://raw.githubusercontent.com/GreenRabite/store-locator-zip-code/master/images/gifs/valid-zipcode.gif)

### Mobile Responsiveness Flow
![Mobile Responsiveness](https://github.com/GreenRabite/store-locator-zip-code/blob/master/images/gifs/mobile-response.gif?raw=true)
