export const metadata = {
  title: 'お問い合わせ | NEXTGAME株式会社',
  openGraph: {
    title: 'お問い合わせ | NEXTGAME株式会社',
  },
  alternates: {
    canonical: '/contact',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
