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
        API_BASE=http://api.coinlayer.com/api/
        API_KEY= coinlayer.com_api_key
        DB_URL=mongodb+srv://exhange:You_DB_User_Password_Here@cluster0.67wypio.mongodb.net/exhange - You can use mongo locally with mongodb://localhost:27017/exchage
        DB_NAME=exchange_rates
        CRON_TIMEOUT=60000
      ```  
  5. Run the migrations to set up the database
        ```
         npm run migration:run
        ```
  6. Build the project's Docker image by running the following command in the project root folder:
      ```
      docker build -t currency-exchange-widget
      ```
  7. Start the back-end service by running the following command in the project root folder:
      ```
        docker run -p 3000:3000 currency-exchange-widget
      ```

  8. The application should now be running on http://localhost:3000    

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