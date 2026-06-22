import { NextResponse } from "next/server";
import client from "@/lib/db";

export async function POST(req) {
  try {
    const taskData = await req.json();

    const db = client.db(process.env.AUTH_DB_NAME);

    const tasksCollection = db.collection("tasks");

    const result = await tasksCollection.insertOne(taskData);

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}