import { Link } from "@tanstack/react-router";

const serviceLinks = [
  {
    label: "PATIOS",
    to: "/Servicepatios",
  },
  {
    label: "WALKWAYS",
    to: "/Servicewalkways",
  },
  {
    label: "RETAINING WALLS",
    to: "/Serviceretainingwalls",
  },
  {
    label: "BACKYARDS",
    to: "/Servicebackyards",
  },
  {
    label: "SNOW REMOVAL",
    to: "/Servicesnowremoval",
  },
] as const;

export function SiteNav() {
  return (
    <header className="relative z-50 w-full bg-[#f3f1ec] text-[#151515]">
      {/* =========================================================
          MAIN NAVIGATION
      ========================================================= */}

      <div className="border-b border-black/10">
        <div className="mx-auto flex min-h-[82px] max-w-[1500px] items-center justify-between gap-6 px-6 md:px-10 lg:px-16">
          {/* LOGO */}
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="group flex shrink-0 items-center"
            aria-label="Lorca Contracting home"
          >
            <div>
              <div className="text-xl font-bold uppercase leading-none tracking-[0.12em] md:text-2xl">
                LORCA
              </div>

              <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-black/45 md:text-[10px]">
                Contracting
              </div>
            </div>
          </Link>

          {/* MAIN DESKTOP NAV */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="text-xs font-bold uppercase tracking-[0.18em] transition"
              activeProps={{
                className: "text-black",
              }}
              inactiveProps={{
                className: "text-black/55 hover:text-black",
              }}
            >
              Home
            </Link>

            <a
              href="/#services"
              className="text-xs font-bold uppercase tracking-[0.18em] text-black/55 transition hover:text-black"
            >
              Services
            </a>

            <a
              href="/#estimate"
              className="text-xs font-bold uppercase tracking-[0.18em] text-black/55 transition hover:text-black"
            >
              Contact
            </a>
          </nav>

          {/* CONTACT */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="tel:6472212909"
              className="hidden text-xs font-bold tracking-[0.08em] text-black/55 transition hover:text-black sm:block"
            >
              647-221-2909
            </a>

            <a
              href="/#estimate"
              className="inline-flex items-center justify-center bg-black px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black/75 md:px-6 md:text-xs"
            >
              Get Estimate
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          SERVICE SUB-NAVIGATION
      ========================================================= */}

      <nav
        className="border-b border-black/10 bg-[#ebe8e1]"
        aria-label="Service navigation"
      >
        <div className="mx-auto max-w-[1500px] overflow-x-auto">
          <div className="flex min-w-max lg:min-w-0">
            {serviceLinks.map((service) => (
              <Link
                key={service.label}
                to={service.to}
                activeOptions={{ exact: true }}
                className="relative flex min-h-[54px] items-center justify-center border-r border-black/10 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition duration-200 first:border-l md:px-8 md:text-xs lg:flex-1"
                activeProps={{
                  className:
                    "bg-black text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-white",
                }}
                inactiveProps={{
                  className:
                    "text-black/55 hover:bg-black hover:text-white",
                }}
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
