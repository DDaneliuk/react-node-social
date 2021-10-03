## Create Node(Express) backend
```javascript
npm init -y
```
Server code wiil live in a folder of the same name: ```server```

Create a script in ```package.json``` that will start our web server when we run it with ```npm start```

## Create an API Endpoint
We want yo use our Node and Express server as an API, so that it can give our React app data, change that data, or do some other operation only a server can do. 

We will simply snd our React app a message that says "Hello from server!" in a JSON object.

The code below creates an endpoint for the route ```/api```

## Create your React frontend
Use create-react-app to create a new React project with the name ```client```
```javascript
npx create-react-app client
```
After that, we will have a React app with all of its dependencies installed.

> The only change we have to make is to add a property called proxy to our package.json file.
> This will allow us to make requests to our Node server without having to provide the origin it is running on (http://3001) every time we make a network request to it:

```
"proxy": "http://localhost:3001"
```

Then we can start up pur React app by running its start script, which is the same as our Node server. 
```
cd client
npm start
```

## Make HTTP Requests from React to Node
Now that we have a working React app, we want to use it to interact with our API.