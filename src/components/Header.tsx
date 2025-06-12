import { Eye } from 'lucide-react';
import React from 'react';

export const Header = () => (
  <header className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Uwazi Hub</h1>
            <p className="text-sm opacity-80">Tuchangiane Kwa Haki</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#campaigns" className="hover:text-green-400 transition">Campaigns</a>
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#transparency" className="hover:text-green-400 transition">Uwazi</a>
        </nav>
      </div>
    </div>
  </header>
);

