import { X, Heart, ShoppingCart } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useStore();

  if (!isWishlistOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]" 
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-charcoal z-[70] shadow-2xl flex flex-col border-l border-gray-800 transform transition-transform duration-300">
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <Heart className="h-5 w-5 fill-brand-pink text-brand-pink" /> Wishlist ({wishlist.length})
          </h2>
          <button 
            aria-label="Close wishlist"
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-300 space-y-4">
              <Heart className="h-12 w-12 opacity-50" />
              <p className="font-medium tracking-wide">Your wishlist is empty.</p>
              <button 
                onClick={() => setIsWishlistOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-brand-purple text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-lavender transition-all shadow-lg"
              >
                Explore Products
              </button>
            </div>
          ) : (
            wishlist.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex flex-col gap-4 bg-brand-midnight p-4 rounded-2xl border border-gray-800 group">
                <div className="flex gap-4">
                  <img referrerPolicy="no-referrer" src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" width="80" height="80" loading="lazy" />
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-display font-bold text-sm text-white mb-1 group-hover:text-brand-lavender transition-colors">{item.name}</h3>
                    <div className="text-gray-300 font-semibold text-sm">{item.price}</div>
                  </div>
                  <button 
                    aria-label="Remove from wishlist"
                    onClick={() => toggleWishlist(item)}
                    className="text-gray-300 hover:text-brand-pink transition-colors p-2 h-fit"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <button 
                  onClick={() => {
                    addToCart(item);
                    setIsWishlistOpen(false);
                  }}
                  className="w-full mt-2 bg-brand-charcoal text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-gradient-to-r hover:from-brand-lavender hover:to-brand-pink hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 border border-gray-700"
                >
                  <ShoppingCart className="w-4 h-4" /> Move to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
