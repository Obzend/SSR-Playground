# SSR-Playground

## Lifecycle

1. Application gets rendered into a template on the server (src/index.js)
2. The rendered application is sent to the browser
3. The browser renderes the application, then loads the client bundle
4. Client bundle boots up (src/client.client.js)
5. Hydration (React "takes over" the existing rendered app, binds event handlers, etc.)

## Redux Challenges

1. Redux needs different configutaion on the browser vs the server
2. Aspects of authentitaion needs to be handled on the server.
3. Need some way to detect when the initial data load is completed on the server
4. Need state rehydration on the browser

## Routing 

1. Server - [StaticRouter](https://v5.reactrouter.com/web/api/StaticRouter)
2. Client - [BrowserRouter](https://v5.reactrouter.com/web/api/BrowserRouter)
3. Mapping between the route and its loadData function - [React Router Config](https://www.npmjs.com/package/react-router-config)