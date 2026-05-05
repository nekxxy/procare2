"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#004C6D] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1478A7]/10 rounded-full -translate-y-1/3 translate-x-1/3" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#6FB1BF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Contact Us
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Let&apos;s Start a <span className="text-[#6FB1BF]">Conversation</span>
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Have a project in mind? Need pest control, facility management, or construction
              services? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 628 2993 377",
                  href: "tel:+916282993377",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "procareqatar1@gmail.com",
                  href: "mailto:procareqatar1@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "Qatar",
                  href: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1478A7]/30 border border-[#6FB1BF]/20 flex items-center justify-center text-[#6FB1BF] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-[#6FB1BF] transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#003550]/80 border border-[#6FB1BF]/30 rounded-2xl p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#6FB1BF]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#6FB1BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>
                  Message Sent!
                </h3>
                <p className="text-white/60">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#003550]/60 border border-[#6FB1BF]/15 rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                    { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        required
                        className="w-full bg-[#004C6D]/60 border border-[#6FB1BF]/20 focus:border-[#6FB1BF] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+974 0000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#004C6D]/60 border border-[#6FB1BF]/20 focus:border-[#6FB1BF] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-[#004C6D]/60 border border-[#6FB1BF]/20 focus:border-[#6FB1BF] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1478A7] hover:bg-[#6FB1BF] text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#6FB1BF]/20 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
