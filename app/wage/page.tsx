import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const metadata = {
  title: '工賃・キャリアプラン | NEXTGAME株式会社',
  description: 'NEXTGAMEでは最低工賃20,000円からスタートし、スキルと実績に応じて段階的にアップ。平均工賃50,000円以上、業務委託・個人事業主として自立するキャリアを支援します。',
};

export default function Page() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <p className={styles.label}>WAGE & CAREER</p>
        <h1 className={styles.title}>工賃・キャリアプラン</h1>
        <p className={styles.lead}>
          NEXTGAMEは、あなたの努力とスキルを正当に評価します。
          単純作業の繰り返しではなく、成長とともに収入が上がる、
          本物のキャリアパスを用意しています。
        </p>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <p className={styles.statNumber}>¥20,000<span>〜</span></p>
          <p className={styles.statLabel}>スタート工賃</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statNumber}>¥50,000<span>以上</span></p>
          <p className={styles.statLabel}>平均工賃目標</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statNumber}>PC<span>付与</span></p>
          <p className={styles.statLabel}>卒業時プレゼント</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>キャリアステップ</h2>
        <p className={styles.sectionLead}>
          通所からはじまり、在宅勤務、そして個人事業主として独立する。
          NEXTGAMEのキャリアパスは、あなたの自立を本気でゴールにしています。
        </p>

        <div className={styles.steps}>

          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepBody}>
              <h3 className={styles.stepTitle}>通所スタート</h3>
              <p className={styles.stepWage}>工賃 ¥20,000〜</p>
              <p className={styles.stepText}>
                まずはNEXTGAMEに通所しながら、AIとITの基礎スキルを習得します。
                通所実績と技術習得に応じて、工賃は段階的にアップしていきます。
                焦らず、確実に実力をつけていきましょう。
              </p>
            </div>
          </div>

          <div className={styles.stepArrow}>↓</div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepBody}>
              <h3 className={styles.stepTitle}>施設外就労（在宅勤務）</h3>
              <p className={styles.stepWage}>工賃 アップ</p>
              <p className={styles.stepText}>
                スキルが身についたら、自宅からリモートで業務に取り組む施設外就労へ移行します。
                場所を選ばず働ける環境で、より実践的なスキルを磨きながら収入を伸ばしていきます。
              </p>
            </div>
          </div>

          <div className={styles.stepArrow}>↓</div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepBody}>
              <h3 className={styles.stepTitle}>業務委託・個人事業主として独立</h3>
              <p className={styles.stepWage}>委託費用 要相談</p>
              <p className={styles.stepText}>
                最終ゴールは、NEXTGAMEからの業務委託を受ける個人事業主としての独立です。
                自分のスキルで稼ぐ、本当の意味での経済的自立を実現します。
                卒業時には、業務に使えるハイスペックPCをプレゼントします。
              </p>
              <div className={styles.stepBadge}>🎁 卒業時にハイスペックPC付与</div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>工賃が上がる仕組み</h2>
        <p className={styles.sectionLead}>
          NEXTGAMEの工賃は、ただ通所するだけでは上がりません。
          努力と成長が、正直に収入に反映される仕組みです。
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.cardIcon}>📅</p>
            <h3 className={styles.cardTitle}>通所実績</h3>
            <p className={styles.cardText}>
              継続して通所することが、信頼と実績の第一歩。
              安定した出席が工賃アップの基準になります。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardIcon}>💻</p>
            <h3 className={styles.cardTitle}>技術能力</h3>
            <p className={styles.cardText}>
              AIやITスキルの習熟度が評価されます。
              できることが増えるほど、あなたの価値と工賃は上がります。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardIcon}>📦</p>
            <h3 className={styles.cardTitle}>成果・納品物</h3>
            <p className={styles.cardText}>
              実際の業務で出した成果が評価対象です。
              質の高いアウトプットが、次のステージへの鍵になります。
            </p>
          </div>
        </div>
      </div>

      <div className={styles.message}>
        <p className={styles.messageText}>
          NEXTGAMEのゴールは、あなたが通い続けることではありません。
          あなたが自分の力で稼げるようになること。
          それが、私たちの本当の成功です。
        </p>
        <p className={styles.messageSignature}>代表取締役 内山 博貴</p>
      </div>

      <div className={styles.cta}>
        <ButtonLink href="/recruit">採用情報を見る</ButtonLink>
        <ButtonLink href="/contact">お問い合わせ</ButtonLink>
      </div>

    </div>
  );
}
