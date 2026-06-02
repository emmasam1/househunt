import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Bio (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-900 font-bold text-lg tracking-tight">
              <Building2 className="w-5 h-5 text-sky-600" />
              <span>househunt</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Discover verified rentals and secure properties effortlessly. We connect high-intent seekers with trusted home providers across safe escrow tracking environments.
            </p>
          </div>

          {/* Column 2: Browse Property Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Find Properties</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/properties?type=rent" className="hover:text-sky-600 transition-colors">Rental Homes</Link>
              </li>
              <li>
                <Link to="/properties?type=student" className="hover:text-sky-600 transition-colors">Student Hostels</Link>
              </li>
              <li>
                <Link to="/properties?type=shortlet" className="hover:text-sky-600 transition-colors">Short Let Apartments</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Main Dynamic Action Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/list-property" className="text-sky-600 font-medium inline-flex items-center gap-1 hover:underline">
                  List Your House <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-600 transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-600 transition-colors">Support Desk</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Contact Details (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Direct Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-slate-500">
                <Mail className="w-4 h-4 shrink-0 text-slate-400" />
                <span className="truncate">hello@househunt.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Phone className="w-4 h-4 shrink-0 text-slate-400" />
                <span>+234 (0) 812 345 6789</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Attribution Line */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} househunt. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;