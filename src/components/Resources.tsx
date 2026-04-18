import React from 'react';
import { Database, Github, FileText, ExternalLink, Download } from 'lucide-react';
import { Section, Card, Button } from './Common';

export const Resources = () => {
  return (
    <Section id="resources" title="Research Resources" subtitle="Access the data, code, and supplementary materials used in this work.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dataset Card */}
        <Card className="p-8 border-slate-200 bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
              <Database size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Extended PaintNet Dataset</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A large-scale dataset featuring 3,088 samples across four categories: Cuboids, Windows, Shelves, and Containers.
                Includes 3D meshes and expert-designed spray painting trajectories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" className="px-4 py-2 text-sm">
                  <Download size={16} />
                  Download Dataset
                </Button>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  3,088 Samples
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Code Card */}
        <Card className="p-8 border-slate-200 bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 shadow-lg shadow-slate-200">
              <Github size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Open Source Implementation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Full PyTorch implementation of the AutoPaint AI architecture, including the PN++ backbone,
                dual-decoder modules, and the Asymmetric Point-to-Segment (AP2S) curriculum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                  href="https://github.com/PhucPhamHong-dev/AutoPaint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  GitHub
                </Button>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  PyTorch 2.0+
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Supplementary Materials */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { title: "Technical Appendix", icon: <FileText size={18} />, desc: "Detailed ablation studies" },
          { title: "Pre-trained Weights", icon: <Download size={18} />, desc: "Ready-to-use model checkpoints" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
              {item.icon}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
