import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { HowItWorks } from "./components/how-it-works";
import { Architecture } from "./components/architecture";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white overflow-x-hidden relative font-sans">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute top-[25%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/25 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Architecture />
        <Footer />
      </div>
    </div>
  );
}
