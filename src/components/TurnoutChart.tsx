'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { year: '2012', Registered: 153.1, Voted: 129.2, Nominations: 4 },
  { year: '2016', Registered: 157.5, Voted: 136.6, Nominations: 6 },
  { year: '2020', Registered: 168.3, Voted: 158.4, Nominations: 5 },
  { year: '2024 (Proj)', Registered: 175.0, Voted: 165.0, Nominations: 4 },
];

export default function TurnoutChart() {
  return (
    <div className="w-full h-[400px] bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 border border-slate-600 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-2 text-center drop-shadow-md">
        Election Statistics (in Millions)
      </h3>
      <p className="text-slate-300 text-center mb-6 text-sm">Registrations vs. Actual Votes</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="year" stroke="#f1f5f9" tick={{ fill: '#f1f5f9' }} />
          <YAxis stroke="#f1f5f9" tick={{ fill: '#f1f5f9' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px', color: '#f8fafc' }}
            itemStyle={{ color: '#f8fafc' }}
            cursor={{ fill: 'rgba(255,255,255,0.1)' }}
          />
          <Legend wrapperStyle={{ color: '#f8fafc', fontWeight: 'bold' }} />
          <Bar dataKey="Registered" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Registered Voters" />
          <Bar dataKey="Voted" fill="#10b981" radius={[4, 4, 0, 0]} name="Actually Voted" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
