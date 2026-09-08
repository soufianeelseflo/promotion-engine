export type DiscountType="percent"|"fixed"|"free_shipping";
export type CampaignStatus="draft"|"scheduled"|"active"|"paused";
export interface Campaign{id:string;name:string;code:string;type:DiscountType;value:number;minSpend:number;startsAt:string;endsAt:string;status:CampaignStatus;segments:string[];stackable:boolean;priority:number;redemptions:number;revenue:number}
export interface CartLine{sku:string;name:string;qty:number;unitPrice:number;category:string}
export interface Simulation{subtotal:number;discount:number;shipping:number;total:number;applied:string[];warnings:string[]}
