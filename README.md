## Streams App

I created this fun App while learing about React and Redux. This is a very simple App, which i used to learn different React concepts and packages.

### Basic Architecture

![app](https://github.com/Yasir-dev/react-streams-app/blob/master/achitecture.png)

### Set up API Server (JSON Server)

Create a new directory e.g

```
mkdir my-server
```

Initialize Node project

```
npm init
```

Install json-server (https://www.npmjs.com/package/json-server#getting-started)

```
npm install --save json-server
```

Create a new file **db.json** under your project root with the following content

```
{
  streams: []
}
```

Configure the start script in **package.json** under scripts section

```
"start": "json-server -p 3301 -w db.json"
```

Start the server

```
npm start
```

### Set up RTMP Server (Node-Media-Server)

Create a new directory e.g

```
mkdir my-rmtp-server
```

Initialize Node project

```
npm init
```

Install node-media-server (https://www.npmjs.com/package/node-media-server)

```
npm install --save node-media-server
```

Create a new file *index.js* under your project root with the following content

```
const NodeMediaServer = require('node-media-server');

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        allow_origin: '*'
    }
};

var nms = new NodeMediaServer(config)
nms.run();
```

Configure the start script in *package.json* under scripts section

```
"start": "node index.js"
```

Start the server

```
npm start
```

### Set up for running the React App

Clone the repo on your machine

```
git clone https://github.com/Yasir-dev/react-streams-app.git
```

Install the required packages, make sure Node and NPM are installed on you machine

```
npm install
```

Start the react app

```
npm start
```
You can now browse the app under *http://localhost:3000/* (this address may change depending upon the availibility of the port)

### Steps for creating and starting a new stream

* Login with your google account (this app uses google OAuth for login)
* Create a new stream with a title and description
* Now click on the created stream (you can always edit or delete a stream details)
* Copy the ID from the stream URL
* Install OBS Studio https://obsproject.com/ for streaming from your machine
* After installation you need to so setup up Audio/Video for your stream. you can refer this documentation here https://obsproject.com/wiki/OBS-Studio-Quickstart
* Go to the stream section under settings of your OBS Studio and set the following:

```
Stream Type : Custom Streaming Server

URL : rtmp://localhost/live

Stream key : use the stream id from your react app from the above step
```

* Press start streaming from your OBS Studio
* Go to the stream detail page of your react app, refersh the page (you should see the streaming video now :D)

### Conclusion

This react app mainly focuses on using CRUD operations against an API server and fetch streaming content from RTMP Server. Current proptype have very basic functionality for streaming. This app can be enhanced with some securtiy feature e.g only one user can stream a video using the id from the app. This can be used to understand different React and Redux concepts for learning purposes. 
