'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import Card from '@/components/ui/Card';

const categories = ['All', 'AI/ML', 'Web Development', 'DevOps', 'UI/UX'];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

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
                Work
              </span>
            </h1>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              Explore our portfolio of successful projects. Each one represents a
              unique challenge solved with innovation and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent-primary text-white'
                    : 'bg-light-bg-tertiary text-light-text-secondary hover:bg-light-bg-tertiary/80 dark:bg-dark-bg-tertiary dark:text-dark-text-secondary dark:hover:bg-dark-bg-tertiary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card hover className="h-full">
                  {/* Thumbnail Placeholder */}
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                    <div className="flex h-full items-center justify-center">
                      <ExternalLink className="h-12 w-12 text-accent-primary opacity-50" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                        {project.title}
                      </h3>
                      <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                        {project.client} • {project.year}
                      </p>
                    </div>

                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-light-bg-tertiary px-3 py-1 text-xs text-light-text-secondary dark:bg-dark-bg-tertiary dark:text-dark-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-light-text-secondary dark:text-dark-text-secondary"
            >
              No projects found in this category.
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
