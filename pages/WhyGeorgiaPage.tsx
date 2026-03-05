import React from 'react';
import { Button } from '../components/Button';
import { Check, X, AlertTriangle } from 'lucide-react';

export const WhyGeorgiaPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Why Georgia?</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A strategic jurisdiction offering clarity, speed, and unmatched fiscal efficiency. 
            Georgia combines the ease of doing business with a highly competitive 1% tax rate for small businesses.
          </p>
        </div>
      </section>

      {/* Georgia at a Glance */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Georgia at a Glance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="text-5xl font-bold text-brand-600 mb-4">1%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Small Business Tax</h3>
              <p className="text-slate-600">The headline benefit. Pay just 1% on turnover up to ~€170k/year.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="text-5xl font-bold text-brand-600 mb-4">3-4</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Weeks to Start</h3>
              <p className="text-slate-600">From document collection to full operation, including banking.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="text-5xl font-bold text-brand-600 mb-4">A+</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fiscal Home</h3>
              <p className="text-slate-600">A legitimate, OECD-compliant jurisdiction, not a tax haven.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              We don't just register companies; we build defensible fiscal architectures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Navigation", desc: "We guide you through the nuances of Georgian tax law, ensuring you avoid common pitfalls." },
              { title: "Keep More Profit", desc: "Maximize your earnings legally with the 1% tax rate, reinvesting savings into growth." },
              { title: "2026 Defensibility", desc: "Future-proof your setup. We build with upcoming regulations and substance requirements in mind." },
              { title: "Strategic Onboarding", desc: "A tailored, step-by-step process designed for high-performing founders." },
              { title: "Elite Banking", desc: "Direct access to top-tier banking institutions (TBC, BoG) with VIP support." },
              { title: "Operate Globally", desc: "Run your business from anywhere while maintaining a solid fiscal base in Georgia." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Georgia vs. Common Alternatives</h2>
          
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 font-bold text-slate-500 uppercase text-xs tracking-wider w-1/4">Feature</th>
                  <th className="p-6 font-bold text-brand-600 text-lg w-1/4 bg-brand-50/50 border-x border-brand-100">Georgia (1% IE)</th>
                  <th className="p-6 font-bold text-slate-900 text-lg w-1/4 border-r border-slate-100">UAE (Dubai)</th>
                  <th className="p-6 font-bold text-slate-900 text-lg w-1/4">Estonia (E-Res)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-6 font-medium text-slate-900">Corporate Tax Rate</td>
                  <td className="p-6 bg-brand-50/30 border-x border-brand-100 font-bold text-brand-700">1% (on Turnover)</td>
                  <td className="p-6 text-slate-600 border-r border-slate-100">0% - 9%</td>
                  <td className="p-6 text-slate-600">20% (on Distribution)</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Physical Presence</td>
                  <td className="p-6 bg-brand-50/30 border-x border-brand-100 font-bold text-brand-700">None Required</td>
                  <td className="p-6 text-slate-600 border-r border-slate-100">1 visit every 180 days</td>
                  <td className="p-6 text-slate-600">None Required</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Audit Risk</td>
                  <td className="p-6 bg-brand-50/30 border-x border-brand-100 font-bold text-brand-700">Low</td>
                  <td className="p-6 text-slate-600 border-r border-slate-100">High (ESR Rules)</td>
                  <td className="p-6 text-slate-600">Medium</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Setup Cost</td>
                  <td className="p-6 bg-brand-50/30 border-x border-brand-100 font-bold text-brand-700">Low (~€1-2k)</td>
                  <td className="p-6 text-slate-600 border-r border-slate-100">High (€5k+)</td>
                  <td className="p-6 text-slate-600">Medium (~€1k)</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Banking Access</td>
                  <td className="p-6 bg-brand-50/30 border-x border-brand-100 font-bold text-brand-700">Easy (Personal & Biz)</td>
                  <td className="p-6 text-slate-600 border-r border-slate-100">Difficult</td>
                  <td className="p-6 text-slate-600">Difficult (Fintech mostly)</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Time to Operational</td>
                  <td className="p-6 bg-brand-50/30 border-x border-brand-100 font-bold text-brand-700">3-4 Weeks</td>
                  <td className="p-6 text-slate-600 border-r border-slate-100">4-8 Weeks</td>
                  <td className="p-6 text-slate-600">2-4 Weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Is this legal and sustainable?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Yes, when done right.</h4>
                    <p className="text-slate-600 text-sm mt-1">The 1% Small Business Status is a fully codified part of the Georgian Tax Code. It is not a loophole; it is government policy designed to attract small businesses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Compliance is key.</h4>
                    <p className="text-slate-600 text-sm mt-1">Sustainability comes from substance. We ensure you meet the "Economic Substance" requirements to defend your tax residency against your home country.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The 1% Foundation</h3>
              <p className="text-slate-600 mb-8">
                Our flagship package is designed specifically to navigate the nuances of the Georgian system. We handle the registration, the tax status application, and the ongoing compliance.
              </p>
              <Button 
                onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
                size="lg" 
                variant="primary"
                className="w-full"
              >
                Book Strategic Audit (€99)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
