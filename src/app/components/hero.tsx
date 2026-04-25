import { motion } from "motion/react";
import { Github, BookOpen, Sparkles, Hand } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative px-6 pt-10 pb-32 max-w-7xl mx-auto">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-24"
      >
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.6)]">
            <Hand className="w-5 h-5 text-white" />
          </div>
          <span className="tracking-tight">Lemihandle</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#dev" className="hover:text-white transition">Developers</a>
          <a href="https://github.com/StarDust-Git-Code/lemihandle.exe#readme" target="_blank" rel="noreferrer" className="hover:text-white transition">Docs</a>
        </div>
        <a
          href="https://github.com/StarDust-Git-Code/lemihandle.exe"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm"
        >
          Star on GitHub
        </a>
      </motion.nav>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs text-white/80 tracking-wide">
              Spatial Intent Engine · v0.1 alpha
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6"
            style={{ fontWeight: 600 }}
          >
            Your Computer.{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Controlled by Thought, Gesture, and Voice.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/70 max-w-xl leading-relaxed mb-10"
          >
            Meet Lemihandle—the invisible, AI-powered spatial intent engine that
            lives on your desktop. No clicking. No typing. Just point, speak, and
            command.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/StarDust-Git-Code/lemihandle.exe"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] transition-shadow"
            >
              <Github className="w-4.5 h-4.5" />
              <span>View on GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/StarDust-Git-Code/lemihandle.exe#readme"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl backdrop-blur-md bg-white/5 border border-white/15 hover:bg-white/10 transition"
            >
              <BookOpen className="w-4.5 h-4.5" />
              <span>Read the Docs</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-6 mt-12 text-xs text-white/50"
          >
            <span>MIT Licensed</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Powered by Gemini 2.5 Flash Lite</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Open Source</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10 z-10 pointer-events-none" />
            <ImageWithFallback
              src="/assets/hero.png"
              alt="Lemihandle reading a PDF in your browser"
              className="w-full h-[520px] object-cover object-top"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 z-20 backdrop-blur-xl bg-black/40 border border-white/15 rounded-2xl px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                <span className="text-white/80">Tracking · Pinch detected</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 z-20 backdrop-blur-xl bg-black/40 border border-white/15 rounded-2xl px-4 py-3 shadow-2xl max-w-[220px]"
            >
              <div className="text-xs text-white/60 mb-1">Intent</div>
              <div className="text-sm">"Summarize this PDF and email it to Sam."</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
