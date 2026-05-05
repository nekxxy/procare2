"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "🏗️",
    title: "Construction of Non-Residential Buildings",
    description:
      "We deliver high-quality construction for commercial, industrial, and institutional buildings. Our team brings engineering precision and safety-first practices to every project — from groundbreaking to handover.",
    features: ["Commercial buildings", "Industrial facilities", "Institutional structures", "Project management"],
  },
  {
    icon: "🧹",
    title: "Post-Construction Cleaning",
    description:
      "After the build, we make it shine. Our post-construction cleaning service removes construction debris, dust, and residue — leaving your new space spotless and ready for occupancy.",
    features: ["Debris removal", "Deep surface cleaning", "Window & glass cleaning", "Final inspection-ready finish"],
  },
  {
    icon: "🐛",
    title: "Pest Control Services",
    description:
      "Say goodbye to pests, for good. Our certified pest control specialists use safe, effective treatments tailored to residential and commercial properties across Qatar.",
    features: ["Residential & commercial treatment", "Termite control", "Rodent management", "Preventive programs"],
  },
  {
    icon: "📦",
    title: "Building Materials Supply",
    description:
      "Premium retail supply of essential building materials from trusted regional suppliers. We ensure you get the right materials at competitive prices — delivered on time.",
    features: ["Cement & aggregates", "Steel & structural materials", "Electrical & plumbing supplies", "Finishing materials"],
  },
  {
    icon: "⚙️",
    title: "Facility Management",
    description:
      "End-to-end facility management that keeps your property running at peak performance. From routine maintenance to emergency response, we've got you covered.",
    features: ["Preventive maintenance", "HVAC & electrical", "Cleaning & janitorial", "Security management"],
  },
  {
    icon: "🤝",
    title: "Trading Services",
    description:
      "Reliable procurement and trading services connecting businesses with quality products across Qatar. We bridge the gap between need and supply with efficiency and integrity.",
    features: ["Product sourcing", "Vendor management", "Import & export", "Supply chain solutions"],
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
      whileHover={{ y: -4 }}
      className="bg-[#003550]/70 border border-[#6FB1BF]/15 hover:border-[#6FB1BF]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
    >
      <div className="text-4xl mb-5">{service.icon}</div>
      <h3
        className="text-xl font-bold text-white mb-3"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        {service.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FB1BF] flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 px-6 bg-[#003550] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004C6D] to-[#002a3f]" />
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-[#6FB1BF] text-sm font-medium tracking-[0.2em] uppercase mb-4"
            >
              What We Do
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Our <span className="text-[#6FB1BF]">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg max-w-xl mx-auto"
            >
              Comprehensive multi-service solutions for construction, maintenance, and facility needs
              across Qatar.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-[#004C6D]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#003550]">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Need a Custom <span className="text-[#6FB1BF]">Solution?</span>
            </h2>
            <p className="text-white/60 mb-8">
              We tailor our services to meet your specific requirements. Get in touch and let&apos;s
              discuss your project.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-[#1478A7] hover:bg-[#6FB1BF] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6FB1BF]/25"
              >
                Contact Us
              </Link>
              <Link
                href="https://wa.me/916282993377"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#6FB1BF]/40 hover:border-[#6FB1BF] text-white hover:text-[#6FB1BF] px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
