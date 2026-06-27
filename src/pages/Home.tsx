import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import {
  ShieldCheck,
  Zap,
  Palette,
  Heart,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Star,
  Instagram,
  ShoppingCart,
  Droplets,
  Image as ImageIcon,
  Brush,
  Sparkles,
  Camera,
  Upload
} from "lucide-react";
import React, { useState, useRef } from "react";
import { useStore } from "../context/StoreContext";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=1200&auto=format&fit=crop",
    title: "Protect Your Tech.",
    subtitle: "Flex Your Style.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=1200&auto=format&fit=crop",
    title: "Minimalist.",
    subtitle: "Tough as Nails.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1200&auto=format&fit=crop",
    title: "The Clear Case.",
    subtitle: "Show Your True Colors.",
  },
];

const InstagramImage: React.FC<{ src: string }> = ({ src }) => {
  const [error, setError] = useState(false);
  return (
    <div className="min-w-[250px] aspect-square rounded-[2rem] overflow-hidden group relative snap-center shadow-lg border border-gray-800 flex-shrink-0">
      {!error ? (
        <img
          referrerPolicy="no-referrer"
          src={src}
          alt="Instagram Showcase"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={() => setError(true)}
          width="400"
          height="400"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-gray-300">
          <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
          <span className="text-xs font-bold uppercase tracking-widest text-center px-4">Placeholder</span>
        </div>
      )}
      <div className="absolute inset-0 bg-brand-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <Instagram className="h-10 w-10 text-white drop-shadow-md" />
      </div>
    </div>
  );
};

export function Home() {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [activeCustomization, setActiveCustomization] = useState<string | null>(
    null,
  );
  const [selectedColor, setSelectedColor] = useState<string>("#F472B6");
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);
  const [selectedShadeStyle, setSelectedShadeStyle] = useState<{
    bg?: string;
    bgImg?: string;
    class?: string;
  }>({});

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedPattern(url);
      setSelectedShadeStyle({}); // Reset shade when uploading custom pattern
    }
  };

  const shades = [
    {
      category: "1. Neutrals & Pastels",
      benefits:
        "Prevents fingerprints, provides a non-slip grip, and looks highly premium and minimalist.",
      options: [
        {
          name: "Stone",
          style: { bg: "#d7d3c8", class: "opacity-90" },
          preview: "#d7d3c8",
        },
        {
          name: "Milk Tea",
          style: { bg: "#deb887", class: "opacity-90" },
          preview: "#deb887",
        },
        {
          name: "Coffee",
          style: { bg: "#6f4e37", class: "opacity-90" },
          preview: "#6f4e37",
        },
        {
          name: "Charcoal",
          style: { bg: "#36454f", class: "opacity-90" },
          preview: "#36454f",
        },
        {
          name: "Baby Blue",
          style: { bg: "#89cff0", class: "opacity-90" },
          preview: "#89cff0",
        },
        {
          name: "Lavender",
          style: { bg: "#e6e6fa", class: "opacity-90" },
          preview: "#e6e6fa",
        },
        {
          name: "Light Peach",
          style: { bg: "#ffdab9", class: "opacity-90" },
          preview: "#ffdab9",
        },
        {
          name: "Mint",
          style: { bg: "#98ff98", class: "opacity-90" },
          preview: "#98ff98",
        },
      ],
    },
    {
      category: "2. Gradient & Shaded Colors",
      benefits:
        "Offers a dynamic, color-shifting look depending on the angle of the light.",
      options: [
        {
          name: "Black-White",
          style: { bgImg: "linear-gradient(135deg, #000000, #ffffff)" },
          preview: "linear-gradient(135deg, #000000, #ffffff)",
        },
        {
          name: "Pink-Blue",
          style: { bgImg: "linear-gradient(135deg, #ffc0cb, #0000ff)" },
          preview: "linear-gradient(135deg, #ffc0cb, #0000ff)",
        },
        {
          name: "Sunset",
          style: { bgImg: "linear-gradient(135deg, #ff7e5f, #feb47b)" },
          preview: "linear-gradient(135deg, #ff7e5f, #feb47b)",
        },
      ],
    },
    {
      category: "3. Clear & Tinted Options",
      benefits:
        "Shows off the original design of the phone while adding a modern, cool, or bright tint to the device.",
      options: [
        {
          name: "Clear White",
          style: {
            bg: "rgba(255,255,255,0.4)",
            class: "backdrop-blur-md border border-white/20",
          },
          preview: "rgba(255,255,255,0.8)",
        },
        {
          name: "Clear Black",
          style: {
            bg: "rgba(0,0,0,0.6)",
            class: "backdrop-blur-md border border-black/20",
          },
          preview: "rgba(0,0,0,0.8)",
        },
      ],
    },
    {
      category: "4. Special Finish Shades",
      benefits: "Unique materials and dynamic shifting properties.",
      options: [
        {
          name: "Y2K / Glass Gloss",
          desc: "Glossy finish.",
          style: { class: "shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]" },
          preview:
            "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
        },
        {
          name: "Color-Changing",
          desc: "Heat-sensitive shift.",
          style: { bgImg: "linear-gradient(135deg, #ff0080, #7928ca)" },
          preview: "linear-gradient(45deg, #ff0080, #7928ca)",
        },
        {
          name: "Leather & Metallic",
          desc: "Executive aesthetic.",
          style: {
            bg: "#2a2a2a",
            class: "shadow-inner border border-gray-600",
          },
          preview: "#2a2a2a",
        },
      ],
    },
  ];

  const colors = [
    { name: "Midnight Black", hex: "#0F0F12" },
    { name: "Deep Charcoal", hex: "#1B1B21" },
    { name: "Soft Pink", hex: "#F472B6" },
    { name: "Aqua Blue", hex: "#22D3EE" },
    { name: "Pure White", hex: "#FFFFFF" },
    { name: "Light Gray", hex: "#F5F5F7" },
    { name: "Soft Silver", hex: "#E5E7EB" },
    { name: "Lavender", hex: "#C084FC" },
    { name: "Coral", hex: "#FB7185" },
    { name: "Neon Green", hex: "#A3E635" },
    { name: "Mint", hex: "#34D399" },
    { name: "Sunset Orange", hex: "#FB923C" },
    { name: "Ruby Red", hex: "#F43F5E" },
    { name: "Ocean Deep", hex: "#0369A1" },
    { name: "Forest", hex: "#065F46" },
  ];

  const patterns = [
    {
      category: "Geometric & Classic",
      items: [
        {
          name: "Checkered / Plaid",
          img: "https://images.unsplash.com/photo-1543886574-88db0a68d407?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Abstract Swirls",
          img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Stripes & Dots",
          img: "https://images.unsplash.com/photo-1506506307135-430c72cdafa8?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Mandalas",
          img: "https://images.unsplash.com/photo-1601243176166-70e28e08f515?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "Nature & Botanical",
      items: [
        {
          name: "Floral Prints",
          img: "https://images.unsplash.com/photo-1490750967868-88cb4ec0f055?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Animal Print",
          img: "https://images.unsplash.com/photo-1512411804705-4f4dc1f13fef?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Plant & Leaf",
          img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Fruits",
          img: "https://images.unsplash.com/photo-1507260388902-bfee224492bf?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "Cosmic & Whimsical",
      items: [
        {
          name: "Space & Celestial",
          img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Anime / Manga",
          img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Kawaii / Pastel",
          img: "https://images.unsplash.com/photo-1603598587635-42df2ac9f783?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Camouflage",
          img: "https://images.unsplash.com/photo-1510103233342-a7fdf70b209d?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "Textural & Artistic",
      items: [
        {
          name: "Textured 3D",
          img: "https://images.unsplash.com/photo-1605382025350-a924b1a45749?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Faux Materials",
          img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Gold Foil",
          img: "https://images.unsplash.com/photo-1588636181734-e69d71c1df7c?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Pop Art",
          img: "https://images.unsplash.com/photo-1563223048-c89b3ab72e50?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
  ];

  const abstractArts = [
    {
      category: "🎨 Category 1: Minimalist Abstract (Modern & Elegant)",
      items: [
        {
          name: "Minimal Black Line Art",
          img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Beige Abstract Shapes",
          img: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Monochrome Geometric Art",
          img: "https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Abstract Arch Pattern",
          img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Neutral Aesthetic Abstract",
          img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "🌈 Category 2: Vibrant & Trendy Abstract (Gen Z Favorite)",
      items: [
        {
          name: "Color Splash Abstract",
          img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Neon Gradient Abstract",
          img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Fluid Pour Art",
          img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Abstract Wave Pattern",
          img: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Pastel Swirl Abstract",
          img: "https://images.unsplash.com/photo-1563089145-599997674dc9?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "✨ Category 3: Premium Artistic Abstract (Luxury Feel)",
      items: [
        {
          name: "Marble Gold Abstract",
          img: "https://images.unsplash.com/photo-1588636181734-e69d71c1df7c?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Acrylic Paint Texture",
          img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Abstract Galaxy Art",
          img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Luxury Ink Flow",
          img: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=200&auto=format&fit=crop",
        },
        {
          name: "Modern Contemporary",
          img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-midnight">
      <SEO 
        title="Home"
        description="Shop premium CASEFEELZ Cases and Mobile Accessories. Discover unique phone covers and accessories at CaseFeelz."
        canonical="/"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="w-full relative group min-h-[90vh] flex items-center bg-brand-midnight">
          {/* Animated Background Gradients */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none animate-pulse duration-10000"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-brand-aqua/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start pt-20 lg:pt-0">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter text-white uppercase leading-[0.9] mb-4 drop-shadow-2xl">
                CASE
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lavender to-brand-aqua">
                  FEELZ
                </span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-widest mb-6">
                Protect in Style
              </h2>
              <p className="text-gray-300 font-sans text- lg:text-xl max-w-lg font-medium mb-10 leading-relaxed">
                "Premium Device Protection. Fashion Meets Protection with
                CASEFEELZ Covers."
              </p>

              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link
                    to="/products"
                    className="px-10 py-5 rounded-full bg-white text-brand-midnight font-display font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] text-center"
                  >
                    Shop Collection
                  </Link>
                  <Link
                    to="/products"
                    className="px-10 py-5 rounded-full bg-transparent border border-gray-600 text-white font-display font-bold uppercase tracking-widest text-sm hover:border-brand-lavender hover:bg-brand-lavender/10 transition-all duration-300 text-center"
                  >
                    Explore Trending
                  </Link>
                </div>
                <a
                  href="#customize"
                  className="px-10 py-5 rounded-full bg-brand-charcoal border border-gray-800 text-white font-display font-bold uppercase tracking-widest text-sm hover:border-brand-pink hover:text-brand-pink transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <Palette className="w-5 h-5" /> Customize Yourself
                </a>
              </div>
            </div>

            {/* Immersive Floating 3D Mockup Area */}
            <div className="relative h-[500px] lg:h-[700px] w-full perspective-1000 group">
              {/* Main floating phone */}
              <div className="absolute inset-0 flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                <img
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=800&auto=format&fit=crop"
                  alt="Premium Phone Cases and Mobile Covers"
                  className="w-[80%] max-w-[400px] rounded-[3rem] shadow-[-20px_20px_60px_rgba(0,0,0,0.5)] border-4 border-gray-800 object-cover rotate-[-5deg] group-hover:rotate-0 transition-all duration-700"
                  width="400"
                  height="500"
                />
              </div>

              {/* Secondary floating cases behind */}
              <div className="absolute top-10 right-0 w-[40%] animate-[float_8s_ease-in-out_infinite_1s]">
                <img
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop"
                  alt="Phone Case"
                  className="w-full rounded-3xl shadow-[20px_20px_40px_rgba(0,0,0,0.4)] border-2 border-gray-800 object-cover rotate-[15deg] blur-[2px] group-hover:blur-0 transition-all duration-500"
                  width="400"
                  height="500"
                />
              </div>

              <div className="absolute bottom-10 left-0 w-[35%] animate-[float_7s_ease-in-out_infinite_2s]">
                <img
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=600&auto=format&fit=crop"
                  alt="Phone Case"
                  className="w-full rounded-2xl shadow-[-15px_15px_30px_rgba(0,0,0,0.4)] border-2 border-gray-800 object-cover rotate-[-10deg] blur-[1px] group-hover:blur-0 transition-all duration-500 opacity-80"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-brand-charcoal border-y border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-brand-lavender/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              {
                title: "Drop Tested",
                desc: "Military Grade",
                icon: ShieldCheck,
              },
              { title: "Free Shipping", desc: "On orders > ₹2,999", icon: Zap },
              {
                title: "Custom Prints",
                desc: "Your unique style",
                icon: Palette,
              },
              {
                title: "Eco-Friendly",
                desc: "Recycled materials",
                icon: Heart,
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="h-16 w-16 rounded-full bg-brand-midnight flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-brand-lavender group-hover:to-brand-pink group-hover:text-white transition-all duration-300">
                  <item.icon className="h-8 w-8 opacity-80" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-widest">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs mt-1 uppercase tracking-wider">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customize Yourself */}
      <section
        id="customize"
        className="py-24 bg-brand-charcoal relative overflow-hidden border-b border-gray-800"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-lavender/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-widest text-white mb-6">
              Customize Yourself
            </h2>
            <p className="text-gray-300 font-medium tracking-wide text-lg">
              Design your own case. Make it truly yours with our advanced
              customizer tool.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Color",
                icon: Palette,
                bg: "bg-brand-pink/20",
                color: "text-brand-pink",
                desc: "Solid & Gradients",
              },
              {
                name: "Pattern",
                icon: Zap,
                bg: "bg-brand-lavender/20",
                color: "text-brand-lavender",
                desc: "Textures & Prints",
              },
              {
                name: "Shade",
                icon: Droplets,
                bg: "bg-brand-aqua/20",
                color: "text-brand-aqua",
                desc: "Translucency",
              },
              {
                name: "Upload Picture",
                icon: ImageIcon,
                bg: "bg-brand-pink/20",
                color: "text-brand-pink",
                desc: "Your Memories",
              },
              {
                name: "Abstract Art",
                icon: Brush,
                bg: "bg-white/10",
                color: "text-white",
                desc: "AI Generated",
              },
            ].map((option, i) => (
              <button
                key={i}
                aria-label={option.name}
                onClick={() => {
                  setActiveCustomization(
                    activeCustomization === option.name ? null : option.name,
                  );
                  if (option.name === "Color") {
                    setSelectedPattern(null);
                    setSelectedShadeStyle({});
                  }
                  if (option.name === "Pattern") {
                    setSelectedShadeStyle({});
                  }
                  if (option.name === "Shade") {
                    setSelectedPattern(null);
                  }
                }}
                className={`flex flex-col items-center text-center gap-4 p-6 md:p-8 rounded-[2rem] border transition-all group shadow-lg w-full ${activeCustomization === option.name ? "bg-brand-charcoal border-brand-pink -translate-y-2" : "bg-brand-midnight border-gray-800 hover:border-brand-lavender hover:-translate-y-2"}`}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${option.bg} ${option.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                >
                  <option.icon className="w-8 h-8 md:w-10 md:h-10 opacity-90" />
                </div>
                <div>
                  <span className="font-display font-bold text-xs md:text-sm text-white uppercase tracking-wider block mb-1">
                    {option.name}
                  </span>
                  <span className="text-[10px] md:text-xs text-gray-300 font-medium tracking-wide">
                    {option.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {activeCustomization && (
            <div className="mt-12 bg-brand-midnight p-8 rounded-[2.5rem] border border-gray-800 shadow-2xl animate-fade-in max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
              {/* Product Preview Side */}
              <div className="w-full lg:w-1/3 flex flex-col items-center flex-shrink-0">
                <div
                  className={`relative w-[240px] h-[480px] rounded-[3rem] border-[10px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 transform ${selectedShadeStyle.class || ""}`}
                  style={{
                    backgroundColor: selectedShadeStyle.bg || selectedColor,
                    backgroundImage: selectedPattern
                      ? `url(${selectedPattern})`
                      : selectedShadeStyle.bgImg || "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Camera hole */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-[#111] rounded-[1.2rem] border-[3px] border-[#333] shadow-inner flex flex-wrap p-1 gap-1">
                    <div className="w-5 h-5 rounded-full bg-[#0a0a0a] shadow-inner m-auto border border-[#222]"></div>
                    <div className="w-5 h-5 rounded-full bg-[#0a0a0a] shadow-inner m-auto border border-[#222]"></div>
                    <div className="w-5 h-5 rounded-full bg-[#0a0a0a] shadow-inner m-auto border border-[#222]"></div>
                  </div>
                  {/* Light Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                </div>
                <p className="text-gray-300 mt-6 text-sm font-bold uppercase tracking-widest">
                  Live Preview
                </p>
              </div>

              {/* Options Side */}
              <div className="w-full lg:w-2/3">
                {activeCustomization === "Color" && (
                  <div>
                    <h3 className="text-white font-display font-bold text-xl uppercase tracking-widest mb-6 text-center lg:text-left">
                      Select Your Color Theme
                    </h3>

                    {/* Fixed Color Palette Option */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                      {colors.map((color, idx) => (
                        <button
                          key={idx}
                          aria-label={`Select color ${color.name}`}
                          onClick={() => {
                            setSelectedColor(color.hex);
                            setSelectedPattern(null);
                            setSelectedShadeStyle({});
                          }}
                          className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-colors group ${selectedColor === color.hex && !selectedPattern && !selectedShadeStyle.bg && !selectedShadeStyle.bgImg ? "bg-brand-charcoal border border-white/20" : "hover:bg-brand-charcoal border border-transparent"}`}
                        >
                          <div
                            className={`w-12 h-12 rounded-full border-2 shadow-inner group-hover:scale-110 transition-all duration-300 ${selectedColor === color.hex && !selectedPattern && !selectedShadeStyle.bg && !selectedShadeStyle.bgImg ? "border-white scale-110" : "border-gray-700 group-hover:border-white"}`}
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <span
                            className={`text-xs font-bold transition-colors text-center ${selectedColor === color.hex && !selectedPattern && !selectedShadeStyle.bg && !selectedShadeStyle.bgImg ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                          >
                            {color.name}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Custom Hex picker */}
                    <div className="flex items-center gap-4 bg-brand-charcoal p-4 rounded-2xl border border-gray-700 max-w-sm">
                      <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-1">
                          Or Pick Custom Hex
                        </label>
                        <p className="text-[10px] text-gray-300">
                          Find your exact shade
                        </p>
                      </div>
                      <input
                        type="color"
                        value={selectedColor}
                        onChange={(e) => {
                          setSelectedColor(e.target.value);
                          setSelectedPattern(null);
                          setSelectedShadeStyle({});
                        }}
                        className="w-12 h-12 rounded cursor-pointer bg-transparent border-0"
                      />
                    </div>
                  </div>
                )}

                {activeCustomization === "Pattern" && (
                  <div className="h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    <h3 className="text-white font-display font-bold text-xl uppercase tracking-widest mb-6 animate-fade-in text-center lg:text-left">
                      Select a Pattern
                    </h3>

                    {patterns.map((section, sidx) => (
                      <div key={sidx} className="mb-8">
                        <h4 className="text-brand-pink font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                          {section.category}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {section.items.map((pat, idx) => (
                            <button key={idx} aria-label={`Select pattern ${pat.name}`} onClick={() => setSelectedPattern(pat.img)}
                              className={`flex flex-col gap-2 rounded-2xl overflow-hidden group transition-all text-left border-2 ${selectedPattern === pat.img ? "border-brand-pink scale-[1.02]" : "border-transparent hover:border-gray-600"}`}
                            >
                              <div className="aspect-[4/5] bg-gray-900 border border-gray-800 rounded-xl overflow-hidden relative">
                                <img
                                  src={pat.img}
                                  alt={pat.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  width="200"
                                  height="250"
                                  loading="lazy"
                                />
                                {selectedPattern === pat.img && (
                                  <div className="absolute inset-0 bg-brand-pink/20 flex items-center justify-center">
                                    <div className="bg-brand-pink text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                      Selected
                                    </div>
                                  </div>
                                )}
                              </div>
                              <span className="text-[10px] font-bold text-gray-300 group-hover:text-white px-1 leading-tight">
                                {pat.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeCustomization === "Upload Picture" && (
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-brand-charcoal rounded-3xl border border-gray-800 border-dashed animate-fade-in">
                    <ImageIcon className="w-12 h-12 text-brand-pink/50 mb-4" />
                    <h3 className="text-white font-display font-bold text-xl uppercase tracking-widest mb-2">
                      Add your picture
                    </h3>
                    <p className="text-gray-300 text-sm mb-8">
                      Upload your favorite memories to print on your case.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-midnight border border-gray-700 hover:border-brand-lavender text-white rounded-xl transition-all"
                      >
                        <Upload className="w-5 h-5" />
                        <span className="font-bold uppercase tracking-wider text-sm">Upload from Gallery</span>
                      </button>
                      <button 
                        onClick={() => cameraInputRef.current?.click()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-pink text-white rounded-xl hover:bg-brand-pink/90 transition-all shadow-[0_0_20px_rgba(244,114,182,0.3)]"
                      >
                        <Camera className="w-5 h-5" />
                        <span className="font-bold uppercase tracking-wider text-sm">Click your picture</span>
                      </button>
                    </div>

                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={fileInputRef} 
                      onChange={handleImageUpload} 
                      className="hidden" 
                    />
                    <input 
                      type="file" 
                      accept="image/*" 
                      capture="environment"
                      ref={cameraInputRef} 
                      onChange={handleImageUpload} 
                      className="hidden" 
                    />
                  </div>
                )}

                {activeCustomization === "Abstract Art" && (
                  <div className="h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    <h3 className="text-white font-display font-bold text-xl uppercase tracking-widest mb-6 animate-fade-in text-center lg:text-left">
                      Select Abstract Art
                    </h3>

                    {abstractArts.map((section, sidx) => (
                      <div key={sidx} className="mb-8">
                        <h4 className="text-brand-pink font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                          {section.category}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {section.items.map((pat, idx) => (
                            <button key={idx} aria-label={`Select pattern ${pat.name}`} onClick={() => setSelectedPattern(pat.img)}
                              className={`flex flex-col gap-2 rounded-2xl overflow-hidden group transition-all text-left border-2 ${selectedPattern === pat.img ? "border-brand-pink scale-[1.02]" : "border-transparent hover:border-gray-600"}`}
                            >
                              <div className="aspect-square bg-gray-900 border border-gray-800 rounded-xl overflow-hidden relative">
                                <img
                                  src={pat.img}
                                  alt={pat.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  width="200"
                                  height="200"
                                  loading="lazy"
                                />
                                {selectedPattern === pat.img && (
                                  <div className="absolute inset-0 bg-brand-pink/20 flex items-center justify-center">
                                    <div className="bg-brand-pink text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                      Selected
                                    </div>
                                  </div>
                                )}
                              </div>
                              <span className="text-[10px] font-bold text-gray-300 group-hover:text-white px-1 leading-tight">
                                {pat.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeCustomization === "Shade" && (
                  <div className="h-[500px] overflow-y-auto pr-2 custom-scrollbar animate-fade-in">
                    <h3 className="text-white font-display font-bold text-xl uppercase tracking-widest mb-6 text-center lg:text-left">
                      Select a Shade Finish
                    </h3>

                    {shades.map((section, sidx) => (
                      <div key={sidx} className="mb-8">
                        <h4 className="text-brand-aqua font-bold text-xs uppercase tracking-widest mb-2 border-b border-gray-800 pb-2">
                          {section.category}
                        </h4>
                        <p className="text-[10px] text-gray-300 mb-4 lg:mb-6">
                          {section.benefits}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {section.options.map((shade, idx) => {
                            const isSelected =
                              selectedShadeStyle.bg === shade.style.bg &&
                              selectedShadeStyle.bgImg === shade.style.bgImg &&
                              selectedShadeStyle.class === shade.style.class;
                            return (
                              <button
                                key={idx}
                                aria-label={`Select shade ${shade.name}`}
                                onClick={() => {
                                  setSelectedShadeStyle(shade.style);
                                  setSelectedPattern(null);
                                }}
                                className={`flex flex-col gap-2 rounded-2xl p-3 items-center group transition-all text-center border-2 ${isSelected ? "border-brand-aqua bg-brand-charcoal" : "border-transparent hover:bg-brand-charcoal hover:border-gray-600"}`}
                              >
                                <div
                                  className={`w-12 h-12 rounded-full border border-gray-700 overflow-hidden shadow-inner flex shrink-0 group-hover:scale-110 transition-transform duration-300 ${isSelected ? "scale-110 border-brand-aqua" : ""}`}
                                  style={{ background: shade.preview }}
                                ></div>
                                <div>
                                  <span
                                    className={`text-[10px] font-bold block leading-tight ${isSelected ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                                  >
                                    {shade.name}
                                  </span>
                                  {shade.desc && (
                                    <span className="text-[8px] text-gray-300 leading-tight block mt-1">
                                      {shade.desc}
                                    </span>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Shop by Device / Category */}
      <section className="py-24 bg-brand-midnight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-extrabold uppercase tracking-widest text-white">
              Trending Now
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 max-w-7xl mx-auto">
            {[
              {
                name: "iPhone 15 Pro Max Clear Matte",
                price: "₹1,799",
                image:
                  "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=600&auto=format&fit=crop",
                id: 101,
              },
              {
                name: "Samsung Galaxy S24 Ultra Silicone Glow",
                price: "₹1,899",
                image:
                  "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=600&auto=format&fit=crop",
                id: 102,
              },
              {
                name: "Motorola Edge 50 Neo Carbon Armor",
                price: "₹1,299",
                image:
                  "https://images.unsplash.com/photo-1599818815147-3806f1ae8d27?q=80&w=600&auto=format&fit=crop",
                id: 103,
              },
              {
                name: "Oppo Reno 11 Pro Dynamic Liquid",
                price: "₹1,599",
                image:
                  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop",
                id: 104,
              },
            ].map((product, i) => (
              <div key={i} className="group flex flex-col relative">
                <Link to="/products" className="block w-full" aria-label={`View ${product.name}`}>
                  <div className="aspect-square bg-brand-midnight mb-5 rounded-[2rem] overflow-hidden relative shadow-sm group-hover:shadow-xl group-hover:shadow-brand-lavender/10 transition-all duration-500">
                    <img
                      referrerPolicy="no-referrer"
                      src={product.image}
                      alt={`${product.name} - CASEFEELZ Phone Case`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      width="600"
                      height="600"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-brand-charcoal text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      Trending
                    </div>

                    {/* Add to Cart overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                          });
                        }}
                        className="w-full bg-brand-charcoal/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-gradient-to-r hover:from-brand-lavender hover:to-brand-pink hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    });
                  }}
                  className={`absolute top-4 right-4 z-10 w-10 h-10 bg-brand-charcoal/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-lavender transition-all opacity-0 group-hover:opacity-100 shadow-xl ${isInWishlist(product.id) ? "text-brand-pink fill-brand-pink" : "text-white"}`}
                  aria-label="Add to Wishlist"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-300 ${isInWishlist(product.id) ? "fill-current text-brand-pink" : ""}`}
                  />
                </button>
                <div className="text-left px-2">
                  <h3 className="font-display font-bold text-base leading-tight mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-lavender group-hover:to-brand-pink transition-all">
                    {product.name}
                  </h3>
                  <div className="text-gray-300 font-semibold">
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection / Drop */}
      <section className="relative h-[60vh] bg-brand-charcoal overflow-hidden group">
        <img
          referrerPolicy="no-referrer"
          src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1600&auto=format&fit=crop"
          alt="Clear Case"
          className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
          width="1600"
          height="800"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-5xl md:text-7xl font-display font-extrabold uppercase tracking-widest mb-4">
            Clear Phone Cases
          </h2>
          <h1 className="text-white font-medium text-xl mb-8">
            Ultra-minimal Phone Covers. Yellowing-resistant Shockproof Cases.
            Drop-tested Phone Covers.
          </h1>
          <Link
            to="/products"
            className="px-8 py-4 rounded-full bg-brand-charcoal text-white font-display font-bold uppercase tracking-widest text-sm hover:bg-gradient-to-r hover:from-brand-lavender hover:to-brand-pink hover:text-white hover:border-transparent transition-all duration-300 border-2 border-white shadow-xl"
          >
            Shop Clear Cases
          </Link>
        </div>
      </section>

      {/* New Arrivals Grids */}
      <section className="py-24 bg-brand-charcoal relative">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-brand-lavender/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12 pb-4">
            <h2 className="text-3xl font-display font-extrabold uppercase tracking-widest text-white">
              New Arrivals
            </h2>
            <Link
              to="/products"
              className="text-sm font-bold uppercase tracking-widest text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-lavender hover:to-brand-pink transition-all group-hover/link:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {[
              {
                name: "CASEFEELZ iPhone 15 Pro Max Silicon Case",
                price: "₹1,799",
                image:
                  "https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=600&auto=format&fit=crop",
                id: 1,
              },
              {
                name: "CASEFEELZ Samsung Galaxy S23 Plus Designer Cover",
                price: "₹1,799",
                image:
                  "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=600&auto=format&fit=crop",
                id: 2,
              },
              {
                name: "CASEFEELZ Oppo Find X7 Ultra Fluid Matte Cover",
                price: "₹1,799",
                image:
                  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop",
                id: 3,
              },
              {
                name: "CASEFEELZ Oppo Reno 11 Pro Elegant Leather Shell",
                price: "₹1,999",
                image:
                  "https://images.unsplash.com/photo-1616410011236-7a42121dd981?q=80&w=600&auto=format&fit=crop",
                id: 4,
              },
            ].map((product, i) => (
              <div key={i} className="group flex flex-col relative">
                <Link to="/products" className="block w-full" aria-label={`View ${product.name}`}>
                  <div className="aspect-[3/4] bg-brand-midnight mb-5 rounded-[2rem] overflow-hidden relative shadow-sm group-hover:shadow-xl group-hover:shadow-brand-lavender/10 transition-all duration-500">
                    <img
                      referrerPolicy="no-referrer"
                      src={product.image}
                      alt={`${product.name} - Premium Phone Cases`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      width="600"
                      height="600"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-brand-charcoal text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      New
                    </div>

                    {/* Add to Cart overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                          });
                        }}
                        className="w-full bg-brand-charcoal/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-gradient-to-r hover:from-brand-lavender hover:to-brand-pink hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    });
                  }}
                  className={`absolute top-4 right-4 z-10 w-10 h-10 bg-brand-charcoal/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-lavender transition-all opacity-0 group-hover:opacity-100 shadow-xl ${isInWishlist(product.id) ? "text-brand-pink fill-brand-pink" : "text-white"}`}
                  aria-label="Add to Wishlist"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-300 ${isInWishlist(product.id) ? "fill-current text-brand-pink" : ""}`}
                  />
                </button>
                <div className="text-left px-2">
                  <h3 className="font-display font-bold text-base leading-tight mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-lavender group-hover:to-brand-pink transition-all">
                    {product.name}
                  </h3>
                  <div className="text-gray-300 font-semibold">
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Customer Reviews Carousel */}
      <section className="py-24 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-display font-extrabold uppercase tracking-widest mb-16">
            The Hype Is Real
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory hide-scrollbar">
              {[
                {
                  text: "Amazing quality and stylish designs. My phone feels protected without looking bulky. The attention to detail is just unmatched.",
                  author: "Priya S.",
                  role: "Fashion Blogger",
                },
                {
                  text: "Fast delivery and excellent product quality. Highly recommended! I've dropped my phone twice already and it survived flawlessly.",
                  author: "Rahul M.",
                  role: "Tech Enthusiast",
                },
                {
                  text: "Finally a brand that gets Gen Z aesthetics. Just copped 3 cases and I love switching them out depending on my fit.",
                  author: "Alex K.",
                  role: "Digital Creator",
                },
                {
                  text: "The customization options are insane. I literally designed the perfect abstract case that nobody else has. Obsessed!",
                  author: "Sarah J.",
                  role: "Student",
                },
                {
                  text: "Super premium feel. The matte finish doesn't catch fingerprints at all. Best investment for my new iPhone.",
                  author: "David L.",
                  role: "Photographer",
                }
              ].map((review, i) => (
                <div
                  key={i}
                  className="min-w-[300px] md:min-w-[400px] w-[80vw] md:w-[400px] snap-center shrink-0 bg-brand-charcoal/50 backdrop-blur-xl p-10 rounded-[2.5rem] border border-gray-800 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-1 text-brand-aqua mb-6">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-gray-300 font-medium text-lg mb-8 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <div className="font-display font-bold uppercase tracking-widest text-sm text-white">
                    {review.author}
                  </div>
                  <div className="text-xs text-gray-300 mt-1 uppercase tracking-widest font-bold">
                    {review.role}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-sm text-gray-300 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
              <ChevronLeft className="w-4 h-4" /> Swipe to see more reviews <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Showcase */}
      <section className="py-24 bg-brand-charcoal border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl font-display font-extrabold uppercase tracking-widest text-white mb-4">
            #CASEFEELZ
          </h2>
          <p className="text-gray-300 font-medium tracking-wide">
            Tag us on Instagram to be featured.
          </p>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="flex overflow-x-auto gap-4 px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar snap-x">
          {[
            "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=400&auto=format&fit=crop",
          ].map((img, i) => (
            <InstagramImage key={i} src={img} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-brand-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-lavender/10 to-brand-aqua/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-widest text-white mb-6">
            Join The Club
          </h2>
          <p className="text-gray-300 font-medium mb-10 text-lg">
            Get 10% off your first order and exclusive access to new drops.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              aria-label="Email address"
              placeholder="ENTER YOUR EMAIL"
              className="px-6 py-4 bg-brand-charcoal text-white rounded-full border border-gray-800 focus:outline-none focus:border-brand-lavender font-bold tracking-widest text-sm w-full sm:w-96 uppercase placeholder-gray-600"
            />
            <button
              type="submit"
              className="px-10 py-4 rounded-full bg-white text-brand-midnight font-display font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
