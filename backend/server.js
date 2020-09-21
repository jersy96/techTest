const express = require('express');
const cors = require('cors');
const personsRoutes = require('./app/routes/persons');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(personsRoutes.personsRoutes);

const port = 8000;
app.listen(port, () => console.log(`Running on port ${port}`));