"use client"

import { useEffect, useRef } from 'react';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Play, Sparkles, Zap, Users, Award } from 'lucide-react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);



  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/public/StudioX.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-16">
          {/* Top Navigation */}
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wide">
              STUDIO<span className="text-purple-400">X</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-light">
              <a href="#work" className="hover:text-purple-400 transition-colors duration-300">Work</a>
              <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
            </div>
          </nav>
          
          {/* Main Headline - Top Left */}
          <div className="mt-20 max-w-3xl">
            <h1 className="text-6xl lg:text-8xl font-extralight leading-none mb-6 animate-fade-in">
              Creative
              <br />
              <span className="text-purple-400 font-light">Vision</span>
              <br />
              Realized
            </h1>
            <p className="text-xl lg:text-2xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed animate-fade-in">
              We craft extraordinary digital experiences that blur the line between art and technology
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 animate-fade-in">
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-400/40 bg-transparent text-slate-100 hover:bg-slate-800/50 hover:border-purple-400/60 transition-all duration-500 px-8 py-6 text-lg font-light"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-400/40 bg-transparent text-slate-100 hover:bg-slate-800/50 hover:border-purple-400/60 transition-all duration-500 px-8 py-6 text-lg font-light"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Reel
              </Button>
            </div>
          </div>
          
          {/* Bottom scroll indicator */}
          <div className="self-center animate-pulse">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-slate-400 mx-auto mb-4" />
            <p className="text-xs font-light text-slate-400 tracking-widest">SCROLL</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 lg:px-16 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight mb-6">
              What We <span className="text-purple-400">Create</span>
            </h2>
            <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto">
              From concept to completion, we deliver immersive experiences that captivate and inspire
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Sparkles,
                title: "Brand Identity",
                description: "Crafting unique visual languages that define and elevate your brand presence"
              },
              {
                icon: Zap,
                title: "Digital Experiences",
                description: "Interactive platforms and applications that engage users through innovative design"
              },
              {
                icon: Users,
                title: "Creative Direction",
                description: "Strategic creative leadership for campaigns that make lasting impressions"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-950/50 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-700 hover:scale-105"
              >
                <service.icon className="h-12 w-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 lg:px-16 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-extralight mb-8">
                Pushing Creative <span className="text-purple-400">Boundaries</span>
              </h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
                We are a collective of designers, developers, and visionaries who believe in the power of creativity to transform businesses and inspire audiences.
              </p>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
                Our approach combines cutting-edge technology with artistic intuition, resulting in work that doesn't just look beautiful—it performs exceptionally.
              </p>
              
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-400">150+</div>
                  <div className="text-sm text-slate-400 font-light">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-400">50+</div>
                  <div className="text-sm text-slate-400 font-light">Global Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-400">5</div>
                  <div className="text-sm text-slate-400 font-light">Years of Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-900/20 to-slate-900/20 border border-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="h-24 w-24 text-purple-400/60" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8 lg:px-16 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-extralight mb-8">
            Ready to Create <span className="text-purple-400">Something Amazing?</span>
          </h2>
          <p className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and bring it to life with our creative expertise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white border-0 px-12 py-6 text-lg font-light transition-all duration-500 hover:scale-105"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-400/40 bg-transparent text-slate-100 hover:bg-slate-800/50 hover:border-purple-400/60 transition-all duration-500 px-12 py-6 text-lg font-light"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 lg:px-16 bg-black border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-light tracking-wide mb-8 md:mb-0">
              STUDIO<span className="text-purple-400">X</span>
            </div>
            
            <div className="flex space-x-12 text-sm font-light text-slate-400">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Careers</a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
            <p className="text-slate-500 font-light">
              © 2024 StudioX. Crafting the future of digital experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
