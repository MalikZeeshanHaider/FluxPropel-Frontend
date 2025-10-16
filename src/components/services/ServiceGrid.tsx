'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/lib/constants';
import { Service } from '@/types';
import ServiceCard from './ServiceCard';
import ServiceDetailModal from './ServiceDetailModal';

const ServiceGrid: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>
      <ServiceDetailModal
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};

export default ServiceGrid;
