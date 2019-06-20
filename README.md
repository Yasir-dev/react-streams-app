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

Create a new file *db.json* under your project root with the following content

```
{
  streams: []
}
```

Configure the start script in *package.json* under scripts section

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
