const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('How are you?');
});

// Edit to change port
const port = 8085;

app.listen(port, () => {
	console.log('Listening on port ' + port);
});