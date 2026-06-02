import { create } from 'zustand';

export const useAppStore = create((set) => ({
  // ==========================================
  // AUTHENTICATION WORKSPACE
  // ==========================================
  user: null, 
  login: (username, role = 'student') => set({ user: { name: username, role: role } }),
  logout: () => set({ user: null }),

  // ==========================================
  // DYNAMIC REVENUE & STATE ACTIONS
  // ==========================================
  addHostel: (newHostel) => set((state) => ({ 
    hostels: [newHostel, ...state.hostels] 
  })),

  // ==========================================
  // 10 VETTED HOSTELS WITH 5 MULTI-ANGLE IMAGES EACH
  // ==========================================
  hostels: [
    { 
      id: '101', 
      name: "The Lexis Premium Suites", 
      campus: "UNILAG (Akoka Main Gate Axis)", 
      price: "₦550,000/yr", 
      power: "24/7 Monitored Solar Array + Grid Backup", 
      water: "Industrial Grade Water Treatment Plant", 
      safety: "Armed Guards + AI Facial CCTV System",
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80", // Bedroom
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80", // Workspace
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", // Exterior
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80", // Kitchenette
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"  // Bathroom
      ]
    },
    { 
      id: '102', 
      name: "Apex Scholars Quarter", 
      campus: "UI (Agbowo Commercial Axis)", 
      price: "₦420,000/yr", 
      power: "16-Hour Guaranteed Daily Generator Schedule", 
      water: "Central Borehole with Submersible Pump System", 
      safety: "Perimeter Fencing + Uniformed Night Patrol",
      images: [
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1620626011161-9974d7c252ab?auto=format&fit=crop&w=800&q=80"
      ]
    },
    { 
      id: '103', 
      name: "Emerald Heights Villa", 
      campus: "OAU (Ile-Ife Maintenance Edge)", 
      price: "₦380,000/yr", 
      power: "Inverter Systems + Dedicated Generator Station", 
      water: "Filtered Deep Well Unit", 
      safety: "Biometric Access Control Turnstiles at Front Gates",
      images: [
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560185127-6a2806647f81?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
      ]
    },
    { 
      id: '104', 
      name: "The Grand Pavilion", 
      campus: "UNILAG (Bariga Residential Sector)", 
      price: "₦600,000/yr", 
      power: "24/7 Clean Energy Solar Battery Banks", 
      water: "Double-Osmosis Filtering System", 
      safety: "Corporate Security Guard Logistics",
      images: [
        "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
      ]
    },
    { 
      id: '105', 
      name: "Prestige Executive Lodge", 
      campus: "UNN (Nsukka Green Field Gate)", 
      price: "₦340,000/yr", 
      power: "Dedicated Automatic Changeover Soundproof Generator", 
      water: "Overhead Reservoir Storage Tanks", 
      safety: "Spiked Wall Parameters + Night Wardens",
      images: [
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
      ]
    },
    { 
      id: '106', 
      name: "Vantage Point Studios", 
      campus: "UI (Samonda Road)", 
      price: "₦450,000/yr", 
      power: "Hybrid Solar Inverter Integration", 
      water: "Constant Utility Mains Supply Line", 
      safety: "Electric Security Fencing Wire + Intercom Systems",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539699082828-5785344346b5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80"
      ]
    },
    { 
      id: '107', 
      name: "The Obsidian Haven", 
      campus: "OAU (Ife Grand Gate Link)", 
      price: "₦410,000/yr", 
      power: "18-Hour Regulated Plant Rotation", 
      water: "High Pressure Deep Pumping Array", 
      safety: "24-Hour Emergency Checkpoints",
      images: [
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
      ]
    },
    { 
      id: '108', 
      name: "Summit Residences", 
      campus: "UNN (Enugu Campus Extension)", 
      price: "₦390,000/yr", 
      power: "Uninterrupted Battery Inverters for Studying", 
      water: "Water Supply Hookups + Dedicated Tankers", 
      safety: "Local Vigilante Strategic Partnership Network",
      images: [
        "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
      ]
    },
    { 
      id: '109', 
      name: "Alpha Student Suites", 
      campus: "UNILAG (Yaba Fringe Outpost)", 
      price: "₦480,000/yr", 
      power: "Gas Generator Plant Integration", 
      water: "Borehole Carbon Sand Filtering Units", 
      safety: "Panic Alarm Triggers + Solid Metal Security Doors",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534349762230-e0cac45a4dba?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80"
      ]
    },
    { 
      id: '110', 
      name: "Pinnacle Courtyard", 
      campus: "UI (Bodija Annex Link)", 
      price: "₦500,000/yr", 
      power: "Full Automation Co-Generation Plant Backup", 
      water: "Continuous Treated Overhead Reserves", 
      safety: "CCTV Array + Main Access Guard Dog Unit",
      images: [
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1594741160453-99c0d600e053?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ]
}));