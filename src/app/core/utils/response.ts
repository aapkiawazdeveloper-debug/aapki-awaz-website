import { NextResponse } from "next/server";

export const success = (data: any, status = 200) =>
  NextResponse.json({ success: true, ...data }, { status });

export const error = (message: string, status = 500) =>
  NextResponse.json({ success: false, message }, { status });