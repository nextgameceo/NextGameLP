import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '採用情報|NextGame採用情報',
  openGraph: {
    title: '採用情報|NextGame採用情報',
  },
  alternates: {
    canonical: '/recruit',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="recruit" sub="採用情報" />
      <Sheet>{children}</Sheet>
    </>
  );
}
