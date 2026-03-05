import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle, ShieldCheck, Globe, TrendingUp } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100 via-slate-50 to-white opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            The Premier Tax Architecture
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight mb-8 tracking-tight animate-fade-in-up delay-100">
            Secure your defensible <br/>
            <span className="text-brand-600 relative inline-block">
              1% Foundation
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            in Georgia
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            LiteTax helps freelancers, solopreneurs, and entrepreneurs register a company in Georgia with only 1% tax. Fast, legal setup with full support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
            <Link to="/foundation">
              <Button size="xl" variant="primary" className="shadow-2xl shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300 w-full sm:w-auto">
                View The 1% Foundation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
              size="xl" 
              variant="secondary"
              className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-700"
            >
              Book Strategic Audit (€99)
            </Button>
          </div>
        </div>
      </section>

      {/* Why Georgia Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Why Georgia?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A strategic jurisdiction offering clarity, speed, and unmatched fiscal efficiency.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1% Tax Rate</h3>
              <p className="text-slate-600 mb-6">Legally pay only 1% tax on turnover up to 500,000 GEL (~€170k) per year.</p>
              <Link to="/why-georgia" className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2026 Compliance</h3>
              <p className="text-slate-600 mb-6">Future-proof your business with a structure designed for upcoming international regulations.</p>
              <Link to="/why-georgia" className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Mobility</h3>
              <p className="text-slate-600 mb-6">Operate from anywhere. No requirement to reside in Georgia to maintain your company.</p>
              <Link to="/why-georgia" className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 1% Foundation Teaser */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-brand-500/20 text-brand-400 border border-brand-500/30 text-xs font-mono uppercase tracking-wider rounded-full mb-6">
                Flagship Service
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The 1% Foundation</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                A complete, done-for-you service to register your Georgian Individual Entrepreneur status, activate the 1% tax regime, and ensure full compliance.
              </p>
              <ul className="space-y-4 mb-10">
                {['Full Legal Registration', '1% Tax Certificate Activation', 'Business Address & Banking', '12 Months of Accounting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/foundation">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  Explore The Foundation
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-lg"></div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Active Status</div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                  <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Tax Rate</div>
                    <div className="text-2xl font-bold text-white">1.0%</div>
                  </div>
                  <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Investment & Residency</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Beyond the 1% tax rate, Georgia offers significant opportunities for growth.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Real Estate Investment</h3>
              <p className="text-slate-600 mb-6">High-yield property markets in Tbilisi and Batumi with growing tourism demand.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>High rental yields (8-12%)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>Path to permanent residency</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Clean Energy & Trading</h3>
              <p className="text-slate-600 mb-6">Strategic gateway between Europe and Asia with massive hydro energy potential.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>Government incentives for solar</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>Free Trade Agreements with EU & China</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <Button 
              onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
              size="lg" 
              variant="secondary"
              className="border border-slate-200"
            >
              Discuss Investment Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to optimize your tax structure?</h2>
          <p className="text-xl text-brand-100 mb-10">Start with a Strategic Eligibility Audit to ensure you qualify.</p>
          <Button 
            onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
            size="xl" 
            variant="primary"
            className="shadow-2xl shadow-brand-500/50"
          >
            Book Strategic Audit (€99)
          </Button>
        </div>
      </section>
    </div>
  );
};
