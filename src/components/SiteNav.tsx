import { Link } from "@tanstack/react-router";

const chips = [
  "Patios",
  "Walkways",
  "Retaining Walls",
  "Backyards",
  "Interiors",
];

export function SiteNav({ activeChip = "Patios" }: { activeChip?: string }) {
  return (
    <nav className="sticky top-0 z-30 bg-ink/95 backdrop-blur border-b border-line">
      <div className="flex items-center justify-between px-5 py-3">
        <Link to="/" className="font-mono text-[13px] font-bold tracking-tight leading-none">
          <span className="text-amber">LORCA</span>
          <span className="text-ash"> R&amp;C</span>
          <span className="block text-[8px] text-ash/70 tracking-[0.3em] mt-0.5">
            MISSISSAUGA · ON
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/outdoor" className="font-mono text-[10px] uppercase tracking-widest text-ash">
            Outdoor
          </Link>
          <Link to="/indoor" className="font-mono text-[10px] uppercase tracking-widest text-ash">
            Indoor
          </Link>
          <Link
            to="/contact"
            className="font-mono text-[10px] uppercase tracking-widest bg-amber text-ink px-3 py-2 rounded-sm font-bold"
          >
            Estimate
          </Link>
        </div>
      </div>
      <div className="flex gap-1.5 px-5 pb-3 overflow-x-auto">
        {chips.map((chip) => (
          <span
            key={chip}
            className={
              chip === activeChip
                ? "font-mono text-[9px] uppercase tracking-widest text-ink bg-amber px-2 py-1 rounded-sm whitespace-nowrap"
                : "font-mono text-[9px] uppercase tracking-widest text-ash px-2 py-1 rounded-sm border border-line whitespace-nowrap"
            }
          >
            {chip}
          </span>
        ))}
      </div>
    </nav>
  );
}
