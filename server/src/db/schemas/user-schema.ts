import { Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

export { UserSchema };
