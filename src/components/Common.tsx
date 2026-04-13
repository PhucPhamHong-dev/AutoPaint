import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const Section = ({ id, className, children, title, subtitle, dark = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden",
        dark ? "bg-slate-100" : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 max-w-2xl mx-auto text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export const Card = ({ className, children, delay = 0, key }: { className?: string, children: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    key={key}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={cn("glass-card rounded-2xl p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/80", className)}
  >
    {children}
  </motion.div>
);

export const Button = ({ 
  className, 
  variant = 'primary', 
  children, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20",
    secondary: "bg-slate-200 hover:bg-slate-300 text-slate-900",
    outline: "border border-slate-300 hover:bg-slate-50 text-slate-700"
  };
  
  return (
    <button 
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
