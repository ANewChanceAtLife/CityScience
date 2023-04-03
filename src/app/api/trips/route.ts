import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch("https://anewchanceatlife.co.uk/files/trips.json");
  const data = await res.json();

  return NextResponse.json(data);
}
