# bitwatch
**Bitwatch** is an app that lets you compare market prices for shared cryptocurrency products across the [BNB](https://www.binance.com/en/), [BFX](https://www.bitfinex.com/) and [BTX](https://bittrex.com/) exchanges.

![](https://res.cloudinary.com/rezziemaven/image/upload/v1539071463/screenhot.png)

# Getting Started

This app is divided into three folders: [**frontend**](#frontend), [**backend**](#backend) and [**postman-collection**](#postman-collection). You need both the **frontend** and **backend** running for this app to work properly. You can also use the Postman collection to test the two endpoints provided by the backend. It is recommended that you first start the backend server before running the frontend client.

**Important:** this app is still in development mode. As such, make sure you are in the `develop` branch by entering `git checkout develop` in the terminal in the root level of the folder.

## Backend

**Important:** This server uses the [Moneeda API](https://moneeda.github.io/docs/) to get the list of cryptocurrency products and prices. To use the server properly, you will first have to retrieve a developer token from their [developer portal](https://moneeda.com/developers). This will then need to be included in the .env file (included as a .env.example file in this folder).

1. `cd` from the root level of this repository folder to `backend` in your terminal.
2. Open the folder in your favourite editor (eg. Enter `code .` in your terminal).
3. Open the `.env.example` file and replace the value of the `MONEEDA_API_TOKEN` .env variable with your developer token.
4. Rename the `.env.example` file to `.env`.
5. In the terminal, enter `npm run dev` to start the server.

## Frontend

To start the app, simply `cd` from the top-level of this repository folder to `frontend/bitwatch-client` in your terminal and enter `npm start`. 

When you see a prompt asking you to switch the port, enter `y`. You should now see the app running in your browser.

Follow the on screen instructions to begin using the app.

## Postman Collection

A Postman collection was included for you to test the endpoints. If you already have Postman installed, you can import the collection by clicking `File > Import`.

### How to use collection:

1. Set up a new environment for this collection by clicking the settings icon on the top right corner.
2. Click `Add` to add a new environment.
3. Enter `bitwatch` for the environment name.
4. Enter a variable name of `url` with the value 'http://localhost:3000'.
5. If not already selected, click the dropdown in the top right corner and select `bitwatch`.
6. Start sending requests! Just make sure that the backend is up and running (if you haven't, enter the command `npm run dev`).

### Endpoints

This server uses two endpoints:

- `/products:` Gets names of all shared cryptocurrency products across the BTX, BNB and BFX exchanges.
- `/products/PRODUCT/prices`: Gets price for desired cryptocurrency product. Replace `PRODUCT` with your desired product, eg. `BTC-BAT`.

# Tech Stack

The following tech stack was used to build this app:

**Backend:** [Node.js](https://nodejs.org/), [Koa.js](https://koajs.com/).

**Frontend:** [React.js](https://reactjs.org/), [Redux.js](https://redux.js.org/).

# License

This app is currently under a MIT license.

