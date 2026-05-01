'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export default function PollingStationMap() {
  // Mock coordinates for demo
  const mockStations = [
    { name: "Downtown Community Center", address: "123 Main St" },
    { name: "Westside Public Library", address: "456 West Ave" },
    { name: "Central High School", address: "789 Education Rd" }
  ];

  return (
    <div className="w-full bg-slate-900/50 p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
      <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
        <MapPin className="w-8 h-8 text-red-500" />
        <h2 className="text-3xl font-bold text-white drop-shadow-md">Find Your Polling Station</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mockStations.map((station, i) => (
          <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
            <h4 className="text-white font-semibold mb-1">{station.name}</h4>
            <p className="text-slate-400 text-sm">{station.address}</p>
          </div>
        ))}
      </div>

      {/* Meaningful Google Maps Integration */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-inner grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/search?key=YOUR_GOOGLE_MAPS_API_KEY&q=polling+stations+near+me`}
        ></iframe>
      </div>
      <p className="mt-4 text-slate-400 text-sm italic text-center">
        * Powered by Google Maps Platform. Requires a valid API Key for full functionality.
      </p>
    </div>
  );
}
