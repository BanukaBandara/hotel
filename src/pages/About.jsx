import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import logo from "../assets/grandterrace-logo.jpeg";

export default function About() {
  return (
    <div className="container-pad py-12">
      <SectionHeading
        eyebrow="About"
        title="A modern heritage dining concept"
        desc="Tell your story here — how the restaurant started, what you serve, and what guests should feel when they visit."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card p-8">
          <div className="font-display text-2xl">Your story</div>
          <p className="mt-3 text-sm text-black/70">
            Replace this text with your real brand story. Keep it short, premium, and emotional: ambience, signature
            flavours, service philosophy, and what makes Grand Terrace unique.
          </p>
          <p className="mt-3 text-sm text-black/70">
            Tip: Add 3–5 key values (quality ingredients, craftsmanship, hospitality, atmosphere, and consistency).
          </p>
        </div>

        <div className="card overflow-hidden">
          <div className="p-8">
            <img
              src={logo}
              alt="Grand Terrace"
              className="w-full rounded-2xl border border-black/10 bg-white object-contain"
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Stat label="Seating" value="(add number)" />
              <Stat label="Private events" value="Yes" />
              <Stat label="Parking" value="(add details)" />
              <Stat label="Reservations" value="Call / WhatsApp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-xs text-black/60">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}
