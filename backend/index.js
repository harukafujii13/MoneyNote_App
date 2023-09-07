const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { readdirSync } = require('fs');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const userRoutes = require('./routes/user.router');
const { db } = require('./db/db');

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 8000;

// Initialize database
db();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// User Routes
app.use('/api/users', userRoutes);

// Dynamically import other routes
readdirSync('./routes').map((route) => {
  app.use('/api/v1', require('./routes/' + route));
});

// For production, serve frontend static files
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

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

// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
// const { readdirSync } = require('fs');
// const { notFound, errorHandler } = require('./middleware/errorMiddleware');
// const { db } = require('./db/db');
// const userRoutes = require('./routes/user.router');

// // Load environment variables
// dotenv.config();

// const PORT = process.env.PORT || 8000;

// // Initialize database
// db();

// const app = express();

// const corsOptions = {
//   origin: 'http://localhost:8000',
// };

// // Middlewares
// app.use(express.json());
// app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // User Routes
// app.use('/api/users', require('./routes/user.router'));

// // Dynamically import other routes
// readdirSync('./routes').map((route) => {
//   app.use('/api/v1', require('./routes/' + route));
// });

// // For production, serve frontend static files
// if (process.env.NODE_ENV === 'production') {
//   const __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname, '/frontend/dist')));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
//   );
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....');
//   });
// }

// // Error Middlewares
// app.use(notFound);
// app.use(errorHandler);

// // Start server
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
