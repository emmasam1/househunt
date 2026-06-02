import React, { useState } from 'react';
import { ConfigProvider, Button, Select, Tag, Collapse, Timeline } from 'antd';
import { 
  Search, 
  MapPin, 
  Zap, 
  Droplet,
  Lock,
  ArrowRight,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  HelpCircle,
  TrendingUp,
  MessageSquare,
  ShieldAlert,
  UserCheck,
  Building,
  Star
} from 'lucide-react';

const { Panel } = Collapse;

// Custom Ant Design Theme Override - Strict Flat Design
const antThemeConfig = {
  token: {
    colorPrimary: '#0f172a', 
    borderRadius: 0,         
    fontFamily: 'Inter, system-ui, sans-serif',
    controlHeight: 48,
  },
  components: {
    Button: {
      colorPrimary: '#0f172a',
      colorPrimaryHover: '#1e293b',
      controlHeightLG: 56,
    },
    Input: {
      controlHeightLG: 56,
    },
    Select: {
      controlHeightLG: 56,
    },
    Collapse: {
      headerBg: '#ffffff',
      contentBg: '#ffffff',
    }
  },
};

const Home = () => {
  const [selectedCampus, setSelectedCampus] = useState(null);

  const trendingHostels = [
    { 
      id: 1, 
      name: "The Lexis Premium Suites", 
      campus: "UNILAG (Akoka Front Gate)", 
      price: "₦550,000/yr", 
      power: "24/7 Solar + Grid", 
      water: "Treatment Plant", 
      safety: "CCTV + Armed Patrol",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 2, 
      name: "Apex Scholars Quarter", 
      campus: "UI (Agbowo Axis)", 
      price: "₦420,000/yr", 
      power: "16-Hour Guaranteed", 
      water: "Borehole Shared", 
      safety: "Fenced + Uniformed Guard",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 3, 
      name: "Olive Heights Hostels", 
      campus: "OAU (New Ife Central)", 
      price: "₦380,000/yr", 
      power: "Prepaid Submetered", 
      water: "Running Water Tank", 
      safety: "Burglar Proofing Installed",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 4, 
      name: "Signature Crest Hub", 
      campus: "UNIPORT (Choba)", 
      price: "₦480,000/yr", 
      power: "Solar Backup Inverter", 
      water: "Industrial Filtered", 
      safety: "Police Post Proximity",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "An agent in Agbowo collected ₦40,000 for inspection and showed me the same room three times. Using this app, I filtered for 24-hour solar backup, found a location near UI gate, and met the landlord directly. No single hidden fee.",
      author: "Tunde Alabi",
      role: "300L Medicine, University of Ibadan"
    },
    {
      id: 2,
      quote: "As a parent living in Port Harcourt, I was terrified of sending rent money blindly to anyone in Lagos for my daughter's housing. The physical infrastructure audit logs on this platform gave me total peace of mind.",
      author: "Mrs. Ngozi Eke",
      role: "Parent (UNILAG Student)"
    },
    {
      id: 3,
      quote: "The double-allocation tracking is what saved me. Every other portal feels unmanaged, but here, the instant a room is chosen, it goes off the grid. Clean, fast, and entirely authentic.",
      author: "Chioma Nze",
      role: "400L Law, Obafemi Awolowo University"
    }
  ];

  const localizedFAQs = [
    {
      q: "How do you verify that these hostels and landlords are real?",
      a: "Our ground verification teams physically visit every single listed property across major campus axes. We confirm property ownership documents, verify utility setups directly, and cross-check with campus local student union guidelines before activation."
    },
    {
      q: "Are there extra hidden charges like 'Agreement & Commission'?",
      a: "Absolutely none. Traditional agents charge up to 40% in hidden fees. On this platform, you work under a direct-to-landlord scheme where all transparent maintenance costs are declared upfront."
    },
    {
      q: "How is the light and water situation handled in listed apartments?",
      a: "Every hostel profile contains a certified 'Infrastructure Audit Log'. We state clearly if the building runs on a shared prepaid meter, if solar or generator frameworks are operational, and evaluate water availability metrics."
    },
    {
      q: "Can my parents pay the rent directly through the platform safely?",
      a: "Yes. Payment processes use standardized, multi-layered secure institutional escrow channels. Funds are safely managed to protect both the tenant's security deposit and the landlord's allocation contract."
    }
  ];

  return (
    <ConfigProvider theme={antThemeConfig}>
      <div className="min-h-screen bg-[#FDFDFD] text-slate-900 antialiased font-sans selection:bg-cyan-100">
        
        {/* Anti-Fraud Notice Banner */}
        <div className="bg-slate-900 text-cyan-400 text-center py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b border-slate-800">
          ⚡ Direct Institutional Housing. Zero Untracked Agents. Zero Cash Inspection Fees.
        </div>

        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-16 pb-24 border-b border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Hero Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3 text-cyan-600 fill-current" /> Premium Student Real Estate
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] mb-6">
                The smart way to rent off-campus hostels <br />
                <span className="text-cyan-600">without agent stress.</span>
              </h1>
              
              <p className="text-base text-slate-600 font-normal max-w-xl leading-relaxed mb-8">
                Eliminate double-allocation fraud. Browse structurally vetted student apartments around major Nigerian institutions with guaranteed metrics on power, water purity, and security.
              </p>

              {/* Direct Input Search Core Element */}
              <div className="bg-white p-5 border border-slate-300 max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                  <span>Target Student Campus</span>
                  <span className="text-cyan-600 font-semibold text-[11px]">Vetting Completed Automatically</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-8">
                    <Select
                      showSearch
                      size="large"
                      className="w-full text-sm rounded-none"
                      placeholder="Select your university campus..."
                      optionFilterProp="children"
                      onChange={(value) => setSelectedCampus(value)}
                      options={[
                        { value: 'unilag', label: 'University of Lagos (UNILAG)' },
                        { value: 'ui', label: 'University of Ibadan (UI)' },
                        { value: 'oau', label: 'Obafemi Awolowo University (OAU)' },
                        { value: 'uniport', label: 'University of Port Harcourt (UNIPORT)' },
                        { value: 'unizik', label: 'Nnamdi Azikiwe University (UNIZIK)' },
                      ]}
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <Button 
                      type="primary" 
                      size="large" 
                      block 
                      icon={<Search className="w-4 h-4" />}
                      className="uppercase tracking-wider text-xs! bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 rounded-none h-12"
                    >
                      Find Verified Spaces
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100 text-xs">
                  <span className="text-slate-400 font-semibold">Instant Filters:</span>
                  <Tag className="bg-slate-50 border-slate-200 text-slate-600 rounded-none px-2 py-0.5 m-0 font-medium">Single Room Self-Contain</Tag>
                  <Tag className="bg-slate-50 border-slate-200 text-slate-600 rounded-none px-2 py-0.5 m-0 font-medium">Inverter/Solar Systems</Tag>
                </div>
              </div>

              {/* Conversion Statistics Counter */}
              <div className="grid grid-cols-3 gap-6 max-w-lg mt-10 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-2xl font-black text-slate-900 tracking-tight">1,850+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Hostels Vetted</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 tracking-tight">₦0.00</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Agent Fees</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-cyan-600 tracking-tight">100%</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Direct Landlords</p>
                </div>
              </div>
            </div>

            {/* Hero Right: Live Activity Panel */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 relative">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 text-cyan-600" /> Active Platform Feed
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> Live Updates
                </span>
              </div>

              <p className="text-xs font-medium text-slate-500 mb-4">Latest residential verification stamps across student zones:</p>

              <div className="flex flex-col gap-3">
                <div className="bg-white border border-slate-200 p-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Self-Contain Flat near Unilag Gate</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Water analysis verified &bull; Solar power readied</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 uppercase tracking-wide">Approved</span>
                </div>
                <div className="bg-white border border-slate-200 p-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Premium Single Room Block, Ife</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Burglar proof structures physical audit completed</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 uppercase tracking-wide">Approved</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-900 text-slate-100 text-center">
                <p className="text-xs font-medium text-slate-300 mb-3">Skip verification steps and review full listings instantly</p>
                <Button type="primary" block className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 rounded-none border-none h-11">
                  Enter Direct Marketplace <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* ================= THE VERIFICATION JOURNEY (NEW) ================= */}
        <section className="py-24 max-w-5xl mx-auto px-6 border-b border-slate-200">
          <div className="text-center mb-16">
            <p className="text-xs uppercase font-bold tracking-widest text-cyan-600 mb-2">Our On-Ground Protocol</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">How we secure your space.</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto font-light">Every listed hostel undergoes three layers of physical field checks before appearing live.</p>
          </div>

          <Timeline mode="alternate" className="pt-4">
            <Timeline.Item dot={<Building className="w-4 h-4 text-slate-900" />}>
              <div className="bg-white border border-slate-200 p-5 text-left">
                <h3 className="font-bold text-sm text-slate-900 mb-1">1. Structural Title & Deed Check</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Our legal matching teams interface directly with primary asset owners to confirm valid execution deeds. This eliminates fake family-agent scams completely.</p>
              </div>
            </Timeline.Item>
            <Timeline.Item dot={<Zap className="w-4 h-4 text-amber-500" />}>
              <div className="bg-white border border-slate-200 p-5 text-left">
                <h3 className="font-bold text-sm text-slate-900 mb-1">2. Core Utility Performance Logging</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Field inspectors physically check submetering infrastructure, confirm borehole water filtration status, and verify solar battery bank output capacities.</p>
              </div>
            </Timeline.Item>
            <Timeline.Item dot={<UserCheck className="w-4 h-4 text-cyan-600" />}>
              <div className="bg-white border border-slate-200 p-5 text-left">
                <h3 className="font-bold text-sm text-slate-900 mb-1">3. Direct Key Escrow Activation</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Once passed, the individual allocation metrics are mapped out onto our live framework, ready for direct scheduling without any extra third-party intervention.</p>
              </div>
            </Timeline.Item>
          </Timeline>
        </section>

        {/* ================= REAL-TIME VISUAL SHOWCASE GRID ================= */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase font-bold tracking-widest text-cyan-600 mb-2">Verified Showcases</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Trending off-campus residential slots.
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md font-light mt-2 md:mt-0">
              Genuine architectural assets with exact infrastructural specifications monitored by campus field units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingHostels.map((hostel) => (
              <div key={hostel.id} className="bg-white border border-slate-200 flex flex-col justify-between group transition-all hover:border-slate-400">
                <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
                  <img 
                    src={hostel.image} 
                    alt={hostel.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900 text-white font-black text-xs px-2 py-1 border border-slate-700">
                    {hostel.price}
                  </div>
                </div>

                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="font-bold text-sm text-slate-900 tracking-tight mb-1">{hostel.name}</h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-300" /> {hostel.campus}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] text-slate-600 font-medium">
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 border border-slate-100">
                      <Zap className="w-3 h-3 text-amber-500 fill-current" /> <span>{hostel.power}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 border border-slate-100">
                      <Droplet className="w-3 h-3 text-blue-500" /> <span>{hostel.water}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-1.5 border border-slate-100">
                      <Lock className="w-3 h-3 text-emerald-600" /> <span>{hostel.safety}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Button type="default" block className="text-[11px] uppercase font-bold tracking-wider rounded-none border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900">
                    Examine Space Logs
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROOF SQUAD: TESTIMONIALS SECTION (NEW) ================= */}
        <section className="py-24 bg-slate-900 text-white border-b border-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">Student & Parent Reviews</p>
              <h2 className="text-3xl font-black tracking-tight text-white">Trusted across major campuses.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-slate-800/60 border border-slate-700 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <p className="text-slate-300 text-xs italic leading-relaxed font-light mb-6">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="font-bold text-sm text-white">{t.author}</h4>
                    <p className="text-[10px] text-cyan-400 font-medium uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ELIMINATING THE EXPLOITATION VALUE PROP ================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase font-bold tracking-widest text-cyan-600 mb-2">Institutional Guardrails</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Protecting your budget from predatory real estate tactics.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 border border-slate-200">
                <div className="w-10 h-10 bg-slate-900 text-cyan-400 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Direct Owner Verification</h3>
                <p className="text-slate-500 font-normal text-xs leading-relaxed">
                  We verify clear root titles of buildings directly. No random sub-agents or squatter lease scams. When you process payments, it routes directly to audited principal asset managers.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-200">
                <div className="w-10 h-10 bg-slate-900 text-cyan-400 flex items-center justify-center mb-6">
                  <Filter className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Utility Transparency Level</h3>
                <p className="text-slate-500 font-normal text-xs leading-relaxed">
                  We force landlords to state utility infrastructure configurations down to prepaid status, pumping hours, and alternative electrical generation layouts before a room is allowed online.
                </p>
              </div>

              <div className="bg-white p-8 border border-slate-200">
                <div className="w-10 h-10 bg-slate-900 text-cyan-400 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Zero Double-Allocation Checks</h3>
                <p className="text-slate-500 font-normal text-xs leading-relaxed">
                  Once a hostel room key allocation is assigned on our system, the property parameters lock instantly. No room can be marketed or leased to multiple student inquiries at the same time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LOCALIZED SYSTEM FAQ ACCORDION ================= */}
        <section className="py-24 max-w-4xl mx-auto px-6 border-b border-slate-200">
          <div className="text-center mb-16">
            <HelpCircle className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Frequently asked questions.
            </h2>
            <p className="text-slate-500 text-sm font-light mt-1">
              Clear, transparent answers about safety, financial processing, and on-ground campus logistics.
            </p>
          </div>

          <Collapse accordion className="bg-white border border-slate-200 rounded-none shadow-none">
            {localizedFAQs.map((faq, index) => (
              <Panel 
                header={<span className="font-bold text-slate-800 text-sm">{faq.q}</span>} 
                key={index}
                className="border-b border-slate-200 last:border-none rounded-none shadow-none"
              >
                <p className="text-slate-600 text-xs leading-relaxed font-normal bg-white">
                  {faq.a}
                </p>
              </Panel>
            ))}
          </Collapse>
        </section>

        {/* ================= CLOSING ACTION URGENCY ================= */}
        <section className="bg-slate-950 text-slate-100 py-20 border-b border-slate-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black tracking-tight text-white mb-4">
              Secure reliable off-campus quarters early.
            </h2>
            <p className="text-slate-400 font-light text-xs max-w-md mx-auto mb-8 leading-relaxed">
              Don’t wait until upcoming semester rushes trigger high pricing adjustments. Protect your focus and secure verified rooms safely today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <Button 
                type="primary" 
                size="large" 
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider px-8 w-full sm:w-auto rounded-none border-none h-12"
              >
                Initialize Hostel Match
              </Button>
            </div>
          </div>
        </section>

      </div>
    </ConfigProvider>
  );
};

export default Home;