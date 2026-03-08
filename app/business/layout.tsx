import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '事業内容 | NEXTGAME株式会社',
  openGraph: {
    title: '事業内容 | NEXTGAME株式会社',
  },
  alternates: {
    canonical: '/business',
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
