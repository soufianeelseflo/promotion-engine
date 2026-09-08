import {NextResponse} from "next/server"; import {campaigns} from "@/lib/data"; import {campaignMetrics} from "@/lib/metrics";
export async function GET(){return NextResponse.json({data:campaignMetrics(campaigns),generatedAt:new Date().toISOString()})}
