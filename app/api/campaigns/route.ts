import { NextRequest,NextResponse } from "next/server"; import { campaigns } from "@/lib/data";
export async function GET(){return NextResponse.json({data:campaigns,meta:{count:campaigns.length}})}
export async function POST(req:NextRequest){const body=await req.json().catch(()=>null);if(!body?.name||!body?.code)return NextResponse.json({error:"name and code are required"},{status:400});return NextResponse.json({data:{id:`CMP-${Date.now()}`,status:"draft",...body}},{status:201})}
