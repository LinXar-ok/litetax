import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { ChatAssistant } from './ChatAssistant';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Why Georgia', path: '/why-georgia' },
    { name: 'The 1% Foundation', path: '/foundation' },
    { name: 'Consultation', path: '/consultation' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-brand-500/30 transition-all duration-300">L</div>
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>LiteTax</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                    location.pathname === link.path ? 'text-brand-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
                size="sm" 
                variant="primary"
                className="shadow-lg shadow-brand-500/20"
              >
                Book Audit (€99)
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-base font-medium text-slate-600 py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              onClick={() => window.location.href = 'https://calendly.com/d/ctsv-4b7-7fc/litetax-strategic-eligibility-audit'} 
              size="md" 
              variant="primary"
              className="w-full"
            >
              Book Audit (€99)
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold">L</div>
                <span className="font-bold text-xl tracking-tight">LiteTax</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                The premier tax architecture for international founders. Secure, compliant, and designed for the 1%.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Navigation</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
                <li><Link to="/why-georgia" className="hover:text-brand-400 transition-colors">Why Georgia</Link></li>
                <li><Link to="/foundation" className="hover:text-brand-400 transition-colors">The 1% Foundation</Link></li>
                <li><Link to="/faq" className="hover:text-brand-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} LiteTax. All rights reserved.
          </div>
        </div>
      </footer>
      
      <ChatAssistant />
    </div>
  );
};
