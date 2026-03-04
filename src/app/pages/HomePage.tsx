import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  FileText, 
  Building2, 
  Calculator, 
  ShieldCheck, 
  BookOpen, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Users,
  Award,
  Clock
} from 'lucide-react';

export function HomePage() {
  const services = [
    {
      icon: FileText,
      title: 'Individual Tax Filing',
      description: 'Professional tax preparation and filing services for individuals, ensuring accuracy and maximum deductions.',
      price: 'Starting from $200',
      link: '/services#tax-filing'
    },
    {
      icon: Building2,
      title: 'Business Tax Filing',
      description: 'Comprehensive business tax preparation for partnerships, S-Corporations, and C-Corporations.',
      price: 'Starting from $750',
      link: '/services#business-tax'
    },
    {
      icon: BookOpen,
      title: 'Sales & Use Tax',
      description: 'Monthly sales tax compliance, calculation, and filing services to keep your business compliant.',
      price: 'Starting from $300/month',
      link: '/services#sales-tax'
    },
    {
      icon: Building2,
      title: 'Company Formation',
      description: 'Complete business formation services to get your company set up correctly from day one.',
      price: 'Starting from $300',
      link: '/services#formation'
    },
    {
      icon: ShieldCheck,
      title: 'IRS & State Notice Resolution',
      description: 'Expert handling of IRS and state tax notices, audits, and disputes to protect your interests.',
      price: 'Custom Pricing',
      link: '/services#resolution'
    },
    {
      icon: Calculator,
      title: 'Bookkeeping Services',
      description: 'Monthly bookkeeping to keep your financial records accurate, organized, and audit-ready.',
      price: 'Starting from $300/month',
      link: '/services#bookkeeping'
    }
  ];

  const stats = [
    { icon: Users, label: 'Clients Served', value: '150+' },
    { icon: Award, label: 'Years Experience', value: '7+' },
    { icon: Clock, label: 'Average Response', value: '24hrs' },
    { icon: CheckCircle2, label: 'Success Rate', value: '99%' }
  ];

  const benefits = [
    'Licensed CPA in Washington State',
    'Specialized in small to mid-sized businesses',
    'Transparent, upfront pricing',
    'Fast turnaround times',
    'IRS and state tax expertise',
    'Remote service nationwide'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTEtMS43ODkgNC00IDRzLTQtMS43ODkgNC00IDEuNzg5LTQgNC00IDQgMS43ODkgNCA0em0tNiAyNGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHptMTggMGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-600/20 rounded-full border border-teal-500/30 mb-6">
                <span className="text-teal-300 text-sm">Licensed CPA • Washington State</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl mb-6">
                Expert Tax & Business Advisory Services
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">Helping individuals, small to mid-sized businesses navigate taxes, compliance, and growth with confidence. Transparent pricing, professional service.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
                    View Services & Pricing
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/14153047262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Consultation
                </a>
                <a
                  href="mailto:cpa@taxclaim.co"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  Email: cpa@taxclaim.co
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                  <div className="space-y-6">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0" />
                        <span className="text-gray-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-teal-600" />
                <div className="text-3xl mb-1 text-slate-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-slate-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax and business solutions with transparent, competitive pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                  <service.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl mb-2 text-slate-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <span className="text-teal-600">{service.price}</span>
                  <Link 
                    to={service.link}
                    className="text-slate-900 hover:text-teal-600 transition-colors inline-flex items-center gap-1"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View All Offerings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-slate-900">
                Why Choose TaxClaim?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're not just tax preparers – we're your strategic partners in business success. Our comprehensive approach ensures you're not only compliant but positioned for growth.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Licensed & Certified',
                    desc: 'CPA licensed in Washington State with expertise across all 50 states'
                  },
                  {
                    title: 'Transparent Pricing',
                    desc: 'No hidden fees. Clear, upfront pricing for all services'
                  },
                  {
                    title: 'Dedicated Support',
                    desc: 'Direct access to your advisor via email, phone, or WhatsApp'
                  },
                  {
                    title: 'Remote Convenience',
                    desc: 'Fully remote services - work with us from anywhere in the US'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-900 mb-1">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600">7+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600">150+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600">24hr</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your free consultation today and discover how we can help your business thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
                Schedule Free Consultation
              </Button>
            </Link>
            <a
              href="https://wa.me/14153047262"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">Chat on WhatsApp</Button>
            </a>
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            No commitment required • Free initial consultation • Response within 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}