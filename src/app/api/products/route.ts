import { NextResponse } from "../../../../node_modules/next/server";
import { products } from "./../../util/db";
export function GET() {
  const data = products;
  return NextResponse.json({ data });
}
