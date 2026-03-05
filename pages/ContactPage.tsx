import React from 'react';
import { Button } from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Contact LiteTax</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a quick question about company setup? For personalized tax advice, please book a paid consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">info@litetax.ai</p>
                    <p className="text-slate-500 text-sm mt-1">We typically respond within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Office</h4>
                    <p className="text-slate-600">Tbilisi, Georgia</p>
                    <p className="text-slate-500 text-sm mt-1">Visits by appointment only.</p>
                  </div>
                </div>

                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 mt-8">
                  <h4 className="font-bold text-slate-900 mb-4">Ready to start?</h4>
                  <p className="text-slate-600 mb-6 text-sm">
                    The fastest way to get started is to book a Strategic Eligibility Audit. We'll review your case and build your roadmap.
                  </p>
                  <Button 
                    onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
                    size="md" 
                    variant="primary"
                    className="w-full"
                  >
                    Book Audit (€99)
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="john@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>

                <Button size="lg" variant="primary" className="w-full">
                  Send Message
                </Button>
                
                <p className="text-xs text-center text-slate-400 mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
