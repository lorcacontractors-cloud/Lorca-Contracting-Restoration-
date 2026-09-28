{/* =========================================================
    SERVICE SUB-NAVIGATION
========================================================= */}

<nav
  className="border-b border-black/10 bg-[#ebe8e1]"
  aria-label="Service navigation"
>
  <div className="mx-auto max-w-[1500px] overflow-x-auto">
    <div className="flex min-w-max lg:min-w-0">

      {/* PATIOS */}
      <Link
        to="/Servicepatios"
        activeOptions={{ exact: true }}
        className="relative flex min-h-[54px] items-center justify-center border-r border-black/10 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition duration-200 first:border-l md:px-8 md:text-xs lg:flex-1"
        activeProps={{
          className: "bg-black text-white",
        }}
        inactiveProps={{
          className: "text-black/55 hover:bg-black hover:text-white",
        }}
      >
        PATIOS
      </Link>

      {/* WALKWAYS */}
      <Link
        to="/Servicewalkways"
        activeOptions={{ exact: true }}
        className="relative flex min-h-[54px] items-center justify-center border-r border-black/10 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition duration-200 md:px-8 md:text-xs lg:flex-1"
        activeProps={{
          className: "bg-black text-white",
        }}
        inactiveProps={{
          className: "text-black/55 hover:bg-black hover:text-white",
        }}
      >
        WALKWAYS
      </Link>

      {/* RETAINING WALLS */}
      <Link
        to="/Serviceretainingwalls"
        activeOptions={{ exact: true }}
        className="relative flex min-h-[54px] items-center justify-center border-r border-black/10 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition duration-200 md:px-8 md:text-xs lg:flex-1"
        activeProps={{
          className: "bg-black text-white",
        }}
        inactiveProps={{
          className: "text-black/55 hover:bg-black hover:text-white",
        }}
      >
        RETAINING WALLS
      </Link>

      {/* BACKYARDS */}
      <Link
        to="/Servicebackyards"
        activeOptions={{ exact: true }}
        className="relative flex min-h-[54px] items-center justify-center border-r border-black/10 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition duration-200 md:px-8 md:text-xs lg:flex-1"
        activeProps={{
          className: "bg-black text-white",
        }}
        inactiveProps={{
          className: "text-black/55 hover:bg-black hover:text-white",
        }}
      >
        BACKYARDS
      </Link>

      {/* SNOW REMOVAL */}
      <Link
        to="/Servicesnowremoval"
        activeOptions={{ exact: true }}
        className="relative flex min-h-[54px] items-center justify-center border-r border-black/10 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition duration-200 md:px-8 md:text-xs lg:flex-1"
        activeProps={{
          className: "bg-black text-white",
        }}
        inactiveProps={{
          className: "text-black/55 hover:bg-black hover:text-white",
        }}
      >
        SNOW REMOVAL
      </Link>

    </div>
  </div>
</nav>
