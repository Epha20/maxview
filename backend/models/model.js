import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required:true,
    },
    age:{
        type: Number,
        required:true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    gym: {
        type: Boolean,
        defualt: false
    },
    aerobics: {
        type: Boolean,
        defualt: false
    },
    sauna: {
        type: Boolean,
        defualt: false
    },
gender:{
    type:String,
    possibleValues: ['male' , 'female']
},
duration:{
    type:String,
    possibleValues: ['1 month', '3 months', '6 months', '1 year']
},

}, {
    timestamps: true
});



const User = mongoose.model('User', userSchema)

export default User