import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import MainLogo from "../assets/grandterrace-logo.jpeg";
import SubLogosStrip from "../assets/grandterrace-logos-strip.jpeg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/dining", label: "Lounge" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      {/* Top subtle info bar (desktop only) */}
      <div
        className={[
          "hidden md:block border-b border-black/10 bg-white/80 backdrop-blur",
          "transition-all duration-300",
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-12 opacity-100",
        ].join(" ")}
      >
        <div className="container-pad flex h-12 items-center justify-between text-[10px] tracking-[0.28em] uppercase text-black/55">
          <div className="hidden lg:block">Part of Grand Terrace Hotel</div>

          <img
            src={SubLogosStrip}
            alt="Grand Terrace Sub Brands"
            className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition"
            loading="eager"
          />

          <div className="hidden lg:block">Colombo, Sri Lanka</div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={[
          "border-b border-black/10 transition-colors duration-300",
          isScrolled ? "bg-white/80 backdrop-blur" : "bg-white/30 backdrop-blur",
        ].join(" ")}
      >
        <div className="container-pad flex h-20 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div
              className={[
                "rounded-2xl border border-black/10 bg-white shadow-soft",
                "transition-transform duration-300",
                isScrolled ? "p-2" : "p-2.5",
              ].join(" ")}
            >
              <img
                src={MainLogo}
                alt="Grand Terrace"
                className="h-12 w-auto object-contain md:h-14"
                loading="eager"
              />
            </div>

            <div className="hidden sm:block leading-tight">
              <div className="font-display text-lg md:text-xl">Grand Terrace</div>
              <div className="text-[11px] tracking-[0.20em] uppercase text-black/55">
                Dining · Bars · Experiences
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  [
                    "text-[11px] uppercase font-medium tracking-[0.32em] transition-colors",
                    isActive ? "text-black" : "text-black/70 hover:text-black",
                  ].join(" ")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:inline-flex rounded-2xl border border-black/10 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/70 hover:bg-white transition"
              type="button"
            >
              EN / LK
            </button>

            <button
              className="hidden sm:inline-flex rounded-2xl bg-black px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-white hover:bg-black/90 transition"
              type="button"
              onClick={() => {
                // Replace with your modal or WhatsApp link later
                window.location.href = "mailto:infinityresturantsm@gmail.com?subject=Grand%20Terrace%20Booking";
              }}
            >
              Book Now
            </button>

            {/* Mobile menu button */}
            <button
              className="inline-flex lg:hidden rounded-2xl border border-black/10 bg-white/70 p-3 hover:bg-white transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              type="button"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-black/10 bg-white/90 backdrop-blur"
            >
              <div className="container-pad py-5 grid gap-2">
                {NAV.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "rounded-2xl border border-black/10 px-4 py-3 text-sm transition",
                        isActive ? "bg-black text-white" : "bg-white hover:bg-black/5",
                      ].join(" ")
                    }
                  >
                    {n.label}
                  </NavLink>
                ))}

                <button
                  className="mt-2 rounded-2xl bg-black px-4 py-3 text-sm text-white hover:bg-black/90 transition"
                  onClick={() => {
                    setOpen(false);
                    window.location.href =
                      "infinityresturantsm@gmail.com?subject=Grand%20Terrace%20Booking";
                  }}
                  type="button"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
