import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { SEO } from '../components/SEO';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-white pb-24 font-sans">
      <SEO 
        title="Contact Us"
        description="Get in touch with the CASEFEELZ team for support, wholesale inquiries, or just to say hi."
        canonical="/contact"
      />
      {/* Header */}
      <section className="pt-32 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-[20%] w-[30%] h-[80%] bg-brand-lavender/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-6 relative inline-block">
            Let's Talk.
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-brand-lavender to-brand-pink rounded-full"></div>
          </h1>
          <p className="text-2xl text-gray-300 font-medium mt-10">
            Questions? Feedback? Collaboration ideas?<br/>
            We're always one message away.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900/60 p-10 rounded-[2.5rem] border border-gray-800 backdrop-blur-xl h-full flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold mb-10">Hit our line.</h2>
              
              <div className="space-y-8 flex-1">
                <a href="mailto:hello@casefeelz.com" className="flex items-center gap-5 group">
                  <div className="h-14 w-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-lavender group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-300 text-sm tracking-widest uppercase mb-1">Email</h3>
                    <p className="text-xl font-bold group-hover:text-brand-lavender transition-colors">hello@casefeelz.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-5 group">
                  <div className="h-14 w-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-pink group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-300 text-sm tracking-widest uppercase mb-1">Call/Text</h3>
                    <p className="text-xl font-bold">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="h-14 w-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-300 text-sm tracking-widest uppercase mb-1">HQ</h3>
                    <p className="text-xl font-bold">Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-brand-charcoal p-10 md:p-12 rounded-[2.5rem] text-white h-full">
              <h2 className="text-3xl font-display font-bold mb-8">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 form-group">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl bg-brand-midnight border-transparent focus:bg-brand-charcoal focus:border-brand-lavender focus:ring-2 focus:ring-brand-lavender/20 outline-none transition-all font-medium text-lg"
                      placeholder="Your Vibe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl bg-brand-midnight border-transparent focus:bg-brand-charcoal focus:border-brand-lavender focus:ring-2 focus:ring-brand-lavender/20 outline-none transition-all font-medium text-lg"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-300 uppercase tracking-widest">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-brand-midnight border-transparent focus:bg-brand-charcoal focus:border-brand-lavender focus:ring-2 focus:ring-brand-lavender/20 outline-none transition-all font-medium text-lg"
                    placeholder="What's good?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 uppercase tracking-widest">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-brand-midnight border-transparent focus:bg-brand-charcoal focus:border-brand-lavender focus:ring-2 focus:ring-brand-lavender/20 outline-none transition-all font-medium text-lg resize-none"
                    placeholder="Tell us everything..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-10 py-5 bg-brand-charcoal text-white font-display font-bold text-lg rounded-xl hover:bg-brand-lavender transition-colors shadow-lg hover:shadow-brand-lavender/40 hover:-translate-y-1 transform duration-300 flex justify-center items-center gap-3"
                >
                  Send Message <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
