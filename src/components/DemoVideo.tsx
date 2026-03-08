"use client";

import { motion } from "framer-motion";

export function DemoVideo() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px] py-20 md:py-32 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center gap-10 w-full"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
            See it in <span className="text-[#f97316]">Action</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-[600px] mx-auto font-medium">
            Watch how Unproductive Mode forcefully stops you from being
            productive when you're supposed to be chilling.
          </p>
        </div>

        <div className="w-full max-w-5xl rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(249,115,22,0.1)] bg-[#050505] aspect-video relative group ring-1 ring-white/10 transition-all duration-500 hover:ring-[#f97316]/30">
          <iframe
            className="w-full h-full absolute inset-0 z-10"
            src="https://www.youtube.com/embed/I13el4CyzJA?rel=0"
            title="Unproductive Mode Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Subtle glow effect behind */}
          <div className="absolute inset-0 -z-10 bg-[#f97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
        </div>
      </motion.div>
    </section>
  );
}
