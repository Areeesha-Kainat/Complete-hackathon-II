// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiTwitter, 
  FiLinkedin, 
  FiMail, 
  FiHeart,
  FiCheckCircle,
  FiArrowUp
} from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const footerLinks = {
  Product: [
    { name: 'Features', href: '/features' },
    { name: 'Categories', href: '/categories' },
    { name: 'How to Use', href: '/tutorial' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'API', href: '/api' }
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' }
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Status', href: '/status' },
    { name: 'Contact', href: '/contact' }
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' }
  ]
};

const socialLinks = [
  { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:hello@taskflow.com', label: 'Email' }
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <FiCheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                TaskFlow
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md">
              The intuitive task management platform that helps individuals and teams achieve more with less stress.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-md transition-shadow duration-200"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                Join 10,000+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-300 hover:shadow-sm transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => router.push(link.href)}
                      className="text-gray-600 hover:text-purple-600 hover:underline transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                <FiCheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Secure & Safe</div>
                <div className="text-sm text-gray-600">GDPR Compliant</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                <div className="text-2xl font-bold text-blue-600">99%</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Uptime</div>
                <div className="text-sm text-gray-600">Service Reliability</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <FiHeart className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">4.9 Rating</div>
                <div className="text-sm text-gray-600">User Satisfaction</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg flex items-center justify-center">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Support</div>
                <div className="text-sm text-gray-600">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <span>© {new Date().getFullYear()} TaskFlow. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>Made with</span>
              <FiHeart className="w-4 h-4 text-red-500" />
              <span>for productive minds</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <button onClick={() => router.push('/privacy')} className="hover:text-purple-600 transition-colors">
                  Privacy
                </button>
                <button onClick={() => router.push('/terms')} className="hover:text-purple-600 transition-colors">
                  Terms
                </button>
                <button onClick={() => router.push('/cookies')} className="hover:text-purple-600 transition-colors">
                  Cookies
                </button>
              </div>
              
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-purple-300 hover:shadow-sm transition-all duration-200 group"
              >
                <span className="text-sm text-gray-600 group-hover:text-purple-600">Back to top</span>
                <FiArrowUp className="w-4 h-4 text-gray-500 group-hover:text-purple-600 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}