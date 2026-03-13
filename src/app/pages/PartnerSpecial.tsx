import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select';
import { 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Award, 
  Clock,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

export function PartnerSpecial() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', businessType: '', service: '', message: ''
  });

  // 1. "Hidden Page" Protection: Prevent SEO indexing
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.getElementsByTagName('head')[0].appendChild(meta);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Affiliate Lead:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Modified Hero for Partners */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-teal-600/20 rounded-full border border-teal-500/30 mb-6">
            <span className="text-teal-300 text-sm">Exclusive Partner Referral Offer</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">Priority Business Tax & Advisory</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            As a referred client, you receive priority access to our CPA services and a complimentary initial strategy session.
          </p>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8" 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Claim Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Stats - Keeping the Social Proof */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, label: 'Clients Served', value: '150+' },
            { icon: Award, label: 'Years Experience', value: '7+' },
            { icon: Clock, label: 'Priority Response', value: '24hrs' },
            { icon: CheckCircle2, label: 'Success Rate', value: '99%' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-teal-600" />
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Integrated Directly */}
      <section id="contact-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl mb-6 text-slate-900">Get Started</h2>
            <p className="text-gray-600 mb-8">Fill out the priority intake form and we will reach out within one business day.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-teal-600" /> <span className="text-sm">cpa@taxclaim.co</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="text-teal-600" /> <span className="text-sm">WhatsApp Support Available</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2">Priority Request Received</h3>
                  <p className="text-gray-600">We will contact you shortly to schedule your session.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select onValueChange={(v) => handleChange('service', v)}>
                      <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business-tax">Business Tax Filing</SelectItem>
                        <SelectItem value="formation">Company Formation</SelectItem>
                        <SelectItem value="resolution">IRS Notice Resolution</SelectItem>
                        <SelectItem value="bookkeeping">Monthly Bookkeeping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Note for your Advisor</Label>
                    <Textarea id="message" rows={4} onChange={(e) => handleChange('message', e.target.value)} />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 py-6 text-lg">
                    Schedule My Session
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
