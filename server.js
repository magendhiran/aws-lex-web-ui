// Usage: npm start
// Used for local serving and quick dev/testing of the prebuilt files.
// For heavy development, you should instead use the `npm run dev` command
// under the lex-web-ui dir
const express = require('express');
const serveStatic = require('serve-static')
const path = require('path');

// const port = process.env.PORT || 5000;
const publicPath = '/';

const distDir = path.join(__dirname, 'dist');
const configDir = path.join(__dirname, 'src/config');
const websiteDir = path.join(__dirname, 'src/website');
const app = express();

app.use(publicPath, serveStatic(configDir));
app.use(publicPath, serveStatic(websiteDir));
app.use(publicPath, serveStatic(distDir));

// app.listen(port, function () {
//   console.log(`App listening on: http://localhost:${port}`);
// });

// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')
// // create the express app
// const app = express()
// // create middleware to handle the serving the app
// app.use("/", serveStatic ( path.join (__dirname, '/') ) )
// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log a feedback that this is actually running
console.log('Server started on port ' + port)