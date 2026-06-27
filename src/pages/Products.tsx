import { useState } from 'react';
import { ArrowRight, Filter, ShoppingCart, Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { products, categories } from '../data/products';
import { SEO } from '../components/SEO';

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-midnight pb-24">
      <SEO 
        title="Products"
        description="Browse our premium selection of CASEFEELZ cases and accessories. Shop cases for iPhone, Samsung, Motorola, and Oppo."
        canonical="/products"
      />
      {/* Header */}
      <section className="bg-brand-charcoal text-white pt-24 pb-32 text-center relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-brand-lavender/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[60%] bg-brand-pink/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-widest mb-4">Shop Cases</h1>
          <p className="text-gray-300 font-medium tracking-wide text-lg">Discover our latest collection of premium mobile covers. Stylish Protection for everyday essentials.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 bg-brand-charcoal rounded-[2.5rem] shadow-xl p-6 md:p-12">
          
          {/* Sidebar / Filters (Desktop) */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 font-display font-extrabold uppercase text-lg tracking-widest mb-6 text-white">
                <Filter className="h-5 w-5" /> Categories
              </div>
              <ul className="space-y-4 text-sm font-semibold tracking-wider text-gray-300">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setActiveCategory(cat.id)}
                      className={`hover:text-brand-lavender transition-all flex items-center gap-2 ${activeCategory === cat.id ? 'text-brand-lavender font-bold translate-x-2' : ''}`}
                    >
                      {activeCategory === cat.id && <span className="h-1.5 w-1.5 rounded-full bg-brand-pink"></span>}
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Mobile Categories Scroll */}
            <div className="md:hidden flex overflow-x-auto pb-4 mb-8 gap-4 no-scrollbar border-b border-gray-800">
              {categories.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-full ${activeCategory === cat.id ? 'bg-brand-charcoal text-white shadow-lg shadow-brand-charcoal/20' : 'bg-brand-midnight text-gray-300 hover:bg-brand-charcoal hover:text-white'}`}
                  >
                    {cat.label}
                  </button>
                ))}
            </div>

            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-bold text-gray-300 tracking-wider">
                {filteredProducts.length} Results
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer flex flex-col relative" itemScope itemType="https://schema.org/Product">
                  <meta itemProp="name" content={product.name} />
                  <div className="aspect-[3/4] bg-brand-midnight mb-5 rounded-3xl overflow-hidden relative shadow-sm group-hover:shadow-xl group-hover:shadow-brand-lavender/10 transition-all duration-500">
                    <img referrerPolicy="no-referrer" itemProp="image" src={product.image} alt={`${product.name} - Premium Case Accessory`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" width="600" height="600" loading="lazy" />
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-brand-charcoal text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">New</div>
                    )}
                    
                    {/* Add to Cart overlay on hover */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
                        }}
                        className="w-full bg-brand-charcoal/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-gradient-to-r hover:from-brand-lavender hover:to-brand-pink hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  {/* Wishlist Button */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist({ id: product.id, name: product.name, price: product.price, image: product.image });
                    }}
                    className={`absolute top-4 right-4 z-10 w-10 h-10 bg-brand-charcoal/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-lavender transition-all opacity-0 group-hover:opacity-100 shadow-xl ${isInWishlist(product.id) ? 'text-brand-pink fill-brand-pink' : 'text-white'}`}
                    aria-label="Add to Wishlist"
                  >
                    <Heart className={`w-5 h-5 transition-colors duration-300 ${isInWishlist(product.id) ? 'fill-current text-brand-pink' : ''}`} />
                  </button>

                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <h3 className="font-display font-bold text-lg leading-tight mb-1 text-white group-hover:text-brand-lavender transition-colors">{product.name}</h3>
                    <div className="text-gray-300 font-semibold" itemProp="price" content={product.price.replace('₹', '').replace(/,/g, '')}>{product.price}</div>
                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
