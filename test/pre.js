import mongoose from "mongoose";
import { User } from "../models/user.model.js"; // Adjust path

await mongoose.connect("mongodb://localhost:27017/test");

const testUser = new User({
  fullname: "Test User",
  email: "testd@example.com",
  username: "test1123",
  password: "plainpassword",
});

await testUser.save();
console.log("Saved user:", testUser);
