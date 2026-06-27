import { Link } from 'react-router-dom';
import { Smartphone, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-offwhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 bg-brand-lavender rounded-full flex items-center justify-center text-white">
                <Smartphone className="h-5 w-5" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tighter text-white uppercase">
                CASEFEELZ
              </span>
            </Link>
            <p className="text-gray-300 font-medium">Protect in Style with CASEFEELZ. Shop Premium Designer Cases, Mobile Covers, Shockproof Cases, and Everyday Tech Essentials.
              Protect Your Tech. Flex Your Style.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Instagram" className="h-12 w-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-brand-lavender hover:to-brand-pink hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="h-12 w-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-brand-lavender hover:to-brand-pink hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="h-12 w-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-brand-lavender hover:to-brand-pink hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6 tracking-wide text-lg">Vibe Check</h3>
            <ul className="space-y-3 font-medium text-gray-300">
              <li><Link to="/" className="hover:text-brand-pink transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-pink transition-colors">Our Story</Link></li>
              <li><Link to="/products" className="hover:text-brand-pink transition-colors">Drops</Link></li>
              <li><Link to="/blog" className="hover:text-brand-pink transition-colors">The Edit</Link></li>
              <li><Link to="/contact" className="hover:text-brand-pink transition-colors">Holla</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6 tracking-wide text-lg">Shop</h3>
            <ul className="space-y-3 font-medium text-gray-300">
              <li><Link to="/products" className="hover:text-brand-lavender transition-colors">Phone Cases</Link></li>
              <li><Link to="/products" className="hover:text-brand-lavender transition-colors">Screen Protection</Link></li>
              <li><Link to="/products" className="hover:text-brand-lavender transition-colors">Charging Essentials</Link></li>
              <li><Link to="/products" className="hover:text-brand-lavender transition-colors">Clear Cases</Link></li>
              <li><Link to="/products" className="hover:text-brand-lavender transition-colors">Aesthetic Drops</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6 tracking-wide text-lg">Hit Us Up</h3>
            <ul className="space-y-4 font-medium text-gray-300">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
                <a href="mailto:hello@casefeelz.com" className="hover:text-white transition-colors">
                  hello@casefeelz.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
                <span>Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 font-medium gap-4">
          <p>© {new Date().getFullYear()} CASEFEELZ. No cap.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
