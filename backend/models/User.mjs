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
    reqired: [true, 'Please provide a password0'],
    minLength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'El campo de verificar contraseña es obligatorio'],
    validate: {
      validator: function (val) {
        // this validates the password and password confirmation
        return val === this.password;
      },
      message: 'Las contraseñas no coinciden',
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

/////////////////////////// EXPORT 

export default mongoose.models.User || mongoose.model('User', UserSchema);

