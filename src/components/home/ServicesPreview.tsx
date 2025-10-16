'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ServiceGrid from '@/components/services/ServiceGrid';

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-h2 font-bold text-light-text-primary dark:text-dark-text-primary">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-light-text-secondary dark:text-dark-text-secondary">
            We offer comprehensive digital solutions tailored to your unique
            needs. From AI-powered systems to modern web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ServiceGrid />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
