import { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    tpye: Number,
    default: 0,
  },
  role: {
    type: String,
    default: 'user',
  },
});

export { UserSchema };
