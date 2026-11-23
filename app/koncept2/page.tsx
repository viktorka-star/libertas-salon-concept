
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Sparkles,
  Plus,
  Minus,
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
    name: "Hair Atelier",
    description:
      "Personalised cuts, signature styling and luxurious hair rituals.",
    price: "From €35",
  },
  {
    number: "02",
    name: "Skin Rituals",
    description:
      "A considered approach to skincare, relaxation and natural radiance.",
    price: "From €25",
  },
  {
    number: "03",
    name: "Nail Studio",
    description:
      "Beautifully refined details, timeless colours and professional care.",
    price: "From €20",
  },
  {
    number: "04",
    name: "Beauty Details",
    description:
      "The finishing touches that make every beauty experience complete.",
    price: "From €15",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ConceptTwo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(0);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "25%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.15]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f1e8e5] text-[#382326] selection:bg-[#713b46] selection:text-white">

      {/* NAVIGATION */}
      <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-[#f1e8e5]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 md:px-14">
          <a href="#" className="font-serif text-3xl tracking-[0.16em]">
            LIBERTAS<span className="text-[#9c5360]">.</span>
          </a>

          <nav className="hidden items-center gap-10 text-[10px] uppercase tracking-[0.22em] md:flex">
            <a href="#philosophy" className="hover:text-[#9c5360]">Philosophy</a>
            <a href="#services" className="hover:text-[#9c5360]">Treatments</a>
            <a href="#experience" className="hover:text-[#9c5360]">Experience</a>
            <a href="#contact" className="hover:text-[#9c5360]">Contact</a>
          </nav>

          <a href="#contact" className="hidden bg-[#713b46] px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-white transition hover:bg-[#4d2930] md:block">
            Reserve your moment ↗
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-[#f1e8e5] px-8 md:hidden"
            >
              {["philosophy", "services", "experience", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block border-t border-[#d8c3c1] py-4 text-xs uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative min-h-[850px] overflow-hidden bg-[#542e36] pt-20 text-[#f8eeea] md:min-h-screen">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=2200&q=90"
            alt="Editorial beauty campaign"
            className="h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#321b22]/90 via-[#542e36]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#321b22]/70 to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1500px] items-center px-6 py-32 md:min-h-screen md:px-16">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-9 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#e5b8b7]"
            >
              <span className="h-px w-12 bg-[#e5b8b7]" />
              THE BEAUTY OF BEING YOU
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-7xl leading-[0.9] tracking-tight md:text-[120px] lg:text-[150px]"
              >
                Feel
                <br />
                <i className="font-light text-[#e9bfc0]">beautiful.</i>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-sm text-sm leading-8 text-white/75">
                Beauty is not about becoming someone else. It is about
                discovering the best feeling of being yourself.
              </p>

              <a
                href="#philosophy"
                className="group flex w-fit items-center gap-5 border-b border-[#e5b8b7] pb-4 text-[10px] uppercase tracking-[0.2em]"
              >
                Explore the experience
                <ArrowDown size={15} className="transition group-hover:translate-y-2" />
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 right-8 text-[9px] uppercase tracking-[0.3em] text-white/60">
          ZVOLEN — SLOVAKIA
        </div>
      </section>

      {/* EDITORIAL STRIP */}
      <section className="overflow-hidden border-b border-[#d9c5c1] bg-[#e7d5d2] py-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-12 whitespace-nowrap"
        >
          {[0, 1, 2, 3].map((item) => (
            <p key={item} className="font-serif text-3xl italic tracking-wide text-[#713b46] md:text-5xl">
              Beauty · Confidence · Care · You ·
            </p>
          ))}
        </motion.div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="px-6 py-28 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1300px] items-center gap-16 md:grid-cols-[1.05fr_0.95fr] md:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-[#9c5360]">
              01 — A different perspective
            </p>

            <h2 className="font-serif text-5xl leading-[1.05] md:text-7xl">
              More than
              <br />
              <i className="text-[#9c5360]">a beauty salon.</i>
            </h2>

            <p className="mt-9 max-w-lg text-sm leading-8 text-[#78666a]">
              A place where beauty meets individuality. Where every detail
              matters, every experience feels personal and taking time for
              yourself becomes something worth celebrating.
            </p>

            <div className="mt-12 flex items-center gap-5">
              <div className="h-px w-16 bg-[#9c5360]" />
              <span className="font-serif text-lg italic text-[#713b46]">
                Your beauty, your way.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1100&q=90"
              alt="Beauty editorial portrait"
              className="h-[580px] w-full object-cover md:h-[700px]"
            />
            <div className="absolute -bottom-7 -left-5 bg-[#713b46] px-8 py-7 text-white md:-left-12 md:px-12 md:py-10">
              <p className="font-serif text-3xl italic">A moment for you.</p>
              <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-[#e5b8b7]">
                LIBERTAS BEAUTY
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#713b46] px-6 py-28 text-[#f8eeea] md:px-16 md:py-36">
        <div className="mx-auto max-w-[1300px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#e5b8b7]">
                02 — Our services
              </p>
              <h2 className="font-serif text-5xl md:text-7xl">
                The beauty <i>edit.</i>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              Discover a selection of beauty experiences designed to make
              every visit feel special.
            </p>
          </motion.div>

          <div className="grid gap-14 border-t border-white/25 pt-5 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              {services.map((service, index) => (
                <motion.button
                  key={service.number}
                  onClick={() => setActive(index)}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex w-full items-center justify-between border-b border-white/20 py-8 text-left transition-all md:py-10 ${
                    active === index ? "pl-4 text-[#e9bfc0]" : "text-white/80 hover:pl-3"
                  }`}
                >
                  <span className="flex items-center gap-7">
                    <span className="text-[10px] tracking-widest text-[#e5b8b7]">
                      {service.number}
                    </span>
                    <span className="font-serif text-2xl md:text-4xl">
                      {service.name}
                    </span>
                  </span>
                  <ArrowUpRight size={20} />
                </motion.button>
              ))}
            </div>

            <div className="flex min-h-[340px] flex-col justify-center bg-[#e7d5d2] p-9 text-[#382326] md:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mb-8 text-[10px] uppercase tracking-[0.25em] text-[#9c5360]">
                    0{active + 1} — Selected treatment
                  </p>
                  <h3 className="font-serif text-4xl md:text-5xl">
                    {services[active].name}
                  </h3>
                  <p className="mt-7 max-w-sm text-sm leading-8 text-[#78666a]">
                    {services[active].description}
                  </p>
                  <p className="mt-9 text-xs uppercase tracking-[0.2em]">
                    {services[active].price}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-28 md:px-16 md:py-40">
        <div className="mx-auto max-w-[1300px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mb-16 text-center"
          >
            <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#9c5360]">
              03 — The experience
            </p>
            <h2 className="font-serif text-5xl md:text-8xl">
              Details make
              <br />
              <i className="text-[#9c5360]">the difference.</i>
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden md:col-span-7"
            >
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1200&q=90"
                alt="Beauty salon interior"
                className="h-[430px] w-full object-cover transition duration-700 hover:scale-[1.03] md:h-[600px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-between bg-[#e7d5d2] p-8 md:col-span-5 md:p-12"
            >
              <Sparkles size={30} className="text-[#9c5360]" />
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#9c5360]">
                  The Libertas feeling
                </p>
                <h3 className="font-serif text-4xl leading-tight md:text-5xl">
                  Slow down.
                  <br />
                  Feel good.
                  <br />
                  Be yourself.
                </h3>
                <p className="mt-7 text-sm leading-8 text-[#78666a]">
                  Every visit is an opportunity to pause, recharge and enjoy
                  the little things that make you feel good.
                </p>
              </div>
              <a href="#contact" className="mt-12 flex items-center justify-between border-b border-[#b99b98] pb-4 text-[10px] uppercase tracking-[0.2em]">
                Discover Libertas <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / DETAILS */}
      <section className="bg-[#e7d5d2] px-6 py-28 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1300px] gap-16 md:grid-cols-2">
          <div>
            <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#9c5360]">
              04 — Your visit
            </p>
            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              A few things
              <br />
              <i>to know.</i>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-8 text-[#78666a]">
              Everything starts with a conversation. Get in touch to discover
              the right experience for you.
            </p>
          </div>

          <div className="border-t border-[#c9aaa7]">
            {[
              ["How can I book an appointment?", "Contact the salon directly to discuss available appointments and the treatment you would like."],
              ["Can I ask for a consultation?", "Absolutely. We recommend discussing your preferences and expectations before choosing a treatment."],
              ["Where can I find the salon?", "You can find Libertas in Zvolen, Slovakia. Contact the salon for directions and appointment details."],
            ].map(([question, answer], index) => (
              <div key={question} className="border-b border-[#c9aaa7]">
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-7 text-left"
                >
                  <span className="font-serif text-xl md:text-2xl">{question}</span>
                  {expanded === index ? <Minus size={18} /> : <Plus size={18} />}
                </button>

                <AnimatePresence>
                  {expanded === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pb-7 text-sm leading-7 text-[#78666a]"
                    >
                      {answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#542e36] px-6 py-32 text-center text-white md:py-44">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1800"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="relative mx-auto max-w-4xl"
        >
          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-[#e9bfc0]">
            Your time. Your beauty.
          </p>
          <h2 className="font-serif text-6xl leading-[1.05] md:text-8xl">
            This moment
            <br />
            <i className="text-[#e9bfc0]">is yours.</i>
          </h2>
          <a
            href="#contact"
            className="mt-12 inline-flex items-center gap-5 bg-[#e9bfc0] px-9 py-5 text-[10px] uppercase tracking-[0.2em] text-[#382326] transition hover:bg-white"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#f1e8e5] px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-12 border-b border-[#d8c3c1] pb-16 md:grid-cols-3">
            <div>
              <p className="font-serif text-4xl tracking-[0.15em]">LIBERTAS.</p>
              <p className="mt-6 max-w-xs text-sm leading-8 text-[#78666a]">
                Beauty, individuality and a little more time for yourself.
              </p>
            </div>

            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#9c5360]">
                Visit us
              </p>
              <p className="text-sm">Hviezdoslavova 24</p>
              <p className="mt-3 text-sm text-[#78666a]">Zvolen, Slovakia</p>
            </div>

            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#9c5360]">
                Connect
              </p>
              <p className="text-sm">Contact the salon</p>
              <p className="mt-3 text-sm text-[#78666a]">Instagram</p>
              <p className="mt-3 text-sm text-[#78666a]">By appointment</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 pt-8 text-[9px] uppercase tracking-[0.2em] text-[#927d7d] md:flex-row">
            <span>© 2026 LIBERTAS BEAUTY SALON</span>
            <span>ROSEA STUDIO — CREATIVE CONCEPT</span>
            <a href="#" className="hover:text-[#713b46]">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
