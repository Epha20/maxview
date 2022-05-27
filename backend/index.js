
import connectDB from '../backend/db.js'
import users from '../backend/routes/users.js'
import express from 'express'
import dotenv  from 'dotenv'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'

//connect database
connectDB()

//dotenv config

dotenv.config()

const app = express()

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
//Creating API for user
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyparser.json());
app.use('/api/', users);

const PORT = process.env.PORT || 5000

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

