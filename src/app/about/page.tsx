'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description:
      'Our mission is to empower businesses with cutting-edge technology solutions that drive growth and innovation. We believe in creating meaningful impact through exceptional digital experiences.',
  },
  {
    icon: Lightbulb,
    title: 'Design Philosophy',
    description:
      'We combine aesthetic excellence with functional design. Every pixel, interaction, and animation is crafted with purpose, ensuring your users have intuitive and delightful experiences.',
  },
  {
    icon: Zap,
    title: 'Technology Approach',
    description:
      'We leverage modern tech stacks and best practices to build scalable, maintainable solutions. From React and Next.js to AI/ML frameworks, we choose the right tools for each challenge.',
  },
];

export default function AboutPage() {
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
              About{' '}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                FluxPropel
              </span>
            </h1>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              We are a team of passionate designers, developers, and strategists
              dedicated to creating exceptional digital experiences that propel
              businesses forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-h2 font-bold text-light-text-primary dark:text-dark-text-primary">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
              <p>
                FluxPropel was born from a simple belief: technology should
                empower, not complicate. We&apos;ve worked with startups and
                enterprises alike, helping them navigate the complex digital
                landscape with confidence.
              </p>
              <p>
                Our team brings together diverse expertise in web development,
                artificial intelligence, cloud infrastructure, and user
                experience design. This multidisciplinary approach allows us to
                tackle complex challenges and deliver comprehensive solutions.
              </p>
              <p>
                We don&apos;t just build software—we build partnerships. Every
                project is an opportunity to learn, innovate, and create
                something that makes a real difference for our clients and their
                users.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl bg-light-bg-primary p-8 dark:bg-dark-bg-primary"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-accent-primary/10 p-3">
                    <Icon className="h-8 w-8 text-accent-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                    {value.title}
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-4"
          >
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
              { value: '98%', label: 'Client Retention' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-5xl font-bold text-accent-primary">
                  {stat.value}
                </div>
                <div className="text-light-text-secondary dark:text-dark-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
