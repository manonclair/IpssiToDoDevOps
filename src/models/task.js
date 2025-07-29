const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true 
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false    
  }
}, {
  timestamps: true  
});

module.exports = Task;
