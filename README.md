# CampIn

A place where people can search, create and make a camp and set their price.

## Documentation Approach

This app will have its own documentation, which will be a bit different from others.  The documentation will follow a specific technology usage *before* implementing it within the web app.

### Geographic Focus (Under Development)

Initially, the app is being developed with a focus on Indian geography. However, this might change to America if the required data for India is not readily available.

## File Structure Overview

* **`models` directory:**
    * Contains the model schema in `camp.js`.
* **`seeds` directory:**
    * Consists of three files: `cities.js`, `index.js`, and `places.js`.
    * `cities.js` and `places.js` contain literal raw data.
    * `index.js` is used to:
        * Read and format the raw data from `cities.js` and `places.js`.
        * Seed the data into the database under the "camp-in" collection.
        * (You can view the seeding process within `index.js`).
* **`views` directory:**
  * Contains the template views.
  * There can be subfolders under `views` directory where specific templating is provided for specially addressed components.
* **`app.js`:
  * Contains the middle ware for all the routes using `express` for complete usage of `renders` and `redirects` to different `.ejs` files.
### Important Note: `index.js` vs. `index.ejs`

Be careful to distinguish between `index.js` (JavaScript file) and `index.ejs` (EJS template file). Confusion can arise due to similar names, especially when working with both server-side logic and templating.  Pay close attention to file extensions, as relying on the wrong file type can lead to problems.

