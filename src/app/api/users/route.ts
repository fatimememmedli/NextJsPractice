import main from "./config";
import { NextResponse } from "next/server";
import User from "./../users/model"
export async function GET(res, req) {
try {
  await main()
  const users = await User.find()
  // console.log(users)
  return new NextResponse(JSON.stringify(users), {status:200})

}
catch(err){
return new NextResponse("Error in fetching posts" + err,{status:500})
}
}
