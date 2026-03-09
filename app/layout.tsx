import { Metadata } from 'next';
import { getMeta } from '@/app/_libs/microcms';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import InitialLoading from '@/app/_components/InitialLoading';
import MotionWrapper from '@/app/_components/MotionWrapper';
import { Orbitron } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-orbitron',
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMeta();

  const defaultTitle = 'NEXTGAME株式会社 | 就労継続支援B型・AIスキルで自立を目指す名古屋の作業所';
  const defaultDesc = '愛知県名古屋市の就労継続支援B型事業所。工賃をもらいながらAI・プロンプトエンジニアリングスキルを習得。Web制作・楽曲制作・AIコンサルティングの3事業を展開。障害のある方の経済的自立を支援します。';

  const baseUrl = process.env.BASE_URL || 'https://nextgame-limited.com';

  if (!data) {
    return {
      metadataBase: new URL(baseUrl),
      title: {
        default: defaultTitle,
        template: '%s | NEXTGAME株式会社',
      },
      description: defaultDesc,
      keywords: ['就労継続支援B型', '名古屋', 'AI', 'プロンプトエンジニアリング', '障害者雇用', '作業所', 'Web制作', '楽曲制作', 'NEXTGAME'],
      openGraph: {
        type: 'website',
        locale: 'ja_JP',
        siteName: 'NEXTGAME株式会社',
        title: defaultTitle,
        description: defaultDesc,
      },
      twitter: {
        card: 'summary_large_image',
        title: defaultTitle,
        description: defaultDesc,
      },
      icons: {
        icon: [
          { url: '/favicons/favicon.ico' },
          { url: '/favicons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
          { url: '/favicons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
          { url: '/favicons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { url: '/favicons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180' }],
      },
      manifest: '/favicons/manifest.json',
      alternates: {
        canonical: baseUrl,
      },
    };
  }

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: data.title || defaultTitle,
      template: '%s | NEXTGAME株式会社',
    },
    description: data.description || defaultDesc,
    keywords: ['就労継続支援B型', '名古屋', 'AI', 'プロンプトエンジニアリング', '障害者雇用', '作業所', 'Web制作', '楽曲制作', 'NEXTGAME'],
    openGraph: {
      type: 'website',
      locale: 'ja_JP',
      url: baseUrl,
      siteName: 'NEXTGAME株式会社',
      title: data.ogTitle || data.title || defaultTitle,
      description: data.ogDescription || data.description || defaultDesc,
      images: data.ogImage?.url ? [{ url: data.ogImage.url }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.ogTitle || data.title || defaultTitle,
      description: data.ogDescription || data.description || defaultDesc,
      images: data.ogImage?.url ? [data.ogImage.url] : undefined,
    },
    icons: {
      icon: [
        { url: '/favicons/favicon.ico' },
        { url: '/favicons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/favicons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180' }],
    },
    manifest: '/favicons/manifest.json',
    alternates: {
      canonical: data.canonical || baseUrl,
    },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NEXTGAME株式会社',
  alternateName: 'NEXTGAME LIMITED',
  url: 'https://nextgame-limited.com',
  logo: 'https://nextgame-limited.com/logo.png',
  description: '愛知県名古屋市の就労継続支援B型事業所。工賃をもらいながらAI・プロンプトエンジニアリングスキルを習得できます。',
  address: {
    '@type': 'PostalAddress',
    addressRegion: '愛知県',
    addressLocality: '名古屋市',
    addressCountry: 'JP',
  },
  sameAs: [
    'https://x.com/woomemorys?s=21',
    'https://www.instagram.com/nextgame.ltd',
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja" className={orbitron.variable}>
      <body className={`${styles.body} loading-active`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <InitialLoading />
        <Header />
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
