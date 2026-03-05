import React, { useState } from 'react';
import { Button } from '../components/Button';
import { TESTIMONIALS, FAQS } from '../constants';

export const FoundationPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100 via-slate-50 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Copy */}
            <div className="mb-12 lg:mb-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Flagship Tax Architecture
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                The 1% Foundation. <br/>
                <span className="text-brand-600">Total Compliance.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our flagship, all-inclusive tax architecture for international founders. One price, total compliance, and zero guesswork.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} size="lg" className="w-full sm:w-auto shadow-xl shadow-brand-500/20">
                  Book Strategic Audit (€99)
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-2 sm:mt-0 px-4">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Eligibility Check Required
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="flex justify-center perspective-1000 relative">
               <div className="relative w-full max-w-md aspect-square bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-8 -mt-8"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white mb-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">The 1% Foundation</h3>
                    <p className="text-slate-500 text-sm">Comprehensive Tax Architecture</p>
                  </div>
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                      <span>Individual Entrepreneur Registration</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                      <span>1% Tax Certificate Activation</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                      <span>2026 Compliance Shield</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                      <span>Elite Banking Access</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Is Tax Compliance Giving You a Headache?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Fear of Audits</h3>
              <p className="text-slate-600 text-sm">Constantly worrying if the GRA will knock on your door with a massive penalty bill.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Hidden Costs</h3>
              <p className="text-slate-600 text-sm">Overpaying because you don't know which deductions and exemptions apply to your sector.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Paperwork Chaos</h3>
              <p className="text-slate-600 text-sm">Drowning in receipts and spreadsheets without a clear system for record-keeping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategic Eligibility Audit Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <div className="inline-block px-3 py-1 bg-accent-500/20 text-accent-400 border border-accent-500/30 text-xs font-mono uppercase tracking-wider rounded-full mb-6">
                 Step 1: Validation
               </div>
               <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">The Strategic Eligibility Audit</h2>
               <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                 We don't work with everyone. To maintain the highest standards of defensibility, we first conduct a 30-minute Strategic Audit to verify your eligibility for the Georgian 1% regime.
               </p>
               
               <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
                 <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   What you receive with this session:
                 </h4>
                 <ul className="space-y-4 text-slate-400 text-sm">
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                     <span><strong className="text-slate-200">The 2026 Residency Framework:</strong> You will receive a digital copy of our published guide on securing and defending your tax residency (Value €29)</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                     <span><strong className="text-slate-200">Income & Model Verification:</strong> Confirming your revenue and services qualify for the 1% Small Business status.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                     <span><strong className="text-slate-200">CVI Assessment:</strong> Analyzing your "Center of Vital Interests" to ensure your setup is legally defensible.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                     <span><strong className="text-slate-200">A Tailored Roadmap:</strong> A clear, step-by-step plan for your 1% Foundation transition.</span>
                   </li>
                 </ul>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-6 items-center">
                 <Button onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} variant="primary" size="lg" className="w-full sm:w-auto bg-accent-600 hover:bg-accent-700 text-white border-none shadow-lg shadow-accent-900/20">
                   Book Your Strategic Audit (€99)
                 </Button>
                 <p className="text-xs text-slate-500 max-w-xs">
                   The Audit fee of €99 is fully credited towards your 1% Foundation investment. Effectively, the session and the book are our investment in your future foundation.
                 </p>
               </div>
             </div>
             
             <div className="hidden lg:block relative">
               {/* Abstract Card Visual */}
               <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 shadow-2xl flex flex-col justify-between group hover:border-accent-500/30 transition-colors duration-500">
                 <div className="flex justify-between items-start">
                   <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                   </div>
                   <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold uppercase rounded-full border border-green-500/20">
                     Go / No-Go
                   </div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="h-2 w-3/4 bg-slate-700 rounded"></div>
                   <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                   <div className="h-2 w-5/6 bg-slate-700 rounded"></div>
                 </div>

                 <div className="pt-6 border-t border-slate-700/50">
                   <div className="flex justify-between items-center">
                     <div>
                       <p className="text-xs text-slate-500 uppercase tracking-wider">Deliverable</p>
                       <p className="text-white font-medium">Strategic Roadmap PDF</p>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Decorative elements */}
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl"></div>
               <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl"></div>
             </div>
           </div>
        </div>
      </section>

      {/* The 1% Foundation Blueprint Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-mono uppercase tracking-wider mb-6">
              Architecture v2.0
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">The 1% Foundation Blueprint</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              A premier, legally defensible tax architecture designed for high-performing consultants and agency owners. We’ve eliminated the complexity of choice to provide the single most robust foundation for 2026 and beyond.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-mono font-bold text-lg">01</span>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-mono uppercase tracking-wider rounded-full">Structure</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Structural Integrity</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Full Individual Entrepreneur (IE) legal registration</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Activation of the 1% Small Business tax certificate (up to €170k/year)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Official business address and all government filing fees included</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-mono font-bold text-lg">02</span>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-mono uppercase tracking-wider rounded-full">Compliance</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The 2026 Compliance Shield</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Mandatory:</strong> Implementation of the 'Special Labour Activity Permit' required under 2026 rules</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Setup of a physical "Substance" foundation to ensure your residency is audit-ready</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-mono font-bold text-lg">03</span>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-mono uppercase tracking-wider rounded-full">Banking</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Elite Banking & Residency</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Full management of your Georgian Residency Card and ID process (only one physical visit required)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Assistance with high-tier personal and business banking (Multi-currency, Mastercard World Elite)</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <span className="font-mono font-bold text-lg">04</span>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-mono uppercase tracking-wider rounded-full">Support</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">12 Months of Proactive Care</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Complete monthly bookkeeping and tax filings for your first year</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Continuous compliance monitoring so you never have to worry about local bureaucracy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bonus & Why Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bonus Card */}
            <div className="lg:col-span-1 bg-brand-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent-500 rounded-full blur-2xl opacity-20"></div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">Bonus</div>
                <h3 className="text-2xl font-serif font-bold mb-4">The "Peace of Mind" Bonus</h3>
                <p className="text-brand-100 mb-6">
                  6-Month Compliance Check (Value: €595): A mid-year deep dive into your invoicing, money flows, and activity descriptions to ensure your "Legal Fortress" remains bulletproof.
                </p>
              </div>
            </div>

            {/* Why This Foundation */}
            <div className="lg:col-span-2 bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Why This Foundation?</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Zero 183-Day Anchor</h4>
                  <p className="text-sm text-slate-600">Maintain your tax status without being forced to live in one place.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Bankable Results</h4>
                  <p className="text-sm text-slate-600">A structure that top-tier banks actually trust and support.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Defensible</h4>
                  <p className="text-sm text-slate-600">Built to survive international scrutiny, unlike "grey-area" tax hacks.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Elite Personal Banking Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                Included in the 1% Foundation
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Elite Personal Banking
              </h2>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Banking is the cornerstone of your fiscal defensibility. Our 2026 Framework ensures your accounts are structured to meet international transparency standards from day one.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Mastercard World Elite & Visa Platinum", desc: "Premium card services with global reach." },
                  { title: "Multi-currency (USD/EUR/GBP/GEL)", desc: "Full flexibility for international operations." },
                  { title: "VIP Airport Lounge Access", desc: "Traveling in comfort as part of your banking tier." },
                  { title: "Private Banker", desc: "Dedicated support for high-performing founders." },
                  { title: "No Minimum Deposit", desc: "Direct entry into elite Georgian banking." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors duration-300">
                      <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden lg:block relative mt-12 lg:mt-0">
              {/* Abstract Banking Visual */}
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                {/* Card 1 */}
                <div className="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600 shadow-2xl transform rotate-6 z-10 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-5 bg-yellow-500/20 rounded"></div>
                    <div className="text-xs font-mono text-slate-400">WORLD ELITE</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">**** **** **** 4291</div>
                    <div className="text-sm font-medium text-slate-300">LITETAX MEMBER</div>
                  </div>
                </div>
                
                {/* Card 2 (Main) */}
                <div className="absolute top-12 left-0 w-80 h-48 bg-gradient-to-br from-slate-900 to-black rounded-xl border border-yellow-500/30 shadow-2xl z-20 p-8 flex flex-col justify-between backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-xl"></div>
                  <div className="relative flex justify-between items-start">
                    <div className="w-10 h-6 bg-yellow-500 rounded-md shadow-lg shadow-yellow-500/20"></div>
                    <div className="text-xs font-mono text-yellow-500 tracking-widest">PLATINUM</div>
                  </div>
                  <div className="relative">
                    <div className="flex gap-4 mb-4">
                      <div className="text-xs font-mono text-slate-500">5412</div>
                      <div className="text-xs font-mono text-slate-500">7512</div>
                      <div className="text-xs font-mono text-slate-500">3412</div>
                      <div className="text-xs font-mono text-slate-200">3456</div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-sm font-medium text-white tracking-wide">YOUR NAME</div>
                      <div className="text-xs text-slate-500">VALID THRU 12/28</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Trusted by 500+ Ghanaian Founders</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-6 rounded-2xl relative">
                <div className="absolute top-6 right-6 text-brand-200">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.082 15.435 14.818 17.017 14.818C15.815 14.818 14.818 13.687 14.818 12.017C14.818 10.155 16.015 8.769 17.915 8.769C19.866 8.769 21.017 10.426 21.017 12.551C21.017 17.525 18.067 21 14.017 21ZM5 21L5 18C5 16.082 6.418 14.818 8 14.818C6.798 14.818 5.8 13.687 5.8 12.017C5.8 10.155 6.997 8.769 8.897 8.769C10.848 8.769 12 10.426 12 12.551C12 17.525 9.05 21 5 21Z"/></svg>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic relative z-10">{t.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`px-6 text-slate-600 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 py-4 border-t border-slate-100' : 'max-h-0 py-0 overflow-hidden'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-brand-50 rounded-3xl p-12 border border-brand-100">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">Ready to Secure Your Foundation?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Start with the Strategic Eligibility Audit to ensure you qualify for the 1% tax status.</p>
          <div className="flex flex-col items-center gap-4">
             <Button onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} size="xl" className="shadow-2xl shadow-accent-500/30 animate-bounce-subtle">
               Book Strategic Audit - €99
             </Button>
             <p className="text-sm text-slate-400">Secure Booking via Calendly • Full Credit Towards Package</p>
          </div>
        </div>
      </section>
    </div>
  );
};
