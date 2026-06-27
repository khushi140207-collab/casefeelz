import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts as posts } from '../data/blog';
import { SEO } from '../components/SEO';

export function Blog() {
  return (
    <div className="min-h-screen bg-brand-midnight pb-24">
      <SEO 
        title="Blog"
        description="Read the latest updates, tech trends, style, and everything in between on The CASEFEELZ Edit."
        canonical="/blog"
      />
      {/* Header */}
      <section className="py-24 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[150%] bg-brand-lavender/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-charcoal text-white text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 text-brand-pink" /> Updates & Vibes
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-white mb-6">The CASEFEELZ Edit - Phone Case Trends</h1>
          <p className="text-xl text-gray-300 font-medium">
            Tech, trends, style, and everything in between.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="bg-brand-charcoal rounded-[2.5rem] overflow-hidden hover:shadow-xl hover:shadow-brand-lavender/10 transition-all duration-300 border border-gray-800 flex flex-col group h-full hover:-translate-y-1">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img referrerPolicy="no-referrer" src={post.image} alt={`${post.title} - Designer Cases`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width="600" height="400" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-4 py-1.5 bg-brand-charcoal/80 backdrop-blur-md ${post.color} text-[10px] font-bold uppercase tracking-wider rounded-full`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span>By {post.author}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-white leading-tight mb-4 group-hover:text-brand-lavender transition-colors">
                  <Link to="#">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-300 font-medium text-lg mb-8 flex-1">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center font-display font-semibold text-white group-hover:text-brand-lavender transition-colors mt-auto w-fit border-b-2 border-transparent group-hover:border-brand-lavender pb-1">
                  Read Article
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
