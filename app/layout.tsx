import { Metadata } from 'next';
import { getMeta } from '@/app/_libs/microcms';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import InitialLoading from '@/app/_components/InitialLoading';
import MotionWrapper from '@/app/_components/MotionWrapper';
import FloatingCTA from '@/app/_components/FloatingCTA';
import { Orbitron } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';

// ... generateMetadata・jsonLd はそのまま変更なし ...

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
        <FloatingCTA />
        <div style={{
          position: 'fixed',
          bottom: '8px',
          right: '8px',
          fontSize: '0.55rem',
          color: 'rgba(255,255,255,0.15)',
          zIndex: 9999,
          pointerEvents: 'none',
          letterSpacing: '0.05em',
        }}>
          Powered by Google Translate
        </div>
      </body>
    </html>
  );
}
