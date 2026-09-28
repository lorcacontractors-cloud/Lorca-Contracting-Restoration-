import { useState, type FormEvent } from "react";

const field =
  "mt-1 w-full bg-ink-2 border border-line rounded-sm px-3 py-3 font-mono text-[12px] text-paper placeholder:text-ash/50 focus:outline-none focus:border-amber";
const label = "font-mono text-[9px] uppercase tracking-widest text-ash";

export function EstimateForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-5 bg-ink-2 border-l-2 border-mint rounded-sm p-5">
        <h3 className="font-display text-[24px] tracking-tight">Request received.</h3>
        <p className="font-mono text-[11px] text-ash mt-2">
          Thank you. A member of the Lorca team will review your project details and reply within one
          business day. If your project is time-sensitive, call us directly at (905) 555-0142.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
      <div className="anim" style={{ animationDelay: "150ms" }}>
        <label className={label} htmlFor="name">
          Full name
        </label>
        <input id="name" name="name" type="text" required className={field} placeholder="Jordan Ellis" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="anim" style={{ animationDelay: "190ms" }}>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={field} placeholder="you@home.ca" />
        </div>
        <div className="anim" style={{ animationDelay: "230ms" }}>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={field} placeholder="(905) 000-0000" />
        </div>
      </div>
      <div className="anim" style={{ animationDelay: "250ms" }}>
        <label className={label} htmlFor="address">
          Project address / city
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          className={field}
          placeholder="Street address, Mississauga"
        />
      </div>
      <div className="anim" style={{ animationDelay: "270ms" }}>
        <label className={label} htmlFor="projectType">
          Project type
        </label>
        <select id="projectType" name="projectType" required defaultValue="" className={field}>
          <option value="" disabled>
            Select a project type
          </option>
          <option>Custom Patio</option>
          <option>Paver Walkway</option>
          <option>Backyard Renovation</option>
          <option>Indoor Renovation</option>
          <option>Restoration</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="anim" style={{ animationDelay: "310ms" }}>
          <label className={label} htmlFor="budget">
            Budget range
          </label>
          <select id="budget" name="budget" required defaultValue="" className={field}>
            <option value="" disabled>
              Select
            </option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $30,000</option>
            <option>$30,000+</option>
          </select>
        </div>
        <div className="anim" style={{ animationDelay: "350ms" }}>
          <label className={label} htmlFor="timeline">
            Timeline
          </label>
          <select id="timeline" name="timeline" required defaultValue="" className={field}>
            <option value="" disabled>
              Select
            </option>
            <option>ASAP</option>
            <option>Within 1–2 Months</option>
            <option>Flexible / Planning Stage</option>
          </select>
        </div>
      </div>
      <div className="anim" style={{ animationDelay: "390ms" }}>
        <label className={label} htmlFor="description">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          className={field}
          placeholder="Rough size, materials, access to the yard, and what you're hoping to build…"
        />
      </div>
      <button
        type="submit"
        className="anim w-full bg-amber text-ink font-mono font-bold text-[13px] uppercase tracking-widest py-4 rounded-sm"
        style={{ animationDelay: "430ms" }}
      >
        Send project details &rarr;
      </button>
      <p className="font-mono text-[9px] text-ash/60">
        Please note: we do not quote lawn mowing, grass cutting or seasonal garden maintenance. Those
        requests will not receive a response.
      </p>
    </form>
  );
}
