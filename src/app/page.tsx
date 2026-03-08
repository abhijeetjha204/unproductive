import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DemoVideo } from "@/components/DemoVideo";
import { Features } from "@/components/Features";
import { InstallGuide } from "@/components/InstallGuide";

export default function Home() {
  return (
    <main className="w-full flex-col flex bg-[#0a0a0a] min-h-screen text-zinc-100 overflow-hidden font-sans">
      <Header />
      {/* Absolute Noise Overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Hero />
      <DemoVideo />
      <Features />
      <InstallGuide />

      {/* Sarcastic Minimal Footer */}
      <footer className="w-full py-12 flex flex-col items-center justify-center text-zinc-600 text-sm gap-4 border-t border-white/5 relative z-10">
        <p>Unproductive Mode © {new Date().getFullYear()}</p>
        <p className="max-w-[300px] text-center text-xs opacity-70">
          Built by someone who was obviously supposed to be studying but built
          this instead.
        </p>
      </footer>
    </main>
  );
}
