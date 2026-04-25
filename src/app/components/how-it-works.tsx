import { motion } from "motion/react";
import { Fingerprint, MessageSquare, Zap } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Trigger",
    body: "Pinch your thumb and index together. MediaPipe detects the spatial gesture in under 30ms and silently wakes the engine — no hotkeys, no menus.",
    icon: Fingerprint,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    n: "02",
    title: "Command",
    body: "Open your palm to push-to-talk and speak your intent. Lemihandle captures a screenshot of your screen as multimodal context.",
    icon: MessageSquare,
    accent: "from-blue-500 to-purple-600",
  },
  {
    n: "03",
    title: "Execute",
    body: "The AI reasons over voice + vision, executes local tools on your PC, and renders a floating glass UI you can confirm with a head nod.",
    icon: Zap,
    accent: "from-purple-500 to-fuchsia-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative px-6 py-32 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <span className="text-xs tracking-[0.3em] text-purple-400 uppercase">
          How it works
        </span>
        <h2
          className="mt-4 text-4xl md:text-5xl tracking-tight"
          style={{ fontWeight: 600 }}
        >
          Three motions.{" "}
          <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            One flow.
          </span>
        </h2>
      </motion.div>

      <div className="space-y-28">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const reverse = i % 2 === 1;
          return (
            <div
              key={s.n}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-sm tracking-[0.4em] text-white/40 mb-4">
                  STEP {s.n}
                </div>
                <h3
                  className="text-4xl md:text-5xl tracking-tight mb-6"
                  style={{ fontWeight: 600 }}
                >
                  <span
                    className={`bg-gradient-to-r ${s.accent} bg-clip-text text-transparent`}
                  >
                    {s.title}
                  </span>
                </h3>
                <p className="text-lg text-white/65 leading-relaxed max-w-lg">
                  {s.body}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto rounded-3xl backdrop-blur-xl bg-white/[0.04] border border-white/10 p-10 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${
                        reverse
                          ? "rgba(168,85,247,0.25)"
                          : "rgba(34,211,238,0.22)"
                      }, transparent 70%)`,
                    }}
                  />
                  <div className="relative h-full flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.06, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`w-40 h-40 rounded-3xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-2xl`}
                      style={{
                        boxShadow:
                          "0 0 60px rgba(99,102,241,0.5), inset 0 0 30px rgba(255,255,255,0.15)",
                      }}
                    >
                      <Icon className="w-20 h-20 text-white" strokeWidth={1.4} />
                    </motion.div>
                  </div>
                  <div className="absolute inset-8 rounded-full border border-white/5" />
                  <div className="absolute inset-16 rounded-full border border-white/5" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
