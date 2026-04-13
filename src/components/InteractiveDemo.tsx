import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle2, Scan, Grid3X3, Activity, Zap, Play, Layers } from 'lucide-react';
import { Section, Card, Button } from './Common';
import { cn } from '../lib/utils';

const demoSteps = [
  { id: 'input', label: 'Input Point Cloud', icon: <Scan size={20} />, color: 'text-blue-600', detail: '5,120 points sampled via Poisson Disk' },
  { id: 'segments', label: 'Segment Prediction', icon: <Grid3X3 size={20} />, color: 'text-indigo-600', detail: 'Predicting K unordered 6D pose sequences' },
  { id: 'masks', label: 'Mask Clustering', icon: <Layers size={20} />, color: 'text-purple-600', detail: 'Inferring path masks for segment grouping' },
  { id: 'final', label: 'Concatenated Path', icon: <Zap size={20} />, color: 'text-emerald-600', detail: 'Optimal path via Edmonds algorithm' }
];

export const InteractiveDemo = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState('Shelves');

  const startDemo = () => {
    setIsProcessing(true);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  useEffect(() => {
    if (currentStep >= 0 && currentStep < demoSteps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, demoSteps[currentStep].id]);
        if (currentStep < demoSteps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsProcessing(false);
        }
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <Section id="demo" title="Interactive System Demo" subtitle="Experience the AutoPaint AI inference pipeline on representative object categories from the Extended PaintNet dataset.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Control Panel */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-8 border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Inference Control</h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Dataset Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Cuboids', 'Windows', 'Shelves', 'Containers'].map(model => (
                    <button
                      key={model}
                      onClick={() => {
                        setSelectedModel(model);
                        setCurrentStep(-1);
                        setCompletedSteps([]);
                      }}
                      disabled={isProcessing}
                      className={cn(
                        "px-4 py-3 rounded-xl text-sm font-semibold transition-all border",
                        selectedModel === model 
                          ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200" 
                          : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50/30"
                      )}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full justify-center py-4 text-lg" 
                onClick={startDemo}
                disabled={isProcessing}
              >
                {isProcessing ? <Loader2 className="animate-spin" /> : <Play size={20} />}
                {isProcessing ? 'Running Inference...' : 'Run AutoPaint AI'}
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Pipeline Status</h4>
            <div className="space-y-4">
              {demoSteps.map((step, i) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-slate-100 shrink-0 ${completedSteps.includes(step.id) ? 'text-emerald-600' : currentStep === i ? 'text-blue-600' : 'text-slate-400'}`}>
                    {completedSteps.includes(step.id) ? <CheckCircle2 size={20} /> : currentStep === i ? <Loader2 size={20} className="animate-spin" /> : step.icon}
                  </div>
                  <div>
                    <span className={`text-sm font-bold block ${currentStep === i ? 'text-slate-900' : 'text-slate-500'}`}>
                      {step.label}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-tight">
                      {step.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Visualization Area */}
        <div className="lg:col-span-8">
          <Card className="p-2 h-[600px] relative overflow-hidden group border-slate-200">
            <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Mock Visualization Layers */}
              <AnimatePresence mode="wait">
                {currentStep === -1 ? (
                  <motion.div 
                    key="idle"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-6">
                      <Scan size={40} className="text-slate-400" />
                    </div>
                    <p className="text-slate-500 font-medium">Select an object and run inference</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="active"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="w-full h-full relative"
                  >
                    {/* Base Point Cloud */}
                    <img 
                      src={`https://picsum.photos/seed/3d-${selectedModel.toLowerCase()}/1200/800`} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Step Overlays */}
                    {completedSteps.includes('input') && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-blue-600/5 backdrop-blur-[1px]" />
                    )}
                    {completedSteps.includes('segments') && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }} 
                          animate={{ scale: 1, opacity: 1 }}
                          className="w-3/4 h-3/4 border-2 border-dashed border-indigo-400/50 rounded-full animate-[spin_10s_linear_infinite]"
                        />
                      </div>
                    )}
                    {completedSteps.includes('masks') && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-purple-600/10 mix-blend-overlay" />
                    )}
                    {completedSteps.includes('final') && (
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.path 
                          d="M 150 150 Q 300 50 450 150 T 750 150" 
                          stroke="#059669" strokeWidth="8" fill="none" strokeLinecap="round"
                          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                          transition={{ duration: 2 }}
                        />
                        <motion.circle 
                          r="10" fill="#059669"
                          animate={{ offsetDistance: ["0%", "100%"] }}
                          style={{ offsetPath: "path('M 150 150 Q 300 50 450 150 T 750 150')" }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                      </svg>
                    )}

                    <div className="absolute top-6 right-6 flex gap-2">
                       <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-slate-600">
                         LATENCY: 124ms
                       </div>
                       <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-slate-600">
                         POINTS: 5,120
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* 3D Visualizer Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-medium text-slate-700">
              Real-time Inference Visualization
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
