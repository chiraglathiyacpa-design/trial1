import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { BlogPage } from "./pages/BlogPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { PartnerSpecial } from './pages/PartnerSpecial';
import { CookiePolicyPage } from "./pages/CookiePolicyPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash (like #tax-filing), scroll to the very top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there IS a hash, find that element and scroll to it
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

// SUCCESS: Changed to createBrowserRouter for Clean URLs
export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/services", Component: ServicesPage },
      { path: "/about", Component: AboutPage },
      { path: "/contact", Component: ContactPage },
      { path: "/faq", Component: FAQPage },
      { path: "/resources", Component: BlogPage },
      { path: "/privacy-policy", Component: PrivacyPolicyPage },
      { path: "/terms-of-service", Component: TermsOfServicePage },
      { path: "/priority-partner", Component: PartnerSpecial },
      { path: "/cookie-policy", Component: CookiePolicyPage },
    ],
  },
]);
