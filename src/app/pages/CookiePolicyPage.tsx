import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Cookie Policy</h1>
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
              This Cookie Policy explains how TaxClaim uses cookies and similar technologies on our website. By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. Cookies allow websites to recognize your device and remember information about your visit.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Essential functionality:</strong> To enable basic features of our website</li>
              <li><strong>Performance and analytics:</strong> To understand how visitors use our website and improve its performance</li>
              <li><strong>User preferences:</strong> To remember your settings and preferences</li>
              <li><strong>Security:</strong> To protect against fraud and enhance website security</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Types of Cookies We Use</h2>
            
            <h3 className="text-xl mt-8 mb-3 text-slate-900">1. Strictly Necessary Cookies</h3>
            <p className="text-gray-600 mb-3">
              These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong></p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Session cookies for form submissions</li>
                <li>Security cookies for fraud prevention</li>
                <li>Load balancing cookies</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Session or up to 1 year</p>
              <p className="text-sm text-gray-600"><strong>Can be disabled:</strong> No (essential for website operation)</p>
            </div>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">2. Performance and Analytics Cookies</h3>
            <p className="text-gray-600 mb-3">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve website functionality and user experience.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong></p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Google Analytics (visitor statistics)</li>
                <li>Page view tracking</li>
                <li>Bounce rate analysis</li>
                <li>Traffic source identification</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Up to 2 years</p>
              <p className="text-sm text-gray-600"><strong>Can be disabled:</strong> Yes (via browser settings)</p>
            </div>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">3. Functional Cookies</h3>
            <p className="text-gray-600 mb-3">
              These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong></p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Language preferences</li>
                <li>Form autofill data</li>
                <li>User interface preferences</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Up to 1 year</p>
              <p className="text-sm text-gray-600"><strong>Can be disabled:</strong> Yes (may affect functionality)</p>
            </div>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">4. Targeting/Advertising Cookies</h3>
            <p className="text-gray-600 mb-3">
              These cookies may be set through our site by advertising partners to build a profile of your interests and show you relevant ads on other sites.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong></p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Retargeting pixels</li>
                <li>Social media advertising cookies</li>
                <li>Third-party advertising networks</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Duration:</strong> Up to 1 year</p>
              <p className="text-sm text-gray-600"><strong>Can be disabled:</strong> Yes (via browser settings)</p>
            </div>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              Some cookies on our website are placed by third-party services. We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
              <li><strong>Communication Tools:</strong> For WhatsApp web integration and chat features</li>
            </ul>
            <p className="text-gray-600 mb-6">
              These third parties may use cookies to track your activity across different websites. We do not control these cookies. Please review the privacy policies of these third-party services for more information.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Managing Cookies</h2>
            
            <h3 className="text-xl mt-8 mb-3 text-slate-900">Browser Settings</h3>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>View what cookies are stored on your device</li>
              <li>Delete individual cookies or all cookies</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
            </ul>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Browser-Specific Instructions</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions
                </li>
              </ul>
            </div>

            <h3 className="text-xl mt-8 mb-3 text-slate-900">Opt-Out Tools</h3>
            <p className="text-gray-600 mb-4">
              You can also use these industry tools to manage advertising cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">optout.networkadvertising.org</a></li>
              <li><strong>Digital Advertising Alliance:</strong> <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">optout.aboutads.info</a></li>
              <li><strong>Google Analytics Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">tools.google.com/dlpage/gaoptout</a></li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <p className="text-amber-900 mb-2">
                <strong>⚠️ Important Notice:</strong>
              </p>
              <p className="text-amber-800 text-sm">
                Blocking or deleting cookies may impact your experience on our website. Some features may not function properly if cookies are disabled. Strictly necessary cookies cannot be disabled as they are essential for website operation.
              </p>
            </div>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Do Not Track Signals</h2>
            <p className="text-gray-600 mb-6">
              Some browsers have a "Do Not Track" feature that lets you tell websites you do not want your online activities tracked. Currently, there is no industry standard for recognizing Do Not Track signals, so our website does not respond to these signals at this time.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Mobile Devices</h2>
            <p className="text-gray-600 mb-6">
              Mobile devices have settings that allow you to control tracking and advertising. Please check your device settings for more information about managing cookies and tracking on mobile devices.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Changes to This Cookie Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">More Information</h2>
            <p className="text-gray-600 mb-6">
              For more information about how we protect your privacy, please see our <Link to="/privacy-policy" className="text-teal-600 hover:text-teal-700">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl mt-12 mb-4 text-slate-900">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-2"><strong>TaxClaim</strong></p>
              <p className="text-gray-600 mb-1">Email: <a href="mailto:cpa@taxclaim.co" className="text-teal-600 hover:text-teal-700">cpa@taxclaim.co</a></p>
              <p className="text-gray-600 mb-1">Phone: <a href="tel:+14153047262" className="text-teal-600 hover:text-teal-700">+1 (415) 304-7262</a></p>
              <p className="text-gray-600">Location: San Jose, California</p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-8">
              <p className="text-teal-900 mb-2">
                <strong>Your Consent</strong>
              </p>
              <p className="text-teal-800 text-sm">
                By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings as described above.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}