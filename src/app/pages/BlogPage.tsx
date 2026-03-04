import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, FileText } from 'lucide-react';

export function BlogPage() {
  const articles = [
    {
      category: 'Tax Planning',
      title: '10 Tax Deductions Small Business Owners Often Miss',
      excerpt: 'Discover commonly overlooked deductions that could save your business thousands in taxes this year.',
      date: 'February 15, 2026',
      readTime: '5 min read',
      icon: FileText,
      url: '#'
    },
    {
      category: 'Business Formation',
      title: 'LLC vs S-Corp vs C-Corp: Which Entity Structure is Right for You?',
      excerpt: 'A comprehensive guide to choosing the best business structure for your company\'s unique needs and goals.',
      date: 'February 10, 2026',
      readTime: '8 min read',
      icon: BookOpen,
      url: '#'
    },
    {
      category: 'Compliance',
      title: 'Sales Tax Nexus: What E-commerce Sellers Need to Know',
      excerpt: 'Understanding when and where you need to collect sales tax for your online business in 2026.',
      date: 'February 5, 2026',
      readTime: '6 min read',
      icon: TrendingUp,
      url: '#'
    },
    {
      category: 'Tax Filing',
      title: 'Tax Season Checklist: Essential Documents You Need',
      excerpt: 'Don\'t scramble at the last minute. Here\'s a complete checklist of documents needed for tax filing.',
      date: 'January 28, 2026',
      readTime: '4 min read',
      icon: FileText,
      url: '#'
    },
    {
      category: 'IRS',
      title: 'What to Do When You Receive an IRS Notice',
      excerpt: 'Step-by-step guide on how to handle IRS notices without panic and when to seek professional help.',
      date: 'January 20, 2026',
      readTime: '7 min read',
      icon: BookOpen,
      url: '#'
    },
    {
      category: 'Business Growth',
      title: 'Financial KPIs Every Small Business Should Track',
      excerpt: 'The key metrics that give you real insight into your business\'s financial health and growth.',
      date: 'January 15, 2026',
      readTime: '6 min read',
      icon: TrendingUp,
      url: '#'
    },
    {
      category: 'Tax Planning',
      title: 'Year-End Tax Strategies for 2025',
      excerpt: 'Smart tax planning moves to make before December 31st to reduce your 2025 tax liability.',
      date: 'December 20, 2025',
      readTime: '5 min read',
      icon: FileText,
      url: '#'
    },
    {
      category: 'Startup',
      title: 'The First 5 Financial Steps After Starting Your Business',
      excerpt: 'Critical financial and tax setup steps every new business owner must take from day one.',
      date: 'December 10, 2025',
      readTime: '8 min read',
      icon: BookOpen,
      url: '#'
    },
    {
      category: 'Bookkeeping',
      title: 'QuickBooks Online vs Desktop: Which is Better for Your Business?',
      excerpt: 'Compare features, pricing, and benefits to choose the right accounting software for your needs.',
      date: 'December 1, 2025',
      readTime: '6 min read',
      icon: TrendingUp,
      url: '#'
    }
  ];

  const categories = [
    'All Articles',
    'Tax Planning',
    'Business Formation',
    'Compliance',
    'Tax Filing',
    'IRS',
    'Business Growth',
    'Startup',
    'Bookkeeping'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Tax & Business Blog</h1>
            <p className="text-xl text-gray-300">
              Expert insights, practical tips, and guides to help you navigate taxes, compliance, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm mb-4 w-fit">
                  Featured Article
                </div>
                <h2 className="text-3xl mb-4 text-slate-900 group-hover:text-teal-600 transition-colors">
                  2026 Tax Law Changes That Will Impact Your Business
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Stay ahead of the curve with our comprehensive guide to the latest tax law changes and what they mean for small businesses in 2026.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    February 28, 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    10 min read
                  </div>
                </div>
                <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors w-fit">
                  <span>Read Article</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-12 flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-white opacity-50" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  idx === 0
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-teal-600 hover:text-teal-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all group"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <article.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs mb-3">
                    {article.category}
                  </div>
                  
                  <h3 className="text-xl mb-3 text-slate-900 group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors">
                    <span className="text-sm">Read article</span>
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl mb-4">Stay Updated with Tax Tips & Insights</h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter and get the latest tax tips, business insights, and regulatory updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-slate-900 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 h-10"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 h-10">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-slate-900">Need Professional Tax Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            While our blog articles are helpful, nothing beats personalized professional advice. Let's discuss your specific situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}