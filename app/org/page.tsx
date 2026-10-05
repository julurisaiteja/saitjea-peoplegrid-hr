"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">PeopleGrid</p>
        <h1>Org</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"team":"Engineering","hc":84,"manager":"Shah","open":6,"status":"Hiring"},{"team":"Support","hc":42,"manager":"Reyes","open":3,"status":"Watch"},{"team":"Sales","hc":38,"manager":"Reyes","open":2,"status":"Stable"},{"team":"Design","hc":18,"manager":"Patel","open":2,"status":"Hiring"}]} columns={[{"key":"team","label":"Team"},{"key":"hc","label":"HC"},{"key":"manager","label":"Manager"},{"key":"open","label":"Open"},{"key":"status","label":"Status"}]} searchKeys={["team","hc","manager","open","status"]} />
</section>
    </div>
  );
}
