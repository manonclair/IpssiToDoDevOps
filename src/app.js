const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

require('dotenv').config();
const sequelize = require('./config/database');
const Task = require('./models/task');

sequelize.sync().then(() => {
  console.log(' Database synchronized');
}).catch((err) => {
  console.error('Database sync failed:', err);
});

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.use('/api/tasks', taskRoutes);
app.use(errorHandler);

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
