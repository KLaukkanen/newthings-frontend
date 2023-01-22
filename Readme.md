# Frontend for Newthings homework backend

-   Shows a list of countries, and fetches the cities of selected countries
-   You can select multiple countries, and countries can be filtered by population
-   Filter hides countries with population less than their selected value. Hides also their cities. Filter does not reset the selected countries.

# Framework

-   Javascript engine: **Nodejs**
-   Bundler: **vite**
-   Language: **Typescript**
-   Developer tools: **Eslint** and **Prettier**
-   Frontend framework: **React**
-   State management: **React state**
-   Styles: **styled-components**
-   Test runner: **vitest**
-   Frontend testing framework: **react-testing-library**

# How to run

-   npm install
-   npm run dev
-   Vite runs the web server by default on port 5173 (link will show up on terminal). The frontend looks the backend on port 3001.

# How to run tests

-   npm run test

# Self-assessment
My main focus was to set up as realistic running environment as possible. Because of this, I spent some time setting up Eslint and Prettier, since these are usually used when making business software. This is why I also selected Typescript and styled-components.

I also wanted to experiment with some tools that I have not much experience, but have heard that are useful. This is why I opted for Vite instead of the more used Webpack, and wrote the tests using React Testing Library.

One of the things I spent less focus where styling, as creating beautiful UI components would take some time, so I have mostly focused on creating a functional UI with a styling structure that can easily be expanded.
