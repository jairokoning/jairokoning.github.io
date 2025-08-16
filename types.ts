
import { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Project {
  imageUrl: string;
  title: string;
  description:string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}
