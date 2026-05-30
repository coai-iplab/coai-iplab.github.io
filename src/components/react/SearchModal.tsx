import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Users, FileText, Briefcase, Megaphone, Calendar, CornerDownLeft } from 'lucide-react';

interface SearchItem {
  title: string;
  subtitle: string;
  type: string;
  url: string;
  content: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<SearchItem[]>([]);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch search index when modal is opened
  useEffect(() => {
    if (isOpen) {
      fetch('/search-index.json')
        .then((res) => res.json())
        .then((data) => setIndex(data))
        .catch((err) => console.error('Failed to load search index', err));
      
      // Auto-focus input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      // Disable body scroll when open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Search Filtering
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = index.filter((item) => {
      const matchString = `${item.title} ${item.subtitle} ${item.content}`.toLowerCase();
      return terms.every((term) => matchString.includes(term));
    });

    setResults(filtered.slice(0, 10)); // Limit to top 10 results
    setSelectedIndex(0);
  }, [query, index]);

  // Handle Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (!isOpen || results.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          window.location.href = selected.url;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Handle click outside modal to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'People':
        return <Users size={18} className="text-teal-600 dark:text-teal-400" />;
      case 'Publications':
        return <FileText size={18} className="text-purple-600 dark:text-purple-400" />;
      case 'Projects':
        return <Briefcase size={18} className="text-blue-600 dark:text-blue-400" />;
      case 'News':
        return <Megaphone size={18} className="text-green-600 dark:text-green-400" />;
      case 'Public Engagement':
        return <Calendar size={18} className="text-orange-600 dark:text-orange-400" />;
      default:
        return <Search size={18} className="text-gray-500" />;
    }
  };

  const getTypeColorClass = (type: string) => {
    switch (type) {
      case 'People':
        return 'bg-teal-50 dark:bg-teal-950/20 text-teal-700 dark:text-teal-400 border-teal-100 dark:border-teal-900/30';
      case 'Publications':
        return 'bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400 border-purple-100 dark:border-purple-900/30';
      case 'Projects':
        return 'bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/30';
      case 'News':
        return 'bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border-green-100 dark:border-green-900/30';
      case 'Public Engagement':
        return 'bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 border-orange-100 dark:border-orange-900/30';
      default:
        return 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-800';
    }
  };

  // Helper to highlight match terms
  const highlightMatch = (text: string, search: string) => {
    if (!search.trim()) return text;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-yellow-100 dark:bg-yellow-950/60 text-yellow-900 dark:text-yellow-200 font-bold px-0.5 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 bg-gray-900/40 dark:bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col max-h-[70vh] scale-100 animate-in zoom-in-95 duration-200 transition-colors duration-200"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <Search size={22} className="text-gray-400 dark:text-gray-500 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-gray-900 dark:text-white text-lg border-0 outline-none focus:ring-0 placeholder-gray-400 font-bold"
            placeholder="Search for people, papers, news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-xl transition-colors cursor-pointer ml-2"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-gray-400 dark:text-gray-500 space-y-2">
              <Search size={40} className="mx-auto text-gray-300 dark:text-gray-700 stroke-[1.5]" />
              <p className="font-bold text-base text-gray-500 dark:text-gray-400">Search the Co-AI Research Website</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Type keywords to query publications, project details, news feed, and team member bios.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-gray-400 dark:text-gray-500 space-y-2">
              <span className="text-2xl">🔍</span>
              <p className="font-bold text-base text-gray-500 dark:text-gray-400">No results found for "{query}"</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Try adjusting your spelling or searching for a different keyword.</p>
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <a
                  key={idx}
                  href={item.url}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-150 border text-left block ${
                    isSelected
                      ? 'bg-gray-900 dark:bg-gray-800 border-gray-900 dark:border-gray-700 text-white shadow-lg transform translate-x-1'
                      : 'bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/30 border-gray-100 dark:border-gray-800/80 text-gray-800 dark:text-gray-200'
                  }`}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className={`p-2.5 rounded-xl border flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-white/10 border-white/15' : getTypeColorClass(item.type)}`}>
                    {isSelected ? React.cloneElement(getTypeIcon(item.type), { className: 'text-white' }) : getTypeIcon(item.type)}
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${isSelected ? 'bg-white/10 border-white/15 text-white' : getTypeColorClass(item.type)}`}>
                        {item.type}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-black text-white/50 flex items-center gap-1 font-sans">
                          Go <CornerDownLeft size={10} />
                        </span>
                      )}
                    </div>
                    
                    <h4 className={`font-black text-base md:text-lg mb-1 leading-snug truncate ${isSelected ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}>
                      {highlightMatch(item.title, query)}
                    </h4>
                    
                    <p className={`text-xs md:text-sm font-semibold truncate ${isSelected ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                      {highlightMatch(item.subtitle, query)}
                    </p>
                  </div>
                </a>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest transition-colors duration-200">
          <div className="flex gap-4">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <span>esc to close</span>
        </div>
      </div>
    </div>
  );
}
