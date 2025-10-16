'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description:
      'We dive deep into understanding your business goals, target audience, and technical requirements to create a solid foundation.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Our designers craft beautiful, intuitive interfaces that align with your brand and provide exceptional user experiences.',
  },
  {
    icon: Code,
    title: 'Development',
    description:
      'We build robust, scalable solutions using cutting-edge technologies and best practices, ensuring quality at every step.',
  },
  {
    icon: Rocket,
    title: 'Delivery',
    description:
      'We launch your project with comprehensive testing, monitoring, and ongoing support to ensure long-term success.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-light-bg-secondary py-20 dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-h2 font-bold text-light-text-primary dark:text-dark-text-primary">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-light-text-secondary dark:text-dark-text-secondary">
            A proven methodology that delivers exceptional results, from initial
            concept to final delivery and beyond.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="rounded-xl bg-light-bg-primary p-6 dark:bg-dark-bg-primary">
                  {/* Step Number */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary text-xl font-bold text-white">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-accent-primary" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-full top-1/2 hidden h-0.5 w-8 -translate-x-4 -translate-y-1/2 bg-gradient-to-r from-accent-primary to-accent-secondary lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
