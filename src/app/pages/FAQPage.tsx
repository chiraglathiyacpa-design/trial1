import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { MessageSquare } from 'lucide-react';

export function FAQPage() {
  const faqCategories = [
    {
      category: 'General Questions',
      faqs: [
        {
          question: 'Who can use your services?',
          answer: 'We work with individuals, self-employed professionals, and small to mid-sized businesses across all 50 states. Whether you\'re a sole proprietor, LLC, partnership, S-Corp, or C-Corp, we have the expertise to help you.'
        },
        {
          question: 'Are you a licensed CPA?',
          answer: 'Yes, we are a licensed Certified Public Accountant (CPA) in Washington State. We maintain all required continuing education credits and stay current with federal and state tax law changes.'
        },
        {
          question: 'Do you only serve clients in Washington State?',
          answer: 'No! While we\'re licensed in Washington State, we serve clients across all 50 states. Our services are 100% remote, allowing us to work with businesses nationwide.'
        }
      ]
    },
    {
      category: 'Services & Pricing',
      faqs: [
        {
          question: 'What does "starting from" mean in your pricing?',
          answer: 'Our "starting from" prices represent the minimum cost for straightforward cases. Final pricing depends on the complexity of your situation, number of forms needed, and time required. We always provide a quote before beginning work.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'Absolutely not. We believe in transparent pricing. Any additional costs (like state filing fees) are disclosed upfront. You\'ll never receive a surprise bill.'
        },
        {
          question: 'When do we pay?',
          answer: 'Payment is due after your tax return is fully prepared and you\'ve had the opportunity to review and approve it. Once payment is received, we will proceed with filing your return with the relevant authorities.'
        },
        {
          question: 'What\'s included in the monthly bookkeeping service?',
          answer: 'Our monthly bookkeeping includes transaction categorization, bank reconciliation, monthly financial statements (P&L and Balance Sheet), accounts payable/receivable tracking, and QuickBooks Online support. Catch-up bookkeeping is quoted separately.'
        },
        {
          question: 'How does the consulting/advisory service work?',
          answer: 'Consulting is billed at $100/hour and can cover business strategy, tax planning, entity structure, financial analysis, or any business advisory needs. We can work on specific projects or provide ongoing advisory support.'
        }
      ]
    },
    {
      category: 'Process & Timeline',
      faqs: [
        {
          question: 'How quickly can you start working on my taxes?',
          answer: 'After our initial consultation and receiving all necessary documents, we typically begin work within 2-3 business days. During tax season (January-April), turnaround times may be slightly longer.'
        },
        {
          question: 'What documents do I need to provide?',
          answer: 'For individual taxes: W-2s, 1099s, receipts for deductions, and prior year returns. For business taxes: financial statements, receipts, payroll records, and previous returns. We\'ll provide a detailed checklist based on your specific situation.'
        },
        {
          question: 'How do we communicate and share documents?',
          answer: 'We use secure, encrypted methods for all document sharing and communication. You can reach us via email, phone, or WhatsApp. Documents are shared through secure portals to protect your sensitive information.'
        },
        {
          question: 'What if I get audited?',
          answer: 'We offer audit support and representation for tax returns we prepare. If you receive an IRS or state notice, we can help you respond and represent you throughout the audit process. Please note that audit representation is a separate chargeable service - contact us for pricing based on your specific situation.'
        }
      ]
    },
    {
      category: 'Tax Filing Specific',
      faqs: [
        {
          question: 'Can you handle multi-state tax returns?',
          answer: 'Yes! We regularly handle multi-state returns for businesses operating in multiple states and individuals with income from different states.'
        },
        {
          question: 'Do you file taxes for non-resident aliens (NRAs)?',
          answer: 'Yes, we can help non-resident aliens file their U.S. tax returns. This requires additional forms and documentation, so please mention this during your initial consultation.'
        },
        {
          question: 'What\'s the difference between Individual and Business tax filing?',
          answer: 'Individual tax filing (Form 1040) is for personal income, while business tax filing covers partnerships (1065), S-Corps (1120-S), and C-Corps (1120). Sole proprietors report business income on Schedule C of their individual return.'
        },
        {
          question: 'Can you help me maximize my tax deductions?',
          answer: 'Absolutely! We carefully review all potential deductions and credits you qualify for, ensuring you don\'t pay more tax than necessary while staying compliant with IRS rules.'
        }
      ]
    },
    {
      category: 'Business Services',
      faqs: [
        {
          question: 'Should I form an LLC or C-Corp?',
          answer: 'It depends on your business goals, revenue, growth plans, and tax situation. We provide entity structure consultation as part of our formation service to help you choose the right structure.'
        },
        {
          question: 'What states can you form companies in?',
          answer: 'We can help form companies in any U.S. state, though many clients choose Delaware, Wyoming, or their home state. We\'ll advise on the best jurisdiction for your situation.'
        },
        {
          question: 'Do you handle sales tax for e-commerce businesses?',
          answer: 'Yes! E-commerce sales tax can be complex with nexus rules varying by state. We help you determine where you need to collect sales tax and handle the filing in those states.'
        },
        {
          question: 'What\'s included in IRS Resolution services?',
          answer: 'We handle IRS and state notices, audit representation, payment plan negotiations, penalty abatement requests, and tax dispute resolution. Pricing varies based on complexity - contact us for a custom quote.'
        }
      ]
    },
    {
      category: 'Getting Started',
      faqs: [
        {
          question: 'How do I get started?',
          answer: 'Simply fill out our contact form, email us, or reach out via WhatsApp. We\'ll schedule a free consultation to discuss your needs and provide a quote. No commitment required!'
        },
        {
          question: 'Is the initial consultation really free?',
          answer: 'Yes! The initial consultation is completely free with no obligation. We want to understand your needs and ensure we\'re the right fit for your business.'
        },
        {
          question: 'What happens after I contact you?',
          answer: 'We\'ll respond within 24 hours to schedule a consultation. During the call, we\'ll discuss your needs, answer questions, and provide pricing. If you decide to proceed, we\'ll send an engagement letter and get started!'
        },
        {
          question: 'Do you work with new businesses just starting out?',
          answer: 'Absolutely! We love working with startups and new entrepreneurs. We can help with formation, initial setup, tax planning, and ongoing support as you grow.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services, pricing, and process. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl mb-6 text-slate-900">{category.category}</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIdx) => (
                  <AccordionItem
                    key={faqIdx}
                    value={`${idx}-${faqIdx}`}
                    className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow [&:last-child]:border-b"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="text-slate-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-teal-600" />
            </div>
            
            <h2 className="text-3xl mb-4 text-slate-900">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're here to help! Reach out to us and we'll get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Contact Us
                </Button>
              </Link>
              <a
                href="https://wa.me/14153047262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-slate-900">Explore More</h2>
            <p className="text-lg text-gray-600">Learn more about our services and how we can help</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/services"
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <h3 className="text-xl mb-2 text-slate-900 group-hover:text-teal-600 transition-colors">
                View All Services
              </h3>
              <p className="text-gray-600">
                Explore our complete range of tax and business services
              </p>
            </Link>

            <Link
              to="/about"
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <h3 className="text-xl mb-2 text-slate-900 group-hover:text-teal-600 transition-colors">
                About Us
              </h3>
              <p className="text-gray-600">
                Learn about our credentials and experience
              </p>
            </Link>

            <Link
              to="/resources"
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <h3 className="text-xl mb-2 text-slate-900 group-hover:text-teal-600 transition-colors">
                Blog
              </h3>
              <p className="text-gray-600">
                Read helpful articles and tax tips
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}