# MERN-todo-list
Simple full stack todo list using the MERN stack (Mongo, Express, React, Node)


## Step 0 Prerequisites 
Fork and then clone this repo. After cloning, go into the directory of the repo and then install the dependencies by typing "npm i" in the terminal. Take a look at the package.json at the dependencies and scripts to have a sense of whats going on.

Note: If at any time you need to fast forward to the next step, type the command "git checkout $(stepName) -f" in your terminal. e.g. "git checkout step1b -f" and you will be ready to do the next step. 

## Step 1 Server
a. Create a folder named "server". Create a basic Express server listening on port 3000 in your server folder in an "index.js" file.
b. Route all requests to the "/api" endpoint through a "router.js" file, then handle your requests in a "controller.js" file. Fill out basic functionality for all CRUD routes, sending back a response with the name of each request method.