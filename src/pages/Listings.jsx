import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Select, Slider, Divider, Button } from 'antd';
import { Filter, SlidersHorizontal, Map, Building, BadgePercent } from 'lucide-react';

const Listings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State arrays for filtering metrics
  const [stateFilter, setStateFilter] = useState(null);
  const [lgaFilter, setLgaFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [priceRange, setPriceRange] = useState([200000, 800000]);

  // Geographical parameters
  const nigerianStates = [
    { value: 'lagos', label: 'Lagos State (UNILAG Axis)' },
    { value: 'oyo', label: 'Oyo State (UI Axis)' },
    { value: 'osun', label: 'Osun State (OAU Axis)' },
    { value: 'enugu', label: 'Enugu State (UNN Axis)' },
  ];

  const localGovernments = {
    lagos: [{ value: 'shomolu', label: 'Shomolu / Akoka' }, { value: 'yaba', label: 'Yaba Outskirts' }],
    oyo: [{ value: 'ibadan_north', label: 'Ibadan North / Agbowo' }, { value: 'bodija', label: 'Bodija Extension' }],
    osun: [{ value: 'ife_central', label: 'Ife Central / Gate' }],
    enugu: [{ value: 'nsukka', label: 'Nsukka Central' }],
  };

  const propertyTypes = [
    { value: 'self_contain', label: 'Self-Contain Suite' },
    { value: 'flat', label: 'Standard Studio Flat' },
    { value: 'shared', label: 'Shared Student Bunk' },
  ];

  const clearAllFilters = () => {
    setStateFilter(null);
    setLgaFilter(null);
    setTypeFilter(null);
    setPriceRange([200000, 800000]);
  };

  const isViewingSpecificHostel = location.pathname !== '/listings';

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* =========================================================
            LEFT COLUMN: RIGID LOCKED FIXED SIDE PANEL (DESKTOP)
           ========================================================= */}
        <aside className="lg:col-span-4 bg-white border border-slate-200 p-6 lg:sticky lg:top-28 lg:h-[calc(100vh-140px)] lg:overflow-y-auto custom-scrollbar">
          
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
            <span className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-cyan-600" /> Allocation Filters
            </span>
            <button 
              onClick={clearAllFilters}
              className="text-[10px] font-bold uppercase tracking-wider text-red-600 hover:underline"
            >
              Reset Matrix
            </button>
          </div>

          <div className="space-y-5">
            {/* 1. State Metric Selection */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Map className="w-3 h-3 text-slate-500" /> Institutional Region State
              </label>
              <Select
                className="w-full text-xs font-semibold"
                placeholder="Select Institution Area"
                value={stateFilter}
                onChange={(val) => { setStateFilter(val); setLgaFilter(null); }}
                options={nigerianStates}
                allowClear
              />
            </div>

            {/* 2. Local Government Selection */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3 h-3 text-slate-500" /> Local Government Area
              </label>
              <Select
                className="w-full text-xs font-semibold"
                placeholder={stateFilter ? "Select Specific Sub-Zone" : "Select Region State First"}
                value={lgaFilter}
                onChange={(val) => setLgaFilter(val)}
                disabled={!stateFilter}
                options={stateFilter ? localGovernments[stateFilter] : []}
                allowClear
              />
            </div>

            {/* 3. Structural Layout House Type Selection */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Building className="w-3 h-3 text-slate-500" /> Structural Space Type
              </label>
              <Select
                className="w-full text-xs font-semibold"
                placeholder="Select Architectural Layout"
                value={typeFilter}
                onChange={(val) => setTypeFilter(val)}
                options={propertyTypes}
                allowClear
              />
            </div>

            <Divider className="my-2 border-slate-100" />

            {/* 4. Price Vector Sliders */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BadgePercent className="w-3 h-3 text-slate-500" /> Annual Rental Price Cap
                </label>
              </div>
              <Slider
                range
                min={150000}
                max={1200000}
                step={25000}
                value={priceRange}
                onChange={(val) => setPriceRange(val)}
                tooltip={{ formatter: (val) => `₦${val.toLocaleString()}` }}
              />
              <div className="flex justify-between text-[11px] font-mono font-black text-slate-700 mt-1">
                <span>₦{priceRange[0].toLocaleString()}</span>
                <span>₦{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Return Link Button */}
            {isViewingSpecificHostel && (
              <Button 
                onClick={() => navigate('/listings')} 
                type="dashed" 
                block 
                className="border-slate-900 text-slate-900 font-bold text-xs uppercase tracking-wider h-11 rounded-none mt-4 flex items-center justify-center gap-2"
              >
                ← Return to Global Directory
              </Button>
            )}
          </div>
        </aside>

        {/* =========================================================
            RIGHT COLUMN: DIRECTORY CATALOG OUTLET (FLOWS NATURALLY)
           ========================================================= */}
        <main className="lg:col-span-8 bg-white border border-slate-200 p-6 min-h-[600px]">
          <Outlet context={{ stateFilter, lgaFilter, typeFilter, priceRange }} />
        </main>

      </div>
    </div>
  );
};

export default Listings;