export const runtime = 'edge';

export const metadata = {
  title: 'ニュース | NEXTGAME株式会社',
  openGraph: {
    title: 'ニュース | NEXTGAME株式会社',
  },
  alternates: {
    canonical: '/news',
  },
};

import Sheet from '@/app/_components/Sheet';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <Sheet>{children}</Sheet>;
}
