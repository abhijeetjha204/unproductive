"use client";

import { motion } from "framer-motion";

export function Features() {
  return (
    <section
      id="features"
      className="relative w-full py-32 px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]"
    >
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Features that <span className="text-zinc-500">force you</span>
          <br />
          to touch grass.
        </h2>
        <p className="text-zinc-400 max-w-[600px] text-lg">
          It doesn&apos;t just block sites. It selectively hunts down the
          specific content that makes you feel guilty for relaxing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Domain Overlays (Span 2) */}
        <motion.div
          initial="initial"
          whileHover="hover"
          viewport={{ once: true, margin: "-100px" }}
          className="group relative overflow-hidden rounded-[2rem] bg-[#0c0c0c] border border-white/5 p-8 flex flex-col justify-between md:col-span-2 shadow-sm"
        >
          <div className="w-full h-56 bg-[#040404] rounded-2xl border border-white/5 mb-8 relative flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "16px 16px",
              }}
            />

            <div className="w-72 bg-[#121212] rounded-xl overflow-hidden border border-white/5 shadow-2xl relative z-0">
              <div className="bg-[#0a0a0a] px-3 py-2 border-b border-white/5 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <div className="p-4 flex flex-col gap-2 font-mono text-[10px] text-zinc-600">
                <div className="flex gap-4">
                  <span className="text-zinc-800">1</span>
                  <span className="text-blue-400">export function</span>{" "}
                  <span>grub() {"{"}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-800">2</span>
                  <span className="pl-4">
                    console.log(
                    <span className="text-green-400">'grinding'</span>);
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-800">3</span>
                  <span>{"}"}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-800">4</span>
                </div>
              </div>
            </div>

            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  scale: 0.95,
                  y: 10,
                  filter: "blur(4px)",
                },
                hover: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-[#040404]/60 backdrop-blur-[2px] flex items-center justify-center p-6 z-10"
            >
              <div className="bg-[#0f0f0f] border border-[#f97316]/20 rounded-xl p-4 shadow-[0_0_30px_rgba(249,115,22,0.1)] max-w-[220px] w-full">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <span className="flex w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                    <div className="text-[#f97316] font-medium text-xs">
                      Access Denied
                    </div>
                  </div>
                </div>
                <div className="text-zinc-400 text-[11px] leading-relaxed">
                  Bro, take a chill pill. The compiler can wait. You&apos;re not
                  getting a trophy for burnout.
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-2">
              Savage Domain Overlays
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Visits to GitHub or LeetCode are immediately intercepted with a
              brutal roast reminding you that the compiler can wait. No bypasses
              for productive domains.
            </p>
          </div>
        </motion.div>

        {/* Card 2: YouTube Purifier (Span 1) */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="group relative overflow-hidden rounded-[2rem] bg-[#0c0c0c] border border-white/5 p-8 flex flex-col justify-between md:col-span-1 shadow-sm"
        >
          <div className="w-full h-56 bg-[#040404] rounded-2xl border border-white/5 mb-8 relative flex items-center justify-center">
            <div className="flex gap-2 flex-col w-full max-w-[200px]">
              {[
                { title: "React Tutorial", type: "tutorial" },
                { title: "Node.js Basics", type: "productive" },
                { title: "Cat falls off table", type: "chill" },
              ].map((vid, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 1, backgroundColor: "#111" },
                    hover:
                      vid.type !== "chill"
                        ? {
                            opacity: 0.3,
                            filter: "blur(2px)",
                            backgroundColor: "#111",
                          }
                        : {
                            opacity: 1,
                            filter: "blur(0px)",
                            backgroundColor: "#181818",
                          },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/5"
                >
                  <div className="flex flex-col gap-1.5 flex-1 pr-2">
                    <motion.div
                      variants={{
                        hover:
                          vid.type === "chill"
                            ? { backgroundColor: "#f97316" }
                            : {},
                      }}
                      className="h-1.5 w-[80%] bg-zinc-700 rounded-sm transition-colors duration-300"
                    />
                    <div
                      className={`h-1.5 w-[50%] rounded-sm ${vid.type === "chill" ? "bg-zinc-800" : "bg-[#f97316]/40"}`}
                    />
                  </div>
                  <motion.div
                    variants={{
                      hover:
                        vid.type === "chill"
                          ? { color: "#f97316" }
                          : { color: "#52525b" },
                    }}
                    className="text-[10px] font-mono text-zinc-600 transition-colors duration-300 font-medium"
                  >
                    {vid.type === "chill" ? "SAFE" : "BLUR"}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-2">
              YouTube Purifier
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We scan video titles, channels, and recommendations. If it says
              &apos;tutorial&apos;, it&apos;s blurred into oblivion.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Twitter Anti-Grindset (Span 1) */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="group relative overflow-hidden rounded-[2rem] bg-[#0c0c0c] border border-white/5 p-8 flex flex-col justify-between md:col-span-1 shadow-sm"
        >
          <div className="w-full h-56 bg-[#040404] rounded-2xl border border-white/5 mb-8 relative flex items-center justify-center p-4">
            <div className="w-full max-w-[220px] bg-[#121212] rounded-xl p-5 border border-white/5 flex flex-col gap-4 relative overflow-hidden shadow-2xl">
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-zinc-800" />
                <div className="flex flex-col gap-1.5">
                  <div className="h-2 w-16 bg-zinc-700 rounded-sm" />
                  <div className="h-1.5 w-10 bg-zinc-800 rounded-sm" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-2 w-full bg-zinc-800 rounded-sm" />
                <div className="h-2 w-[85%] bg-zinc-800 rounded-sm" />
                <div className="h-2 w-[60%] bg-[#f97316]/30 rounded-sm" />
              </div>

              <motion.div
                variants={{
                  initial: { opacity: 0, backdropFilter: "blur(0px)" },
                  hover: { opacity: 1, backdropFilter: "blur(4px)" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-[#040404]/70 flex items-center justify-center p-4"
              >
                <motion.div
                  variants={{
                    initial: { scale: 0.9, y: 5 },
                    hover: { scale: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="px-4 py-2 bg-[#f97316]/10 text-[#f97316] text-[11px] font-medium text-center shadow-[inset_0_0_0_1px_rgba(249,115,22,0.2)] rounded-lg backdrop-blur-md"
                >
                  10s Penalty Peek
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-2">
              Twitter Anti-Grindset
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Detects tech-bro tweets and productive handles. Masks them
              instantly with a penalty peek.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Local Processing (Span 2) */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="group relative overflow-hidden rounded-[2rem] bg-[#0c0c0c] border border-white/5 p-8 flex flex-col justify-between md:col-span-2 shadow-sm"
        >
          <div className="w-full h-56 bg-[#040404] rounded-2xl border border-white/5 mb-8 relative flex items-center justify-center overflow-hidden">
            <motion.div
              variants={{
                hover: {
                  boxShadow: "0 0 60px rgba(249,115,22, 0.15)",
                  borderColor: "rgba(249,115,22, 0.3)",
                },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-36 h-36 rounded-full border border-zinc-900 flex items-center justify-center bg-[#0a0a0a] z-10"
            >
              <motion.div
                variants={{
                  hover: {
                    borderColor: "#f97316",
                    boxShadow: "inset 0 0 20px rgba(249,115,22, 0.2)",
                  },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-[6px] rounded-full border-[2.5px] border-zinc-800/80"
              />

              <div className="flex flex-col items-center">
                <motion.span
                  variants={{ hover: { color: "#f97316" } }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-semibold text-zinc-400 tracking-tight relative z-10"
                >
                  100%
                </motion.span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 mt-1 flex items-center justify-center gap-1.5 w-full">
                  local
                  <motion.span
                    variants={{
                      initial: { opacity: 0.2, color: "#71717a" },
                      hover: { opacity: 1, color: "#f97316" },
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-xs font-bold"
                  >
                    ✓
                  </motion.span>
                </span>
              </div>
            </motion.div>

            <div
              className="absolute inset-0 z-0 opacity-10 transition-opacity duration-700 group-hover:opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-2">
              Client-Side Zero-Slop
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Runs entirely locally in your browser. No AI servers to ping, no
              data sent anywhere. Just raw, pure DOM manipulation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
