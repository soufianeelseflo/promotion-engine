import Link from "next/link";
import { CampaignTable } from "@/components/campaign-table";
import { campaigns } from "@/lib/data";
import { detectConflicts } from "@/lib/engine";

const reviewerRoutes = [
  {
    href: "/builder",
    eyebrow: "Authoring",
    title: "Campaign builder",
    copy: "Model offer rules explicitly instead of hiding pricing behavior in checkout conditionals.",
  },
  {
    href: "/operations",
    eyebrow: "Simulation",
    title: "Pricing operations",
    copy: "Exercise campaign precedence and stackability before pricing logic reaches customers.",
  },
  {
    href: "/insights",
    eyebrow: "Observability",
    title: "Campaign insights",
    copy: "Review attribution, redemption performance and conflicts from the same campaign domain.",
  },
];

export default function Page() {
  const active = campaigns.filter((campaign) => campaign.status === "active");
  const scheduled = campaigns.filter((campaign) => campaign.status === "scheduled");
  const revenue = campaigns.reduce((sum, campaign) => sum + campaign.revenue, 0);
  const redemptions = campaigns.reduce((sum, campaign) => sum + campaign.redemptions, 0);
  const conflicts = detectConflicts(campaigns);

  const kpis = [
    {
      label: "Active campaigns",
      value: String(active.length),
      detail: `${scheduled.length} scheduled next`,
    },
    {
      label: "Attributed revenue",
      value: `${revenue.toLocaleString()} MAD`,
      detail: "Across the seeded campaign window",
    },
    {
      label: "Redemptions",
      value: redemptions.toLocaleString(),
      detail: "Across current offers",
    },
    {
      label: "Rule conflicts",
      value: String(conflicts.length),
      detail: "Detected before publication",
    },
  ];

  return (
    <main>
      <section className="hero-panel promo-hero">
        <div>
          <div className="section-title">Merchandising control plane</div>
          <h1 className="hero-title">Ship promotions without margin surprises.</h1>
          <p className="muted hero-copy">
            A campaign workspace for scheduling, precedence, stackability, cart simulation
            and pre-publish conflict detection across concurrent e-commerce offers.
          </p>
        </div>

        <div className="hero-proof">
          <span className="proof-dot promo-dot" />
          <div>
            <strong>Pricing rules stay explicit</strong>
            <p className="muted">Priority · stackability · thresholds · simulation</p>
          </div>
        </div>
      </section>

      <section className="grid-auto" style={{ marginBottom: 18 }}>
        {kpis.map((kpi) => (
          <article key={kpi.label} className="card kpi">
            <span className="muted">{kpi.label}</span>
            <strong>{kpi.value}</strong>
            <span className="muted">{kpi.detail}</span>
          </article>
        ))}
      </section>

      <section className="review-grid">
        {reviewerRoutes.map((route) => (
          <Link key={route.href} href={route.href} className="card review-card">
            <span className="section-title">{route.eyebrow}</span>
            <strong>{route.title}</strong>
            <p className="muted">{route.copy}</p>
            <span className="review-link">Open view →</span>
          </Link>
        ))}
      </section>

      <section className="card queue-card">
        <div className="queue-heading">
          <div>
            <div className="section-title">Campaign registry</div>
            <h2>One place to understand what can change a cart.</h2>
          </div>
          <p className="muted">
            Searchable campaign state with priority, status and attribution visible before an
            operator touches pricing behavior.
          </p>
        </div>
        <CampaignTable rows={campaigns} />
      </section>

      <section className="card decision-card">
        <div>
          <div className="section-title">Pre-publish guardrail</div>
          <h2>Conflicts are a product problem before they become a checkout problem.</h2>
          <p className="muted">
            The engine evaluates overlapping campaigns before publication so merchandising
            teams can see incompatible rules and priority collisions while there is still time
            to fix them safely.
          </p>
        </div>
        <div className="decision-stat">
          <span className="muted">Detected conflicts</span>
          <strong>{conflicts.length}</strong>
          <span>{conflicts.length === 0 ? "Ready to publish" : "Review before publish"}</span>
        </div>
      </section>
    </main>
  );
}
