require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes'); // Add others similarly

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes); // Add others like /attendance, /progress

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server running');
    });
  })
  .catch(err => console.log(err));
