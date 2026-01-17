'use client';

import React from 'react';
import { Sparkles, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VectorCraft AI
              </span>
              <p className="text-xs text-gray-500 -mt-1">Free Vector Generator</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
              Dashboard
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 font-medium">
              My Projects
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
              Start Free
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <User size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}