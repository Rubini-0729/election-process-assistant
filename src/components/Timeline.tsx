'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Voter Registration',
    description: 'Citizens register to be eligible to vote. Example: 250M+ registered voters.',
  },
  {
    title: 'Candidate Nominations',
    description: 'Individuals declare their candidacy and are officially nominated by their parties.',
  },
  {
    title: 'Campaigning',
    description: 'Candidates share their platforms, hold rallies, and debate key issues.',
  },
  {
    title: 'Polling (Voting Day)',
    description: 'Citizens cast their ballots at designated polling stations or via mail.',
  },
  {
    title: 'Vote Counting',
    description: 'Ballots are securely collected and tallied by election officials.',
  },
  {
    title: 'Results & Certification',
    description: 'Official results are declared and the winners are certified into office.',
  }
];

export default function Timeline() {
  return (
    <div className="max-w-2xl mx-auto py-4">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-blue-500/50">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-blue-500 text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl bg-slate-800/90 border border-blue-400/30 shadow-2xl hover:bg-slate-700 transition-colors">
              <h3 className="font-bold text-blue-300 text-xl mb-2">{step.title}</h3>
              <p className="text-slate-200 text-base leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
