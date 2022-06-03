
const express =require( 'express')
const model =require( '../models/model.js')
const router = express.Router();

/*router.get('/', (req, res, next) => {
  model.find({})
    .then((data) => res.json(data))
    .catch(next);

});

router.post('/create', async (req, res, next) => {
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

router.delete('/delete/:id', async(req, res, next) => {
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


module.exports = router*/

// READ Students
router.route('/')
.get((req, res) => {
  model.find((error, data) => {
    if (error) {
      return res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
})

router.route('/create-member').post((req, res, next) => {
  model.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
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
         const user = newuser.save()
        res.send(user)
      } catch (e) {
        res.send(e)
      }
    }
  })
})



// Get Single Student
router.route('/edit-member/:id').get((req, res) => {
  model.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-member/:id').put((req, res, next) => {
  model.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('member updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  model.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router

