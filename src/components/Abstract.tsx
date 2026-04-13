import { motion } from 'motion/react';
import { Section } from './Common';

export const Abstract = () => {
  return (
    <Section className="bg-slate-100/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold text-blue-600 uppercase tracking-widest">Abstract</h2>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
            Object-Centric Motion Generation (OCMG) is fundamental to industrial tasks like spray painting and welding. 
            Existing solutions rely on specialized heuristics or expensive optimization that limit adaptability. 
            We propose <span className="text-slate-900 font-medium">AutoPaint AI</span>, a fully data-driven framework that predicts 
            local path segments from 3D point clouds while simultaneously inferring "path masks" to group them into distinct, 
            long-horizon trajectories. Our approach achieves near-complete coverage (above 99%) on unseen objects 
            and is directly executable on real-world 6-DoF robots.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
