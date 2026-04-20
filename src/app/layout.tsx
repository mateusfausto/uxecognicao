import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Princípios Cognitivos Aplicados ao UX Design',
  description: 'Como a mente humana influencia o design de interfaces — 12 princípios cognitivos essenciais para UX designers.',
  openGraph: {
    title: 'Princípios Cognitivos Aplicados ao UX Design',
    description: 'Como a mente humana influencia o design de interfaces.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-bg text-white antialiased">{children}</body>
    </html>
  );
}
