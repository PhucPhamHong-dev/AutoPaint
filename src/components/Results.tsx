import { motion } from 'motion/react';
import { Target, Clock, Bot, Award } from 'lucide-react';
import { Section, Card } from './Common';

const results = [
  {
    icon: <Target className="text-emerald-600" />,
    value: "99.8%",
    label: "Surface Coverage",
    desc: "Near-complete paint deposition on unseen complex geometries."
  },
  {
    icon: <Clock className="text-blue-600" />,
    value: "100ms",
    label: "Inference Time",
    desc: "Real-time trajectory generation on a single NVIDIA RTX 4080."
  },
  {
    icon: <Bot className="text-purple-600" />,
    value: "6-DoF",
    label: "Robot Ready",
    desc: "Directly executable on industrial Efort GR-680 robots."
  },
  {
    icon: <Award className="text-amber-600" />,
    value: "Expert-Level",
    label: "Quality",
    desc: "Indistinguishable from human-expert programmed paths."
  }
];

export const Results = () => {
  return (
    <Section title="Experimental Results" subtitle="Our system outperforms traditional heuristics and baseline learning methods.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {results.map((res, i) => (
          <Card key={i} delay={i * 0.1} className="text-center p-10 border-slate-200">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-6 border border-slate-200">
              {res.icon}
            </div>
            <div className="text-4xl font-bold mb-2 text-gradient">{res.value}</div>
            <div className="font-bold text-slate-900 mb-4">{res.label}</div>
            <p className="text-sm text-slate-500 leading-relaxed">{res.desc}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <Card className="lg:col-span-2 p-0 overflow-hidden border-slate-200">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <h4 className="font-bold text-slate-900">Quantitative Comparison (Table II)</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Method</th>
                    <th className="px-6 py-4">Cuboids (PCD ↓)</th>
                    <th className="px-6 py-4">Windows (Acc-NoP ↑)</th>
                    <th className="px-6 py-4">Shelves (PC ↑)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">Path-wise</td>
                    <td className="px-6 py-4 text-slate-600">48.03</td>
                    <td className="px-6 py-4 text-slate-600">73.4%</td>
                    <td className="px-6 py-4 text-slate-600">70.7%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">Point-wise</td>
                    <td className="px-6 py-4 text-slate-600">6.76</td>
                    <td className="px-6 py-4 text-slate-600">94.0%</td>
                    <td className="px-6 py-4 text-slate-600">93.1%</td>
                  </tr>
                  <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                    <td className="px-6 py-4 font-bold text-blue-600">AutoPaint AI (Ours)</td>
                    <td className="px-6 py-4 font-bold text-blue-600">6.52</td>
                    <td className="px-6 py-4 font-bold text-blue-600">97.5%</td>
                    <td className="px-6 py-4 font-bold text-blue-600">98.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
         </Card>
         
         <Card className="p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-purple-50 border-slate-200">
            <h4 className="text-xl font-bold mb-4 text-slate-900">Key Finding</h4>
            <p className="text-slate-600 leading-relaxed italic">
              "The joint prediction of path segments and masks allows the network to capture both local geometric patterns and global task requirements in a single forward pass, significantly reducing engineering overhead."
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300" />
              <div>
                <p className="text-sm font-bold text-slate-900">Gabriele Tiboni</p>
                <p className="text-xs text-slate-500">Lead Researcher</p>
              </div>
            </div>
         </Card>
      </div>
      {/* Qualitative Comparison Gallery */}
      <div className="mt-24">
        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Qualitative Comparison</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Visualizing the raw network predictions across different object categories compared to ground truth expert demonstrations.
          </p>
        </div>

        <div className="space-y-8">
          {[
            { category: "Shelves", desc: "Complex concave geometry with multiple inner compartments." },
            { category: "Windows", desc: "Thin structures requiring precise orientation control." },
            { category: "Containers", desc: "Industrial-scale objects with heterogeneous surfaces." }
          ].map((item, i) => (
            <Card key={i} className="p-6 border-slate-200" delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-1">
                  <h4 className="font-bold text-lg text-slate-900">{item.category}</h4>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                      <img src={`https://picsum.photos/seed/input-${item.category}/400/400`} alt="Input" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest">Input PC</p>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-square bg-blue-50 rounded-xl overflow-hidden border border-blue-100">
                      <img src={`https://picsum.photos/seed/ours-${item.category}/400/400`} alt="Ours" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-[10px] text-center font-bold text-blue-600 uppercase tracking-widest">AutoPaint AI</p>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                      <img src={`https://picsum.photos/seed/gt-${item.category}/400/400`} alt="GT" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest">Ground Truth</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Real-world Validation</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our system was validated on a 6-DoF specialized painting robot, achieving expert-level quality on previously unseen object instances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Input Point Cloud", seed: "pc-scan", desc: "Raw 3D scan of a window frame" },
            { title: "Predicted Trajectories", seed: "robot-path", desc: "Generated 6-DoF waypoints" },
            { title: "Real Robot Execution", seed: "robot-arm-painting", desc: "Efort GR-680 in action" }
          ].map((item, i) => (
            <Card key={i} className="p-0 overflow-hidden border-slate-200 group" delay={i * 0.1}>
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                <img 
                  src={`https://picsum.photos/seed/${item.seed}/800/450`} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm font-medium">{item.desc}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-slate-900">{item.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
