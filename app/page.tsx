"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"Headcount",values:[248,250,247,252],suffix:""},{label:"Open reqs",values:[17,16,19,15],suffix:""},{label:"PTO pending",values:[23,21,26,20],suffix:""},{label:"Time-to-fill",values:[34,36,31,35],suffix:"d"},{label:"eNPS",values:[28,24,30,22],suffix:""},{label:"Onboarding",values:[8,7,9,6],suffix:""}];
const ACTIVITY=["PTO clash eng","Offer O-441 stalled","eNPS Support −6","Payroll lock Fri","New hire Day-1 kit"];
const ROWS=[{name:"A. Brooks",team:"Engineering",role:"IC3",loc:"Remote",manager:"Patel",status:"Active"},{name:"C. Nguyen",team:"Support",role:"IC2",loc:"Austin",manager:"Cole",status:"PTO"},{name:"M. Ortiz",team:"Sales",role:"IC3",loc:"NYC",manager:"Reyes",status:"Active"},{name:"L. Kim",team:"Design",role:"IC4",loc:"Remote",manager:"Patel",status:"Active"},{name:"J. Hale",team:"Engineering",role:"IC2",loc:"SF",manager:"Shah",status:"Onboarding"},{name:"S. Park",team:"People",role:"IC3",loc:"Austin",manager:"Cole",status:"Active"},{name:"R. Diaz",team:"Support",role:"IC1",loc:"Remote",manager:"Reyes",status:"Active"},{name:"E. Vale",team:"Marketing",role:"IC3",loc:"NYC",manager:"Patel",status:"PTO"},{name:"T. Ng",team:"Engineering",role:"EM",loc:"SF",manager:"Shah",status:"Active"},{name:"P. Fox",team:"Finance",role:"IC4",loc:"Remote",manager:"Cole",status:"Active"},{name:"K. West",team:"Sales",role:"IC2",loc:"Austin",manager:"Reyes",status:"Offer"},{name:"N. Bloom",team:"Design",role:"IC2",loc:"NYC",manager:"Patel",status:"Onboarding"}];
const AV=["AB","CN","MO","LK","JH","SP","RD","EV","TN","PF"];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>HUMAN SOFT NEUMORPH</p><h1>People grid</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Warm soft controls for headcount, time off, hiring, rituals.</p></header>
<div className="video-film"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="Team"/><div className="cap">PEOPLE FILM · WARMTH</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<section className="panel"><h2>Team presence</h2><div className="avatar-row">{AV.map(a=><div className="avatar" key={a}>{a}</div>)}</div></section>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+3}/></FadeIn>)}</div>
<div className="stat-cards">
<div className="stat-card"><h3>Hiring funnel</h3><div className="rail-progress">{[["Applied",88],["Screen",62],["Onsite",40],["Offer",22]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}</span></div>)}</div></div>
<div className="stat-card"><h3>PTO week of 14th</h3><b>Engineering clash</b><Meter value={70} label="Coverage risk"/><p className="stencil">Approve 2 · waitlist 2</p></div>
<div className="stat-card"><h3>Support eNPS</h3><b>−6</b><Spark seed={9}/><p className="stencil">Skip-levels scheduled</p></div>
</div>
<div className="grid-2"><section className="panel"><h2>Headcount</h2><TrendArea/></section><section className="panel"><h2>Team mix</h2><MixBars/></section></div>
<section className="panel"><h2>People board</h2><FilterTable rows={ROWS} columns={[{key:"name",label:"Name"},{key:"team",label:"Team"},{key:"role",label:"Role"},{key:"loc",label:"Location"},{key:"manager",label:"Manager"},{key:"status",label:"Status"}]} searchKeys={["name","team","role","status"]}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(0);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
