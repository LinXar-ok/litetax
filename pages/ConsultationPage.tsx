import React from 'react';
import { Button } from '../components/Button';
import { Check, ArrowRight, Clock, Video, FileText } from 'lucide-react';

export const ConsultationPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-white text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Expert Consultation</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Stop guessing with your international tax strategy. Get definitive answers and a clear roadmap from specialists in Georgian corporate structuring.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Option 1: Eligibility Audit */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
                  <Clock className="w-4 h-4" />
                  30 Minutes
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Strategic Eligibility Audit</h2>
                <p className="text-slate-600 mb-6 min-h-[48px]">Determine definitively if your business model qualifies for the Georgian 1% tax regime.</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-slate-900">€99</span>
                  <span className="text-slate-500 font-medium">/ session</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {[
                  "Pre-call business model review",
                  "30-minute 1-on-1 video consultation",
                  "Clear 'Yes/No' eligibility verdict",
                  "Identification of potential red flags",
                  "Next steps roadmap",
                  "Fee fully credited towards The 1% Foundation package"
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
                size="lg" 
                variant="outline"
                className="w-full justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors"
              >
                Book Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Option 2: Structure Consult */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-800 flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-900/30 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-sm font-medium mb-6 border border-brand-500/30">
                  <Clock className="w-4 h-4" />
                  60 Minutes
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Strategic Structure Consult</h2>
                <p className="text-slate-400 mb-6 min-h-[48px]">Deep dive into global tax setup, banking strategy, and economic substance requirements.</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">€349</span>
                  <span className="text-slate-400 font-medium">/ session</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow relative z-10">
                {[
                  "Everything in the Eligibility Audit",
                  "60-minute in-depth video consultation",
                  "Review of current corporate structure",
                  "Banking options & strategy analysis",
                  "Economic substance planning",
                  "Written summary report & action plan",
                  "Fee fully credited towards The 1% Foundation package"
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} // Placeholder, should be updated
                size="lg" 
                variant="primary"
                className="w-full justify-center relative z-10 shadow-lg shadow-brand-500/20"
              >
                Book Consult
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10"></div>
            
            <div className="text-center bg-white">
              <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 border border-slate-100 shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Book & Brief</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Select your time slot and complete a brief questionnaire about your business model and goals.</p>
            </div>
            
            <div className="text-center bg-white">
              <div className="w-16 h-16 mx-auto bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 border border-brand-100 shadow-sm">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. The Session</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Meet via Google Meet. We'll analyze your situation, answer your questions, and outline the optimal strategy.</p>
            </div>
            
            <div className="text-center bg-white">
              <div className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                <ArrowRight className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Execute</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Receive your roadmap or summary report. If you proceed with our Foundation package, your consult fee is credited.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
