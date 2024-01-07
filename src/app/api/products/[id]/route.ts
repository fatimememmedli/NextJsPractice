import { NextRequest, NextResponse } from "next/server";
import { products } from "./../../../util/db";
export async function GET(req, { params }) {
  console.log(params.id);
  let product = products.find((elem) => elem.id == params.id);
  return NextResponse.json(product);
}
