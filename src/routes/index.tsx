import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroPatio from "@/assets/hero-patio.jpg";
import svcPatio from "@/assets/svc-patio.jpg";
import svcWalkway from "@/assets/svc-walkway.jpg";
import svcBackyard from "@/assets/svc-backyard.jpg";
import svcInterior from "@/assets/svc-interior.jpg";
import beforeYard from "@/assets/before-yard.jpg";
import afterPatio from "@/assets/after-patio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lorca Restoration & Contracting | Mississauga Hardscaping" },
      {
        name: "description",
        content:
          "Custom patios, paver walkways, retaining walls, backyard transformations and interior renovations built to last in Mississauga, Ontario. Request an estimate.",
      },
      {
        property: "og:title",
        content: "Lorca Restoration & Contracting | Mississauga Hardscaping",
      },
      {
        property: "og:description",
        content:
          "Premium outdoor hardscaping and structural renovation across Mississauga and surrounding communities.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    num: "01",
    numClass: "text-amber",
    img: svcPatio,
    alt: "Interlocking paver patio with a built-in stone fire pit at dusk",
    title: "Custom Patios",
    copy: "Outdoor living areas laid to millimetres.",
  },
  {
    num: "02",
    numClass: "text-coral",
    img: svcWalkway,
    alt: "Paver stone walkway with tight joints and a crisp soldier-course border",
    title: "Paver Walkways",
    copy: "Walks, steps & driveway borders.",
  },
  {
    num: "03",
    numClass: "text-mint",
    img: svcBackyard,
    alt: "Fully transformed backyard with deck and paver patio at dusk",
    title: "Backyards",
    copy: "Full transformations, start to finish.",
  },
  {
    num: "04",
    numClass: "text-ash",
    img: svcInterior,
    alt: "Renovated interior living space with fine millwork detail",
    title: "Interiors",
    copy: "Selective renovation & contracting.",
  },
];

const process = [
  {
    n: "1",
    color: "text-amber",
    title: "Consult & Design",
    copy: "On-site walk-through, scope and a firm quote.",
  },
  {
    n: "2",
    color: "text-coral",
    title: "Site Prep",
    copy: "Excavation, grading and a compacted base.",
  },
  {
    n: "3",
    color: "text-mint",
    title: "Build & Set",
    copy: "Pavers set true, walls laid, joints tight.",
  },
  {
    n: "4",
    color: "text-ash",
    title: "Final & Cleanup",
    copy: "Walk-through, seal, and a spotless handoff.",
  },
];

const guarantees = [
  "Durability engineered for Canadian freeze-thaw.",
  "Millimetre-precision, tight-joint installation.",
  "Clean job-site management, start to finish.",
  "Craftsmanship backed by a written warranty.",
];

function Home() {
  return (
    <div className="bg-ink text-paper min-h-screen">
      <SiteNav activeChip="Patios" />

      <header className="relative overflow-hidden">
        <div className="relative h-[430px]">
          <img
            src={heroPatio}
            alt="Finished interlocking paver patio with a low retaining wall and warm string lights at dusk"
            width={1024}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/10" />
          <div className="absolute inset-0 px-5 flex flex-col justify-end pb-8">
            <div
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber anim"
              style={{ animationDelay: "40ms" }}
            >
              Hardscapers · Restorers
            </div>

            <h1
              className="font-display text-[52px] leading-[0.92] tracking-tight text-paper mt-3 anim text-balance"
              style={{ animationDelay: "120ms" }}
            >
              Built to
              <br />
              the joint.
            </h1>

            <p
              className="font-mono text-[11px] text-ash mt-4 max-w-[34ch] anim text-pretty"
              style={{ animationDelay: "200ms" }}
            >
              Premium outdoor hardscaping &amp; structural renovations across Mississauga, set true on
              a compacted base — no shortcuts, no soft edges.
            </p>

            <Link
              to="/contact"
              className="anim mt-5 inline-flex items-center justify-center gap-2 bg-amber text-ink font-mono font-bold text-[12px] uppercase tracking-widest px-5 py-3.5 rounded-sm"
              style={{ animationDelay: "320ms" }}
            >
              Request an estimate &rarr;
            </Link>
          </div>
        </div>
      </header>

      <section className="px-5 py-9">
        <div className="flex items-end justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber anim">
              (a) What we build
            </div>

            <h2
              className="font-display text-[30px] tracking-tight mt-2 anim"
              style={{ animationDelay: "60ms" }}
            >
              What we build.
            </h2>
          </div>

          <div className="font-mono text-[9px] text-ash text-right leading-tight">
            EST.
            <br />
            2014
          </div>
        </div>

        <p className="font-mono text-[11px] text-ash mt-4 max-w-[46ch] text-pretty">
          Every Lorca project is engineered from the base up by the same crew that quotes it. Whether
          you're rebuilding a failed patio, adding a walkway, reclaiming a backyard or reworking a room
          inside, the standard doesn't change: correct excavation, correct base, correct finish.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="anim bg-ink-2 border border-line rounded-sm p-4"
              style={{ animationDelay: `${80 + i * 60}ms` }}
            >
              <div className={`font-mono text-[9px] ${s.numClass}`}>{s.num}</div>

              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                width={640}
                height={640}
                className="aspect-square w-full object-cover rounded-sm my-3"
              />

              <h3 className="font-display text-[19px] tracking-tight leading-none">
                {s.title}
              </h3>

              <p className="font-mono text-[10px] text-ash mt-1.5">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-9 border-t border-line">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber anim">
          (b) The Lorca process
        </div>

        <h2
          className="font-display text-[30px] tracking-tight mt-2 anim"
          style={{ animationDelay: "60ms" }}
        >
          Four steps,
          <br />
          clean finish.
        </h2>

        <div className="mt-5 space-y-2.5">
          {process.map((p, i) => (
            <div
              key={p.n}
              className="anim flex gap-4 bg-ink-2 border border-line rounded-sm p-4"
              style={{ animationDelay: `${80 + i * 60}ms` }}
            >
              <span className={`font-display text-[34px] leading-none ${p.color}`}>
                {p.n}
              </span>

              <div>
                <h3 className="font-mono font-bold text-[13px] uppercase tracking-wide">
                  {p.title}
                </h3>

                <p className="font-mono text-[10px] text-ash mt-1">
                  {p.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-8 border-t border-line">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber anim">
          (c) Quality guarantee
        </div>

        <ul className="mt-4 space-y-3">
          {guarantees.map((g, i) => (
            <li
              key={g}
              className="anim flex gap-3 font-mono text-[11px] text-paper/90"
              style={{ animationDelay: `${60 + i * 60}ms` }}
            >
              <span className="text-amber">—</span> {g}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 py-9 border-t border-line">
        <div className="flex items-end justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber anim">
              (d) Transformations
            </div>

            <h2
              className="font-display text-[30px] tracking-tight mt-2 anim"
              style={{ animationDelay: "60ms" }}
            >
              Before / After
            </h2>
          </div>

          <span className="font-mono text-[9px] text-ash">
            MISSISSAUGA · GALLERY
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <div className="anim relative" style={{ animationDelay: "80ms" }}>
            <img
              src={beforeYard}
              alt="Backyard before construction: bare soil and patchy grass"
              loading="lazy"
              width={640}
              height={640}
              className="aspect-square w-full object-cover rounded-sm"
            />

            <span className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest bg-ink/90 text-ash px-2 py-1 rounded-sm">
              Before
            </span>
          </div>

          <div className="anim relative" style={{ animationDelay: "140ms" }}>
            <img
              src={afterPatio}
              alt="Same backyard after construction: paver patio, fire pit and retaining wall"
              loading="lazy"
              width={640}
              height={640}
              className="aspect-square w-full object-cover rounded-sm"
            />

            <span className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest bg-amber text-ink px-2 py-1 rounded-sm font-bold">
              After
            </span>
          </div>
        </div>

        <blockquote
          className="anim mt-5 bg-ink-2 border-l-2 border-amber rounded-sm p-4"
          style={{ animationDelay: "200ms" }}
        >
          <p className="text-[13px] text-paper/90 leading-relaxed">
            "Lorca turned a mud patch into the room we actually live in. Clean crew, tight work,
            exactly on schedule."
          </p>

          <footer className="font-mono text-[10px] text-ash mt-3">
            — D. Kowalski · Mississauga · Patio + Retaining Wall
          </footer>
        </blockquote>
      </section>

      <section className="px-5 py-9 border-t border-line">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber anim">
          (e) Estimate
        </div>

        <h2
          className="font-display text-[34px] tracking-tight mt-2 anim"
          style={{ animationDelay: "60ms" }}
        >
          Book a
          <br />
          consultation.
        </h2>

        <p
          className="font-mono text-[11px] text-ash mt-3 max-w-[38ch] anim text-pretty"
          style={{ animationDelay: "120ms" }}
        >
          Tell us what you're building. We respond within one business day. Routine lawn-care requests
          are outside our scope.
        </p>

        <Link
          to="/contact"
          className="anim mt-5 inline-flex w-full items-center justify-center bg-amber text-ink font-mono font-bold text-[13px] uppercase tracking-widest py-4 rounded-sm"
          style={{ animationDelay: "180ms" }}
        >
          Start your estimate &rarr;
        </Link>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
          <div className="font-mono text-[10px] text-ash leading-relaxed">
            <div className="text-paper">647-221-2909</div>
            <div>lorcacontractiong@gmail.com</div>
            <div>Mississauga + surrounding areas</div>
          </div>

          <div className="font-mono text-[9px] uppercase tracking-widest text-mint">
            Replies &lt; 1 biz day
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
