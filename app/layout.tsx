import { Metadata } from 'next';
import { getMeta } from '@/app/_libs/microcms';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import InitialLoading from '@/app/_components/InitialLoading';
import MotionWrapper from '@/app/_components/MotionWrapper'; // 【追記1】読み込み
import './globals.css';
import styles from './layout.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMeta();

  const defaultTitle = 'NEXTGAME株式会社 | 未来と今を繋げるゲーム';
  const defaultDesc = '愛知県名古屋市のNEXTGAME株式会社です。';

  if (!data) {
    return{
      title: defaultTitle,
      description: defaultDesc,
    }
  }

  return {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: data.title || defaultTitle,
    description: data.description || defaultDesc,
    openGraph: {
      title: data.ogTitle || defaultTitle,
      description: data.ogDescription || defaultDesc,
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
      <body className={`${styles.body} loading-active`}>
        <InitialLoading />
        <Header />
        {/* 【追記2】mainの中身をMotionWrapperで囲む */}
        <main className={styles.main}>
          <MotionWrapper>
            {children}
          </MotionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
