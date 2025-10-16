import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  themeColor: string;
  visualComponent: ComponentType;
  deliverables: string[];
  techStack: string[];
  processSteps: ProcessStep[];
}

export interface ProcessStep {
  title: string;
  description: string;
  duration: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: number;
  description: string;
  thumbnailUrl: string;
  tags: string[];
}

export type ThemeMode = 'dark' | 'light';
