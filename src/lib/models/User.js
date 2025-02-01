import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // Common Fields
  name: { type: String, required: true }, // Full name is optional and will be provided by OAuth (Google/GitHub)
  email: { type: String, unique: true, required: true }, // Email is used for both OAuth and credentials login
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  // Credentials-specific Fields
  passwordHash: { type: String, required: false }, // Will be used for email/password login
  oauthProvider: { type: String, required: false }, // Can be 'go-+ogle' or 'github', if user logged in via OAuth
  oauthId: { type: String, unique: true, required: false }, // ID from the OAuth provider (Google or GitHub)

  // Additional fields can be added as needed for other OAuth providers or specific app requirements
});
export default mongoose.models.User || mongoose.model("User", UserSchema);
