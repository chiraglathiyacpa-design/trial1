import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Terms of Service</h1>
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
              Welcome to TaxClaim. These Terms of Service ("Terms") govern your use of our website and professional services. By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">1. Services Provided</h2>
            <p className="text-gray-600 mb-6">
              TaxClaim provides professional tax preparation, business formation, bookkeeping, tax advisory, and related financial services. Our services are provided by licensed professionals in accordance with applicable laws and professional standards.
            </p>
            <p className="text-gray-600 mb-6">
              Specific services and pricing are outlined in individual engagement letters. These Terms supplement, but do not replace, the terms of any engagement letter you sign with us.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">2. Professional Relationship</h2>
            <h3 className="text-xl mt-8 mb-3 text-slate-900">Engagement</h3>
            <p className="text-gray-600 mb-6">
              Our professional relationship begins when you sign an engagement letter. The engagement letter will specify the scope of services, fees, responsibilities, and other important terms. You acknowledge that browsing our website or requesting a consultation does not create a professional or client relationship.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Professional Standards</h3>
            <p className="text-gray-600 mb-6">
              We adhere to the professional standards and ethical guidelines established by the American Institute of Certified Public Accountants (AICPA), state boards of accountancy, and applicable regulatory bodies.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">3. Client Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate, complete, and timely information and documentation</li>
              <li>Respond promptly to our requests for information</li>
              <li>Review all documents and returns before filing</li>
              <li>Pay fees according to the agreed-upon schedule</li>
              <li>Maintain records as required by law</li>
              <li>Notify us immediately of any changes that may affect your tax situation</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">4. Fees and Payment</h2>
            <h3 className="text-xl mt-8 mb-3 text-slate-900">Pricing</h3>
            <p className="text-gray-600 mb-6">
              Fees for services are outlined on our website and in engagement letters. "Starting from" prices represent minimum costs for straightforward cases. Final pricing depends on complexity and time required.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Payment Terms</h3>
            <p className="text-gray-600 mb-6">
              Payment is due upon completion of services and before filing, unless otherwise agreed in writing. For ongoing services (e.g., bookkeeping), payment terms will be specified in your engagement letter. Late payments may incur interest charges.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Additional Services</h3>
            <p className="text-gray-600 mb-6">
              Services beyond the scope of your engagement letter may incur additional fees. We will notify you before performing work that would result in additional charges.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">5. Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              We maintain strict confidentiality of all client information in accordance with professional standards and applicable laws. Information will only be disclosed with your consent or as required by law. For more details, see our <Link to="/privacy-policy" className="text-teal-600 hover:text-teal-700">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">6. Limitations of Liability</h2>
            <h3 className="text-xl mt-8 mb-3 text-slate-900">Professional Judgment</h3>
            <p className="text-gray-600 mb-6">
              Our services involve professional judgment based on information you provide and applicable laws. Tax laws are complex and subject to interpretation. We strive for accuracy but cannot guarantee specific outcomes.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Limitation of Damages</h3>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law and professional standards, our total liability for any claims arising from our services shall not exceed the fees paid for the specific service giving rise to the claim.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Third-Party Information</h3>
            <p className="text-gray-600 mb-6">
              We are not responsible for the accuracy of information provided by third parties or for changes in tax laws that occur after the completion of services.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on this website, including text, graphics, logos, and software, is the property of TaxClaim or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">8. Website Use</h2>
            <h3 className="text-xl mt-8 mb-3 text-slate-900">Permitted Use</h3>
            <p className="text-gray-600 mb-6">
              You may use our website for lawful purposes to learn about our services and contact us for professional assistance.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Prohibited Activities</h3>
            <p className="text-gray-600 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Use our website for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Harvest or collect information about other users</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Impersonate any person or entity</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">9. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-6">
              Our website and general information are provided "as is" without warranties of any kind. While we strive to provide accurate information, we make no representations about the accuracy, reliability, or completeness of information on our website. Website information does not constitute professional advice. For advice specific to your situation, you must engage our professional services.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">10. Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate an engagement according to the terms specified in the engagement letter. Upon termination, you remain responsible for fees for services rendered. We will return your records upon request and payment of all outstanding fees.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">11. Dispute Resolution</h2>
            <h3 className="text-xl mt-8 mb-3 text-slate-900">Governing Law</h3>
            <p className="text-gray-600 mb-6">
              These Terms shall be governed by the laws of the State of Washington, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Arbitration</h3>
            <p className="text-gray-600 mb-6">
              Any disputes arising from these Terms or our professional relationship shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, unless otherwise specified in your engagement letter.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">12. Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to indemnify and hold TaxClaim, its professionals, and affiliates harmless from any claims, damages, or expenses arising from your breach of these Terms, violation of any law, or provision of inaccurate information.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">13. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website or services after changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">14. Severability</h2>
            <p className="text-gray-600 mb-6">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">15. Entire Agreement</h2>
            <p className="text-gray-600 mb-6">
              These Terms, together with any engagement letter and our Privacy Policy, constitute the entire agreement between you and TaxClaim regarding the use of our website and services.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-2"><strong>TaxClaim</strong></p>
              <p className="text-gray-600 mb-1">Email: <a href="mailto:cpa@taxclaim.co" className="text-teal-600 hover:text-teal-700">cpa@taxclaim.co</a></p>
              <p className="text-gray-600 mb-1">Phone: <a href="tel:+14153047262" className="text-teal-600 hover:text-teal-700">+1 (415) 304-7262</a></p>
              <p className="text-gray-600">Location: San Jose, California</p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-8">
              <p className="text-teal-900 mb-2">
                <strong>Important Notice:</strong>
              </p>
              <p className="text-teal-800 text-sm">
                By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our website or services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}