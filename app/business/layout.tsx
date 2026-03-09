import { Metadata } from 'next';
import Sheet from '@/app/_components/Sheet';

export const metadata: Metadata = {
  title: '事業内容 | Web制作・楽曲制作・AIコンサルティング',
  description: 'NEXTGAMEの3つの事業：月額10万円のWeb制作サブスク、DistroKid/TuneCoreJapanを使った楽曲配信、ChatGPT・Claude・Geminiのプロンプトコンサルティング。',
  alternates: { canonical: '/business' },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <Sheet>{children}</Sheet>;
}
