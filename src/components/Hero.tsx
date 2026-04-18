import { motion } from 'motion/react';
import { FileText, Github } from 'lucide-react';
import { Button } from './Common';
import heroImage from '../lib/img/1.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-slate-900">
            An AI-based Robotic System for <br />
            <span className="text-gradient">Intelligent Automotive Painting</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-slate-600">
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900">Nguyễn Đức Anh</span>
              <span className="text-xs opacity-60">Leader</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900">Nguyễn Ngọc Luân</span>
              <span className="text-xs opacity-60">AI Enginerr</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900">Phạm Hồng Phúc</span>
              <span className="text-xs opacity-60">Software Engineer</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              variant="primary"
              href="https://www.overleaf.com/9627797921pqnbtbkntmhw#8ec094"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={18} />
              Readpaper
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/PhucPhamHong-dev/AutoPaint"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </Button>
          </div>
        </motion.div>

        {/* Hero Image / Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden glass-card p-2 group"
        >
          <div className="w-full bg-white rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-slate-200">
            <img
              src={heroImage}
              alt="Real-world Validation"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-sm font-bold text-slate-900 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 inline-block mb-2">Real-world Validation</p>
              <p className="text-xs text-slate-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200">Efort GR-680 6-DoF Specialized Painting Robot</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
