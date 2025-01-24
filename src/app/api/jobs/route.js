import { ConnectDb } from "@/lib/config/DB";
import Jobs from "@/lib/models/Jobs";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await ConnectDb();
    const jobId = await req.nextUrl.searchParams.get("id");
    if (jobId) {
      console.log(jobId)
      const job = await Jobs.findById(jobId);
      return NextResponse.json({ success: true, job });
    } else {
      const jobs = await Jobs.find({});
      return NextResponse.json({ success: true, jobs });
    }
  } catch (error) {
    return NextResponse.json({ success: false, msg: error });
  }
}

// Post Request,

export async function POST(req) {
  try {
    await ConnectDb();
    const jobData = await req.json();

    // Log the received data to verify it's being sent correctly
    console.log("Received job data:", jobData);

    // Create a job record
    await Jobs.create(jobData);

    // Return a success response
    return NextResponse.json({ success: true, msg: "Job Created" });
  } catch (error) {
    console.error(error); // Log the error for better debugging
    return NextResponse.json({ success: false, msg: error.message });
  }
}
