
import React from 'react';
import { 
  FileText, 
  Search, 
  MapPin, 
  Users, 
  ClipboardCheck, 
  ShieldCheck,
  Plane,
  CreditCard
} from 'lucide-react';
import { NewsItem, ServiceItem } from './types';

export const COLORS = {
  primary: '#059669', // Emerald 600
  secondary: '#047857', // Emerald 700
  accent: '#F59E0B', // Amber 500
  dark: '#064E3B', // Emerald 900
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Cek Porsi Haji',
    description: 'Estimasi keberangkatan berdasarkan nomor porsi haji Anda.',
    icon: <Search className="w-6 h-6" />,
    link: '#cek-porsi'
  },
  {
    id: '2',
    title: 'Daftar Haji Reguler',
    description: 'Informasi syarat dan alur pendaftaran haji di Kutai Barat.',
    icon: <FileText className="w-6 h-6" />,
    link: '#layanan'
  },
  {
    id: '3',
    title: 'Layanan Umrah',
    description: 'Daftar PPIU resmi dan tips aman beribadah umrah.',
    icon: <Plane className="w-6 h-6" />,
    link: '#umrah-info'
  },
  {
    id: '4',
    title: 'Siskohat Mobile',
    description: 'Akses sistem informasi dan komputerisasi haji terpadu.',
    icon: <ShieldCheck className="w-6 h-6" />,
    link: '#layanan'
  },
  {
    id: '5',
    title: 'Data Statistik',
    description: 'Visualisasi kuota dan data jamaah haji Kutai Barat.',
    icon: <Users className="w-6 h-6" />,
    link: '#statistik-quick'
  },
  {
    id: '6',
    title: 'Pelunasan BIPIH',
    description: 'Update informasi biaya perjalanan ibadah haji tahun ini.',
    icon: <CreditCard className="w-6 h-6" />,
    link: '#informasi'
  }
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Kemenhaj Kutai Barat Gelar Manasik Haji Perdana Tahun 1447H',
    excerpt: 'Kegiatan manasik ini diikuti oleh calon jamaah haji yang masuk dalam estimasi keberangkatan...',
    date: '15 Mei 2024',
    imageUrl: 'https://picsum.photos/seed/kemenag1/800/600',
    category: 'Berita'
  },
  {
    id: 'n2',
    title: 'Sosialisasi Alur Pendaftaran Haji Satu Atap di Sendawar',
    excerpt: 'Layanan satu atap memudahkan masyarakat Kutai Barat dalam mengurus pendaftaran haji...',
    date: '10 Mei 2024',
    imageUrl: 'https://picsum.photos/seed/kemenag2/800/600',
    category: 'Pengumuman'
  },
  {
    id: 'n3',
    title: 'Update Kuota Haji Kalimantan Timur Wilayah Kutai Barat',
    excerpt: 'Pemerintah pusat telah merilis pembagian kuota untuk masing-masing kabupaten/kota...',
    date: '02 Mei 2024',
    imageUrl: 'https://picsum.photos/seed/kemenag3/800/600',
    category: 'Info Haji'
  }
];
