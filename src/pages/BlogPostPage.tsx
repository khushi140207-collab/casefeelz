import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { SEO } from '../components/SEO';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Basic paragraph formatting based on newlines
  const contentParagraphs = post.content
    ? post.content.split('\n\n').filter((p) => p.trim() !== '')
    : [];

  return (
    <div className="min-h-screen bg-brand-midnight pb-24">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
      />
      {/* Header */}
      <section className="pt-32 pb-16 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-brand-lavender/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 font-semibold">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-300 mb-6">
            <span className={`inline-block px-4 py-1.5 bg-brand-charcoal/80 backdrop-blur-md ${post.color} text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-800`}>
              {post.category}
            </span>
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>By {post.author}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white mb-8">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 border border-gray-800">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto aspect-[21/9] object-cover" 
            loading="lazy"
          />
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-gray-200">
          {contentParagraphs.length > 0 ? (
            <div className="max-w-none text-gray-300">
              {contentParagraphs.map((paragraph, index) => {
                // Determine if it's a heading
                if (paragraph.length < 60 && !paragraph.includes('.') && index > 0) {
                  return <h3 key={index} className="text-3xl font-bold font-display text-white mt-16 mb-6">{paragraph}</h3>;
                }
                return <p key={index} className="mb-6 leading-relaxed text-xl">{paragraph}</p>;
              })}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-400 italic">Full article coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
