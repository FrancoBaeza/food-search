import mongoose from 'mongoose'
import validator from 'validator';
import _ from 'lodash'
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'please provide an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please insert a valid email'],
  },
  password: {
    type: String,
    reqired: [true, 'Please provide a password'],
    minLength: [6, 'Password must be longer than 6 characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (val) {
        // this validates the password and password confirmation
        return val === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  }
});

/////////////////////////// PRE MIDDLEWARES

// hash password
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // this prvents re-hashing the actual password

  this.name = _.startCase(this.name);
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

/////////////////////////// METHODS

UserSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

/////////////////////////// EXPORT 

export default mongoose.models.User || mongoose.model('User', UserSchema);

