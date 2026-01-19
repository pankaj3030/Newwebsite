'use client';

import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { TikTok } from './icons/TikTok';

// Custom TikTok Icon
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4 1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V11a5 5 0 0 1-5-5v2a3 3 0 0 0 3 3z" />
    </svg>
  );
}

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#whyus' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const companyLinks = [
    { name: 'Terms & Conditions', href: '/terms-of-service' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/gurujitechglobal',
      icon: Facebook
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/gurujitechglobal',
      icon: Linkedin
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gurujitechglobal',
      icon: Instagram
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@gurujitechglobal',
      icon: TikTokIcon
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="Guruji Tech Global" className="h-16 w-auto mb-4 filter brightness-0 invert" />
            <p className="text-slate-400 leading-relaxed mb-4">
              Delivering enterprise-grade IT services with transparency, speed, and
              reliability to businesses across the UK.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center w-9 h-9 bg-white/10 hover:bg-blue-500 rounded-full text-white transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:+44-7488564873"
                className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <span>+44-7488564873</span>
              </a>
              <a
                href="mailto:contact@gurujitechglobal.com"
                className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <span>contact@gurujitechglobal.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>Coventry, United Kingdom.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Guruji Tech Global LTD. All Rights Reserved. | Registered in England &
            Wales No. 16808971
          </p>
        </div>
      </div>
    </footer>
  );
}
