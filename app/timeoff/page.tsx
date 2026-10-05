"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">PeopleGrid</p>
        <h1>Time Off</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"name":"C. Nguyen","team":"Support","dates":"Oct 14-16","type":"PTO","status":"Approved"},{"name":"E. Vale","team":"Marketing","dates":"Oct 14-15","type":"PTO","status":"Approved"},{"name":"A. Brooks","team":"Engineering","dates":"Oct 14-18","type":"PTO","status":"Clash"},{"name":"T. Ng","team":"Engineering","dates":"Oct 15-17","type":"PTO","status":"Waitlist"}]} columns={[{"key":"name","label":"Name"},{"key":"team","label":"Team"},{"key":"dates","label":"Dates"},{"key":"type","label":"Type"},{"key":"status","label":"Status"}]} searchKeys={["name","team","dates","type","status"]} />
</section>
    </div>
  );
}
