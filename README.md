===========================> ULTIMATE LOGIN PAGE <===========================

1. Installation Required Modules:
   `npm i express cookie-parser mailtrap bcryptjs dotenv jsonwebtoken mongoose crypto`
   a. express : Express is a lightweight and flexible Node.js framework used for building web applications and APIs efficiently.
   b. cookie-parser : We use cookie-parser in Express to parse and manage cookies in HTTP requests, making it easier to read, set,
   and manipulate cookies in web applications.
   c. mailtrap : We use Mailtrap to safely test, debug, and preview emails sent from an application in a simulated environment without sending them to real recipients
   d. bcryptjs: Used for hashing passwords securely, ensuring that sensitive user information is stored in an encrypted form.
   e. dotenv: Loads environment variables from a .env file into process.env, allowing secure and configurable management of sensitive data like API keys and database credentials.
   g. jsonwebtoken: Used to create and verify JSON Web Tokens (JWTs), typically for handling authentication and authorization in web applications.
   h. mongoose: A MongoDB object modeling tool for Node.js, simplifying database interactions and schema-based data management with MongoDB.
   i. crypto: Provides cryptographic functionalities like hashing, encryption, and decryption, useful for securely handling sensitive data.
   j.nodemon

2. import express => create app => make a localhost listening to 3000 => create basic root
3. create a cluster in mongoDb atlas => copy the URL => add your provided password => copy that total URL => create a file ".env" place=>
   paste the mongoDB_URL in .env
4. create a folder "DB" => create a file "connectDB.js" => import mongoose => make a connection to Database.
5. import dotenv in "index.js" because it will let you use MONGODB_URL link saved in .env file
