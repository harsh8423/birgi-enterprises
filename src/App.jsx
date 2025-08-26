import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ⚠️ Place your product image at: src/assets/vermicompost.png
// Then update the path below if needed
import product from "./assets/product.png";
import Logo from "./assets/logo.png";
import P5kg from "./assets/5kg.jpg";
import P1kg from "./assets/1kg.jpg";
import earthwormImg from "./assets/earthworm.jpg";
import P10kg from "./assets/10kg.jpg";
// --- Shared animation presets ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const pop = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

function Pill({ children }) {
  return (
    <motion.span
      variants={pop}
      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-green-900 shadow-sm ring-1 ring-green-700/10 backdrop-blur"
    >
      {children}
    </motion.span>
  );
}

function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative py-20 ${className}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50 via-white to-white" />
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-lime-200/50 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} className="mb-10">
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold tracking-tight text-green-900 md:text-4xl">
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p variants={fadeUp} className="mt-2 max-w-2xl text-base text-gray-600">
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function Navbar() {
  const links = [
    ["About", "#about"],
    ["Products", "#products"],
    ["Why Us", "#why-us"],
    ["Shipping", "#shipping"],
    ["Testimonials", "#testimonials"],
    ["FAQs", "#faqs"],
    ["Contact", "#contact"],
  ];
  return (
    <div className="sticky top-0 z-50 border-b border-green-900/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <motion.div 
              className="w-30 h-20 lg:w-14 lg:h-10 rounded-2xl overflow-hidden"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={Logo} 
                alt="Code Sangam Logo" 
                className="w-full h-full "
              />
            </motion.div>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-green-900/80 hover:text-green-900">
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/919876109062"
            target="_blank"
            className="rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-800"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Decorative arcs - hidden on small screens */}
      <svg className="pointer-events-none absolute -right-20 -top-20 h-[520px] w-[520px] text-green-200 hidden md:block" viewBox="0 0 200 200" fill="none">
        <path d="M0 150 C60 120, 140 180, 200 140" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
        <path d="M0 120 C60 90, 140 150, 200 110" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
        <path d="M0 90 C60 60, 140 120, 200 80" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      </svg>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-4 flex flex-wrap gap-2">
            <Pill>Since 2009</Pill>
            <Pill>100% Organic</Pill>
            <Pill>Pan-India Shipping</Pill>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-green-900 md:text-6xl">
            Farm Fresh Vermicompost
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-700">
          <i>Let’s Go Organic</i>
          </p>
          <p className="mt-4 max-w-xl text-lg text-gray-700">
            The name that stands for quality. Enrich your soil naturally and help your crops flourish.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919876109062"
              target="_blank"
              className="inline-flex items-center justify-center rounded-2xl bg-green-700 px-6 py-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-800 active:translate-y-0"
            >
              Enquire on WhatsApp
            </a>
            <a href="#products" className="inline-flex items-center justify-center rounded-2xl border border-green-700/20 bg-white px-6 py-3 font-semibold text-green-900 shadow-sm hover:bg-green-50">
              View Products
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
          <motion.img
            src={product}
            alt="Farm Fresh Vermicompost Pack"
            className="mx-auto w-[320px] drop-shadow-2xl md:w-[420px]"
            initial={{ rotate: -6 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          />
          {/* floating badge */}
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.2 }}
            className="absolute -right-4 top-6 rounded-full bg-gradient-to-br from-lime-400 to-blue-500 px-4 py-2 text-sm font-bold text-green-950 shadow-xl"
          >
            15+ Years of Trust
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

function About() {
  return (
    <Section
      id="about"
      title="About Birgi Enterprises"
      subtitle="Founded in 2009 by Mr. Harmohit Singh, we champion organic farming across India with our flagship Farm Fresh Vermicompost."
    >
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div variants={fadeUp} className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-green-900">Our Mission</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>• Support sustainable agriculture</li>
            <li>• Reduce dependency on harmful chemicals</li>
            <li>• Provide affordable organic alternatives</li>
            <li>• Contribute to a greener, healthier future</li>
          </ul>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-green-900">Who We Serve</h3>
          <p className="mt-3 text-gray-700">Farmers, nurseries, hotels, schools, societies and home gardeners across India who seek better soil fertility and long-term crop health.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Amritsar, Punjab</Pill>
            <Pill>Pan-India Customers</Pill>
            <Pill>Quality First, Always</Pill>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
const products = [
  { size: "1 kg", desc: "Perfect for kitchen gardens, houseplants & terrace gardens.", cta: "Order on WhatsApp", img: P1kg },
  { size: "5 kg", desc: "Great for small farms, nurseries & bulk gardening.", cta: "Order on WhatsApp", img: P5kg },
  { size: "10 kg", desc: "Ideal for large-scale farming & commercial use.", cta: "Order on WhatsApp", img: P10kg },
  { size: "Earthworms", desc: "Live earthworms for starting your own composting system.", cta: "Enquire on WhatsApp", img: earthwormImg },
];

function Products() {
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <Section id="products" title="Our Products" subtitle="Choose the size that suits your needs or start composting with live earthworms.">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-140px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {products.map((p) => (
          <motion.div
            key={p.size}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm"
          >
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-300/30 blur-2xl transition group-hover:scale-125"
            />
            <motion.img
              src={p.img}
              alt={p.size}
              className="mx-auto mb-4 h-32 w-32 object-contain cursor-pointer"
              onClick={() => setZoomImg(p.img)} // 👈 open zoom
            />
            <h3 className="text-xl text-center font-extrabold text-green-900">{p.size}</h3>
            <p className="mt-2 text-sm text-gray-700">{p.desc}</p>

            {/* WhatsApp Enquiry with prefilled message */}
            <a
              href={`https://wa.me/919876109062?text=Hello, I’d like to enquire about the ${encodeURIComponent(p.size)} package of vermicompost.`}
              target="_blank"
              className="mt-5 inline-flex rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-800"
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomImg && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImg(null)} // close when clicking outside
          >
            <motion.img
              src={zoomImg}
              alt="Zoomed product"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function WhyUs() {
  const benefits = [
    "Boosts soil fertility & microbial activity",
    "Increases water-holding capacity",
    "Enhances root growth & plant strength",
    "Improves crop yield and quality",
    "Eco-friendly, safe for plants & people",
  ];

  return (
    <Section id="why-us" title="Why Choose Farm Fresh Vermicompost?" subtitle="Unlike chemical fertilizers, our compost improves soil and crop health in the long term.">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.ul variants={fadeUp} className="space-y-3 rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-gray-800">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-green-600" /> {b}
            </li>
          ))}
        </motion.ul>

        {/* Comparison card */}
        <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-green-900/10 bg-white shadow-sm">
          <div className="grid grid-cols-3 bg-green-50 px-6 py-4 items-center justify-center text-xs font-bold uppercase tracking-wide text-green-900">
            <div>Feature</div>
            <div >Vermicompost</div>
            <div >Chemical</div>
          </div>
          <div className="divide-y divide-green-900/10">
            {[
              ["Soil Health", "Improves continuously", "Degrades over time"],
              ["Yield", "Sustainable long-term growth", "Only short-term boost"],
              ["Safety", "100% Natural", "Harmful chemicals"],
              ["Cost", "Affordable & lasting", "High recurring"],
            ].map(([feature, good, bad]) => (
              <div key={feature} className="grid grid-cols-3 items-center px-6 py-4 text-sm">
                <div className="font-semibold text-green-900">{feature}</div>
                <div className="text-green-700">{good}</div>
                <div className="text-red-600">{bad}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Shipping() {
  const points = [
    "Eco-friendly packaging that preserves freshness",
    "Orders delivered within a few working days (location dependent)",
    "Order updates shared directly on WhatsApp",
    "Bulk orders available for farmers, nurseries & agri-suppliers",
  ];
  return (
    <Section id="shipping" title="Shipping & Delivery" subtitle="Fast and reliable delivery to every corner of India.">
      <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {points.map((p) => (
          <motion.li key={p} variants={fadeUp} className="rounded-2xl border border-green-900/10 bg-white p-5 shadow-sm">
            {p}
          </motion.li>
        ))}
      </motion.ul>
      <div className="mt-6">
        <a href="https://wa.me/919876109062" target="_blank" className="inline-flex rounded-2xl bg-green-700 px-5 py-3 text-white shadow hover:bg-green-800">Enquire on WhatsApp about delivery timelines</a>
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Switched from chemicals to Farm Fresh Vermicompost — soil feels alive, and yields improved!",
      name: "Guru Nanak nursery",
    },
    {
      quote:
        "Perfect for my terrace garden. Plants are healthier and greener than ever.",
      name: "Golden Nursery",
    },
    {
      quote:
        "Timely delivery and great quality. Highly recommended for nurseries.",
      name: "Khan Nursery ",
    },
  ];

  return (
    <Section id="testimonials" title="What Our Customers Say" subtitle="Loved by farmers, nurseries and home gardeners across India.">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: [0, -600] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          {items.concat(items).map((t, idx) => (
            <div key={idx} className="w-[360px] shrink-0 rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
              <p className="text-gray-800">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-green-900">{t.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    [
      "What is Vermicompost?",
      "Vermicompost is an organic fertilizer produced using earthworms that convert waste into nutrient-rich manure.",
    ],
    ["Is it safe for all types of plants?", "Yes! Suitable for crops, vegetables, fruits, flowers and potted plants."],
    ["Do you deliver across India?", "Yes, we ship to all states of India within a few working days."],
    ["What payment options do you provide?", "We accept UPI, Bank Transfer, and Cash on Delivery (for select locations)."],
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faqs" title="Frequently Asked Questions">
      <div className="mx-auto max-w-3xl">
        {faqs.map(([q, a], i) => (
          <div key={q} className="mb-3 overflow-hidden rounded-xl border border-green-900/10 bg-white">
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between p-4 text-left">
              <span className="font-semibold text-green-900">{q}</span>
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-xl text-green-700">+</motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-700"
                >
                  {a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact Us" subtitle="We’d love to assist you with your farming and gardening needs!">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-green-900">Address</h4>
          <p className="mt-2 text-gray-700">Amritsar, Punjab, India</p>
        </div>
        <div className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-green-900">Contact</h4>
          <p className="mt-2 text-gray-700">Owner: Mr. Harmohit Singh</p>
          <p className="mt-1 text-gray-700">
            Phone: <a href="tel:+919876109062" className="text-green-700">+91 9876109062</a>
          </p>
          <p className="mt-1 text-gray-700">
            Email: <a href="mailto:birgienterprises@gmail.com" className="text-green-700">birgienterprises@gmail.com</a>
          </p>
        </div>
        <div className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-green-900">Get in Touch</h4>
          <a
            href="https://wa.me/919876109062"
            target="_blank"
            className="mt-3 inline-flex rounded-2xl bg-green-700 px-5 py-3 text-white shadow hover:bg-green-800"
          >
            Enquire on WhatsApp
          </a>
          <p className="mt-2 text-xs text-gray-500">We usually reply within hours.</p>
        </div>
      </div>

      {/* Footer text */}
      <p className="mt-8 text-center text-x text-gray-500">
        © {new Date().getFullYear()} Birgi Enterprises • Quality First, Always
        <br /><br />
        Developed by{" "}
        <a
          href="https://codesangam.tech/"
          target="_blank"
          className="text-green-700 hover:underline font-medium"
        >
          Code Sangam
        </a>
      </p>
    </Section>
  );
}


export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Shipping />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
