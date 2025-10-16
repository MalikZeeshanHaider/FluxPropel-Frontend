'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ServiceGrid from '@/components/services/ServiceGrid';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-bg-primary via-light-bg-secondary to-light-bg-tertiary py-20 dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-h1 font-bold text-light-text-primary dark:text-dark-text-primary">
              Our{' '}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              Comprehensive digital solutions designed to transform your business.
              From AI-powered intelligence to stunning user interfaces, we bring
              your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ServiceGrid />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light-bg-secondary py-20 dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-h2 font-bold text-light-text-primary dark:text-dark-text-primary">
              Why Choose FluxPropel?
            </h2>
            <div className="grid gap-6 text-left md:grid-cols-2">
              {[
                {
                  title: 'Expert Team',
                  description:
                    'Our diverse team of specialists brings years of experience across multiple domains.',
                },
                {
                  title: 'Modern Technology',
                  description:
                    'We use cutting-edge tools and frameworks to build future-proof solutions.',
                },
                {
                  title: 'Agile Approach',
                  description:
                    'Iterative development ensures flexibility and rapid delivery of value.',
                },
                {
                  title: 'Ongoing Support',
                  description:
                    'We provide comprehensive support and maintenance to ensure long-term success.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-light-bg-primary p-6 dark:bg-dark-bg-primary"
                >
                  <h3 className="mb-2 text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
