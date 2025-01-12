import { ConnectDb } from "@/lib/config/DB";
import UserModel from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  await ConnectDb();
  const formData = await request.formData();

  const inputData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  await UserModel.create(inputData);

  return NextResponse.json({ success: true, msg: "DataSaved" });
}
 