"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">PeopleGrid</p>
        <h1>Hiring</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="rail-progress" style={{marginBottom:12}}>
          {[["Applied",88],["Screen",62],["Onsite",40],["Offer",22]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}</span></div>)}
        </div><section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"role":"IC3 Engineer","stage":"Offer","candidate":"K. West","age":"6d","status":"Stalled"},{"role":"Support IC2","stage":"Onsite","candidate":"M. Quinn","age":"2d","status":"Active"},{"role":"Designer IC2","stage":"Screen","candidate":"R. Lee","age":"1d","status":"Active"}]} columns={[{"key":"role","label":"Role"},{"key":"stage","label":"Stage"},{"key":"candidate","label":"Candidate"},{"key":"age","label":"Age"},{"key":"status","label":"Status"}]} searchKeys={["role","stage","candidate","age","status"]} />
</section>
    </div>
  );
}
