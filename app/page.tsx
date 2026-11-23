
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Phone,
  Clock,
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
    desc: "Precise cuts, beautiful styling and treatments tailored to you.",
    price: "From €35",
  },
  {
    number: "02",
    title: "Beauty Rituals",
    desc: "Thoughtful beauty treatments designed around your needs.",
    price: "From €25",
  },
  {
    number: "03",
    title: "Nails & Care",
    desc: "Refined details, timeless finishes and professional care.",
    price: "From €20",
  },
];

const photos = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1000",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], ["0%", "35%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const reveal = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#f5f0e9] text-[#302820] selection:bg-[#a77d64] selection:text-white">
      {/* NAVIGATION */}
      <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-[#f5f0e9]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 md:px-12">
          <a href="#" className="font-serif text-3xl tracking-[0.18em]">
            LIBERTAS<span className="text-[#a77d64]">.</span>
          </a>

          <nav className="hidden items-center gap-10 text-[10px] uppercase tracking-[0.22em] md:flex">
            <a href="#about" className="transition hover:text-[#a77d64]">Our story</a>
            <a href="#services" className="transition hover:text-[#a77d64]">Services</a>
            <a href="#gallery" className="transition hover:text-[#a77d64]">Gallery</a>
            <a href="#contact" className="transition hover:text-[#a77d64]">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden border border-[#302820] px-6 py-3 text-[10px] uppercase tracking-[0.18em] transition hover:bg-[#302820] hover:text-white md:block"
          >
            Book an appointment ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
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
              className="overflow-hidden bg-[#f5f0e9] px-8 md:hidden"
            >
              {["about", "services", "gallery", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block border-t border-[#d8cec2] py-4 text-xs uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[780px] items-center overflow-hidden bg-[#29231f] pt-20 text-white md:min-h-screen">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=2200&q=90"
            alt="Elegant beauty salon interior"
            className="h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#211c18]/90 via-[#211c18]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211c18]/55 to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 py-32 md:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-4xl"
          >
            <p className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#e3c7ae]">
              <span className="h-px w-10 bg-[#c6a58c]" />
              A PLACE TO FEEL YOURSELF
            </p>

            <h1 className="font-serif text-6xl leading-[0.98] tracking-tight md:text-8xl lg:text-[112px]">
              Beauty is
              <br />
              <i className="font-light text-[#dfc3aa]">a feeling.</i>
            </h1>

            <p className="mt-9 max-w-md text-sm leading-8 text-white/75 md:text-base">
              A moment away from the everyday. Discover a thoughtful approach
              to beauty, care and the art of feeling good.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-8">
              <a
                href="#services"
                className="group flex items-center gap-5 bg-[#d6b69d] px-8 py-5 text-[10px] uppercase tracking-[0.2em] text-[#302820] transition hover:bg-white"
              >
                Discover our services
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#about"
                className="text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-white"
              >
                Our philosophy
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-6 flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/60 md:left-16">
          <span className="h-px w-12 bg-white/50" />
          Scroll to explore
        </div>

        <div className="absolute bottom-10 right-8 hidden text-xs tracking-[0.25em] text-white/60 md:block">
          ZVOLEN — SLOVAKIA
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="overflow-hidden px-6 py-28 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1300px] items-center gap-16 md:grid-cols-2 md:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#a77d64]">
              01 — The philosophy
            </p>

            <h2 className="font-serif text-5xl leading-[1.08] md:text-7xl">
              A little time.
              <br />
              <i className="text-[#a77d64]">Just for you.</i>
            </h2>

            <p className="mt-9 max-w-lg text-sm leading-8 text-[#74685e]">
              We believe beauty is personal. It is in the little details, the
              quiet moments and the confidence that comes from feeling like
              yourself. Our salon is a space to slow down and enjoy being taken
              care of.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-4 border-b border-[#a77d64] pb-3 text-[10px] uppercase tracking-[0.2em]"
            >
              Get to know us <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={photos[0]}
              alt="Beauty salon interior"
              className="h-[520px] w-full object-cover md:h-[650px]"
            />

            <div className="absolute -bottom-8 -left-5 bg-[#d8c2ae] p-7 md:-left-12 md:p-10">
              <Sparkles className="mb-4 text-[#80614d]" />
              <p className="font-serif text-2xl italic">
                Beauty in every detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#e9e1d7] px-6 py-28 md:px-16 md:py-36"
      >
        <div className="mx-auto max-w-[1300px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#a77d64]">
                02 — What we do
              </p>
              <h2 className="font-serif text-5xl md:text-7xl">
                The art of <i>care.</i>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#74685e]">
              Thoughtful treatments, skilled hands and attention to every
              detail. Find the experience that feels right for you.
            </p>
          </motion.div>

          <div className="grid border-t border-[#c9b9a9] md:grid-cols-2">
            <div>
              {services.map((service, i) => (
                <motion.button
                  key={service.number}
                  onClick={() => setActiveService(i)}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`flex w-full items-center justify-between border-b border-[#c9b9a9] py-8 text-left transition md:py-10 ${
                    activeService === i
                      ? "pl-4 text-[#a77d64]"
                      : "hover:pl-3"
                  }`}
                >
                  <span className="flex items-center gap-7">
                    <span className="text-[10px] tracking-widest opacity-60">
                      {service.number}
                    </span>
                    <span className="font-serif text-2xl md:text-3xl">
                      {service.title}
                    </span>
                  </span>
                  <ArrowUpRight size={19} />
                </motion.button>
              ))}
            </div>

            <div className="flex min-h-[280px] flex-col justify-center bg-[#d8c7b7] p-9 md:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="mb-8 text-[10px] uppercase tracking-[0.25em] text-[#80614d]">
                    Selected experience
                  </p>
                  <h3 className="font-serif text-4xl">
                    {services[activeService].title}
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-[#665448]">
                    {services[activeService].desc}
                  </p>
                  <p className="mt-8 text-xs uppercase tracking-widest">
                    {services[activeService].price}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-28 md:px-16 md:py-36">
        <div className="mx-auto max-w-[1300px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mb-14 text-center"
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#a77d64]">
              03 — The atmosphere
            </p>
            <h2 className="font-serif text-5xl md:text-7xl">
              A space to <i>unwind.</i>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {photos.map((photo, i) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden"
              >
                <img
                  src={photo}
                  alt={`Salon atmosphere ${i + 1}`}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#332a24] px-6 py-32 text-center text-white md:py-44">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full border border-white/10" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="relative mx-auto max-w-4xl"
        >
          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-[#d6b69d]">
            Your moment starts here
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-8xl">
            Make time for
            <br />
            <i className="text-[#d6b69d]">yourself.</i>
          </h2>

          <a
            href="#contact"
            className="mt-12 inline-flex items-center gap-5 border border-[#d6b69d] px-9 py-5 text-[10px] uppercase tracking-[0.2em] transition hover:bg-[#d6b69d] hover:text-[#332a24]"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#f5f0e9] px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-14 border-b border-[#d8cec2] pb-16 md:grid-cols-3">
            <div>
              <p className="font-serif text-4xl tracking-[0.15em]">
                LIBERTAS.
              </p>
              <p className="mt-5 max-w-xs text-sm leading-7 text-[#74685e]">
                A thoughtful space for beauty, care and a moment just for you.
              </p>
            </div>

            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#a77d64]">
                Find us
              </p>
              <p className="flex items-center gap-3 text-sm">
                <MapPin size={16} /> Zvolen, Slovakia
              </p>
              <p className="mt-4 text-sm text-[#74685e]">
                Hviezdoslavova 24
              </p>
            </div>

            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#a77d64]">
                Say hello
              </p>
              <p className="flex items-center gap-3 text-sm">
                <Phone size={16} /> Contact the salon
              </p>
              <p className="mt-4 flex items-center gap-3 text-sm">
                <span className="text-lg">◎</span> Instagram
              </p>
              <p className="mt-4 flex items-center gap-3 text-sm">
                <Clock size={16} /> By appointment
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-8 text-[9px] uppercase tracking-[0.2em] text-[#928276] md:flex-row">
            <span>© 2026 LIBERTAS BEAUTY SALON</span>
            <span>Designed with intention · ROSEA Studio concept</span>
            <a href="#" className="hover:text-[#302820]">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
