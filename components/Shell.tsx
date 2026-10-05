"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","People"],["/timeoff","Time Off"],["/hiring","Hiring"],["/org","Org"],["/payroll","Payroll"],["/alerts","Alerts"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"PTO clash week of 14th","a":"Engineering needs 4 on-call. Suggest stagger: approve 2 now, waitlist 2; offer floating Friday."},{"q":"Offer drop-off","a":"3 offers stalled >5 days. Recruiter nudge + comp FAQ; escalate to hiring manager today."},{"q":"Engagement dip Support","a":"eNPS −6 in Support. Schedule skip-levels; check overtime on night shift."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell ">
      <header className="topbar">
        <div>
          <div className="brand">People<span>Grid</span></div>
          <p style={{ margin: "0.2rem 0 0", fontSize: 11, color: "var(--muted)" }}>Human Soft Neumorph — people ops warmth · <LiveClock /></p>
        </div>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="PeopleGrid" prompts={PROMPTS} />
    </div>
  );
}
