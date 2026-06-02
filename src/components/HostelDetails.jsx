import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Tag, message, Tooltip, Image } from 'antd';
import { 
  MapPin, ShieldCheck, Zap, Bed, ShowerHead, 
  Sparkles, CheckCircle2, ArrowLeft, Info, HelpCircle,
  Maximize2, GraduationCap, Flame, ShieldAlert
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

const HostelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hostels = useAppStore((state) => state.hostels);
  
  const hostel = hostels.find(h => String(h.id) === String(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  if (!hostel) {
    return (
      <div className="py-24 text-center border border-slate-200 max-w-4xl mx-auto my-12 bg-slate-50 p-8 rounded-none">
        <Info className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Asset Missing</h3>
        <p className="text-xs text-slate-400 mt-2 mb-6 max-w-sm mx-auto">
          The property profile signature for reference <span className="font-mono font-bold text-slate-700 bg-slate-200 px-1">{id}</span> could not be verified.
        </p>
        <Button 
          onClick={() => navigate('/listings')} 
          type="primary"
          className="bg-slate-950 text-white rounded-none font-bold uppercase tracking-wider text-xs px-6 h-11"
        >
          Return to Directory
        </Button>
      </div>
    );
  }

  const listingImages = hostel.images && hostel.images.length > 0 
    ? hostel.images 
    : ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'];

  const handleInitializeEscrow = () => {
    message.loading({ content: 'Opening secure escrow channel...', key: 'escrow' });
    setTimeout(() => {
      message.success({ content: 'Allocation channel secured.', key: 'escrow', duration: 2 });
      navigate(`/booking-confirmation/${hostel.id}`);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Top Breadcrumb with Hover Motion */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
        <button 
          onClick={() => navigate('/listings')}
          className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
          <span>Back to Catalog Directory</span>
        </button>
        <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 border border-slate-200 px-2.5 py-0.5 tracking-wider">
          UUID: {String(id).toUpperCase()}
        </span>
      </div>

      {/* =========================================================
          VISUAL DISPLAY FRAME (ASPECT RATIO LOCKED & LIGHTBOX READY)
         ========================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-9 aspect-video lg:max-h-[540px] bg-slate-100 border border-slate-200 relative overflow-hidden group">
          <img 
            src={listingImages[activeImageIndex]} 
            alt={hostel.name} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
          
          {/* Top Right Floating Badges */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button 
              onClick={() => setIsLightboxVisible(true)}
              className="bg-white/90 hover:bg-white text-slate-900 p-2 border border-slate-200 shadow-xs transition-all cursor-pointer hover:scale-105"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <span className="absolute bottom-6 left-6 bg-slate-950 text-white text-[10px] font-mono tracking-widest px-3 py-1.5 font-black uppercase">
            Frame {activeImageIndex + 1} / {listingImages.length}
          </span>
        </div>

        {/* Thumbnail Selector Track */}
        <div className="lg:col-span-3 flex lg:flex-col gap-3 h-24 lg:h-auto lg:aspect-auto lg:max-h-[540px] overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto pr-1 custom-scrollbar">
          {listingImages.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`flex-shrink-0 w-32 lg:w-full h-full lg:h-[118px] border-2 transition-all relative overflow-hidden group cursor-pointer ${
                activeImageIndex === idx 
                  ? 'border-slate-950 ring-4 ring-slate-950/10' 
                  : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400'
              }`}
            >
              <img src={imgUrl} alt="Perspective" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Hidden Ant Design Image Preview component to handle high-res viewports seamlessly */}
      <div className="hidden">
        <Image.PreviewGroup preview={{ visible: isLightboxVisible, onVisibleChange: vis => setIsLightboxVisible(vis), current: activeImageIndex }}>
          {listingImages.map((src, i) => <Image key={i} src={src} />)}
        </Image.PreviewGroup>
      </div>

      {/* =========================================================
          DATA MATRIX SPECIFICATION GRID
         ========================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Features and Mapping Data */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-cyan-600 uppercase mb-3 bg-cyan-50 border border-cyan-100 px-2.5 py-1">
              <MapPin className="w-3.5 h-3.5" /> 
              <span>{hostel.lga}, {hostel.state} State Axis</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none uppercase mb-4">
              {hostel.name}
            </h1>
            
            <div className="flex flex-wrap gap-2">
              <Tag className="bg-slate-950 text-white border-none font-black text-[10px] uppercase tracking-widest px-3 py-1.5 m-0 rounded-none">
                {hostel.type?.replace('_', ' ')}
              </Tag>
              <Tag className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]! uppercase tracking-widest px-3 py-1.5 m-0 rounded-none flex! items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified
              </Tag>
            </div>
          </div>

          {/* Core Feature Metric Grid */}
          <div className="grid grid-cols-3 gap-4 bg-slate-50 border border-slate-200 p-6">
            <div className="flex flex-col items-center text-center">
              <Bed className="w-5 h-5 text-slate-600 mb-1.5" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Layout</span>
              <span className="text-xs font-black text-slate-800 uppercase mt-0.5">Single Core</span>
            </div>
            <div className="flex flex-col items-center text-center border-x border-slate-200">
              <ShowerHead className="w-5 h-5 text-slate-600 mb-1.5" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sanitation</span>
              <span className="text-xs font-black text-slate-800 uppercase mt-0.5">Private En-Suite</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="w-5 h-5 text-slate-600 mb-1.5" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Grid Metrics</span>
              <span className="text-xs font-black text-slate-800 uppercase mt-0.5">Prepaid Meter</span>
            </div>
          </div>

          {/* NEW MODULE: Campus Proximity Metrics */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-slate-800" />
              <span>Campus Proximity Indices</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-medium">
              <div className="border border-slate-200 p-3 bg-white flex justify-between items-center text-xs">
                <span className="text-slate-400">Main Campus Gate</span>
                <span className="font-bold text-slate-800 flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-orange-500" /> ~5 Mins Walk</span>
              </div>
              <div className="border border-slate-200 p-3 bg-white flex justify-between items-center text-xs">
                <span className="text-slate-400">Lecture Theatre Hub</span>
                <span className="font-bold text-slate-800">~8 Mins Commute</span>
              </div>
            </div>
          </div>

          {/* Overview Exposition */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600" /> 
              <span>Architectural Parameters</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {hostel.description || "This premium verified single-occupant layout features high perimeter structural masonry protection defenses, standalone internal food preparation zones, continuous independent borehole pressure systems, and security personnel on site assignment."}
            </p>
          </div>

          {/* Verified Inclusions Checklist */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">System Verified Structural Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Direct continuous water grid feed networks',
                'Hardened protective steel security gating assemblies',
                'Isolated circuit layout distribution boards',
                'Zero hidden agent evaluation premium fees',
                'Escrow validation deployment contract protection',
                'Legal tenancy document signing and receipt processing'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs bg-white border border-slate-200 p-3.5 hover:border-slate-950 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Floating Brutalist Checkout Transaction Interface Panel */}
        <div className="lg:col-span-5 bg-white border-2 border-slate-950 p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] lg:sticky lg:top-28 transition-transform duration-200 hover:-translate-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-1.5">Asset Processing Pricing Matrix</p>
          <div className="flex items-baseline gap-1.5 mb-6">
            <span className="text-4xl font-black text-slate-950 tracking-tighter">
              ₦{parseInt(hostel.price.toString().replace(/[^0-9]/g, ''), 10).toLocaleString()}
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">/ single cycle year</span>
          </div>

          {/* Breakdown Ledger Details */}
          <div className="bg-slate-50 border border-slate-200 p-4 space-y-3 text-xs text-slate-600 mb-6 font-medium">
            <div className="flex justify-between">
              <span className="text-slate-400">Tenancy Base Fee</span>
              <span className="font-mono font-bold text-slate-800">₦{parseInt(hostel.price.toString().replace(/[^0-9]/g, ''), 10).toLocaleString()}.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Legal Agreement Bond</span>
              <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 border border-emerald-100 uppercase tracking-wide text-[10px]">₦0.00 Waived</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Platform Commission</span>
              <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 border border-emerald-100 uppercase tracking-wide text-[10px]">₦0.00 Direct</span>
            </div>
            <div className="border-t border-dashed border-slate-200 pt-3 flex justify-between items-center text-slate-950 font-black">
              <span className="uppercase tracking-wider text-[10px]">Required Escrow Call</span>
              <span className="font-mono text-lg">₦{parseInt(hostel.price.toString().replace(/[^0-9]/g, ''), 10).toLocaleString()}</span>
            </div>
          </div>

          {/* High-Priority Call Button */}
          <button 
            onClick={handleInitializeEscrow}
            className="w-full flex items-center justify-center gap-2 bg-slate-950 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 font-black text-xs uppercase tracking-widest h-14 border border-slate-950 mb-4 cursor-pointer shadow-sm group"
          >
            <span>Lock Allocation & Pay Escrow</span>
          </button>

          {/* Trust Guarantee Frame Footer */}
          <div className="bg-slate-50/50 border border-slate-100 p-3 flex gap-2 items-start">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[10px] leading-normal font-medium">
              Funds are safely stored inside the **Aura Guard Escrow Vault** and are only released to the housing landlord 24 hours *after* physical keys check-in validation.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default HostelDetails;