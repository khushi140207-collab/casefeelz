import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Smartphone, Search, ShoppingBag, User, Heart } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

const navItems = [
  { text: 'Home', to: '/' },
  { text: 'Products', to: '/products' },
  { text: 'About Us', to: '/about' },
  { text: 'Blog', to: '/blog' },
  { text: 'Contact Us', to: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const { cart, wishlist, setIsCartOpen, setIsWishlistOpen, showNotification, setShowNotification, notificationItemName } = useStore();

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-pink via-brand-aqua to-brand-pink bg-[length:200%_auto] animate-gradient text-white text-xs font-bold uppercase tracking-widest py-2 px-4 text-center">
        Free Shipping on Orders Over ₹2,999
      </div>

      <nav className="sticky top-0 z-50 w-full bg-brand-midnight/80 backdrop-blur-lg border-b border-brand-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center flex-1">
              <button
                onClick={toggleMenu}
                className="p-2 -ml-2 text-white hover:text-brand-pink focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
              <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
                <div className="bg-white px-3 py-1 rounded shadow-lg group-hover:bg-brand-aqua transition-colors duration-300">
                  <span className="font-display font-black text-2xl tracking-tighter text-black uppercase transition-all duration-300">
                    CASEFEELZ
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${
                      isActive ? 'text-brand-aqua' : 'text-brand-silver hover:text-brand-pink'
                    }`
                  }
                >
                  {item.text}
                </NavLink>
              ))}
            </div>

            {/* Desktop Icons */}
            <div className="flex items-center justify-end flex-1 space-x-4 md:space-x-6">
               <button aria-label="Search" className="hover:text-brand-pink text-brand-silver transition-colors hidden md:block">
                 <Search className="h-5 w-5" />
               </button>
               <button aria-label="Wishlist" onClick={() => setIsWishlistOpen(true)} className="hover:text-brand-pink text-brand-silver transition-colors hidden md:block relative">
                 <Heart className="h-5 w-5" />
                 {wishlist.length > 0 && (
                   <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                     {wishlist.length}
                   </span>
                 )}
               </button>
               <div className="relative">
                 <button aria-label="Cart" onClick={() => setIsCartOpen(true)} className="text-brand-silver hover:text-brand-pink transition-colors flex items-center gap-1 relative">
                   <ShoppingBag className="h-5 w-5" />
                   {cart.length > 0 && (
                     <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                       {cart.length}
                     </span>
                   )}
                   <span className="text-xs font-bold hidden md:block text-brand-silver hover:text-brand-pink transition-colors">({cart.length})</span>
                 </button>

                 {/* Success Popup */}
                 {showNotification && (
                   <div className="absolute right-0 top-10 w-64 bg-brand-charcoal text-white rounded-2xl p-4 border border-brand-pink shadow-[0_10px_30px_rgba(244,114,182,0.3)] z-50 transition-all duration-300">
                     <div className="flex items-center justify-between">
                       <span className="text-xs font-bold uppercase tracking-widest text-brand-aqua flex items-center gap-1.5">
                         <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-aqua animate-pulse"></span>
                         Item Added Successfully
                       </span>
                       <button aria-label="Close notification" onClick={() => setShowNotification(false)} className="text-gray-300 hover:text-white p-0.5">
                         <X className="w-3.5 h-3.5" />
                       </button>
                     </div>
                     <p className="text-[11px] text-gray-300 mt-1.5 font-medium line-clamp-1">{notificationItemName}</p>
                   </div>
                 )}
               </div>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-brand-charcoal bg-brand-midnight/98 backdrop-blur-xl absolute w-full left-0 h-[calc(100vh-100px)] overflow-y-auto z-50">
            <div className="px-4 py-8 space-y-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block text-2xl font-display font-extrabold uppercase tracking-widest transition-colors ${
                      isActive ? 'text-brand-aqua' : 'text-brand-silver hover:text-brand-pink'
                    }`
                  }
                >
                  {item.text}
                </NavLink>
              ))}
            </div>
            
            <div className="px-4 py-6 border-t border-brand-charcoal space-y-6">
              <button onClick={() => { closeMenu(); setIsWishlistOpen(true); }} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-silver hover:text-brand-pink transition-colors">
                <Heart className="h-5 w-5" /> Wishlist ({wishlist.length})
              </button>
              <Link to="#" className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-silver hover:text-brand-pink transition-colors">
                <Search className="h-5 w-5" /> Search
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
