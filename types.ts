
import React from 'react';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to resolve React namespace
  icon: React.ReactNode;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: any[];
}
