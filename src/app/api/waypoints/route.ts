import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const baseUrl = "https://anewchanceatlife.co.uk/files/waypoints";
  const numFiles = 7;

  const files = Array(7)
    .fill(0)
    .map((_, i) => `${baseUrl}_${i}.json`);

  const data = await Promise.all(
    files.map(async (file) => {
      const res = await fetch(file);
      return res.json();
    })
  );

  const merged = data.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);

  return NextResponse.json(merged);
}
