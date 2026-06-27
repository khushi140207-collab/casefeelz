import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useStore();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]" 
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-charcoal z-[70] shadow-2xl flex flex-col border-l border-gray-800 transform transition-transform duration-300">
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" /> Cart ({cart.length})
          </h2>
          <button 
            aria-label="Close cart"
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-300 space-y-4">
              <ShoppingBag className="h-12 w-12 opacity-50" />
              <p className="font-medium tracking-wide">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-brand-purple text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-lavender transition-all shadow-lg"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 bg-brand-midnight p-4 rounded-2xl border border-gray-800 group">
                <img referrerPolicy="no-referrer" src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" width="80" height="80" loading="lazy" />
                <div className="flex-1">
                  <h3 className="font-display font-bold text-sm text-white mb-1 group-hover:text-brand-lavender transition-colors">{item.name}</h3>
                  <div className="text-gray-300 font-semibold text-sm">{item.price}</div>
                </div>
                <button 
                  aria-label="Remove item"
                  onClick={() => removeFromCart(index)}
                  className="text-gray-300 hover:text-brand-pink transition-colors p-2 h-fit"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-800 bg-brand-midnight">
            <div className="flex justify-between items-center mb-6 text-white font-bold text-lg">
              <span>Total</span>
              <span>
                ₹{cart.reduce((total, item) => total + parseFloat(item.price.replace('₹', '').replace(/,/g, '')), 0).toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-white text-brand-midnight font-display font-bold uppercase tracking-widest py-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
