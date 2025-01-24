import mongoose from "mongoose";

const JobsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Job Title is required to continue"],
  },
  description: {
    type: String,
    require: [true, "Job Description is required to continue"],
  },
  email: {
    type: String,
    require: [true, "Email is required to continue"],
  },
  jobType: {
    type: String,
    require: [true, "Job Type is required to continue"],
  },
  jobField: {
    type: String,
    require: [true, "Job Category is required to continue"],
  },
  location: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: [true, "Salary Is Required"],
  },
  deadline: {
    type: Date,
    required: true,
  },
});

const Jobs = mongoose.models.Jobs || mongoose.model("Jobs", JobsSchema);

export default Jobs;
