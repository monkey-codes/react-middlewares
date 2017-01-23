
## Redux Middleware

Example of custom redux middleware. It achieves the same primary goal as `redux-promise-middleware` by looking for a Promise object in the action payload. When a Promise is encountered, it waits for the Promise to resolve before dispatching the same action with the resolved promise payload.

```
$ npm install
$ npm run start
```
App should be up on http://localhost:8080

Running `guard` in a separate terminal will also do browser livereload when source changes.
