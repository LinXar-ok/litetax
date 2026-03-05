import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    question: "Do I have to live in Georgia to benefit from the 1% tax rate?",
    answer: "No. The 'Small Business Status' (1% tax) applies to Georgian tax residents and non-residents alike. You do not need to live in Georgia to maintain your company or the tax status. However, to be a tax resident of Georgia (and stop paying tax elsewhere), you generally need to spend 183 days there, OR use our 'High Net Worth' program."
  },
  {
    question: "Is the 1% tax rate guaranteed forever?",
    answer: "The 1% rate is codified in the Tax Code of Georgia (Article 88). It is not a temporary promotion. While no tax law is 'forever', Georgia has a constitutional ban on raising taxes without a referendum, making it one of the most stable fiscal environments in the world."
  },
  {
    question: "What if my turnover exceeds 500,000 GEL (~€170,000)?",
    answer: "If you exceed the 500,000 GEL limit in a calendar year, you will be taxed at 3% on the excess amount for that year. You do not lose the status immediately. If you exceed it for 2 consecutive years, you may transition to the standard 20% regime, but we can help you restructure before that happens."
  },
  {
    question: "Can I open a bank account remotely?",
    answer: "Generally, no. Top-tier Georgian banks (TBC, Bank of Georgia) require a physical presence for the initial opening to comply with KYC/AML laws. Our 1% Foundation package includes full support for your banking visit (1-2 days required in Tbilisi)."
  },
  {
    question: "Does this work for US Citizens?",
    answer: "Yes, but US citizens are taxed on worldwide income. You can use the Foreign Earned Income Exclusion (FEIE) to exclude ~$120k of income if you meet the physical presence test. The Georgian 1% tax is a valid foreign tax credit. We recommend speaking with a US tax specialist in addition to our services."
  },
  {
    question: "What activities are NOT eligible for 1% tax?",
    answer: "Consulting (in some specific definitions), financial services, gambling, and medical services are typically excluded. Software development, marketing, design, e-commerce (goods), and most digital services are fully eligible. Our Strategic Audit verifies your specific eligibility."
  }
];

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Common questions about the 1% Small Business Status and Company Formation in Georgia.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  openIndex === index ? 'border-brand-200 shadow-lg shadow-brand-500/5' : 'border-slate-200 shadow-sm hover:border-brand-200'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-brand-700' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-brand-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  )}
                </button>
                <div 
                  className={`px-8 text-slate-600 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-slate-50 rounded-3xl p-12 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-8">
              The best way to get specific answers for your business is to book a Strategic Audit.
            </p>
            <Button 
              onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
              size="lg" 
              variant="primary"
            >
              Book Strategic Audit (€99)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
