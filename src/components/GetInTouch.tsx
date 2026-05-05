"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function GetInTouch() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-[#003550] relative overflow-hidden">
      {/* Animated background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[300, 500, 700].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-[#6FB1BF]/5"
            style={{ width: size, height: size }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 1.5 }}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-4xl mx-auto text-center relative">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-block text-[#6FB1BF] text-sm font-medium tracking-[0.2em] uppercase mb-4"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Ready to Work <span className="text-[#6FB1BF]">Together?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/60 text-lg mb-12 max-w-xl mx-auto"
        >
          Whether it&apos;s a construction project, pest control, or facility management — we&apos;re
          here to help. Reach out today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          {/* WhatsApp */}
          <Link
            href="https://wa.me/916282993377"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#1478A7] hover:bg-[#6FB1BF] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#1478A7]/30 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </Link>

          {/* Email */}
          <Link
            href="mailto:procareqatar1@gmail.com"
            className="flex items-center gap-3 border border-[#6FB1BF]/40 hover:border-[#6FB1BF] text-white hover:text-[#6FB1BF] px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#6FB1BF]/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an Email
          </Link>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid sm:grid-cols-2 gap-4 mt-14 max-w-xl mx-auto"
        >
          <div className="bg-[#004C6D]/60 border border-[#6FB1BF]/15 rounded-xl p-5 text-left hover:border-[#6FB1BF]/35 transition-colors duration-300">
            <p className="text-[#6FB1BF] text-xs font-medium uppercase tracking-widest mb-1">Phone</p>
            <p className="text-white font-medium">+91 628 2993 377</p>
          </div>
          <div className="bg-[#004C6D]/60 border border-[#6FB1BF]/15 rounded-xl p-5 text-left hover:border-[#6FB1BF]/35 transition-colors duration-300">
            <p className="text-[#6FB1BF] text-xs font-medium uppercase tracking-widest mb-1">Email</p>
            <p className="text-white font-medium text-sm">procareqatar1@gmail.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
