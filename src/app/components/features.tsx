import { motion } from "motion/react";
import { Hand, Mic, Brain } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "Spatial Gestures",
    desc: "Pinch your fingers to capture context, make a fist to dismiss, and nod your head to confirm actions. Natural input, zero friction.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.45)",
  },
  {
    icon: Mic,
    title: "Instant Voice",
    desc: "Open your palm to push-to-talk. Lemihandle hears your intent and routes it through a low-latency speech pipeline.",
    color: "from-blue-500 to-purple-600",
    glow: "rgba(99,102,241,0.5)",
  },
  {
    icon: Brain,
    title: "Gemini Brain",
    desc: "Powered by Gemini 2.5 Flash Lite — multimodal reasoning over your screen, your voice, and your gestures, all in real time.",
    color: "from-purple-500 to-fuchsia-500",
    glow: "rgba(168,85,247,0.5)",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 py-32 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-xs tracking-[0.3em] text-cyan-400 uppercase">
          The Magic
        </span>
        <h2
          className="mt-4 text-4xl md:text-5xl tracking-tight max-w-3xl mx-auto"
          style={{ fontWeight: 600 }}
        >
          Three primitives.{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Infinite intent.
          </span>
        </h2>
        <p className="mt-5 text-white/60 max-w-xl mx-auto">
          Lemihandle fuses gesture, voice, and vision into a single fluid input
          channel for your desktop.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl backdrop-blur-xl bg-white/[0.04] border border-white/10 p-8 overflow-hidden transition"
              style={{ boxShadow: "0 0 0 transparent" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(400px circle at 50% 0%, ${f.glow}, transparent 60%)`,
                }}
              />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div
                className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg`}
                style={{ boxShadow: `0 0 30px ${f.glow}` }}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3
                className="relative text-2xl mb-3 tracking-tight"
                style={{ fontWeight: 600 }}
              >
                {f.title}
              </h3>
              <p className="relative text-white/65 leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
