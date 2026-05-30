import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, BrainCircuit, FileText, Megaphone, Calendar, Users, Camera, UserPlus, Compass, Briefcase, Search } from 'lucide-react';
import SearchModal from './SearchModal';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  // Support CMD+K / CTRL+K globally to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path) => currentPath === path || currentPath === path + '/';

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50 px-6 py-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="scale-[0.6] origin-left -ml-2">
          <CoAILogo />
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-50 dark:bg-gray-900 p-2.5 rounded-2xl transition-colors cursor-pointer"
            title="Search Website (Cmd+K)"
          >
            <Search size={22} />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-50 dark:bg-gray-900 p-2.5 rounded-2xl transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-80 bg-white dark:bg-gray-950 shadow-[10px_0_40px_rgba(0,0,0,0.03)] transform transition-transform duration-300 ease-in-out md:translate-x-0 md:sticky md:top-0 md:h-screen md:flex flex-col border-r border-gray-100 dark:border-gray-800 transition-colors duration-200
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 hidden md:block pt-12">
           <CoAILogo />
        </div>

        {/* Desktop Search Button */}
        <div className="px-6 mb-2 hidden md:block">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center space-x-3 px-5 py-3 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-all font-bold text-sm text-left shadow-sm cursor-pointer"
          >
            <Search size={16} />
            <span>Search...</span>
            <span className="ml-auto text-[10px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 px-1.5 py-0.5 rounded-md font-mono">⌘K</span>
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 md:py-4 space-y-2 overflow-y-auto">
          <div className="text-xs font-[900] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 px-4">Menu</div>
          
          {/* Mobile Search Link */}
          <div className="md:hidden mb-4">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="w-full flex items-center space-x-4 px-6 py-3.5 rounded-3xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-left font-[800] text-[15px] cursor-pointer"
            >
              <Search size={22} className="opacity-70" />
              <span>Search Website</span>
            </button>
          </div>

          {navItems.map((item) => {
            const active = isActive(item.id);
            return (
              <a
                key={item.id}
                href={item.id}
                className={`w-full flex items-center space-x-4 px-6 py-3.5 rounded-3xl transition-all duration-200 text-left font-[800] text-[15px] ${
                  active 
                    ? 'bg-gray-900 dark:bg-gray-800 text-white shadow-lg transform scale-[1.02]' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <item.icon size={22} className={active ? 'text-white' : 'opacity-70'} />
                <span>{item.label}</span>
              </a>
            )
          })}

          <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-850">
             <a
                href="/contact"
                className={`w-full flex flex-col items-start p-6 rounded-3xl transition-all duration-200 text-left ${
                  isActive('/contact')
                    ? 'bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-900/30 scale-[1.02] shadow-sm' 
                    : 'bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 hover:shadow-md border-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 font-[900] text-blue-900 dark:text-blue-200 mb-2 text-lg">
                  <UserPlus size={22} /> Contact
                </div>
                <span className="text-sm font-[700] text-blue-800 dark:text-blue-300 leading-snug">
                  Get in touch with the Co-AI Research Group.
                </span>
              </a>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-8 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-200">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-[800] leading-relaxed">
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

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
