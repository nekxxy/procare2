"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Qatar", label: "Based & Trusted" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-[#003550] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6FB1BF]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1478A7]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/40">
              <Image
                src="https://images.eezix.site/user-7144/site-8721/section-1/9MaHYgB6g2P8RPS8PpTAJNx8aFnoowLy07uK6MCK.png"
                alt="Pro Care team at work"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#004C6D]/40 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#1478A7] rounded-xl p-5 shadow-xl"
            >
              <p className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-cinzel)" }}>
                W.L.L
              </p>
              <p className="text-white/80 text-xs mt-1">Registered in Qatar</p>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#6FB1BF] rounded-tl-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block text-[#6FB1BF] text-sm font-medium tracking-[0.2em] uppercase mb-4"
            >
              Who We Are
            </motion.span>

            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              About <span className="text-[#6FB1BF]">ProCare</span>
            </h2>

            <div className="space-y-4 text-white/75 leading-relaxed">
              <p>
                Pro Care Trading, Contracting & Facility Services W.L.L is a multi-service company
                based in Qatar, offering a wide range of solutions in construction, facility
                maintenance, and material supply.
              </p>
              <p>
                We specialize in the construction of non-residential buildings, post-construction
                cleaning, retail supply of essential building materials, pest control, and
                comprehensive facility management.
              </p>
              <p>
                With a deep understanding of industry standards and a commitment to customer
                satisfaction, we aim to deliver high-quality services that support the growth and
                infrastructure of our clients. Our team is driven by professionalism, safety, and
                innovation—ensuring every project is handled with precision and care.
              </p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 border-l-4 border-[#6FB1BF] pl-6 text-[#6FB1BF] italic text-lg font-medium"
            >
              &ldquo;At Pro Care, we don&apos;t just build structures — we build trust.&rdquo;
            </motion.blockquote>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-[#004C6D]/60 rounded-xl p-4 border border-[#6FB1BF]/10 hover:border-[#6FB1BF]/30 transition-colors duration-300"
                >
                  <p className="text-2xl font-bold text-[#6FB1BF]" style={{ fontFamily: "var(--font-cinzel)" }}>
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
