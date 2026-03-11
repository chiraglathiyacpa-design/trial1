import { useState } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight, FileText, TrendingUp } from 'lucide-react';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');

  const articles = [
    {
      category: 'Compliance',
      title: 'Sales Tax vs. Use Tax: What every business owner needs to report in 2026',
      excerpt: 'Most business owners understand sales tax but forget about use tax. Auditors love this topic because it is rarely tracked correctly.',
      date: 'March 11, 2026',
      readTime: '3 min read',
      icon: TrendingUp,
      url: 'https://medium.com/@cpa_96374/sales-tax-vs-use-tax-2026-reporting-99c7f583c288'
    },
    {
      category: 'Tax Filing',
      title: '2025 Business Tax Checklist: Partnership & S-Corp Readiness',
      excerpt: 'Filing for a Partnership or S-Corp is a team hurdle. Since these are pass-through entities, the business return has to be finalized first.',
      date: 'March 06, 2026',
      readTime: '3 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-business-tax-checklist-partnership-s-corp-readiness-e57965363c9c'
    },
    {
      category: 'Tax Filing',
      title: '2026 Tax Season Checklist: Get Ready to File Your Personal Tax Return',
      excerpt: 'When filing the Individual Tax Returns for Tax Year 2025, this will be your Ultimate guide to the Checklist to simplify the filing process.',
      date: 'March 05, 2026',
      readTime: '4 min read',
      icon: FileText,
      url: 'https://medium.com/@cpa_96374/2025-tax-season-checklist-get-ready-to-file-your-personal-tax-return-d928c70b8866'
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

  const filteredArticles = activeCategory === 'All Articles' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

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

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  activeCategory === category
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
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
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
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
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
                      <span className="text-sm font-semibold">Read article</span>
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No articles found in this category yet. Check back soon!</p>
              <button 
                onClick={() => setActiveCategory('All Articles')}
                className="text-teal-600 mt-2 hover:underline"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl mb-4">Stay Updated with Tax Tips & Insights</h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for the latest tax tips and regulatory updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-slate-900 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 h-10"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 h-10 px-6">
                Subscribe
              </Button>
            </div>
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
            <a href="https://taxclaim.co/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-3">
                Schedule Consultation
              </Button>
            </a>
            <a href="https://taxclaim.co/services">
              <Button size="lg" variant="outline" className="px-8 py-3">
                View Our Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
