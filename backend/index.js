const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const { route } = require('./routes/transaction.router');
const app = express();

const userRoutes = require('./routes/user.router');
const errorMiddleware = require('./middleware/errorMiddleware');
const { notFound, errorHandler } = errorMiddleware;

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

require('dotenv').config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
readdirSync('./routes').map((route) =>
  app.use('/api/v1', require('./routes/' + route))
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('listening to port:', PORT);
  });
};

server();

//memo1
//readdirSync("./routes") reads the contents of the ./routes directory synchronously.
//It returns an array of file names present in the directory.

//.map((route) => ...) is called on the array of file names returned by readdirSync.
//This iterates over each file name and executes the provided callback function for each element.

//app.use("/api/v1", require("./routes/" + route)) is the callback function executed for each file name. It registers a route handler to the Express application.

//app.use() is a method in Express that registers middleware or route handlers.
//"/api/v1" is the base path prefix for the routes.
//require("./routes/" + route) dynamically imports the route file based on the current route file name being processed.
//So, for each route file found in the ./routes directory, a route handler is registered
//with the base path of "/api/v1" and the corresponding route file is imported.
