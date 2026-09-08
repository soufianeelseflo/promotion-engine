import "./globals.css";
import Link from "next/link";
export const metadata = { title: "promotion-engine", description: "Promotion, pricing and campaign simulation console for e-commerce merchandising teams." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="shell"><header className="topbar"><Link href="/" className="brand">Promotion Engine</Link><nav className="nav"><Link href="/">Overview</Link><Link href="/operations">Operations</Link><Link href="/insights">Insights</Link><Link href="/builder">Builder</Link></nav></header>{children}<footer className="muted" style={{padding:"32px 0 10px",fontSize:12}}>Technical portfolio project · Next.js 16 · React 19 · TypeScript · Tailwind CSS 4</footer></div></body></html>}
