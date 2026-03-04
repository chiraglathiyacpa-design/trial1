import { Link } from 'react-router';
import { useEffect } from 'react';
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
  Phone,
  MessageCircle,
  FileCheck,
  CheckSquare
} from 'lucide-react';

export function ServicesPage() {
  // Handle scrolling to hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      id: 'tax-filing',
      icon: FileText,
      title: 'Individual Tax Filing',
      price: 'Starting from $200',
      description: 'Professional tax preparation and filing services for individuals, ensuring accuracy and maximum deductions.',
      included: [
        'Federal + 1 state tax return',
        'W-2, 1099, and other income forms',
        'Deduction optimization',
        'E-filing with confirmation'
      ],
      notIncluded: [
        'Tax planning recommendations',
        'Audit defence assistance',
        'Additional state returns',
        'Complex investment portfolios',
        'International income reporting'
      ]
    },
    {
      id: 'business-tax',
      icon: Building2,
      title: 'Business Tax Filing',
      price: 'Starting from $750',
      subtitle: 'Partnerships, S-Corps, C-Corps',
      description: 'Comprehensive business tax preparation for partnerships, S-Corporations, and C-Corporations.',
      included: [
        'Form 1065, 1120-S, or 1120 preparation',
        'Schedule K-1 preparation for owners',
        'State business tax returns',
      ],
      notIncluded: [
        'Year-round support',
        'Quarterly estimated tax calculations',
        'Tax strategy consultation',
        'Multi-state filings',
        'Complex corporate structures',
        'Audit defence assistance'
      ]
    },
    {
      id: 'sales-tax',
      icon: BookOpen,
      title: 'Sales & Use Tax',
      price: 'Starting from $300/month',
      description: 'Monthly sales tax compliance, calculation, and filing services to keep your business compliant.',
      included: [
        'Monthly sales tax calculations',
        'Multi-state filing support',
        'Nexus analysis and guidance',
        'Rate updates and monitoring',
        'Exemption certificate management'
      ],
      notIncluded: [
        'Audit defence assistance'
      ]
    },
    {
      id: 'formation',
      icon: Building2,
      title: 'Company Formation',
      price: 'Starting from $300',
      subtitle: 'LLC / C-Corp',
      description: 'Complete business formation services to get your company set up correctly from day one.',
      included: [
        'Entity selection consultation',
        'Articles of incorporation/organization',
        'EIN application',
        'Operating agreement/bylaws',
        'Initial state filings',
        'Business structure guidance'
      ],
      notIncluded: [
        'State filing fees (passed through)',
        'Ongoing registered agent services'
      ]
    },
    {
      id: 'resolution',
      icon: ShieldCheck,
      title: 'IRS & State Notice Resolution',
      price: 'Custom Pricing',
      description: 'Expert handling of IRS and state tax notices, audits, and disputes to protect your interests.',
      included: [
        'Notice review and analysis',
        'Direct IRS/state communication',
        'Documentation preparation',
        'Negotiation and representation',
        'Payment plan arrangements',
        'Penalty abatement requests'
      ],
      notIncluded: []
    },
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: 'Bookkeeping Services',
      price: 'Starting from $300/month',
      description: 'Monthly bookkeeping to keep your financial records accurate, organized, and audit-ready.',
      included: [
        'Transaction categorization',
        'Bank reconciliation',
        'Monthly financial statements',
        'Accounts payable/receivable',
        'Expense tracking',
        'QuickBooks Online support'
      ],
      notIncluded: [
        'Catch-up bookkeeping',
      ]
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Business Consulting & Advisory',
      price: '$100/hour',
      description: 'Strategic business advisory services to help you make informed financial decisions and grow.',
      included: [
        'Financial planning and analysis',
        'Business strategy consultation',
        'Tax planning and optimization',
        'Cash flow management',
        'Entity structure recommendations',
        'Growth strategy guidance'
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Transparent, competitive pricing for all your tax and business needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={idx}
                id={service.id}
                className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-3">
                  {/* Left: Service Info */}
                  <div className="md:col-span-1 bg-slate-50 p-8">
                    <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    
                    <h3 className="text-2xl mb-2 text-slate-900">{service.title}</h3>
                    {service.subtitle && (
                      <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
                    )}
                    
                    <div className="text-3xl text-teal-600 mb-4">{service.price}</div>
                    
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    
                    <Link to="/contact">
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        Get Started
                      </Button>
                    </Link>
                  </div>

                  {/* Right: What's Included */}
                  <div className="md:col-span-2 p-8">
                    <h4 className="text-lg mb-4 text-slate-900">What's Included</h4>
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.included.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    {service.notIncluded.length > 0 && (
                      <>
                        <h4 className="text-lg mb-4 text-slate-900">Additional Services Available</h4>
                        <div className="space-y-2">
                          {service.notIncluded.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                              </div>
                              <span className="text-gray-600 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-slate-900">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, straightforward process to get you started</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Contact Us',
                  desc: 'Reach out via contact form, email, or WhatsApp',
                  icon: Phone
                },
                {
                  step: '02',
                  title: 'Free Consultation',
                  desc: 'Discuss your needs and get a custom quote',
                  icon: MessageCircle
                },
                {
                  step: '03',
                  title: 'Onboarding',
                  desc: 'Sign engagement letter and provide documents while we set up your account',
                  icon: FileCheck
                },
                {
                  step: '04',
                  title: 'Service Delivery',
                  desc: 'Receive expert service with ongoing support',
                  icon: CheckSquare
                }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all h-full">
                    <div className="relative z-10 mb-4">
                      <item.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-sm font-semibold text-teal-600 mb-2">STEP {item.step}</div>
                    <h3 className="text-xl mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Have Questions About Our Services?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and personalized quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
                Request Consultation
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
                View FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}