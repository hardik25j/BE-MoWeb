const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// User Schema full_name,photo,dob,phone_number
const UserSchema = new Schema({

  fullName: {
    type: String
  },
  dob: {
    type: Date 
  },
  phoneNumber: {
    type: String,
  },
  photo: {
    type: String
  },
});

module.exports = Mongoose.model('User', UserSchema);
