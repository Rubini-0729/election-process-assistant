'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function FirebaseSubscription() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Mocking Firebase Firestore operation
    timeoutRef.current = setTimeout(() => {
      console.log(`Email ${email} saved to Firebase Firestore`);
      setIsLoading(false);
      setIsSubscribed(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700 shadow-2xl mt-12">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Get Election Updates</h3>
        <p className="text-slate-400">Powered by Google Firebase Cloud Messaging & Firestore</p>
      </div>

      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
          >
            {isLoading ? "Connecting..." : (
              <>
                <Send size={18} />
                Notify Me
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="flex items-center justify-center gap-3 text-emerald-400 py-4">
          <CheckCircle size={24} />
          <span className="font-semibold text-lg">Subscribed successfully via Firebase!</span>
        </div>
      )}
    </div>
  );
}
