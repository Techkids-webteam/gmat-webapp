'use strict';
import mongoose from 'mongoose';

var UserSchema = mongoose.Schema({
    user_name: String,
    password : String
  },
  {
    collection : 'user'
  }
);

export default mongoose.model('User', UserSchema);
