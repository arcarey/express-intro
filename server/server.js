
// require express gives us a function
const express = require('express');

// create an instance of express by calling the function returned above. This returns an object
const app = express();

// listen for stuff on this port
const port = 5000;

// express static file serving
// in folder named 'public'
app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening on port:', port);
})
