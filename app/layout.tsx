import { Metadata } from 'next';
import { getMeta } from '@/app/_libs/microcms';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import './globals.css';
import styles from './layout.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMeta();
  if (!data) {
    return {};
  }

  return {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      images: [data.ogImage?.url || ''],
    },
    icons: {
      icon: [
        { url: '/favicons/favicon.ico' },
        { url: '/favicons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/favicons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        {
          url: '/favicons/apple-touch-icon.png',
          sizes: '180x180',
          rel: 'apple-touch-icon',
        },
      ],
    },
    manifest: '/favicons/manifest.json',
    alternates: {
      canonical: data.canonical,
    },
  };
}

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/icon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
      </head>
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
