import { motion } from "motion/react";
import { Github, Hand, FileText, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 pt-16 pb-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/10 p-12 md:p-16 text-center mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-purple-600/15" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="relative">
          <h2
            className="text-4xl md:text-6xl tracking-tight mb-6"
            style={{ fontWeight: 600 }}
          >
            Stop clicking.{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Start commanding.
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            Lemihandle is free, open source, and built for makers who want their
            machines to listen.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/StarDust-Git-Code/lemihandle.exe"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-shadow"
          >
            <span>Get started on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
        <div className="flex items-center gap-2 text-white/60">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Hand className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm">Lemihandle · © 2026</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a
            href="https://github.com/StarDust-Git-Code/lemihandle.exe"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://github.com/StarDust-Git-Code/lemihandle.exe/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FileText className="w-4 h-4" />
            MIT License
          </a>
          <a href="https://github.com/StarDust-Git-Code/lemihandle.exe#readme" target="_blank" rel="noreferrer" className="hover:text-white transition">
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
}
