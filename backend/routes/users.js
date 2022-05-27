
import express from 'express'
import model from '../models/model.js'
const router = express.Router();

router.get('/application', (req, res ,next) => {
model.find({} , 'fullName')
.then((data) => res.json(data))
.catch(next);

});

router.post('/application', (req, res, next) => {
if (req.body.fullName){
model.create(req.body)
.then((data) => res.json(data))
.catch(next);
}
else {
  res.json({
    error: 'The input field is empty',
  });
}
if (req.body.age){
  model.create(req.body)
  .then((data) => res.json(data))
  .catch(next);
  }
  else {
    res.json({
      error: 'The input field is empty',
    });
  }
  if (req.body.mobile){
    model.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
    }
    else {
      res.json({
        error: 'The input field is empty',
      });
    }
    if (req.body.gym){
      model.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
      }
      else {
        res.json({
          error: 'The input field is empty',
        });
      }
      if (req.body.aerobics){
        model.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
        }
        else {
          res.json({
            error: 'The input field is empty',
          });
        }
        if (req.body.sauna){
          model.create(req.body)
          .then((data) => res.json(data))
          .catch(next);
          }
          else {
            res.json({
              error: 'The input field is empty',
            });
          }
          if (req.body.gender){
            model.create(req.body)
            .then((data) => res.json(data))
            .catch(next);
            }
            else {
              res.json({
                error: 'The input field is empty',
              });
            }
            if (req.body.duration){
              model.create(req.body)
              .then((data) => res.json(data))
              .catch(next);
              }
              else {
                res.json({
                  error: 'The input field is empty',
                });
              }

});

router.delete('/application:id',  (req, res, next) => {
model.findOneAndDelete({
  _id:req.params.id
})
.then((data) => res.json(data))
.catch(next);

});



// express router method to create route for getting users by id


export default router