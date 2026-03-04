import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              TaxClaim ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Information We Collect</h2>
            
            <h3 className="text-xl mt-8 mb-3 text-slate-900">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Fill out our contact form or request a consultation</li>
              <li>Engage our professional services</li>
              <li>Subscribe to our newsletter or resources</li>
              <li>Communicate with us via email, phone, or WhatsApp</li>
            </ul>
            <p className="text-gray-600 mb-6">
              This information may include: name, email address, phone number, business information, tax identification numbers, financial data, and other information necessary to provide our services.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-6">
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We may also collect information about your browsing actions and patterns.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide, maintain, and improve our tax and business advisory services</li>
              <li>Process your transactions and manage your account</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Comply with legal obligations and professional standards</li>
              <li>Protect against fraud and unauthorized access</li>
              <li>Improve our website and user experience</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">How We Share Your Information</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., secure document storage, payment processors).</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information when required by law, regulation, legal process, or governmental request.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> We may share information when you have given us explicit consent to do so.</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure document portals for file sharing</li>
              <li>Access controls and authentication measures</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-600 mb-6">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to legal and professional retention requirements.</li>
              <li><strong>Opt-Out:</strong> You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.</li>
              <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format.</li>
            </ul>
            <p className="text-gray-600 mb-6">
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. For more information, please see our <Link to="/cookie-policy" className="text-teal-600 hover:text-teal-700">Cookie Policy</Link>.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Third-Party Links</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Professional Standards</h2>
            <p className="text-gray-600 mb-6">
              As a licensed CPA, we adhere to the confidentiality requirements and professional standards set forth by the American Institute of Certified Public Accountants (AICPA) and state regulatory boards. Client information is protected under professional privilege and confidentiality rules.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-2"><strong>TaxClaim</strong></p>
              <p className="text-gray-600 mb-1">Email: <a href="mailto:cpa@taxclaim.co" className="text-teal-600 hover:text-teal-700">cpa@taxclaim.co</a></p>
              <p className="text-gray-600 mb-1">Phone: <a href="tel:+14153047262" className="text-teal-600 hover:text-teal-700">+1 (415) 304-7262</a></p>
              <p className="text-gray-600">Location: San Jose, California</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}