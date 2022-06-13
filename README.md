# mini-nyt 📰

## Overview

![ezgif com-gif-maker](https://user-images.githubusercontent.com/91504411/173289622-0ca7b52f-e3a0-4fc6-8f52-5118e6de3080.gif)

mini-nyt is a mock take home challenge assigned in the final module in Turing School of Software & Design. mini-nyt consumes 'Top Stories' API from the New York Times(NYT).

## Endpoints

As the app loads, the data is fetched using a GET request to the Top Stories API.

### Example Endpoint

`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey`

### API Key

An API key is required by NYT to consume their APIs. The instructions are found here. Once a key has been created, the app was registered to authenticate access.

By storing the API key in a `.env` file as an environment variable, and adding that file to the `.gitignore` file, I was able to hide the API key.

## Project Management Tools

- Kanban process via [GitHub Projects & Issues](https://github.com/chalstead16/mini-nyt/projects/1)

- Wireframe and Component Structure via [Figma](https://www.figma.com/file/CNfudFaYACVvi0yK7T7Lyb/mini-nyt?node-id=0%3A1) 

![Screen Shot 2022-06-13 at 1 01 06 AM](https://user-images.githubusercontent.com/91504411/173289478-861aa866-1f0e-49c8-a642-7cd0fb17e8f2.png)

![Screen Shot 2022-06-13 at 1 00 26 AM](https://user-images.githubusercontent.com/91504411/173289428-932dd89e-d78f-4711-903c-5df21cf60856.png)

## Learning Goals
- React.js Fundamentals
- Front-End best practices
- Prioritization of MVP
- Basic usability practices & standards
- Clear heirarchy of information
- Asynchronous JavaScript
- React Router (v6)

## Getting Started
1. Clone the repo down to your machine
`$git clone git@github.com:chalstead16/mini-nyt.git`
2. Open the root directory and install dependencies
`$cd mini-nyt`
`$npm i`
3. Start the server to view the app in the browser - the app will run on http://localhost:3000
`$npm start`

## Future Additions
- End-to-End Testing with Cypress
- Favoriting functionality for articles
- Error Handling for no matching searches
- Responsive design for mobile

## Technologies Used
- React.js
- React Router v6
- JavaScript
- HTML
- CSS
- React Dev Tools (Chrome Extension)
- Visual Studio Code
- Figma
- GitHub
- GitHub Projects & Issues
- Ezgif
- [NYT API](https://developer.nytimes.com/docs/top-stories-product/1/overview)