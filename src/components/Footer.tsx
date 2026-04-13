import { Github, Mail, Globe, FileText, Quote } from 'lucide-react';
import { Section, Card } from './Common';

export const Footer = () => {
  const citation = `@article{tiboni2025autopaint,
  title={An AI-based Robotic System for Intelligent Automotive Painting},
  author={Tiboni, Gabriele and Camoriano, Raffaello and Tommasi, Tatiana},
  journal={arXiv preprint arXiv:2502.18745},
  year={2025}
}`;

  return (
    <footer className="bg-slate-50 pt-24 pb-12 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Globe size={18} className="text-white" />
              </div>
              AutoPaint AI
            </h3>
            <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
              A research project by the Department of Control and Computer Engineering at Politecnico di Torino and the Istituto Italiano di Tecnologia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-slate-200 hover:bg-slate-300 transition-colors text-slate-600 hover:text-slate-900">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-200 hover:bg-slate-300 transition-colors text-slate-600 hover:text-slate-900">
                <Mail size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-200 hover:bg-slate-300 transition-colors text-slate-600 hover:text-slate-900">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Quote size={14} />
              Citation
            </h4>
            <Card className="p-0 overflow-hidden bg-white border-slate-200">
              <pre className="p-6 text-[11px] font-mono text-slate-600 overflow-x-auto">
                {citation}
              </pre>
              <button 
                className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-all border-t border-slate-200"
                onClick={() => navigator.clipboard.writeText(citation)}
              >
                Copy BibTeX
              </button>
            </Card>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">
            © 2025 AutoPaint AI Research Team. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-medium text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
