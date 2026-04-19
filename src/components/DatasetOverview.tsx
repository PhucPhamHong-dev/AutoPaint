import React from 'react';
import { Box, Layout, Columns, Container } from 'lucide-react';
import { Section, Card } from './Common';
import cuboidImage from '../lib/img/4.png';
import windowImage from '../lib/img/5.png';
import shelvesImage from '../lib/img/6.png';
import containerImage from '../lib/img/7.png';

const categories = [
  {
    id: 'Cuboids',
    title: 'Cuboids',
    samples: '1,000 samples',
    traits: ['Fixed number of paths', 'Limited shape diversity'],
    color: 'bg-blue-500',
    icon: <Box size={24} className="text-blue-600" />,
    image: cuboidImage
  },
  {
    id: 'Windows',
    title: 'Windows',
    samples: '1,000 samples',
    traits: ['Varying number of paths', 'Limited path lengths'],
    color: 'bg-indigo-500',
    icon: <Layout size={24} className="text-indigo-600" />,
    image: windowImage
  },
  {
    id: 'Shelves',
    title: 'Shelves',
    samples: '1,000 samples',
    traits: ['Varying number of paths', 'Convex + concave surfaces'],
    color: 'bg-purple-500',
    icon: <Columns size={24} className="text-purple-600" />,
    image: shelvesImage
  },
  {
    id: 'Containers',
    title: 'Containers',
    samples: '88 samples',
    traits: ['Real industrial scenario', 'High shape diversity'],
    color: 'bg-emerald-500',
    icon: <Container size={24} className="text-emerald-600" />,
    image: containerImage
  }
];

export const DatasetOverview = () => {
  return (
    <Section id="dataset" title="The Extended PaintNet Dataset" subtitle="A large-scale collection of 3,088 expert demonstrations across four distinct geometric categories.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <Card key={cat.id} delay={i * 0.1} className="p-0 overflow-hidden flex flex-col border-slate-200 group">
            <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-sm border border-slate-200">
                  {cat.icon}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="text-white font-bold text-lg">{cat.title}</span>
                <span className="text-[10px] font-bold bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded border border-white/30 uppercase tracking-wider">
                  {cat.samples}
                </span>
              </div>
            </div>
            <div className="p-5 flex-grow bg-white">
              <ul className="space-y-3">
                {cat.traits.map((trait, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                    <div className={`w-1.5 h-1.5 rounded-full ${cat.color}`} />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-400 mb-1">3,088</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Total Samples</p>
        </div>
        <div className="w-px h-12 bg-slate-800 hidden md:block" />
        <div className="text-center">
          <p className="text-4xl font-bold text-indigo-400 mb-1">250Hz</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Sampling Rate</p>
        </div>
        <div className="w-px h-12 bg-slate-800 hidden md:block" />
        <div className="text-center">
          <p className="text-4xl font-bold text-purple-400 mb-1">6-DoF</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Pose Representation</p>
        </div>
        <div className="w-px h-12 bg-slate-800 hidden md:block" />
        <div className="text-center">
          <p className="text-4xl font-bold text-emerald-400 mb-1">12cm</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Standoff Distance</p>
        </div>
      </div>
    </Section>
  );
};
