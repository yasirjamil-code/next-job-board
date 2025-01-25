import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },

//   role: {
//     type: String,
//     default: "Job Seeker",
//   },
// });

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: false }, // Optional for OAuth users
  role: { type: String, default: "job seeker" },
  provider: { type: String, default: "credentials" }, // e.g., credentials, google, github
});
export default mongoose.models.User || mongoose.model("User", UserSchema);
