export const metadata = {
  title: '採用情報 | NEXTGAME株式会社',
  openGraph: {
    title: '採用情報 | NEXTGAME株式会社',
  },
  alternates: {
    canonical: '/recruit',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
