/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Abstract } from './components/Abstract';
import { Methodology } from './components/Methodology';
import { InteractiveDemo } from './components/InteractiveDemo';
import { DatasetOverview } from './components/DatasetOverview';
import { Results } from './components/Results';
import { Resources } from './components/Resources';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100">
      {/* Global Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_100%,rgba(139,92,246,0.05),transparent_50%)]" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <div id="abstract">
          <Abstract />
        </div>
        
        <div id="method">
          <Methodology />
        </div>
        
        <div id="demo">
          <InteractiveDemo />
        </div>

        <div id="dataset">
          <DatasetOverview />
        </div>
        
        <div id="results">
          <Results />
        </div>

        <div id="resources">
          <Resources />
        </div>
        
        <div id="timeline">
          <Timeline />
        </div>
      </main>

      <Footer />
    </div>
  );
}
