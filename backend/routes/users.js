
const express =require( 'express')
const model =require( '../models/model.js')
const router = express.Router();

router.get('/application', (req, res, next) => {
  model.find({})
    .then((data) => res.json(data))
    .catch(next);

});

router.post('/application', async (req, res, next) => {
  const user = await model.findOne({email:req.body.email})
  if(user)
  {
    res.status(400).send(`user with email ${req.body.email} already exist`);
  }
  else
  {
    const newuser = new model({
      fullName: req.body.fullName,
      age: req.body.age,
      mobile: req.body.mobile,
      email: req.body.email,
      gym: req.body.gym,
      aerobics: req.body.aerobics,
      sauna: req.body.sauna,
      gender: req.body.gender,
      duration: req.body.duration,
    })
    try {
       const user = await newuser.save()
      res.send(user)
    } catch (e) {
      res.send(e)
    }
  }
 
});

router.delete('/application/:id', async(req, res, next) => {
  const user = await model.findById(req.params.id)
  if(!user)
  {
    res.status(400).send("User Not Found");
  }
  else
  {
    model.findOneAndDelete({
      _id: req.params.id
    })
      .then((data) => res.json(data))
      .catch(next)
  }
 

});



// express router method to create route for getting users by id


module.exports = router