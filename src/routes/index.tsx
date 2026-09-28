import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

/*
|--------------------------------------------------------------------------
| PUBLIC IMAGE URLS
|--------------------------------------------------------------------------
| Public Unsplash URLs only.
| No local "@/assets/" imports.
*/

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=2200&q=85";

const COMMERCIAL_IMAGE =
  "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1800&q=85";

const RESIDENTIAL_IMAGE =
  "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1800&q=85";

const SIDEWALK_IMAGE =
  "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1800&q=85";

const WINTER_IMAGE =
  "https://images.unsplash.com/photo-1516431883659-655d41c09bf9?auto=format&fit=crop&w=1800&q=85";

const SALT_IMAGE =
  "https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&w=1800&q=85";

/*
|--------------------------------------------------------------------------
| SERVICE DATA
|--------------------------------------------------------------------------
*/

const snowServices = [
  {
    number: "01",
    title: "Commercial Snow Plowing",
    description:
      "Snow clearing for commercial properties, parking areas, access lanes and other high-traffic exterior areas.",
  },
  {
    number: "02",
    title: "Residential Snow Removal",
    description:
      "Driveway and property snow clearing for homeowners who want dependable winter property maintenance.",
  },
  {
    number: "03",
    title: "Sidewalk Clearing",
    description:
      "Snow clearing for sidewalks, entrances, pedestrian routes and other areas people need to safely access throughout winter.",
  },
  {
    number: "04",
    title: "Salting & Ice Management",
    description:
      "De-icing service for appropriate paved surfaces to help manage slippery conditions around entrances, walkways and parking areas.",
  },
];

const commercialAreas = [
  "Parking areas",
  "Property entrances",
  "Access lanes",
  "Pedestrian walkways",
  "Building entrances",
  "Loading and service areas",
];

const residentialAreas = [
  "Driveways",
  "Front entrances",
  "Walkways",
  "Sidewalks",
  "Steps",
  "Pedestrian access areas",
];

const winterProcess = [
  {
    number: "01",
    title: "Property Assessment",
    description:
      "We review the property, access points, priority areas and the surfaces that need winter maintenance.",
  },
  {
    number: "02",
    title: "Service Plan",
    description:
      "The required plowing, clearing and ice-management areas are identified before winter service begins.",
  },
  {
    number: "03",
    title: "Snow Clearing",
    description:
      "Snow is cleared from the agreed service areas with attention to entrances, traffic routes and usable access.",
  },
  {
    number: "04",
    title: "Ice Management",
    description:
      "Where included in the service plan, appropriate de-icing material can be applied to designated surfaces when conditions require it.",
  },
];

const faqs = [
  {
    question: "Do you provide commercial snow removal?",
    answer:
      "Yes. Lorca Contracting can provide winter property maintenance for suitable commercial properties, including snow plowing, pedestrian-area clearing and ice-management services.",
  },
  {
    question: "Do you provide residential snow removal?",
    answer:
      "Yes. Residential service can include driveways, entrances, walkways and other agreed exterior access areas.",
  },
  {
    question: "Do you provide salting?",
    answer:
      "Salting and ice-management service can be included for appropriate surfaces as part of the property's winter maintenance plan.",
  },
  {
    question: "Can you clear sidewalks and entrances?",
    answer:
      "Yes. Pedestrian areas such as sidewalks, pathways and entrances can be included in the agreed service scope.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Lorca Contracting is based in Mississauga and serves surrounding GTA communities. Contact us with the property location so we can confirm service availability.",
  },
  {
    question: "Can I arrange service for the winter season?",
    answer:
      "Contact Lorca with the property address, property type and areas requiring service so we can discuss the winter service options available for your property.",
  },
];

export const Route = createFileRoute("/Servicesnowremoval")({
  component: SnowRemovalPage,
  head: () => ({
    meta: [
      {
        title:
          "Snow Removal Mississauga | Commercial & Residential | Lorca Contracting",
      },
      {
        name: "description",
        content:
          "Commercial and residential snow removal in Mississauga and the GTA. Snow plowing, sidewalk clearing, salting and winter property management from Lorca Contracting.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content:
          "Snow Removal in Mississauga | Lorca Contracting",
      },
      {
        property: "og:description",
        content:
          "Commercial and residential snow plowing, sidewalk clearing, salting and winter property maintenance in Mississauga and the GTA.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  }),
});

function SnowRemovalPage() {
  return (
    <div className="min-h-screen bg-[#f3f1ec] text-[#151515]">
      <SiteNav />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[720px] overflow-hidden bg-black">
        <img
          src={HERO_IMAGE}
          alt="Snow covered property in winter"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

        <div className="relative mx-auto flex min-h-[720px] max-w-[1500px] items-end px-6 pb-20 md:px-10 lg:px-16 lg:pb-28">
          <div className="max-w-5xl text-white">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-white/60">
              Snow Plowing · Salting · Winter Maintenance
            </p>

            <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-8xl lg:text-[96px]">
              Winter doesn't
              <br />
              stop the property.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-xl">
              Commercial and residential snow removal, sidewalk clearing,
              salting and winter property maintenance across Mississauga and
              surrounding GTA communities.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
              >
                Request Snow Service
              </a>

              <a
                href="tel:6472212909"
                className="inline-flex items-center justify-center border border-white/40 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Call 647-221-2909
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK SERVICE STRIP
      ========================================================= */}

      <section className="border-b border-black/10 bg-[#e9e5dc]">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-4">
          <div className="border-b border-black/10 px-6 py-7 md:border-b-0 md:border-r md:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              01 / Plowing
            </p>
            <p className="mt-2 font-semibold">Snow Removal</p>
          </div>

          <div className="border-b border-black/10 px-6 py-7 md:border-b-0 md:border-r md:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              02 / Pedestrian
            </p>
            <p className="mt-2 font-semibold">Sidewalk Clearing</p>
          </div>

          <div className="border-b border-black/10 px-6 py-7 md:border-b-0 md:border-r md:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              03 / Ice
            </p>
            <p className="mt-2 font-semibold">Salting</p>
          </div>

          <div className="px-6 py-7 md:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              04 / Winter
            </p>
            <p className="mt-2 font-semibold">Property Management</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Winter Property Maintenance
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
              Keep the property
              <br />
              moving through winter.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-black/60">
              Snow affects more than the appearance of a property. Driveways,
              parking areas, entrances and pedestrian routes all need to remain
              usable when winter weather arrives.
            </p>

            <p className="mt-6 text-base leading-8 text-black/50">
              Lorca Contracting provides snow clearing and winter property
              maintenance for residential and commercial properties in
              Mississauga and surrounding GTA communities.
            </p>

            <p className="mt-6 text-base leading-8 text-black/50">
              The service plan can be built around the areas that matter most
              to the property, from vehicle access and parking to sidewalks,
              entrances and ice-prone pedestrian surfaces.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LARGE WINTER IMAGE
      ========================================================= */}

      <section className="px-6 pb-24 md:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden">
            <img
              src={WINTER_IMAGE}
              alt="Winter snow conditions"
              loading="lazy"
              className="aspect-[16/7] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Mississauga · GTA
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Winter Services
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                Snow is only
                <br />
                part of the job.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/50">
              Winter maintenance can involve vehicle areas, pedestrian access
              and changing ice conditions. The service scope should reflect how
              the property actually needs to function throughout winter.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-white/15 md:grid-cols-2">
            {snowServices.map((service) => (
              <div
                key={service.number}
                className="bg-[#171717] p-8 md:p-10 lg:p-12"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-white/30">
                  {service.number}
                </span>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMERCIAL SNOW REMOVAL
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src={COMMERCIAL_IMAGE}
              alt="Commercial property during winter"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Commercial Snow Removal
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-5xl">
              Keep customers,
              <br />
              staff and vehicles moving.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-black/55">
              Commercial winter maintenance can cover the exterior areas that
              customers, employees, tenants and service vehicles rely on during
              winter conditions.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-black/15 pt-8">
              {commercialAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  {area}
                </div>
              ))}
            </div>

            <a
              href="#estimate"
              className="mt-10 inline-flex bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/75"
            >
              Commercial Estimate
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMERCIAL PROPERTY TYPES
      ========================================================= */}

      <section className="border-y border-black/10 bg-[#e7e3da] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
            Commercial Properties
          </p>

          <div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Retail & Plazas",
              "Office Properties",
              "Commercial Facilities",
              "Multi-Unit Properties",
            ].map((property) => (
              <div
                key={property}
                className="bg-[#e7e3da] px-6 py-8 text-lg font-semibold"
              >
                {property}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESIDENTIAL
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Residential Snow Removal
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-5xl">
              Get out of the
              <br />
              driveway without the shovel.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-black/55">
              Residential winter service can cover the vehicle and pedestrian
              areas around your home so snow clearing doesn't become another
              job waiting for you after every snowfall.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-black/15 pt-8">
              {residentialAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  {area}
                </div>
              ))}
            </div>

            <a
              href="#estimate"
              className="mt-10 inline-flex bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/75"
            >
              Residential Estimate
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={RESIDENTIAL_IMAGE}
              alt="Residential property covered in snow"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          SIDEWALKS
      ========================================================= */}

      <section className="bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={SIDEWALK_IMAGE}
            alt="Snow covered pedestrian walkway"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />

          <div className="lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Sidewalks & Entrances
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-5xl">
              Don't forget the
              <br />
              people on foot.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/55">
              Parking and driveway access are only part of winter property
              maintenance. Pedestrian routes, building entrances, sidewalks
              and steps may also need to be cleared as part of the service
              plan.
            </p>

            <div className="mt-9 border-t border-white/15 pt-8">
              <p className="max-w-xl text-sm leading-7 text-white/45">
                The exact areas included are established with the property
                owner before service begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SALTING / ICE MANAGEMENT
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Salting & Ice Management
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-6xl">
              Snow leaves.
              <br />
              Ice can stay.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-black/55">
              Clearing snow does not always eliminate slippery conditions.
              Where appropriate, de-icing service can be included for
              designated paved surfaces as part of the property's winter
              maintenance plan.
            </p>

            <div className="mt-10 space-y-5 border-t border-black/15 pt-8">
              <div>
                <h3 className="font-semibold">Parking Areas</h3>
                <p className="mt-2 text-sm leading-7 text-black/50">
                  Ice-management service for agreed vehicle areas where
                  appropriate.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Walkways & Entrances</h3>
                <p className="mt-2 text-sm leading-7 text-black/50">
                  De-icing attention can be directed toward pedestrian areas
                  included in the service scope.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Changing Conditions</h3>
                <p className="mt-2 text-sm leading-7 text-black/50">
                  Winter conditions can change after snow clearing, which is
                  why snow and ice management should be considered together.
                </p>
              </div>
            </div>
          </div>

          <img
            src={SALT_IMAGE}
            alt="Winter ice and snow conditions"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      {/* =========================================================
          WINTER MANAGEMENT
      ========================================================= */}

      <section className="border-y border-black/10 bg-[#dcd7cd] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                Winter Property Management
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                Plan before
                <br />
                the snow arrives.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-black/55">
                Every property is different. A commercial parking area has
                different priorities from a residential driveway, and a busy
                entrance may need different attention than a low-traffic
                portion of the property.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/55">
                Establishing the service areas before winter makes it clear
                which vehicle routes, pedestrian areas and ice-management
                zones are included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                How It Works
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                A clear winter
                <br />
                service plan.
              </h2>
            </div>

            <div className="border-t border-black/15">
              {winterProcess.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-black/15 py-9 md:grid-cols-[80px_230px_1fr]"
                >
                  <span className="text-sm font-bold text-black/30">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-black/50">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE AREA
      ========================================================= */}

      <section className="bg-[#171717] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Winter Service Area
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
                Mississauga
                <br />
                & the GTA.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 text-sm text-white/60 sm:grid-cols-3">
              <span>Mississauga</span>
              <span>Brampton</span>
              <span>Oakville</span>
              <span>Milton</span>
              <span>Burlington</span>
              <span>Etobicoke</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCAL SEO CONTENT
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Snow Removal in Mississauga
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
              Winter maintenance
              <br />
              for local properties.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-black/55">
            <p>
              Lorca Contracting provides commercial and residential snow
              removal in Mississauga and surrounding GTA communities.
            </p>

            <p>
              Winter services can include snow plowing, driveway clearing,
              sidewalk and entrance clearing, salting and broader winter
              property maintenance depending on the property and agreed
              service scope.
            </p>

            <p>
              Commercial property owners and homeowners can contact Lorca with
              the property location and the areas requiring winter maintenance
              so we can review the project and confirm service availability.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="border-t border-black/10 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1050px]">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Snow Removal FAQ
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.045em] md:text-5xl">
              Winter service questions.
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg font-semibold">
                  <span>{faq.question}</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-xl font-light transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-3xl pr-10 text-sm leading-7 text-black/50">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section
        id="estimate"
        className="relative overflow-hidden bg-[#d6d0c3] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border-[80px] border-black/5" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Winter Service
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-8xl">
              Get ready before
              <br />
              the next snowfall.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">
              Tell us whether the property is residential or commercial, where
              it is located and which areas need snow and ice management.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:6472212909"
                className="inline-flex items-center justify-center bg-black px-9 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
              >
                Call 647-221-2909
              </a>

              <a
                href="mailto:lorcacontractiong@gmail.com"
                className="inline-flex items-center justify-center border border-black/20 bg-white/20 px-9 py-5 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-white/50"
              >
                Request Snow Service
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-8 border-t border-black/15 pt-8 text-sm md:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                Phone
              </p>

              <a
                href="tel:6472212909"
                className="mt-2 block font-semibold hover:underline"
              >
                647-221-2909
              </a>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                Email
              </p>

              <a
                href="mailto:lorcacontractiong@gmail.com"
                className="mt-2 block break-all font-semibold hover:underline"
              >
                lorcacontractiong@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                Service Area
              </p>

              <p className="mt-2 font-semibold">
                Mississauga · GTA
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="mt-12 inline-block text-xs font-bold uppercase tracking-[0.2em] underline underline-offset-4"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
