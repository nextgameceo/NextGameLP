import { Metadata } from 'next';
import Sheet from '@/app/_components/Sheet';

export const metadata: Metadata = {
  title: '投資家・融資機関の方へ | NEXTGAME株式会社',
  description: 'NEXTGAME株式会社の事業計画・収支シミュレーション・資金調達情報。AI特化型就労継続支援B型事業所として名古屋市に開所予定。創業融資・エンジェル投資家向け情報を掲載。',
  alternates: { canonical: '/investors' },
};

type Props = {
  children: React.ReactNode;
};

export default function InvestorsLayout({ children }: Props) {
  return <Sheet>{children}</Sheet>;
}
