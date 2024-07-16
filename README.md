# Chat-App
Web Chat App with React, Typescript and Tailwind CSS

Steps-
1- Go to frontend folder and install all node modules
2- Then go to backend folder and create a new terminal
3-  Create a directory in a location where you have write permissions, for example:
    mkdir -p ~/mongo-data ( Use this command )
4- Start MongoDB with the --dbpath option to specify the custom data directory:
    mongod --dbpath ~/mongo-data ( Use this command )
5- Create another terminal and run
    node index.js 

#Optional to check DB, we can install mongoDB compass & connect to mongodb://localhost:27017 then choose chat-app DB  
#Please ensure you have created .env file in your backend folder 

<!-- .env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/chat-app -->
