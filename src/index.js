const express = require('express');
const path = require('path');
const routes = require('./routes');
const initHandlebars = require('./config/handlebars.js');
const initDatabase = require('./config/database.js');

const config = require('./config/config.json')[process.env.NODE_ENV];

const app = express();

initHandlebars(app);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

initDatabase(config.DB_CONNECTION_STRING)
	.then(() => {
		app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));
	})
	.catch((err) => {
		console.log('Application init failed: ', err);
	})



// https://www.youtube.com/watch?v=N3HLTRGssRY