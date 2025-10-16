'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { Service } from '@/types';
import Modal from '@/components/ui/Modal';

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  if (!service) return null;

  const Icon = service.icon;
  const VisualComponent = service.visualComponent;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        {/* Header */}
        <motion.div
          layoutId={`service-${service.id}`}
          className="border-b border-light-bg-tertiary p-8 dark:border-dark-bg-tertiary"
        >
          <div className="flex items-center gap-4">
            <div
              className="rounded-lg p-3"
              style={{ backgroundColor: `${service.themeColor}20` }}
            >
              <Icon
                className="h-10 w-10"
                style={{ color: service.themeColor }}
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                {service.title}
              </h2>
              <p className="mt-1 text-light-text-secondary dark:text-dark-text-secondary">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3D Scene */}
        <div
          className="relative h-[50vh] w-full bg-gradient-to-b from-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:to-dark-bg-primary"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${service.themeColor}10 0%, transparent 70%)`,
          }}
        >
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-light-bg-tertiary border-t-accent-primary dark:border-dark-bg-tertiary" />
              </div>
            }
          >
            <VisualComponent />
          </Suspense>
        </div>

        {/* Content */}
        <div className="space-y-8 p-8">
          {/* Overview */}
          <section>
            <h3 className="mb-4 text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
              Overview
            </h3>
            <div className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
              {service.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Deliverables */}
          <section>
            <h3 className="mb-4 text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
              Deliverables
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0"
                    style={{ color: service.themeColor }}
                  />
                  <span className="text-light-text-secondary dark:text-dark-text-secondary">
                    {deliverable}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className="mb-4 text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-light-bg-tertiary px-4 py-2 text-sm text-light-text-primary dark:bg-dark-bg-tertiary dark:text-dark-text-primary"
                  style={{
                    borderLeft: `3px solid ${service.themeColor}`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <section>
            <h3 className="mb-4 text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
              Process
            </h3>
            <div className="space-y-6">
              {service.processSteps.map((step, index) => (
                <div key={index} className="relative pl-8">
                  <div
                    className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: service.themeColor }}
                  >
                    {index + 1}
                  </div>
                  {index < service.processSteps.length - 1 && (
                    <div
                      className="absolute left-3 top-8 h-full w-0.5 opacity-30"
                      style={{ backgroundColor: service.themeColor }}
                    />
                  )}
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                        {step.title}
                      </h4>
                      <span className="flex items-center gap-1 text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                        <Clock className="h-3 w-3" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceDetailModal;
