import React from 'react';
import Flashcard from '@/components/Flashcard';
import Timeline from '@/components/Timeline';
import AIAssistant from '@/components/AIAssistant';
import TurnoutChart from '@/components/TurnoutChart';
import Quiz from '@/components/Quiz';
import PollingStationMap from '@/components/PollingStationMap';
import FirebaseSubscription from '@/components/FirebaseSubscription';
import { BookOpen, Flag, Vote, BarChart3, BrainCircuit, Quote } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 relative pb-32">
      {/* Header Section */}
      <header className="text-center mb-12 space-y-6 max-w-4xl z-10">
        <div className="inline-flex items-center justify-center p-4 bg-slate-800/80 rounded-full mb-2 border-2 border-blue-500 shadow-xl">
          <Vote className="w-10 h-10 text-blue-400 drop-shadow-md" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl pb-2">
          Democracy Demystified
        </h1>
        <p className="text-2xl text-slate-200 font-medium drop-shadow-md">
          Your interactive guide to understanding the election process, voting timelines, and civic duties.
        </p>

        {/* Highlight Quote Section */}
        <div className="mt-12 p-8 bg-blue-600/90 rounded-3xl border-2 border-white/20 shadow-2xl relative overflow-hidden">
          <Quote className="absolute top-4 left-4 w-16 h-16 text-white/10" />
          <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10 drop-shadow-lg italic">
            "Every citizen must vote, it is our right and our power."
          </h2>
        </div>

        {/* Google Service: Firebase Subscription */}
        <FirebaseSubscription />
      </header>

      {/* Main Content Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 z-10 mb-20">
        
        {/* Left Column: Timeline */}
        <section className="space-y-8 bg-slate-900/50 p-8 rounded-3xl border border-slate-700/50">
          <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
            <Flag className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white drop-shadow-md">The Complete Process</h2>
          </div>
          <Timeline />
        </section>

        {/* Right Column: Flashcards & Chart */}
        <section className="space-y-12 flex flex-col justify-start">
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700/50">
            <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
              <BookOpen className="w-8 h-8 text-emerald-400" />
              <h2 className="text-3xl font-bold text-white drop-shadow-md">Key Concepts</h2>
            </div>
            <div className="grid gap-6">
              <Flashcard 
                frontContent="What is a Primary Election?" 
                backContent="An election where voters choose their party's candidate for the general election." 
              />
              <Flashcard 
                frontContent="Electoral College" 
                backContent="The body of electors chosen by the voters in each state to elect the President and Vice President (in the US system)." 
              />
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700/50">
            <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
              <BarChart3 className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white drop-shadow-md">Data & Analytics</h2>
            </div>
            <TurnoutChart />
          </div>
        </section>
      </div>

      {/* Google Services Section: Map */}
      <section className="w-full max-w-7xl z-10 mb-20">
          <PollingStationMap />
      </section>

      {/* Full Width Quiz Section */}
      <section className="w-full max-w-7xl z-10 mb-20 bg-slate-900/80 p-12 rounded-3xl border border-slate-700 shadow-2xl">
         <div className="flex items-center justify-center gap-4 mb-10">
            <BrainCircuit className="w-10 h-10 text-amber-400" />
            <h2 className="text-5xl font-bold text-white text-center drop-shadow-lg">Test Your Knowledge</h2>
          </div>
          <Quiz />
      </section>

      {/* Interactive AI Assistant */}
      <AIAssistant />
    </main>
  );
}
