
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const services = [
  {
    number: "01",
    title: "Hair & Styling",
    subtitle: "Your signature look.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=90",
  },
  {
    number: "02",
    title: "Skin & Beauty",
    subtitle: "A moment for yourself.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=90",
  },
  {
    number: "03",
    title: "Beauty Care",
    subtitle: "The finishing touch.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1000&q=90",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function ConceptThree() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.5], ["0%", "18%"]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6f1] text-[#37342e]">

      {/* NAVIGATION */}

      <header className="fixed top-0 z-50 w-full border-b border-[#37342e]/10 bg-[#f8f6f1]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 md:px-14">

          <a href="#" className="font-serif text-3xl tracking-[0.16em]">
            LIBERTAS<span className="text-[#b39a72]">.</span>
          </a>

          <nav className="hidden items-center gap-10 text-[11px] tracking-[0.12em] md:flex">
            <a href="#about" className="transition hover:text-[#b39a72]">About</a>
            <a href="#services" className="transition hover:text-[#b39a72]">Services</a>
            <a href="#experience" className="transition hover:text-[#b39a72]">Experience</a>
            <a href="#contact" className="transition hover:text-[#b39a72]">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden bg-[#37342e] px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-white transition hover:bg-[#b39a72] md:block"
          >
            Get in touch ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-[#f8f6f1] px-8 md:hidden"
            >
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="block border-t border-[#37342e]/10 py-5 text-sm"
                >
                  {label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}

      <section className="relative flex min-h-[850px] items-center overflow-hidden pt-20 md:min-h-screen">

        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=2200&q=90"
            alt="Beauty editorial portrait"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#29251f]/70 via-[#29251f]/25 to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-7 py-32 text-white md:px-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-9 flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-[#e8d7b7]"
          >
            <span className="h-px w-12 bg-[#e8d7b7]" />
            BEAUTY. BALANCE. YOU.
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="font-serif text-7xl leading-[0.95] md:text-[125px] lg:text-[155px]"
            >
              Beauty
              <br />
              <i className="font-light text-[#e8d7b7]">in balance.</i>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col gap-9 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-sm text-base leading-8 text-white/80">
              A little time away from everything.
              <br />
              A little more time for yourself.
            </p>

            <a
              href="#about"
              className="group flex w-fit items-center gap-5 border-b border-white/60 pb-4 text-[10px] uppercase tracking-[0.2em]"
            >
              Discover Libertas
              <ArrowDown size={16} className="transition group-hover:translate-y-2" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-9 right-8 text-[10px] tracking-[0.2em] text-white/70">
          ZVOLEN · SLOVAKIA
        </div>
      </section>

      {/* INTRODUCTION */}

      <section id="about" className="px-6 py-28 md:px-16 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-[1150px] text-center"
        >
          <Sparkles className="mx-auto mb-9 text-[#b39a72]" size={26} />

          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-[#a28b66]">
            THE LIBERTAS EXPERIENCE
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Feel good.
            <br />
            <i className="text-[#a28b66]">Look like you.</i>
          </h2>

          <p className="mx-auto mt-9 max-w-xl text-base leading-8 text-[#77736b]">
            Beauty is personal. Your experience should be too.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}

      <section id="services" className="bg-[#eeebe3] px-6 py-28 md:px-16 md:py-36">
        <div className="mx-auto max-w-[1350px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#a28b66]">
                WHAT WE OFFER
              </p>
              <h2 className="font-serif text-5xl md:text-7xl">
                Your beauty.
                <br />
                <i>Our passion.</i>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#77736b]">
              Explore our beauty experiences.
              <br />
              Find what feels right for you.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.button
                key={service.number}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group text-left"
              >
                <div className="relative mb-7 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`h-[390px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[460px] ${
                      activeService === index ? "opacity-100" : "opacity-90"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/0" />

                  <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f6f1] text-[#37342e]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="mb-2 text-[10px] tracking-[0.2em] text-[#a28b66]">
                      {service.number}
                    </p>
                    <h3 className="font-serif text-3xl">{service.title}</h3>
                    <p className="mt-2 text-sm text-[#77736b]">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-12 border-t border-[#cfc9bc] pt-7">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-[#77736b]"
              >
                Selected: <span className="font-medium text-[#37342e]">{services[activeService].title}</span>
                {" "}— Contact the salon for treatment details.
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience" className="px-6 py-28 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1300px] items-center gap-16 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1200&q=90"
              alt="Elegant beauty studio interior"
              className="h-[550px] w-full object-cover md:h-[680px]"
            />

            <div className="absolute -bottom-7 -right-4 bg-[#b39a72] px-8 py-7 text-white md:-right-10 md:px-12 md:py-9">
              <p className="font-serif text-3xl italic">Simply beautiful.</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:pl-10"
          >
            <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#a28b66]">
              A PLACE TO PAUSE
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Take a breath.
              <br />
              <i className="text-[#a28b66]">Take your time.</i>
            </h2>

            <p className="mt-9 max-w-md text-base leading-8 text-[#77736b]">
              Leave the everyday behind and enjoy a moment that belongs to you.
            </p>

            <a
              href="#contact"
              className="mt-12 inline-flex items-center gap-5 border-b border-[#b39a72] pb-4 text-[10px] uppercase tracking-[0.2em] transition hover:text-[#a28b66]"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative overflow-hidden bg-[#37342e] px-6 py-32 text-center text-white md:py-44">

        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1800&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mx-auto max-w-4xl"
        >
          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-[#e8d7b7]">
            YOUR MOMENT STARTS HERE
          </p>

          <h2 className="font-serif text-6xl leading-tight md:text-8xl">
            Make time
            <br />
            <i className="text-[#e8d7b7]">for yourself.</i>
          </h2>

          <a
            href="#contact"
            className="mt-12 inline-flex items-center gap-5 bg-[#e8d7b7] px-10 py-5 text-[10px] uppercase tracking-[0.2em] text-[#37342e] transition hover:bg-white"
          >
            Contact Libertas
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}

      <footer id="contact" className="bg-[#f8f6f1] px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1350px]">

          <div className="grid gap-12 border-b border-[#dedbd2] pb-16 md:grid-cols-3">

            <div>
              <p className="font-serif text-4xl tracking-[0.15em]">
                LIBERTAS<span className="text-[#b39a72]">.</span>
              </p>
              <p className="mt-6 max-w-xs text-sm leading-7 text-[#77736b]">
                Beauty is personal. Make every moment yours.
              </p>
            </div>

            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#a28b66]">
                FIND US
              </p>
              <p className="text-base">Hviezdoslavova 24</p>
              <p className="mt-2 text-sm text-[#77736b]">Zvolen, Slovakia</p>
            </div>

            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#a28b66]">
                GET IN TOUCH
              </p>
              <a href="#contact" className="text-base transition hover:text-[#a28b66]">
                Contact the salon ↗
              </a>
              <p className="mt-3 text-sm text-[#77736b]">
                Appointment information
              </p>
            </div>

          </div>

          <div className="flex flex-col justify-between gap-5 pt-8 text-xs text-[#918b7e] md:flex-row">
            <span>© 2026 LIBERTAS</span>
            <span>VISUAL CONCEPT BY ROSEA STUDIO</span>
            <a href="#" className="hover:text-[#a28b66]">Back to top ↑</a>
          </div>

        </div>
      </footer>

    </main>
  );
}
