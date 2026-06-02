import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowRight, MapPin, Home, DollarSign } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

const ListingsIndex = () => {
  // Pull listings directly from your global Zustand state hook store
  const hostels = useAppStore((state) => state.hostels);
  
  // Extract real-time filter criteria passing directly down from the layout's <Outlet /> context
  const { stateFilter, lgaFilter, typeFilter, priceRange } = useOutletContext();

  // Pure state filtering execution pipeline
  const filteredListels = hostels.filter((hostel) => {
    // 1. Price Vector Matching Range Logic
    // Strips out punctuation marks or currency symbols to leave clean integers
    const numericPrice = parseInt(hostel.price.toString().replace(/[^0-9]/g, ''), 10);
    if (numericPrice < priceRange[0] || numericPrice > priceRange[1]) return false;

    // 2. State Mapping Metric Verification Check
    if (stateFilter && hostel.state?.toLowerCase() !== stateFilter.toLowerCase()) return false;

    // 3. Local Government Matching Criterion 
    if (lgaFilter && hostel.lga?.toLowerCase() !== lgaFilter.toLowerCase()) return false;

    // 4. Structural Space Design Layout Architecture Verification Check
    if (typeFilter && hostel.type?.toLowerCase() !== typeFilter.toLowerCase()) return false;

    return true;
  });

  if (filteredListels.length === 0) {
    return (
      <div className="py-24 text-center border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center">
        <Home className="w-8 h-8 text-slate-300 mb-3" />
        <p className="text-sm font-black text-slate-900 uppercase tracking-wider">No Properties Found</p>
        <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
          We couldn't find matching vacancies. Try scaling back your filter fields or widening your budget parameters.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Catalog Metric Frame Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
            Available Spaces Directory
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">Showing {filteredListels.length} verified listings match criteria</p>
        </div>
        <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 uppercase font-bold tracking-wider">
          Direct Booking Active
        </span>
      </div>

      {/* Directory Stream Feed */}
      <div className="space-y-6">
        {filteredListels.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-slate-200 flex flex-col md:flex-row group transition-all duration-300 hover:border-slate-400 hover:shadow-sm"
          >
            {/* Left Box: Thumbnail Frame Asset */}
            <div className="md:w-2/5 h-52 md:h-auto min-h-[200px] bg-slate-100 relative overflow-hidden">
              {item.images && item.images.length > 0 ? (
                <img 
                  src={item.images[0]} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
                  <Home className="w-12 h-12 stroke-[1.25]" />
                </div>
              )}
              {/* Floating Utility Space Tag Badge */}
              <span className="absolute top-3 left-3 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5">
                {item.type?.replace('_', ' ') || 'Suite'}
              </span>
            </div>
            
            {/* Right Box: Specs Data Metadata Details Frame */}
            <div className="p-6 md:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-black tracking-widest text-cyan-600 uppercase mb-1.5">
                  <MapPin className="w-3 h-3 text-cyan-600 shrink-0" />
                  <span className="truncate">{item.lga}, {item.state} State</span>
                </div>
                
                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-cyan-600 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                  {item.description || "Fully furnished student accommodation within secure perimeter close to major institutions."}
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1 pt-3 border-t border-slate-100 mb-4">
                  <span className="text-2xl font-black text-slate-950 tracking-tight">
                    ₦{parseInt(item.price.toString().replace(/[^0-9]/g, ''), 10).toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">/ year</span>
                </div>
                
                <Link to={`/listings/${item.id}`} className="block">
                  <Button 
                    type="default" 
                    block 
                    className="rounded-none border-slate-900 text-slate-900 font-black uppercase tracking-wider text-[11px] h-11 flex items-center justify-center gap-2 hover:bg-slate-900 hover:text-white transition-all duration-200"
                  >
                    <span>Inspect Interior Asset</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsIndex;