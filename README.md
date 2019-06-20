## Streams App

I created this fun App while learing about React and Redux. This is a very simple App, which i used to learn different React concepts and packages.

### Basic Architecture

![app](https://github.com/Yasir-dev/react-streams-app/blob/master/achitecture.png)


### Set up for running the React App

Clone the repo on your machine

```
git clone https://github.com/Yasir-dev/react-streams-app.git
```

Install the required packages, make sure Node and NPM are installed on you machine

```
npm install
```

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

