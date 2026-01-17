import React from 'react';
import { Sparkles, Github, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles size={24} className="text-blue-400" />
              <span className="text-xl font-bold">VectorCraft AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform ideas into production-ready vector graphics with AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Tutorials</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">License</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> for designers worldwide
          </p>
          <p className="mt-2">© {new Date().getFullYear()} VectorCraft AI. All rights reserved.</p>
          <p className="text-sm mt-2">This is a free project for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}