import { getRecruitList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const runtime = 'edge';

type Props = {
  searchParams: Promise<{
    dk: string;
  }>;
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const data = await getRecruitList({
    draftKey: searchParams.dk,
  });
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroHeader}>
          <span className={styles.badge}>NextGame Recruiting</span>
          <h1 className={styles.title}>挑戦を楽しめる仲間を探しています</h1>
          <p className={styles.lead}>
            次世代のゲーム体験をつくるために、好奇心と実行力を持つメンバーを募集しています。
            プロダクトの成長を一緒に加速させましょう。
          </p>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.heroCopy}>
            <p className={styles.heroLabel}>Our Culture</p>
            <h2 className={styles.heroTitle}>熱量とスピード感のあるチーム</h2>
            <p className={styles.heroText}>
              フラットな議論で意思決定を加速し、ユーザーの声に最速で応えます。
              新しいアイデアを歓迎し、失敗から学びながら一緒に成長する組織です。
            </p>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <p className={styles.statNumber}>4</p>
              <p className={styles.statLabel}>Product Teams</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statNumber}>12</p>
              <p className={styles.statLabel}>Active Titles</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statNumber}>∞</p>
              <p className={styles.statLabel}>New Ideas</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.positions}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>募集職種</h2>
          <p className={styles.sectionLead}>
            事業拡大に伴い、以下のポジションで新しい仲間を募集しています。
          </p>
        </div>
        {data.contents.length === 0 ? (
          <p className={styles.empty}>現在公開されている募集はありません。</p>
        ) : (
          <ul className={styles.grid}>
            {data.contents.map((role) => (
              <li key={role.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.roleTitle}>{role.role}</h3>
                  <span className={styles.cardBadge}>New</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardRow}>
                    <p className={styles.cardLabel}>給与</p>
                    <p className={styles.cardValue}>{role.wages}</p>
                  </div>
                  <div className={styles.cardRow}>
                    <p className={styles.cardLabel}>募集人数</p>
                    <p className={styles.cardValue}>{role.limit}</p>
                  </div>
                  <div className={styles.cardRow}>
                    <p className={styles.cardLabel}>勤務時間</p>
                    <p className={styles.cardValue}>{role['working-hours']}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.feature}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>働く環境</h2>
          <p className={styles.sectionLead}>
            自分らしい働き方を実現できる制度とサポートを整えています。
          </p>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>ハイブリッドワーク</h3>
            <p className={styles.featureText}>
              リモートとオフィスを組み合わせ、集中とコラボレーションを両立します。
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>スキルアップ支援</h3>
            <p className={styles.featureText}>
              学習費用補助やカンファレンス参加支援で最新の知見を取り入れます。
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>裁量の大きさ</h3>
            <p className={styles.featureText}>
              少人数チームで意思決定が早く、アイデアをすぐに形にできます。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>選考フロー</h2>
          <p className={styles.sectionLead}>
            カジュアル面談から内定まで、スピーディに進行します。
          </p>
        </div>
        <ol className={styles.processList}>
          <li className={styles.processItem}>
            <span className={styles.processNumber}>01</span>
            <div>
              <p className={styles.processTitle}>カジュアル面談</p>
              <p className={styles.processText}>オンラインで働き方やキャリアをお話しします。</p>
            </div>
          </li>
          <li className={styles.processItem}>
            <span className={styles.processNumber}>02</span>
            <div>
              <p className={styles.processTitle}>スキル面接</p>
              <p className={styles.processText}>担当領域の強みや経験を深掘りします。</p>
            </div>
          </li>
          <li className={styles.processItem}>
            <span className={styles.processNumber}>03</span>
            <div>
              <p className={styles.processTitle}>最終面接</p>
              <p className={styles.processText}>ビジョンの共感度とカルチャーフィットを確認します。</p>
            </div>
          </li>
        </ol>
      </section>

      <div className={styles.footer}>
        <div>
          <h2 className={styles.message}>We are hiring</h2>
          <p>私たちは共にチャレンジする仲間を募集しています。</p>
        </div>
        <ButtonLink href="/contact">エントリーする</ButtonLink>
      </div>
    </div>
  );
}
