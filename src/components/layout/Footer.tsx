import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-light-bg-tertiary bg-light-bg-secondary dark:border-dark-bg-tertiary dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                FluxPropel
              </span>
            </h3>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              Transforming ideas into exceptional digital experiences. We build
              innovative solutions that propel your business forward.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-4 font-semibold text-light-text-primary dark:text-dark-text-primary">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-light-text-secondary transition-colors hover:text-accent-primary dark:text-dark-text-secondary dark:hover:text-accent-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 font-semibold text-light-text-primary dark:text-dark-text-primary">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-bg-tertiary text-light-text-secondary transition-colors hover:bg-accent-primary hover:text-white dark:bg-dark-bg-tertiary dark:text-dark-text-secondary dark:hover:bg-accent-primary"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-light-bg-tertiary pt-8 text-center dark:border-dark-bg-tertiary">
          <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
            © {new Date().getFullYear()} FluxPropel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
