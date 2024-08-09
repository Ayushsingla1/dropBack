import { permission } from "process";

const mongoose = require("mongoose");

//schema for all the admins(main admin, mall admin, restaurant admin) =>   ALSO MAKE SURE KI .models and .controllers are to be used

export const adminSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    enum: ["mainAdmin", "mallAdmin", "restaurantAdmin"],
    required: true,
  },
});
