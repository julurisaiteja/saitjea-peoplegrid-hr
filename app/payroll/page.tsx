"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">PeopleGrid</p>
        <h1>Payroll</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="stat-cards">
          <div className="stat-card"><h3>Next lock</h3><b>Friday</b><p className="stencil">Cycle bi-weekly</p></div>
          <div className="stat-card"><h3>Exceptions</h3><b>5</b><Meter value={35}/></div>
          <div className="stat-card"><h3>Onboarding kits</h3><b>8</b><Spark seed={4}/></div>
        </div>
    </div>
  );
}
