import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, BrainCircuit, FileText, Megaphone, Calendar, Users, Camera, UserPlus, Compass, Briefcase } from 'lucide-react';

const COLORS = {
  navy: '#1b285c',
  teal: '#2a9d8f',
  sage: '#8ab07d',
  purple: '#7b5b9e',
  orangeDark: '#e86f38',
  orangeLight: '#f4a24c',
};

const CoAILogo = () => (
  <a href="/" className="flex items-center font-[900] text-5xl tracking-tight select-none cursor-pointer" style={{ fontFamily: "'Nunito', sans-serif" }}>
    <span style={{ color: COLORS.navy }}>C</span>
    <span style={{ color: COLORS.teal }}>o</span>
    <span style={{ color: COLORS.sage, margin: '0 4px', transform: 'scaleY(0.8)' }}>-</span>
    <span style={{ 
      background: `linear-gradient(to right, ${COLORS.purple} 55%, ${COLORS.orangeDark} 45%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}>A</span>
    <span style={{ color: COLORS.orangeLight, marginLeft: '2px' }}>I</span>
  </a>
);

const navItems = [
  { id: '/', label: 'Home', icon: Cpu },
  { id: '/mission-vision', label: 'Mission & Vision', icon: Compass },
  { id: '/research', label: 'Research', icon: BrainCircuit },
  { id: '/team', label: 'People', icon: Users },
  { id: '/projects', label: 'Projects', icon: Briefcase },
  { id: '/publications', label: 'Publications', icon: FileText },
  { id: '/engagement', label: 'Public Engagement', icon: Calendar },
];

export default function Navigation({ currentPath }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  const isActive = (path) => currentPath === path || currentPath === path + '/';

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white shadow-sm sticky top-0 z-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="scale-[0.6] origin-left -ml-2">
          <CoAILogo />
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:text-gray-900 bg-gray-50 p-2.5 rounded-2xl transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-[10px_0_40px_rgba(0,0,0,0.03)] transform transition-transform duration-300 ease-in-out md:translate-x-0 md:sticky md:top-0 md:h-screen md:flex flex-col border-r border-gray-100
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 hidden md:block pt-12">
           <CoAILogo />
        </div>

        <nav className="flex-1 px-6 py-8 md:py-6 space-y-2 overflow-y-auto">
          <div className="text-xs font-[900] text-gray-400 uppercase tracking-widest mb-6 px-4">Menu</div>
          {navItems.map((item) => {
            const active = isActive(item.id);
            return (
              <a
                key={item.id}
                href={item.id}
                className={`w-full flex items-center space-x-4 px-6 py-3.5 rounded-3xl transition-all duration-200 text-left font-[800] text-[15px] ${
                  active 
                    ? 'bg-gray-900 text-white shadow-lg transform scale-[1.02]' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon size={22} className={active ? 'text-white' : 'opacity-70'} />
                <span>{item.label}</span>
              </a>
            )
          })}

          <div className="pt-6 mt-6 border-t border-gray-100">
             <a
                href="/contact"
                className={`w-full flex flex-col items-start p-6 rounded-3xl transition-all duration-200 text-left ${
                  isActive('/contact')
                    ? 'bg-blue-50 border-2 border-blue-200 scale-[1.02] shadow-sm' 
                    : 'bg-gradient-to-br from-blue-50 to-teal-50 hover:shadow-md border-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 font-[900] text-blue-900 mb-2 text-lg">
                  <UserPlus size={22} /> Contact
                </div>
                <span className="text-sm font-[700] text-blue-800 leading-snug">
                  Get in touch with the Co-AI Research Group.
                </span>
              </a>
          </div>
        </nav>

        <div className="p-8 border-t border-gray-100 bg-gray-50">
          <p className="text-sm text-gray-500 text-center font-[800] leading-relaxed">
            © {new Date().getFullYear()} Co-AI<br/>
            University of Catania
          </p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
