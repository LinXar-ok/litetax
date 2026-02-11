import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Book3D } from '../components/Book3D';
import { ChatAssistant } from '../components/ChatAssistant';
import { BOOK_DETAILS, FAQS, TESTIMONIALS, STRIPE_CHECKOUT_URL } from '../constants';
import { FAQItem, Testimonial } from '../types';

export const SalesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCheckout = () => {
    // In a real app, this would track the click event
    window.location.href = STRIPE_CHECKOUT_URL;
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar (Minimal) */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">L</div>
              <span className="font-bold text-xl tracking-tight text-slate-900">LiteTax</span>
            </div>
            <div className="hidden md:block">
              <Button onClick={handleCheckout} size="sm" variant="primary">Get the Guide - {BOOK_DETAILS.price}</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100 via-slate-50 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Copy */}
            <div className="mb-12 lg:mb-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Bestseller for SMEs
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                Stop Guessing. <br/>
                <span className="text-brand-600">Start Saving.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The comprehensive tax compliance playbook designed specifically for Ghanaian small business owners. Avoid penalties, optimize deductions, and sleep better at night.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={handleCheckout} size="lg" className="w-full sm:w-auto shadow-xl shadow-accent-500/20">
                  Buy Now for {BOOK_DETAILS.price}
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-2 sm:mt-0 px-4">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Instant Download
                </div>
              </div>
              
              <p className="mt-4 text-xs text-slate-400">
                30-Day Money-Back Guarantee • Secure Payment via Stripe
              </p>
            </div>

            {/* Visual */}
            <div className="flex justify-center perspective-1000">
               <Book3D />
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

      {/* What's Inside Section */}
      <section className="py-20 bg-brand-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">What's Inside The Guide?</h2>
               <p className="text-brand-100 mb-8 text-lg">We've distilled 500+ pages of tax law into actionable steps for your business.</p>
               
               <ul className="space-y-6">
                 {[
                   "Step-by-step VAT registration and filing guide",
                   "Complete breakdown of Withholding Tax (WHT) rates",
                   "Payroll tax calculator templates (Excel included)",
                   "Audit-proofing your business checklist",
                   "Exclusive chapter on Digital Service Taxes (DST)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center mt-1">
                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                     </div>
                     <span className="text-lg font-light">{item}</span>
                   </li>
                 ))}
               </ul>
               
               <div className="mt-10">
                 <Button onClick={handleCheckout} variant="primary" size="lg">Unlock These Secrets Now</Button>
               </div>
             </div>
             <div className="hidden lg:block relative">
               <div className="absolute inset-0 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
               {/* Abstract content preview visualization */}
               <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <div className="h-4 w-1/3 bg-white/20 rounded mb-6"></div>
                 <div className="space-y-3">
                   <div className="h-2 w-full bg-white/10 rounded"></div>
                   <div className="h-2 w-full bg-white/10 rounded"></div>
                   <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                   <div className="h-2 w-4/6 bg-white/10 rounded"></div>
                 </div>
                 <div className="mt-8 grid grid-cols-2 gap-4">
                   <div className="h-20 bg-brand-800/50 rounded-lg border border-white/5 p-3">
                     <div className="h-2 w-8 bg-accent-500 rounded mb-2"></div>
                     <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                   </div>
                    <div className="h-20 bg-brand-800/50 rounded-lg border border-white/5 p-3">
                     <div className="h-2 w-8 bg-green-500 rounded mb-2"></div>
                     <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                   </div>
                 </div>
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
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">Ready to Master Your Business Taxes?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Join hundreds of other smart business owners. Save money, time, and stress today.</p>
          <div className="flex flex-col items-center gap-4">
             <Button onClick={handleCheckout} size="xl" className="shadow-2xl shadow-accent-500/30 animate-bounce-subtle">
               Get Instant Access - {BOOK_DETAILS.price}
             </Button>
             <p className="text-sm text-slate-400">Secure Checkout via Stripe • Instant PDF Download</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LiteTax Ghana. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-brand-600">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600">Terms of Service</a>
            <a href="#" className="hover:text-brand-600">Contact Support</a>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatAssistant />
    </div>
  );
};