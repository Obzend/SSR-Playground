# SSR-Playground

## Lifecycle

1. Application gets rendered into a template on the server (src/index.js)
2. The rendered application is sent to the browser
3. The browser renderes the application, then loads the client bundle
4. Client bundle boots up (src/client.client.js)
5. Hydration (React "takes over" the existing rendered app, binds event handlers, etc.)
