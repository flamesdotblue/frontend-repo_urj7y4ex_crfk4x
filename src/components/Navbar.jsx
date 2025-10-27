import { Wrench, Store, Truck, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Wrench size={20} />
            </div>
            <span className="font-semibold text-gray-900 text-lg tracking-tight">Mechzo</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#flow" className="hover:text-gray-900 transition-colors flex items-center gap-2">
              <Truck size={16} /> Operations
            </a>
            <a href="#partners" className="hover:text-gray-900 transition-colors flex items-center gap-2">
              <Store size={16} /> Partners
            </a>
            <a href="#security" className="hover:text-gray-900 transition-colors flex items-center gap-2">
              <Shield size={16} /> Security
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
              Join as Partner
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">
              Get the App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
