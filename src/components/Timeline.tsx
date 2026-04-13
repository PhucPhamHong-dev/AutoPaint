import { motion } from 'motion/react';
import { Section, Card } from './Common';

const milestones = [
  {
    week: "Week 1-4",
    title: "Data Collection & Dataset Expansion",
    desc: "Extended PaintNet dataset to 3088 samples across 4 object categories.",
    status: "Completed"
  },
  {
    week: "Week 5-8",
    title: "Architecture Design",
    desc: "Developed the AutoPaint AI dual-decoder architecture with PN++ backbone.",
    status: "Completed"
  },
  {
    week: "Week 9-12",
    title: "Training & Optimization",
    desc: "Implemented Asymmetric Point-to-Segment (AP2S) curriculum for stable training.",
    status: "Completed"
  },
  {
    week: "Week 13-16",
    title: "Simulation Testing",
    desc: "Validated near-complete coverage on held-out test sets in PyBullet.",
    status: "Completed"
  },
  {
    week: "Week 17-20",
    title: "Real-world Deployment",
    desc: "Successful validation on 6-DoF industrial painting robots.",
    status: "Completed"
  }
];

export const Timeline = () => {
  return (
    <Section title="Project Timeline" subtitle="From conceptualization to real-world industrial validation.">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/30 via-purple-600/30 to-transparent -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-12">
          {milestones.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-50 -translate-x-1/2 z-20 hidden md:block" />
              
              <div className="w-full md:w-1/2 px-0 md:px-12">
                <Card className={`p-8 hover:scale-[1.02] transition-transform border-slate-200 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">{m.week}</span>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{m.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-600 uppercase ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {m.status}
                  </div>
                </Card>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
