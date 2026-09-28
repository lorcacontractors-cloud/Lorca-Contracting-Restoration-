import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

/*
|--------------------------------------------------------------------------
| HOMEPAGE IMAGES
|--------------------------------------------------------------------------
| These are public image URLs, so you do NOT need to add them to
| your public/images folder.
*/

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85";

/*
|--------------------------------------------------------------------------
| SERVICE CATEGORY IMAGES
|--------------------------------------------------------------------------
*/

// 01 - CUSTOM PATIOS
const PATIO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

// 02 - WALKWAYS & STEPS
const WALKWAY_IMAGE =
  "https://images.unsplash.com/photo-1590059301004-f6133170e0bf?auto=format&fit=crop&w=1200&q=80";

// 03 - RETAINING WALLS
const RETAINING_IMAGE =
  "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80";

// 04 - BACKYARD RENOVATIONS
const BACKYARD_IMAGE =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80";

/*
|--------------------------------------------------------------------------
| PROJECT IMAGES
|--------------------------------------------------------------------------
*/

const BEFORE_IMAGE =
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85";

const AFTER_IMAGE =
  "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85";

/*
|--------------------------------------------------------------------------
| SERVICES
|--------------------------------------------------------------------------
*/

const services = [
  {
    number: "01",
    title: "Custom Patios",
    label: "Outdoor Living",
    image: PATIO_IMAGE,
    imageAlt: "Interlocking stone patio and outdoor living area",
    description:
      "Custom interlocking patios designed around your home, property and the way you want to use your outdoor space.",
    href: "/servicepatios",
  },
  {
    number: "02",
    title: "Walkways & Steps",
    label: "Entrances",
    image: WALKWAY_IMAGE,
    imageAlt: "Interlocking stone walkway and front entrance steps",
    description:
      "Walkways, entrances and steps designed to connect your property with clean lines and a finished appearance.",
    href: "/servicewalkways",
  },
  {
    number: "03",
    title: "Retaining Walls",
    label: "Structure",
    image: RETAINING_IMAGE,
    imageAlt: "Landscape retaining wall built with stone blocks",
    description:
      "Retaining features that help organize elevation changes while adding structure and definition to the property.",
    href: "/serviceretainingwalls",
  },
  {
    number: "04",
    title: "Backyard Renovations",
    label: "Complete Spaces",
    image: BACKYARD_IMAGE,
    imageAlt:
      "Complete backyard renovation with interlocking and landscaping",
    description:
      "Transform underused outdoor areas into cohesive spaces with patios, walkways, steps and hardscape features.",
    href: "/servicebackyards",
  },
] as const;

/*
|--------------------------------------------------------------------------
| BUILD POINTS
|--------------------------------------------------------------------------
*/

const buildPoints = [
  {
    number: "01",
    title: "Proper Site Preparation",
    description:
      "The finished surface is only as strong as what is underneath it. We focus on excavation, preparation, grading and compaction before the visible work begins.",
  },
  {
    number: "02",
    title: "Built for Ontario",
    description:
      "Ontario weather puts hardscaping through repeated freeze-thaw cycles. Drainage, grading and proper preparation are considered from the beginning.",
  },
  {
    number: "03",
    title: "Clean Installation",
    description:
      "Straight lines, controlled joints, defined edges and a clean finished site are all part of the installation.",
  },
];

/*
|--------------------------------------------------------------------------
| PROCESS
|--------------------------------------------------------------------------
*/

const process = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss the property, your goals, materials, layout and the scope of work.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "We evaluate the existing surface, access, grading, drainage and preparation required.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The project moves through preparation, installation and finishing with attention to the details underneath and on the surface.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "We complete the cleanup, review the finished work and make sure the project is left looking finished.",
  },
];

/*
|--------------------------------------------------------------------------
| FAQ
|--------------------------------------------------------------------------
*/

const faqs = [
  {
    question: "What areas does Lorca Contracting serve?",
    answer:
      "We are based in Mississauga and serve surrounding GTA communities. Contact us with your project address and scope so we can confirm availability.",
  },
  {
    question: "Do you install interlocking patios?",
    answer:
      "Yes. Our hardscaping services include custom patios, walkways, steps and other outdoor hardscape applications.",
  },
  {
    question: "Why is base preparation important?",
    answer:
      "The base supports the finished surface and plays an important role in long-term stability, drainage and resistance to seasonal movement.",
  },
  {
    question: "Can you replace an existing patio or walkway?",
    answer:
      "Yes. We can assess the condition of an existing installation and determine whether repair, rebuilding or replacement makes the most sense.",
  },
];

/*
|--------------------------------------------------------------------------
| ROUTE
|--------------------------------------------------------------------------
*/

export const Route = createFileRoute("/")({
  component: HomePage,

  head: () => ({
    meta: [
      {
        title:
          "Lorca Contracting | Hardscaping & Outdoor Renovations in Mississauga",
      },
      {
        name: "description",
        content:
          "Lorca Contracting provides patios, walkways, retaining walls and backyard renovations in Mississauga and surrounding GTA communities.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content:
          "Lorca Contracting | Hardscaping & Outdoor Renovations",
      },
      {
        property: "og:description",
        content:
          "Premium hardscaping and outdoor renovations across Mississauga and surrounding GTA communities.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  }),
});

/*
|--------------------------------------------------------------------------
| HOME PAGE
|--------------------------------------------------------------------------
*/

function HomePage() {
  return (
    <div className="min-h-screen bg-[#f3f1ec] text-[#151515]">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden bg-black">
        <img
          src={HERO_IMAGE}
          alt="Premium outdoor hardscaping and patio construction in Mississauga"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />

        <div className="relative mx-auto flex min-h-[720px] max-w-[1500px] items-end px-6 pb-20 md:px-10 lg:px-16 lg:pb-28">
          <div className="max-w-5xl text-white">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-white/65">
              Hardscaping · Restoration · Outdoor Construction
            </p>

            <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-8xl lg:text-[100px]">
              Built properly.
              <br />
              Built to last.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-xl">
              Premium patios, walkways, retaining walls and outdoor
              renovations across Mississauga and the GTA — designed around
              the property and built from the ground up.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:6472212909"
                className="inline-flex items-center justify-center bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
              >
                Call Lorca
              </a>

              <a
                href="#estimate"
                className="inline-flex items-center justify-center border border-white/40 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Request an Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-black/10 bg-[#e9e5dc]">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-3">
          <div className="border-b border-black/10 px-6 py-8 md:border-b-0 md:border-r md:px-10 lg:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              01 / Foundation
            </p>

            <p className="mt-2 text-lg font-semibold">
              Proper preparation first.
            </p>
          </div>

          <div className="border-b border-black/10 px-6 py-8 md:border-b-0 md:border-r md:px-10 lg:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              02 / Installation
            </p>

            <p className="mt-2 text-lg font-semibold">
              Clean lines. Tight joints.
            </p>
          </div>

          <div className="px-6 py-8 md:px-10 lg:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              03 / Finish
            </p>

            <p className="mt-2 text-lg font-semibold">
              A job site left finished.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                What we build
              </p>

              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em]">
                Mississauga · GTA
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                Hardscaping that
                <br />
                belongs on the property.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-black/55">
                Every project starts with the property itself — its layout,
                elevation, drainage, access and how you want to use the space.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.number}
                to={service.href}
                className="group bg-[#f3f1ec] p-4 transition hover:bg-white"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-black/5">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 bg-black px-3 py-2 text-xs font-bold tracking-[0.2em] text-white">
                    {service.number}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-6 px-2 pb-5 pt-7">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                      {service.label}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-black/55">
                      {service.description}
                    </p>

                    <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.2em]">
                      View Service
                    </span>
                  </div>

                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15 text-lg transition group-hover:bg-black group-hover:text-white">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE LORCA APPROACH */}
      <section className="bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              The Lorca approach
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
              The surface is
              <br />
              only the beginning.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              A beautiful patio or walkway means very little if the work
              underneath it was rushed. Our approach puts preparation,
              structure and finishing details into the same conversation.
            </p>

            <a
              href="#estimate"
              className="mt-10 inline-flex border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Start a Project
            </a>
          </div>

          <div className="border-t border-white/15">
            {buildPoints.map((point) => (
              <div
                key={point.number}
                className="grid gap-5 border-b border-white/15 py-9 md:grid-cols-[80px_260px_1fr]"
              >
                <span className="text-sm font-bold text-white/30">
                  {point.number}
                </span>

                <h3 className="text-xl font-semibold">{point.title}</h3>

                <p className="text-sm leading-7 text-white/50">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT WORK */}
      <section
        id="projects"
        className="px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                Project work
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                From tired space
                <br />
                to finished space.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/50">
              Real project photography can be added here as the Lorca
              portfolio grows.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="group relative overflow-hidden bg-black">
              <div className="aspect-[4/3]">
                <img
                  src={BEFORE_IMAGE}
                  alt="Outdoor space before renovation"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute left-5 top-5 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
                Before
              </div>
            </div>

            <div className="group relative overflow-hidden bg-black">
              <div className="aspect-[4/3]">
                <img
                  src={AFTER_IMAGE}
                  alt="Finished outdoor hardscape renovation"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute left-5 top-5 bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/10 bg-[#e7e3da] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                How we work
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                A clear process.
                <br />
                No guessing.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-black/50">
                From the first conversation to the final cleanup, every stage
                of the project has a purpose.
              </p>
            </div>

            <div>
              {process.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-t border-black/15 py-9 md:grid-cols-[80px_230px_1fr]"
                >
                  <span className="text-sm font-bold text-black/30">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold">{step.title}</h3>

                  <p className="text-sm leading-7 text-black/50">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO CONTENT */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                Hardscaping in Mississauga
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                Outdoor construction
                <br />
                designed for the GTA.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-black/55">
              <p>
                Lorca Contracting provides hardscaping and outdoor renovation
                services in Mississauga and surrounding GTA communities.
                Projects can include interlocking patios, walkways, steps,
                retaining features and backyard improvements.
              </p>

              <p>
                We approach each project as a complete system rather than
                simply placing a finished surface. Layout, excavation,
                preparation, grading, installation and finishing all
                contribute to how the completed project looks and performs.
              </p>

              <p>
                Whether you're replacing an aging patio, improving a walkway
                or turning an underused backyard into an outdoor living space,
                we'll start with the property and project scope before
                recommending the build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-[#171717] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Service area
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

      {/* FAQ */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Frequently asked
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.045em] md:text-5xl">
              Questions before we build.
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

      {/* ESTIMATE CTA */}
      <section
        id="estimate"
        className="relative overflow-hidden bg-[#d6d0c3] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border-[80px] border-black/5" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Start your project
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-8xl">
              Have a space
              <br />
              that needs work?
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">
              Tell us what you're looking to build, where you're located and
              what you're working with.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:6472212909"
                className="inline-flex items-center justify-center bg-black px-9 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
              >
                Call Lorca
              </a>

              <a
                href="mailto:Lorcacontractors@gmail.com"
                className="inline-flex items-center justify-center border border-black/20 bg-white/20 px-9 py-5 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-white/50"
              >
                Email Lorca
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
                href="mailto:Lorcacontractors@gmail.com"
                className="mt-2 block break-all font-semibold hover:underline"
              >
                Lorcacontractors@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                Location
              </p>

              <p className="mt-2 font-semibold">
                Mississauga · Ontario
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
