![weather-app](https://cloud.githubusercontent.com/assets/7050871/23921821/39e0bb62-08bd-11e7-9e3c-2361818ab9da.gif)


# Install

* `git clone https://github.com/a15n/weather-app.git`
* `npm run server` (or `yarn serve`)
* in a new tab run `npm run start` (or `yarn start`)
* go to http://localhost:3000/

# Learnings

* I haven't studied Redux yet but I think that a Redux approach to managing state would have been better than my way of storing it in the main component.
* I used a "pods" structure to organize my code. Each component has a JS file, a CSS file, and a test file. This made it easy to know where all the code was located. I didn't have one component/ folder with ~5 components in it.
* React needs a CLI tool. Using Ember CLI I could run ember generate component foo-bar and it would spin up the appropriate JS, HTML, test, etc files. Adding them manually is laborious.
