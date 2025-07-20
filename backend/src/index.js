const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const summariesRoutes = require('./routes/summaries');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'app_db',
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  dialect: 'postgres',
  retry: {
    max: 5,
    backoffBase: 1000,
    backoffExponent: 1.5,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: console.log
});

// Test database connection with retry logic
const connectWithRetry = async () => {
  let retries = 5;
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log('Database connection has been established successfully.');
      return;
    } catch (error) {
      retries -= 1;
      console.log(`Failed to connect to database. ${retries} retries remaining...`);
      console.log('Connection error details:', error.message);
      if (retries === 0) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
      }
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
};

connectWithRetry();

// Routes
app.use('/api/summaries', summariesRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 