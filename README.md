# Currency Exchange Widget

## Description

<p>
  This is a widget for displaying currency exchange rates and allowing users to exchange USD for Crypto. It consists of a React front-end client and a Node back-end service (NestJS).
</p>

## Getting Started
  <p>
    These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
  </p>

  ### Prerequisites
    
   - Node.js and npm
   - TypeScript
   - JavaScript
   - Reactjs
   - CSS / React-boostrap
   - Websocket.io
   - MongoDB
   - Docker

## Installation

  1. Clone the repository to your local machine
      ```
      git clone https://github.com/blcdevs/api
      ```
  2. Install the project dependencies by running the following command in the project root folder:
      ```
        $ npm install
      ```    
  3. Start the MongoDB server on your machine and create a new database for the project.

  4. Create a .env file in the root of the project and specify the following environment variables:  

      ```
     - API_BASE=http://api.coinlayer.com/api/
     - API_KEY= coinlayercom_api_key_here
     - DB_URL=mongodb+srv://exhange:You_DB_User_Password_Here@cluster0.67wypio.mongodb.net/exhange - You can use mongo locally with mongodb://localhost:27017/exchage
     - DB_NAME=exchange_rates
     - CRON_TIMEOUT=60000
      ```  
  5. Run the migrations to set up the database
      - Run all seeders
        ```
         md-seed run
        ```
       ### Option 
     - If you'll like to drop existing db, run the below
        ```
        md-seed run --dropdb
        ```

 6. Run the project
        ```
         npm run start:dev
        ```
  7. The server should now be running on http://localhost:3232

# Clone the frontend
    [Frontend](https://github.com/blcdevs/Frontend-assement) 
  
  8. Build the project's Docker image by running the following command in the project root folder:
      ```
      docker build -t exchange-widget-prod
      ```
 9. Start the back-end service by running the following command in the project root folder:
      ```
        docker run -p 3232:3232 exchange-widget-prod
      ``` 
      ### Enter the link below for the api
      ```
      http://localhost:3232/exchanges
      ```
    <p>NOTE: you may get this error: TypeError: Cannot read properties of undefined (reading 'BTC'). That's because my api call to coinlayer.com has exceeded limit of 100 request. You can replace your api in the .env file</p>
  # Demo Link
    [YouTube Link](youtube.com/blcd/exchange_task) 
    [Site Link](youtube.com/blcd/exchange_task) 
    
# Built With
   - Node.js and npm
   - TypeScript
   - JavaScript
   - Reactjs
   - CSS / React-boostrap
   - Websocket.io
   - MongoDB
   - Docker

# License
  <p>
    This project is licensed under the MIT License - see the LICENSE.md file for details.
</p>