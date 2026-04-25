import { motion } from "motion/react";
import { Monitor, Server, ArrowLeftRight, Eye, Cpu, Wrench } from "lucide-react";

export function Architecture() {
  return (
    <section
      id="dev"
      className="relative px-6 py-32 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-xs tracking-[0.3em] text-blue-400 uppercase">
          For developers
        </span>
        <h2
          className="mt-4 text-4xl md:text-5xl tracking-tight"
          style={{ fontWeight: 600 }}
        >
          Two decoupled microservices.{" "}
          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            One brain.
          </span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch mb-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl backdrop-blur-xl bg-white/[0.04] border border-white/10 p-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-cyan-400 tracking-widest uppercase">
                  Frontend
                </div>
                <div className="text-lg" style={{ fontWeight: 600 }}>
                  Spatial Overlay
                </div>
              </div>
              <a
                href="https://github.com/Firex-007"
                target="_blank"
                rel="noreferrer"
                className="text-xs px-2.5 py-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                @Firex-007
              </a>
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Eye className="w-4 h-4 mt-1 text-cyan-300 flex-shrink-0" />
                <span>
                  <span className="text-white">PyQt5</span> transparent always-on-top
                  overlay window
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-4 h-4 mt-1 text-cyan-300 flex-shrink-0" />
                <span>
                  <span className="text-white">MediaPipe</span> hand + face tracking on
                  a dedicated worker thread
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="w-4 h-4 mt-1 text-cyan-300 flex-shrink-0" />
                <span>
                  Local screenshot capture and floating glass UI rendering
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/15 flex items-center justify-center">
            <ArrowLeftRight className="w-5 h-5 text-white/70" />
          </div>
          <div className="text-[10px] tracking-[0.2em] text-white/40 mt-2 uppercase">
            REST · WS
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl backdrop-blur-xl bg-white/[0.04] border border-white/10 p-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <Server className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-purple-400 tracking-widest uppercase">
                  Backend
                </div>
                <div className="text-lg" style={{ fontWeight: 600 }}>
                  Intent Brain
                </div>
              </div>
              <a
                href="https://github.com/StarDust-Git-Code"
                target="_blank"
                rel="noreferrer"
                className="text-xs px-2.5 py-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                @StarDust-Git-Code
              </a>
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Cpu className="w-4 h-4 mt-1 text-purple-300 flex-shrink-0" />
                <span>
                  <span className="text-white">FastAPI</span> server orchestrating
                  multimodal pipelines
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Eye className="w-4 h-4 mt-1 text-purple-300 flex-shrink-0" />
                <span>
                  <span className="text-white">Gemini 2.5 Flash Lite</span> for
                  real-time vision + reasoning
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="w-4 h-4 mt-1 text-purple-300 flex-shrink-0" />
                <span>
                  Pluggable local tools: shell, browser, files, mail, apps
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl overflow-hidden backdrop-blur-xl bg-black/60 border border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.2)] max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center text-xs text-white/40">
            ~ / lemihandle
          </div>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed">
          <div className="text-white/40">
            <span className="text-cyan-400">$</span> git clone
            https://github.com/StarDust-Git-Code/lemihandle.exe.git
          </div>
          <div className="text-white/30 my-1">
            Cloning into 'lemihandle'... done.
          </div>
          <div className="text-white/40 mt-2">
            <span className="text-cyan-400">$</span> cd lemihandle
          </div>
          <div className="text-white/40 mt-2">
            <span className="text-cyan-400">$</span> docker-compose up
          </div>
          <div className="text-purple-300/80 mt-1">
            ✓ Starting backend (FastAPI + Gemini)
          </div>
          <div className="text-cyan-300/80">
            ✓ Starting overlay (PyQt5 + MediaPipe)
          </div>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="text-green-400 mt-2"
          >
            → Lemihandle online. Pinch to begin._
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
