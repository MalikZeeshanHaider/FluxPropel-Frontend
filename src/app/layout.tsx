import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'FluxPropel - Digital Innovation Agency',
  description:
    'Transform your digital vision into reality with FluxPropel. We craft exceptional web applications, intelligent AI solutions, and seamless cloud infrastructure.',
  keywords: [
    'web development',
    'AI/ML solutions',
    'DevOps',
    'UI/UX design',
    'digital agency',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
