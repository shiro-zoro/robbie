"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Phone, Target, Award, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import Lenis from 'lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {useRouter} from "next/navigation";

const AppointmentAgency = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);
  const router = useRouter()
    // console.log(calendlyOpen)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.from('.hero-title', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power4.out',
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power4.out',
    });

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: 'power4.out',
    });

    // Stats animation
    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Services animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 80,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
    });

    // Process steps animation
    gsap.from('.process-step', {
      scrollTrigger: {
        trigger: processRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      x: -100,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    // Testimonials animation
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    // Pricing cards animation
    gsap.from('.pricing-card', {
      scrollTrigger: {
        trigger: pricingRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    // Floating animation for hero gradient
    gsap.to('.gradient-blob', {
      y: 30,
      x: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const openCalendly = () => {
    router.push("https://calendly.com/gemzy569/")
  };

  return (
      <div className="min-h-screen bg-slate-950 text-white">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Space+Grotesk:wght@500;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(
  90deg,
  #FFFFFF 0%,
  #EDEDFC 45%,
  #5DA9E9 100%
);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg {
          background: linear-gradient(
  135deg,
  #1E1C2F 0%,
  #2B2845 55%,
  #403D58 100%
);
        }

        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          pointer-events: none;
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.3);
        }

        .calendly-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .calendly-container {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 1000px;
          height: 90vh;
          position: relative;
        }

        .calendly-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 10000;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s;
        }

        .calendly-close:hover {
          background: #dc2626;
        }

        @media (max-width: 768px) {
          .calendly-container {
            height: 85vh;
          }
        }
      `}</style>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="font-display text-2xl font-bold gradient-text">
                ApexConnect
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
                <a href="#process" className="hover:text-indigo-400 transition-colors">Process</a>
                <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
                <a href="#testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</a>
                <button
                    onClick={openCalendly}
                    className="gradient-bg px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                >
                  Book a Call
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                  <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
                  <a href="#process" className="hover:text-indigo-400 transition-colors">Process</a>
                  <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
                  <a href="#testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</a>
                  <button
                      onClick={openCalendly}
                      className="gradient-bg px-6 py-2.5 rounded-full font-semibold text-center"
                  >
                    Book a Call
                  </button>
                </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="gradient-blob w-96 h-96 bg-[#FFFFFF] absolute top-20 -right-20"></div>
          <div className="gradient-blob w-80 h-80 bg-[#5DA9E9] absolute bottom-20 -left-20"></div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="hero-title font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Pipeline Into <br/>
              <span className="gradient-text">Qualified Appointments</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
              We only get paid when you close deals. Our expert cold callers and appointment setters work on pure
              commission, ensuring we&#39;re invested in your success.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                  href={"https://calendly.com/gemzy569/"}
                  target={"_blank"}
                  className="gradient-bg px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all flex items-center gap-2"
              >
                Schedule Strategy Call <ArrowRight size={20}/>
              </Link>
              <a href="#pricing"
                 className="border-2 border-indigo-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-500/10 transition-all">
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="stat-card text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
                <div className="text-5xl font-bold gradient-text mb-2">500+</div>
                <div className="text-slate-400">Appointments Set Monthly</div>
              </div>
              <div className="stat-card text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
                <div className="text-5xl font-bold gradient-text mb-2">35%</div>
                <div className="text-slate-400">Average Close Rate</div>
              </div>
              <div className="stat-card text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
                <div className="text-5xl font-bold gradient-text mb-2">120+</div>
                <div className="text-slate-400">Active Clients</div>
              </div>
              <div className="stat-card text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
                <div className="text-5xl font-bold gradient-text mb-2">$12M+</div>
                <div className="text-slate-400">Revenue Generated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Commission-based solutions that align our success with yours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                  className="service-card card-hover p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <Phone size={32}/>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Cold Calling</h3>
                <p className="text-slate-400 mb-6">
                  Expert cold callers who know how to engage prospects, overcome objections, and book qualified
                  appointments that show up.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">Targeted prospect research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">Custom scripts & messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">CRM integration</span>
                  </li>
                </ul>
              </div>

              <div
                  className="service-card card-hover p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <Calendar size={32}/>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Appointment Setting</h3>
                <p className="text-slate-400 mb-6">
                  Professional appointment setters who fill your calendar with decision-makers ready to hear your
                  solution.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">Calendar management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">Confirmation & reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">Show-up rate optimization</span>
                  </li>
                </ul>
              </div>

              <div
                  className="service-card card-hover p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <Target size={32}/>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Lead Qualification</h3>
                <p className="text-slate-400 mb-6">
                  Strategic qualification process that ensures you only speak with prospects who match your ideal
                  customer profile.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">ICP matching & scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">Budget & authority verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span className="text-slate-300">Detailed lead briefings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" ref={processRef} className="py-32 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                A proven 4-step process designed to fill your pipeline with qualified opportunities
              </p>
            </div>

            <div className="space-y-8">
              <div
                  className="process-step flex flex-col md:flex-row items-start gap-6 p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
                <div
                    className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Discovery & Strategy</h3>
                  <p className="text-slate-400">
                    We dive deep into your business, ideal customer profile, value proposition, and goals. Together, we
                    craft a customized outreach strategy that resonates with your target market.
                  </p>
                </div>
              </div>

              <div
                  className="process-step flex flex-col md:flex-row items-start gap-6 p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
                <div
                    className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Team Training & Setup</h3>
                  <p className="text-slate-400">
                    Our expert team learns your offering inside and out. We develop custom scripts, integrate with your
                    CRM, and set up tracking systems to ensure transparency and accountability.
                  </p>
                </div>
              </div>

              <div
                  className="process-step flex flex-col md:flex-row items-start gap-6 p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
                <div
                    className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Outreach & Qualification</h3>
                  <p className="text-slate-400">
                    We start reaching out to your target prospects through strategic cold calling. Every lead is
                    carefully qualified against your criteria before being scheduled on your calendar.
                  </p>
                </div>
              </div>

              <div
                  className="process-step flex flex-col md:flex-row items-start gap-6 p-8 bg-slate-800/50 rounded-2xl backdrop-blur">
                <div
                    className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3">Optimize & Scale</h3>
                  <p className="text-slate-400">
                    We continuously analyze performance metrics, refine our approach, and scale what works. You get
                    detailed reporting and regular strategy sessions to maximize ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" ref={testimonialsRef} className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Real results from real businesses we&#39;ve helped grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                  className="testimonial-card p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                      <Award key={i} size={20} className="text-yellow-400 fill-yellow-400"/>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">
                  &#34;ApexConnect doubled our sales meetings in the first month. Their commission model means
                  they&#39;re as
                  invested in results as we are. Best decision we made this year.&#34;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-bg rounded-full"></div>
                  <div>
                    <div className="font-bold">Sarah Chen</div>
                    <div className="text-sm text-slate-400">CEO, TechFlow Solutions</div>
                  </div>
                </div>
              </div>

              <div
                  className="testimonial-card p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                      <Award key={i} size={20} className="text-yellow-400 fill-yellow-400"/>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">
                  &#34;The quality of appointments is incredible. Every prospect they book is pre-qualified and actually
                  shows up. Our close rate has never been higher.&#34;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-bg rounded-full"></div>
                  <div>
                    <div className="font-bold">Michael Torres</div>
                    <div className="text-sm text-slate-400">VP Sales, CloudScale Inc</div>
                  </div>
                </div>
              </div>

              <div
                  className="testimonial-card p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                      <Award key={i} size={20} className="text-yellow-400 fill-yellow-400"/>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">
                  &#34;Finally, an appointment setting service that actually works. Zero risk with their commission
                  structure, and they&#39;ve become an extension of our sales team.&#34;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-bg rounded-full"></div>
                  <div>
                    <div className="font-bold">Jessica Williams</div>
                    <div className="text-sm text-slate-400">Founder, GrowthHack Pro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" ref={pricingRef} className="py-32 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Simple <span className="gradient-text">Commission Pricing</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                We only win when you win. No retainers, no setup fees—just results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div
                  className="pricing-card card-hover p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-5xl font-bold gradient-text mb-2">10%</div>
                  <div className="text-slate-400">Commission per closed deal</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>Up to 20 appointments/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>CRM integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>Weekly reporting</span>
                  </li>
                </ul>
                <button
                    onClick={openCalendly}
                    className="w-full gradient-bg py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Get Started
                </button>
              </div>

              <div
                  className="pricing-card card-hover p-8 bg-linear-[135deg,#2B2845_0%,#3A3760_50%,#5DA9E9_100%] rounded-2xl border-2 border-indigo-400 relative">
                <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">Growth</h3>
                  <div className="text-5xl font-bold mb-2">8%</div>
                  <div className="text-slate-100">Commission per closed deal</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-1 flex-shrink-0"/>
                    <span>Up to 50 appointments/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-1 flex-shrink-0"/>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-1 flex-shrink-0"/>
                    <span>Advanced CRM features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-1 flex-shrink-0"/>
                    <span>Daily reporting & analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-1 flex-shrink-0"/>
                    <span>Custom script development</span>
                  </li>
                </ul>
                <button
                    onClick={openCalendly}
                    className="w-full bg-white text-indigo-600 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Get Started
                </button>
              </div>

              <div
                  className="pricing-card card-hover p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-5xl font-bold gradient-text mb-2">Custom</div>
                  <div className="text-slate-400">Tailored to your needs</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>Unlimited appointments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>Dedicated team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>White-label solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-indigo-400 mt-1 flex-shrink-0"/>
                    <span>Strategic consultation</span>
                  </li>
                </ul>
                <button
                    onClick={openCalendly}
                    className="w-full gradient-bg py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 "></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Sales?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have scaled their sales pipeline with ApexConnect.
              Book your free consultation today and see how we can drive results for your business.
            </p>
            <button
                onClick={openCalendly}
                className="gradient-bg px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Schedule Free Consultation
              <ArrowRight size={20}/>
            </button>
            <p className="text-sm text-slate-500 mt-4">
              No commitment required • 30-minute strategy session
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 border-t border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="font-display text-2xl font-bold gradient-text mb-4">
                  ApexConnect
                </div>
                <p className="text-slate-400 mb-4 max-w-md">
                  Performance-based appointment setting that drives real results.
                  We only succeed when you do.
                </p>
                <div className="flex gap-4">
                  <a href="#"
                     className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#"
                     className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#"
                     className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a href="mailto:hello@apexconnect.com" className="hover:text-white transition-colors">
                      hello@apexconnect.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="hover:text-white transition-colors">
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="pt-4">
                    <button
                        onClick={openCalendly}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
                    >
                      Book a Meeting →
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
              <p>&copy; 2025 ApexConnect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  )
}

export const dynamic = 'force-dynamic'
export default AppointmentAgency
