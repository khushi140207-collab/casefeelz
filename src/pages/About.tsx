import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="min-h-screen bg-brand-midnight">
      <SEO 
        title="About Us"
        description="Learn more about CASEFEELZ. We're not just selling cases, we offer stylish protection for your everyday tech essentials."
        canonical="/about"
      />
      {/* Header */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-charcoal text-white">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-lavender/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-6">
            We're Not Just<br />Selling Cases.
          </h1>
          <p className="text-2xl text-gray-300 font-medium">Everyday Tech Essentials. CASEFEELZ Cases offer stylish protection.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-brand-charcoal p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 blur-[50px] rounded-full"></div>
            
            <h1 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-12 relative z-10">CASEFEELZ: Fashion Meets Protection in Premium Phone Covers.</h1><p className="text-xl md:text-2xl font-display text-gray-300 leading-tight mb-12 relative z-10">
              CASEFEELZ started with a simple idea: <span className="text-brand-lavender">Your phone case should protect your device and reflect your personality.</span>
            </p>
            
            <div className="space-y-6 text-lg text-gray-300 font-medium relative z-10">
              <p>
                We noticed that most phone covers were either stylish but fragile or protective but ugly. So we decided to change that.
              </p>
              <p>
                Today, CASEFEELZ brings together premium protection, aesthetic designs, and everyday functionality in one place.
              </p>
              <p>
                Whether you're into clean minimalism, bold streetwear vibes, or trendy aesthetics, there's something here that feels like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-charcoal text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
           <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-16">The Vibe Check</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left">
              <div className="bg-gray-900/50 p-10 rounded-[2.5rem] border border-gray-800">
                <div className="inline-block px-4 py-2 bg-brand-lavender/20 text-brand-lavender rounded-full font-display font-bold text-sm mb-6">OUR MISSION</div>
                <p className="text-2xl md:text-3xl font-display font-bold leading-tight">
                  To make premium cases that protect your devices while letting your personality shine.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-10 rounded-[2.5rem] border border-gray-800">
                <div className="inline-block px-4 py-2 bg-brand-pink/20 text-brand-pink rounded-full font-display font-bold text-sm mb-6">OUR VISION</div>
                <p className="text-2xl md:text-3xl font-display font-bold leading-tight">
                  To become the go-to destination for the next generation of digital lifestyles.
                </p>
              </div>
           </div>

           <div className="mt-20">
             <Link to="/products" className="inline-flex items-center gap-2 font-display font-semibold text-lg text-brand-lavender hover:text-white transition-colors group">
               Shop The Aesthetic <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
