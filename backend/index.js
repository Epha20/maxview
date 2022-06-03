
require('../backend/db.js')
const users =  require( '../backend/routes/users.js')
const express =  require( 'express')  
require( 'dotenv')
const bodyparser = require( 'body-parser')
const mongoose = require( 'mongoose')

//connect database
// connectDB()

//dotenv config


const app = express();

//mongoose
//  .connect(process.env.DB, { useNewUrlParser: true })
//   .then(() => console.log(`Database connected successfully`))
//   .catch((err) => console.log(err));
//Creating API for user
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyparser.json());
app.use('/api', users);

const PORT = process.env.PORT || 5000

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

