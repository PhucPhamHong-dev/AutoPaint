import { motion } from 'motion/react';
import { Box, Layers, Scissors, MoveRight, Cpu, Database } from 'lucide-react';
import { Section, Card } from './Common';

const steps = [
  {
    icon: <Box className="text-blue-600" />,
    title: "Input Point Cloud",
    desc: "Raw 3D scan of the target object (e.g., a car door or shelf)."
  },
  {
    icon: <Cpu className="text-indigo-600" />,
    title: "PN++ Encoder",
    desc: "PointNet++ backbone extracts hierarchical global features."
  },
  {
    icon: <Scissors className="text-purple-600" />,
    title: "Segment Prediction",
    desc: "FC Decoders predict unordered short path segments."
  },
  {
    icon: <Layers className="text-pink-600" />,
    title: "Mask Inference",
    desc: "Simultaneous prediction of masks to cluster segments."
  },
  {
    icon: <MoveRight className="text-emerald-600" />,
    title: "Path Generation",
    desc: "Post-processing concatenates segments into full paths."
  }
];

export const Methodology = () => {
  return (
    <Section title="System Architecture" subtitle="End-to-end learning from 3D geometry to executable trajectories.">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
        {steps.map((step, i) => (
          <div key={i} className="relative group">
            <Card className="h-full flex flex-col items-center text-center p-8 group-hover:bg-slate-50" delay={i * 0.1}>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 border border-slate-200 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="font-bold mb-3 text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </Card>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                <MoveRight className="text-slate-300" size={24} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-0 overflow-hidden group border-slate-200">
          <div className="p-6 border-b border-slate-200 bg-slate-50/50">
            <h4 className="font-bold flex items-center gap-2 text-slate-900">
              <Database size={18} className="text-blue-600" />
              Training Pipeline (Fig. 4)
            </h4>
          </div>
          <div className="aspect-video bg-white flex items-center justify-center relative">
            <img 
              src="https://picsum.photos/seed/deep-learning-pipeline/800/450" 
              alt="Training Pipeline Architecture" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-600">
              Joint prediction of path segments and masks using a shared PointNet++ encoder and dual MLP decoders.
            </p>
          </div>
        </Card>

        <Card className="p-0 overflow-hidden group border-slate-200">
          <div className="p-6 border-b border-slate-200 bg-slate-50/50">
            <h4 className="font-bold flex items-center gap-2 text-slate-900">
              <Layers size={18} className="text-purple-600" />
              Post-processing (Fig. 6)
            </h4>
          </div>
          <div className="aspect-video bg-white flex items-center justify-center relative">
            <img 
              src="https://picsum.photos/seed/3d-point-cloud-processing/800/450" 
              alt="Post-processing Pipeline" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-600">
              Filtering, clustering, and Edmonds' algorithm for optimal segment concatenation and smoothing.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};
