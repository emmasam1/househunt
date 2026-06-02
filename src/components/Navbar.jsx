import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import { LogIn, Menu, X, LogOut, ChevronRight } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

const Navbar = () => {
  const { user, logout } = useAppStore();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop route styling link logic
  const getNavLinkClass = ({ isActive }) => 
    `text-xs font-bold uppercase tracking-wider transition-all duration-200 border-b-2 pb-1 ${
      isActive 
        ? 'text-cyan-600 border-cyan-500' 
        : 'text-slate-500 border-transparent hover:text-slate-900 hover:border-slate-300'
    }`;

  // Mobile drawer route styling logic
  const getMobileLinkClass = ({ isActive }) =>
    `flex items-center justify-between text-sm font-black uppercase tracking-widest p-4 border border-slate-200 transition-all ${
      isActive 
        ? 'bg-slate-950 text-cyan-400 border-slate-950' 
        : 'bg-white text-slate-800 hover:bg-slate-50'
    }`;

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Branding Token */}
        <Link to="/" onClick={closeMenu} className="text-xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
          <span className="bg-slate-900 text-cyan-400 px-2 py-0.5 text-sm uppercase">Aura</span> Hub
        </Link>

        {/* Desktop Directory Link Tree */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
          <NavLink to="/listings" className={getNavLinkClass}>Listings</NavLink>
          <NavLink to="/list-your-house" className={getNavLinkClass}>List Your House</NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
        </div>

        {/* Desktop Adaptive Auth Profile Controller */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-2 border border-slate-200 uppercase tracking-wide">
                👋 {user.name}
              </span>
              <Button 
                size="small" 
                type="link" 
                onClick={logout} 
                className="text-xs font-bold text-red-600 p-0 hover:text-red-700 uppercase tracking-wider"
              >
                Logout
              </Button>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className="group relative inline-flex items-center gap-2 bg-slate-950 text-white font-black text-xs uppercase tracking-widest px-6 h-11 border border-slate-950 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-95"
            >
              <span>Sign In</span>
              <LogIn className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Mobile Hamburger Trigger Icon */}
        <button 
          onClick={() => setMobileOpen(true)}
          className="flex md:hidden items-center justify-center p-2 text-slate-900 hover:bg-slate-100 border border-slate-200"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

      </div>

      {/* Modern Brutalist Mobile Drawer Overlay */}
      <Drawer
        placement="right"
        onClose={closeMenu}
        open={mobileOpen}
        closable={false}
        width="85%"
        styles={{ body: { padding: '24px 16px', background: '#FDFDFD' } }}
      >
        {/* Drawer Header Shell */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
          <span className="text-lg font-black tracking-tighter text-slate-900">
            <span className="bg-slate-900 text-cyan-400 px-2 py-0.5 text-xs uppercase">Aura</span> Navigation
          </span>
          <button 
            onClick={closeMenu} 
            className="p-2 text-slate-900 border border-slate-200 bg-white hover:bg-slate-50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Navigation Route Matrix */}
        <div className="flex flex-col gap-3">
          <NavLink to="/" onClick={closeMenu} className={getMobileLinkClass}>
            <span>Home</span> <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>
          <NavLink to="/listings" onClick={closeMenu} className={getMobileLinkClass}>
            <span>Listings</span> <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>
          <NavLink to="/list-your-house" onClick={closeMenu} className={getMobileLinkClass}>
            <span>List Your House</span> <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={getMobileLinkClass}>
            <span>Contact</span> <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>
        </div>

        {/* Mobile Bottom Context Actions Panel */}
        <div className="absolute bottom-6 left-4 right-4">
          {user ? (
            <div className="space-y-3">
              <div className="bg-slate-50 border border-slate-200 p-4 text-center">
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Active Space Account</p>
                <p className="text-sm font-black text-slate-800">👋 {user.name}</p>
              </div>
              <button 
                onClick={() => { logout(); closeMenu(); }} 
                className="w-full flex items-center justify-center gap-2 border border-red-200 bg-red-50 text-red-700 font-bold text-xs uppercase tracking-widest h-12"
              >
                <LogOut className="w-4 h-4" />
                <span>Terminated Session</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => { navigate('/login'); closeMenu(); }} 
              className="w-full flex items-center justify-center gap-2 bg-slate-950 text-cyan-400 font-black text-xs uppercase tracking-widest h-14 border border-slate-950"
            >
              <span>Access Secure Account</span>
              <LogIn className="w-4 h-4" />
            </button>
          )}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;