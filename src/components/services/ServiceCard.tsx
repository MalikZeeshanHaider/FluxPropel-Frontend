'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/types';
import Card from '@/components/ui/Card';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const Icon = service.icon;

  return (
    <motion.div
      layoutId={`service-${service.id}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        hover
        className="cursor-pointer"
        style={{
          boxShadow: `0 0 40px ${service.themeColor}20`,
        }}
      >
        <motion.div
          className="mb-4 inline-flex rounded-lg p-3"
          style={{ backgroundColor: `${service.themeColor}20` }}
        >
          <Icon
            className="h-8 w-8"
            style={{ color: service.themeColor }}
            strokeWidth={1.5}
          />
        </motion.div>
        <h3 className="mb-2 text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
          {service.title}
        </h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">
          {service.shortDescription}
        </p>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
