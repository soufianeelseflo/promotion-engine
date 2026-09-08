import { Campaign } from "./types";
export const campaigns:Campaign[]=[
{id:"CMP-220",name:"Autumn launch",code:"AUTUMN15",type:"percent",value:15,minSpend:700,startsAt:"2026-09-08",endsAt:"2026-09-15",status:"active",segments:["all"],stackable:false,priority:80,redemptions:438,revenue:318420},
{id:"CMP-219",name:"VIP retention",code:"VIP200",type:"fixed",value:200,minSpend:1200,startsAt:"2026-09-10",endsAt:"2026-09-30",status:"scheduled",segments:["vip"],stackable:true,priority:90,redemptions:0,revenue:0},
{id:"CMP-218",name:"Free shipping weekend",code:"SHIPFREE",type:"free_shipping",value:0,minSpend:500,startsAt:"2026-09-12",endsAt:"2026-09-14",status:"scheduled",segments:["all"],stackable:true,priority:60,redemptions:0,revenue:0},
{id:"CMP-217",name:"Sneaker clearance",code:"RUN20",type:"percent",value:20,minSpend:0,startsAt:"2026-09-01",endsAt:"2026-09-20",status:"active",segments:["sneaker-buyers"],stackable:false,priority:70,redemptions:212,revenue:145100}
];
