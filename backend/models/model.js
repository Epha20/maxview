const mongoose =  require('mongoose')

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        
    },
    Age:{
        type: Number,   
    },
    mobile: {
        type: String,
        
        
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
          if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
            throw new Error('Email is not valid.');
          }
        }
      },
    gym: {
        type: String,
        default: false,  
    },
    aerobics: {
        type: String,
        default: false
    },
    sauna: {
        type: String,
        default: false
    },
gender:{
   Male: {type:Boolean},
   Female: {type: Boolean},
},

duration:{
   oneMonth:{type:Boolean},
   threeMonths:{type:Boolean},
   sixMonths:{type:Boolean},
   oneYear:{type:Boolean},

},

}, {
collection:'max'
});



const User = mongoose.model('model', userSchema)

module.exports = User