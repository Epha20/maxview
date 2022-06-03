const mongoose =  require('mongoose')

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,   
    },
    Age:{
        type: Number,   
    },
    mobile: {
        type: String,
        required: true,
        unique: true,   
    },
    email: {
        type: String, 
    },
    gym: {
        type: String,
        default: true,  
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