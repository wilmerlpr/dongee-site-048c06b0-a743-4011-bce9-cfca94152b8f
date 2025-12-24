import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
               {/* Placeholder Logo simulating Dongee Style */}
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-2xl font-bold text-slate-800 tracking-tight">DONGEE</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="text-gray-600 hover:text-dongee-primary font-medium transition-colors">Hosting</a>
              <a href="#" className="text-gray-600 hover:text-dongee-primary font-medium transition-colors">Dominios</a>
              <a href="#" className="text-gray-600 hover:text-dongee-primary font-medium transition-colors">VPS</a>
              <a href="#" className="text-gray-600 hover:text-dongee-primary font-medium transition-colors">Blog</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-dongee-primary font-medium">
              <User size={18} />
              Área de Cliente
            </a>
            <a href="#" className="bg-dongee-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-dongee-secondary transition-colors shadow-lg shadow-emerald-200">
              Comenzar ahora
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dongee-primary hover:bg-emerald-50 rounded-md">Hosting</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dongee-primary hover:bg-emerald-50 rounded-md">Dominios</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dongee-primary hover:bg-emerald-50 rounded-md">VPS</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dongee-primary hover:bg-emerald-50 rounded-md">Área de Cliente</a>
          </div>
        </div>
      )}
    </nav>
  );
}