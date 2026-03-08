"use client";

import { motion } from "framer-motion";

export function Step1Icon() {
  return (
    <motion.svg viewBox="0 0 100 100" className="w-[85%] h-[85%] relative z-10">
      {/* Server Rack */}
      <rect
        x="20"
        y="15"
        width="60"
        height="15"
        rx="4"
        fill="#121212"
        stroke="#27272a"
        strokeWidth="2"
      />
      <circle cx="30" cy="22.5" r="2.5" fill="#3f3f46" />
      <motion.circle
        cx="40"
        cy="22.5"
        r="2.5"
        fill="#f97316"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <rect x="70" y="20" width="4" height="5" rx="1" fill="#3f3f46" />

      {/* Local Drive */}
      <rect
        x="25"
        y="70"
        width="50"
        height="20"
        rx="4"
        fill="#121212"
        stroke="#27272a"
        strokeWidth="2"
      />
      <circle
        cx="50"
        cy="80"
        r="4"
        fill="#27272a"
        stroke="#3f3f46"
        strokeWidth="1"
      />
      <rect x="35" y="79" width="3" height="2" fill="#3f3f46" />

      {/* Path Line */}
      <line
        x1="50"
        y1="30"
        x2="50"
        y2="70"
        stroke="#27272a"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* Downloading Packet */}
      <motion.g
        variants={{
          initial: { y: 30, opacity: 0 },
          hover: {
            y: 65,
            opacity: 1,
            filter: "drop-shadow(0px 0px 6px #f97316)",
          },
        }}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <circle cx="50" cy="0" r="4" fill="#f97316" />
        <line
          x1="50"
          y1="-12"
          x2="50"
          y2="0"
          stroke="#f97316"
          strokeWidth="2"
          opacity="0.4"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Drive Glow on receive */}
      <motion.rect
        x="25"
        y="70"
        width="50"
        height="20"
        rx="4"
        fill="transparent"
        variants={{
          initial: { stroke: "#27272a", strokeWidth: 2, filter: "none" },
          hover: {
            stroke: "#f97316",
            strokeWidth: 2,
            filter: "drop-shadow(0px 0px 10px rgba(249,115,22,0.5))",
            transition: { delay: 0.5 },
          },
        }}
      />
    </motion.svg>
  );
}

export function Step2Icon() {
  return (
    <motion.svg viewBox="0 0 100 100" className="w-[85%] h-[85%] relative z-10">
      {/* Compressed block (Initial) */}
      <motion.g
        variants={{
          initial: { opacity: 1, scale: 1 },
          hover: { opacity: 0, scale: 0.7 },
        }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "50px 50px" }}
      >
        <rect
          x="35"
          y="35"
          width="30"
          height="30"
          rx="4"
          fill="#121212"
          stroke="#52525b"
          strokeWidth="2"
        />
        <path
          d="M45 35 L45 65 M55 35 L55 65 M35 45 L65 45 M35 55 L65 55"
          stroke="#3f3f46"
          strokeWidth="1"
        />
      </motion.g>

      {/* Extracted Elements (Hover) */}
      <motion.g
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
      >
        {/* Core piece */}
        <motion.rect
          x="35"
          y="35"
          width="30"
          height="30"
          rx="6"
          fill="#18181b"
          stroke="#f97316"
          strokeWidth="2"
          variants={{
            initial: { scale: 0.5, rotate: -30 },
            hover: {
              scale: 1,
              rotate: 0,
              filter: "drop-shadow(0px 0px 15px rgba(249,115,22,0.4))",
            },
          }}
          transition={{ type: "spring", damping: 14 }}
          style={{ transformOrigin: "50px 50px" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="4"
          fill="#f97316"
          variants={{
            initial: { scale: 0 },
            hover: { scale: 1, transition: { delay: 0.2 } },
          }}
        />

        {/* Floating particles */}
        <motion.rect
          x="20"
          y="20"
          width="12"
          height="12"
          rx="3"
          fill="#27272a"
          variants={{ initial: { x: 20, y: 20 }, hover: { x: 0, y: 0 } }}
          transition={{ duration: 0.4, type: "spring" }}
        />
        <motion.rect
          x="65"
          y="25"
          width="16"
          height="8"
          rx="2"
          fill="#27272a"
          variants={{ initial: { x: -25, y: 15 }, hover: { x: 0, y: 0 } }}
          transition={{ duration: 0.4, type: "spring" }}
        />
        <motion.circle
          cx="80"
          cy="70"
          r="5"
          fill="#3f3f46"
          variants={{ initial: { x: -30, y: -20 }, hover: { x: 0, y: 0 } }}
          transition={{ duration: 0.4, type: "spring" }}
        />
        <motion.circle
          cx="25"
          cy="75"
          r="6"
          fill="#f97316"
          opacity="0.8"
          variants={{
            initial: { x: 25, y: -25, scale: 0 },
            hover: {
              x: 0,
              y: 0,
              scale: 1,
              filter: "drop-shadow(0px 0px 8px #f97316)",
            },
          }}
          transition={{ duration: 0.5, type: "spring" }}
        />
      </motion.g>
    </motion.svg>
  );
}

export function Step3Icon() {
  return (
    <motion.svg viewBox="0 0 100 100" className="w-[85%] h-[85%] relative z-10">
      {/* Browser mockup */}
      <rect
        x="10"
        y="15"
        width="80"
        height="70"
        rx="8"
        fill="#09090b"
        stroke="#27272a"
        strokeWidth="2"
      />
      <line x1="10" y1="35" x2="90" y2="35" stroke="#27272a" strokeWidth="2" />
      <circle cx="22" cy="25" r="2.5" fill="#3f3f46" />
      <circle cx="31" cy="25" r="2.5" fill="#3f3f46" />
      <rect x="42" y="22" width="40" height="6" rx="3" fill="#18181b" />

      {/* Main panel inside browser */}
      <rect
        x="18"
        y="47"
        width="64"
        height="28"
        rx="6"
        fill="#121212"
        stroke="#27272a"
        strokeWidth="1.5"
      />
      <path
        d="M26 56 L34 56 M26 66 L45 66"
        stroke="#3f3f46"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Toggle component */}
      <motion.rect
        x="55"
        y="55"
        width="20"
        height="12"
        rx="6"
        variants={{
          initial: { fill: "#27272a" },
          hover: {
            fill: "rgba(249,115,22,0.2)",
            stroke: "rgba(249,115,22,0.5)",
            strokeWidth: 1,
          },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cy="61"
        r="4"
        variants={{
          initial: { cx: 61, fill: "#52525b" },
          hover: {
            cx: 69,
            fill: "#f97316",
            filter: "drop-shadow(0px 0px 6px #f97316)",
          },
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      />
    </motion.svg>
  );
}

export function Step4Icon() {
  return (
    <motion.svg viewBox="0 0 100 100" className="w-[85%] h-[85%] relative z-10">
      {/* Ghost slot */}
      <rect
        x="35"
        y="35"
        width="30"
        height="30"
        rx="6"
        fill="transparent"
        stroke="#27272a"
        strokeWidth="2"
        strokeDasharray="5 5"
      />

      {/* The unpacked folder / plugin */}
      <motion.g
        variants={{
          initial: { y: -25, opacity: 0, rotate: -5 },
          hover: { y: 0, opacity: 1, rotate: 0 },
        }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      >
        <rect
          x="35"
          y="35"
          width="30"
          height="30"
          rx="6"
          fill="#18181b"
          stroke="#f97316"
          strokeWidth="2"
        />
        <path
          d="M43 45 L57 55 M57 45 L43 55"
          stroke="#f97316"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Glow */}
        <motion.circle
          cx="50"
          cy="50"
          r="15"
          fill="#f97316"
          opacity="0"
          filter="blur(10px)"
          variants={{ hover: { opacity: 0.25, transition: { delay: 0.3 } } }}
        />
      </motion.g>

      {/* Status lines that light up upon insertion */}
      <motion.g
        variants={{
          initial: { opacity: 0.2 },
          hover: { opacity: 1 },
        }}
        transition={{ delay: 0.4 }}
      >
        <line
          x1="50"
          y1="15"
          x2="50"
          y2="30"
          stroke="#f97316"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="70"
          x2="50"
          y2="85"
          stroke="#f97316"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="50"
          x2="30"
          y2="50"
          stroke="#f97316"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="70"
          y1="50"
          x2="85"
          y2="50"
          stroke="#f97316"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Little sparks */}
        <circle cx="25" cy="35" r="1.5" fill="#f97316" />
        <circle cx="75" cy="65" r="1.5" fill="#f97316" />
      </motion.g>
    </motion.svg>
  );
}
