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
* **`app.js`:**
  * Contains the middle ware for all the routes using `express` for complete usage of `renders` and `redirects` to different `.ejs` files.
### Important Note: `index.js` vs. `index.ejs`

Be careful to distinguish between `index.js` (JavaScript file) and `index.ejs` (EJS template file). Confusion can arise due to similar names, especially when working with both server-side logic and templating.  Pay close attention to file extensions, as relying on the wrong file type can lead to problems.

### Project Structure Updates & Additions:

Several new files and directories have been added to improve organization, data management, and templating efficiency:

1.  **Seed Data (`seeds/description.js`):**
    *   A new JavaScript file located in the `seeds` directory.
    *   Contains seed data defining descriptions and locations for the campsite entries.

2.  **Static Images (`images/`):**
    *   A new top-level directory dedicated to storing static image assets.
    *   These images will be served by Express to optimize website loading performance.

3.  **EJS Layouts (`views/layouts/`):**
    *   A new subdirectory within `views` specifically for layout templates.
    *   Contains `boilerplate.ejs`, which holds the main reusable HTML structure (like `<html>`, `<head>`, `<body>` tags).
    *   Utilizes the `ejs-mate` package to inject view-specific content into this boilerplate, reducing redundancy across pages.

4.  **EJS Partials (`views/partials/`):**
    *   Another new subdirectory within `views` designed for smaller, reusable HTML components.
    *   Currently includes:
        *   `footer.ejs`: The standard site footer.
        *   `navbar.ejs`: The standard site navigation bar.
    *   These partials are included in various EJS views (`index.ejs`, `edit.ejs`, `show.ejs`, `new.ejs`) within the `campIn` directory (or main views directory) to ensure consistency and ease of maintenance.
