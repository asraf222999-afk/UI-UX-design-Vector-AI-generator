// File: app/page.tsx (Full version)
'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles, Palette, Download, Users, 
  Zap, Globe, Shield, Infinity as InfinityIcon,
  CheckCircle, X, ChevronRight, Target, Layers
} from 'lucide-react';
import StyleQuizModal from '@/components/StyleQuizModal';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';

export default function HomePage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const features = [
    {
      icon: <Sparkles className="text-blue-600" size={24} />,
      title: "AI-Powered Generation",
      description: "Create vectors from text descriptions using advanced AI models"
    },
    {
      icon: <Palette className="text-purple-600" size={24} />,
      title: "Style Control",
      description: "Choose from multiple art styles and customize every detail"
    },
    {
      icon: <Download className="text-green-600" size={24} />,
      title: "Vector Output",
      description: "Download as SVG, PNG, PDF with editable vector paths"
    },
    {
      icon: <Zap className="text-yellow-600" size={24} />,
      title: "Fast Processing",
      description: "Generate vectors in seconds with our optimized pipeline"
    },
    {
      icon: <Globe className="text-red-600" size={24} />,
      title: "Online Editor",
      description: "Edit and refine your vectors directly in the browser"
    },
    {
      icon: <Shield className="text-indigo-600" size={24} />,
      title: "Commercial Use",
      description: "All generated vectors come with commercial license"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      features: [
        "5 AI vector generations/month",
        "Basic styles & templates",
        "PNG download (512px)",
        "Community support",
        "Public gallery access"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Starter",
      price: "9",
      period: "per month",
      features: [
        "50 AI vector generations/month",
        "All styles & advanced controls",
        "SVG & PDF downloads",
        "Priority generation queue",
        "Commercial license",
        "Remove watermark"
      ],
      cta: "Start 7-Day Trial",
      popular: true
    },
    {
      name: "Pro",
      price: "29",
      period: "per month",
      features: [
        "Unlimited generations",
        "Custom style training",
        "Team collaboration",
        "API access",
        "Dedicated support",
        "Brand consistency tools"
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="container relative mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Now with Gemini AI Integration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Create Stunning</span>
            <span className="gradient-text">Vector Graphics</span>
            <span className="block">With AI</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Transform your ideas into production-ready vector graphics. Generate logos, illustrations, 
            icons, and more with our AI-powered platform. No design skills required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              Start Free Generator <ArrowRight size={20} />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Watch Demo (2 min)
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50K+</div>
              <div className="text-gray-600">Vectors Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-gray-600">Editable SVG Files</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-gray-600">AI Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">Free</div>
              <div className="text-gray-600">Basic Plan</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Create professional vector graphics in three simple steps
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-blue-600">1</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Describe Your Idea</h3>
              <p className="text-gray-600">
                Tell us what you want to create using our style quiz or simple text input
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-purple-600">2</div>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Generates Options</h3>
              <p className="text-gray-600">
                Our AI creates multiple vector options based on your specifications
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-green-600">3</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Download & Edit</h3>
              <p className="text-gray-600">
                Download as SVG, PNG, or PDF. Edit further in our online editor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to create professional vector graphics
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card hover:border-blue-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Start for free, upgrade as you grow. No hidden fees.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`card ${plan.popular ? 'border-2 border-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  </div>
                  <button className={`w-full py-3 rounded-xl font-medium ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                    {plan.cta}
                  </button>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              All plans include our core features. Enterprise plans available for large teams.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Vectors?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of designers, marketers, and creators who use VectorCraft AI daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsQuizOpen(true)}
                className="btn-primary px-8 py-4 text-lg"
              >
                Start Generating Free Vectors
              </button>
              <button className="btn-secondary px-8 py-4 text-lg">
                View Example Gallery
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              No credit card required. Free plan includes 5 vector generations.
            </p>
          </div>
        </div>
      </section>

      <StyleQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}