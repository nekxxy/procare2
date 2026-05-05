"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#003550]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#6FB1BF]/50 group-hover:ring-[#6FB1BF] transition-all duration-300">
            <Image
              src="https://images.eezix.site/user-7144/site-8721/section-20/NS2JgYQNp2fzl8z6tjmtIXuLRMjHfsYrpWl0G1og.png"
              alt="ProCare Logo"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <span
            className="font-cinzel font-bold text-xl text-white group-hover:text-[#6FB1BF] transition-colors duration-300"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            ProCare
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-white/80 hover:text-white font-medium tracking-wide text-sm transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6FB1BF] group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
          <Link
            href="https://wa.me/916282993377"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1478A7] hover:bg-[#6FB1BF] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#6FB1BF]/25 hover:scale-105"
          >
            WhatsApp Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white origin-center transition-colors"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#003550]/98 backdrop-blur-md border-t border-[#6FB1BF]/20"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/80 hover:text-[#6FB1BF] font-medium tracking-wide transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  href="https://wa.me/916282993377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1478A7] text-white px-5 py-2 rounded-full text-sm font-semibold mt-2"
                >
                  WhatsApp Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
