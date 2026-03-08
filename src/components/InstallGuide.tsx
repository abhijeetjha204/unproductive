"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Step1Icon, Step2Icon, Step3Icon, Step4Icon } from "./InstallStepIcons";

const steps = [
  {
    icon: Step1Icon,
    title: "Download the ZIP",
    description: "Grab the latest build. It's safe, we promise (probably).",
  },
  {
    icon: Step2Icon,
    title: "Extract It",
    description:
      "Unzip it somewhere you won't accidentally delete it during a 3 AM cleanup.",
  },
  {
    icon: Step3Icon,
    title: "Enable Developer Mode",
    description:
      "Go to chrome://extensions/ in your browser and toggle 'Developer mode' in the top right. You're a hacker now.",
  },
  {
    icon: Step4Icon,
    title: "Load Unpacked",
    description:
      "Click 'Load unpacked' and select the unzipped 'dist' folder. Say goodbye to your productivity.",
  },
];

export function InstallGuide() {
  return (
    <section
      id="install"
      className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/5 mx-auto flex flex-col items-center"
    >
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          How to ruin your life <br className="hidden md:block" />
          <span className="text-zinc-500">in 4 easy steps.</span>
        </h2>
        <p className="text-zinc-400 max-w-[500px] mx-auto text-lg leading-relaxed">
          Not in the Chrome Web Store yet because Google reviewers are probably
          too busy being productive.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative w-full max-w-[1200px]">
        {/* Horizontal Line for Desktop */}
        <div className="hidden md:block absolute top-[56px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial="initial"
            whileInView="inView"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              initial: { opacity: 0, y: 30 },
              inView: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                },
              },
              hover: {}, // Propagate variant strictly to children
            }}
            className="flex-1 relative z-10 flex flex-col items-center text-center group cursor-pointer"
          >
            {/* Connecting line for mobile */}
            {i !== steps.length - 1 && (
              <div className="md:hidden absolute top-[112px] bottom-[-24px] left-1/2 w-[1px] bg-white/10 -translate-x-1/2 z-0" />
            )}

            {/* Icon Box */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#080808] border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] group-hover:border-orange-500/20 flex items-center justify-center mb-6 transition-all duration-500 relative z-10 overflow-hidden">
              {/* Ambient inner glow */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-500 pointer-events-none" />

              <step.icon />

              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-500 group-hover:text-orange-400 group-hover:border-orange-500/30 group-hover:bg-[#18181b] transition-all duration-300 shadow-md">
                {i + 1}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-100 transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-[280px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center pb-24 border-b border-white/5 w-full">
        <a
          href="/unproductive-mode.zip"
          download="unproductive-mode.zip"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-orange-500 text-white font-bold rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.6)] transition-all duration-300 hover:-translate-y-1"
        >
          <span className="absolute inset-0 w-full h-full bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-2 text-lg">
            <Download className="w-6 h-6" />
            Download Latest ZIP
          </span>
        </a>
      </div>
    </section>
  );
}
