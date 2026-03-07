import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const metadata = {
  title: '企業情報 | NEXTGAME株式会社',
  description: 'NEXTGAME株式会社の企業情報です。',
};

export default function Page() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <p className={styles.label}>COMPANY</p>
        <h1 className={styles.title}>企業情報</h1>
      </div>

      <div className={styles.card}>
        <dl className={styles.list}>
          <div className={styles.row}>
            <dt className={styles.term}>社名</dt>
            <dd className={styles.desc}>NEXTGAME株式会社</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.term}>所在地</dt>
            <dd className={styles.desc}>〒460-0001 愛知県名古屋市中区三の丸内</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.term}>代表者</dt>
            <dd className={styles.desc}>代表取締役 内山 博貴</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.term}>資本金</dt>
            <dd className={styles.desc}>300,000円</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.term}>事業内容</dt>
            <dd className={styles.desc}>
              <ul className={styles.bizList}>
                <li>就労継続支援B型事業所の運営および障害福祉サービスの提供</li>
                <li>ITスキル・AIプロンプト教育プログラムの企画・実施</li>
                <li>障害者向けデジタルコンテンツ制作・Webデザイン・動画制作・音楽制作・デジタルコンサルティング等の受注業務</li>
                <li>業務委託による在宅就労支援および施設外就労支援</li>
                <li>上記に附帯する一切の事業</li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <div className={styles.cta}>
        <ButtonLink href="/ceo-message">代表者メッセージを読む</ButtonLink>
        <ButtonLink href="/contact">お問い合わせ</ButtonLink>
      </div>

    </div>
  );
}
