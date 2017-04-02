# Simple chat app ![](https://travis-ci.org/GContaldi/node_chat.svg?branch=master)

This is a simple chat app implemented using `nodeJS` and `ReactJS`.
It uses also: `webpack`, `express`, `yarn`, `socket.io`.

## Setup

- Install [`nvm`](https://github.com/creationix/nvm)
- Clone the Github repo:
```
  git clone https://github.com/GContaldi/node_chat.git
```
- Install the node version specified in `.nvmrc` by running
```
nvm install
```
- Install [`yarn`](https://yarnpkg.com/en/) by running
```
brew update
brew ninstall yarn
```
- Install dependencies by running
```
yarn install
```

## Usage

### Start the node server

- Run `npm start` and the app will run at http://localhost:5000.
- The port can be changed by passing it as env variable, like: `PORT=3000 npm start`.

### Build the client app

- To build the client app run `npm run build:client`.
- To continuously build and watch for changes run `npm run build:client -- --watch`.

### Run tests

- To run the tests `npm test`.
- To run the tests and watch for changes run `npm test -- --watch`.

### Lint the code

- To lint the code run `npm run lint`.
