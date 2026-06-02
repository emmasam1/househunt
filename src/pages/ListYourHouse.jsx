import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Sparkles, 
  ArrowRight, Landmark, Users, CheckCircle2 
} from 'lucide-react';

const ListYourHouse = () => {
  const navigate = useNavigate();

  const handleStartListing = () => {
    // This routes the user to your active multi-step listing form or dashboard
    navigate('/dashboard/list-property');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Hero Pitch Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>List with househunt</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-6">
            Turn your property into <br />reliable income.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Reach thousands of verified renters and buyers in your area. We handle the discovery, identity verification, and secure escrow handling so you don't have to stress.
          </p>
          
          {/* Central Call To Action Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleStartListing}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-base rounded-xl px-8 py-4 transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              <span>List Your House Now</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="p-3 rounded-xl bg-sky-50 text-sky-600 w-fit mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Verified Renters Only</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Every profile on househunt undergoes physical and document vetting so you only coordinate with serious, high-intent individuals.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 w-fit mb-4">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Secure Escrow Holding</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Rest easy knowing deposit funds are processed and held securely before move-in setups are fully confirmed.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="p-3 rounded-xl bg-violet-50 text-violet-600 w-fit mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Hassle Management</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Track multi-unit inventories, receive inquiries, and keep tabs on payments seamlessly from your personalized landlord dashboard.
            </p>
          </div>

        </div>

        {/* Simple 3-Step Walkthrough Banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-8 text-center sm:text-left">How simple is it?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-600 bg-sky-50 w-6 h-6 rounded-full flex items-center justify-center border border-sky-100">1</span>
                <h4 className="text-sm font-semibold text-slate-900">Add Property Details</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-8">
                Upload crisp pictures, set your pricing, outline amenities, and pinpoint the exact area grid coordinates.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-600 bg-sky-50 w-6 h-6 rounded-full flex items-center justify-center border border-sky-100">2</span>
                <h4 className="text-sm font-semibold text-slate-900">Pass Security Vetting</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-8">
                Our operations team quickly reviews details to ensure authenticity, protecting the platform ecosystem.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-600 bg-sky-50 w-6 h-6 rounded-full flex items-center justify-center border border-sky-100">3</span>
                <h4 className="text-sm font-semibold text-slate-900">Go Live & Earn</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-8">
                Your asset goes live immediately for search traffic. Field requests directly within your account backend.
              </p>
            </div>

          </div>

          {/* Secondary Bottom Call-to-Action */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-slate-500 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>It takes less than 10 minutes to register and set up your details.</span>
            </div>
            <button
              onClick={handleStartListing}
              className="w-full sm:w-auto text-center bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold px-5 py-3 rounded-lg transition-colors cursor-pointer"
            >
              Get Started
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ListYourHouse;