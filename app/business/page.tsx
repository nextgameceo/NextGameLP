import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import FadeInSection from '@/app/_components/FadeInSection';

export default function Page() {
  return (
    <div className={styles.container}>

      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.heroLabel}>BUSINESS</p>
        <h1 className={styles.heroTitle}>事業内容</h1>
        <p className={styles.heroSub}>NEXTGAMEが手がける3つの事業領域</p>
      </div>

      {/* 01 WEB */}
      <FadeInSection>
        <section className={styles.serviceSection}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>01</span>
            <span className={styles.serviceTag}>WEB</span>
          </div>
          <div className={styles.serviceBody}>
            <div className={styles.serviceLeft}>
              <h2 className={styles.serviceTitle}>Web制作・運用<br />サブスクリプション</h2>
              <p className={styles.serviceDesc}>
                Next.js・microCMS・Cloudflare・Firebase・GitHub・Vercelを組み合わせた、
                高速かつスケーラブルなWebサイトを月額定額で提供します。
                制作から運用・改善まで一貫してサポートし、
                貴社のデジタルプレゼンスを継続的に強化します。
              </p>
              <div className={styles.techStack}>
                {['Next.js', 'microCMS', 'Cloudflare', 'Firebase', 'GitHub', 'Vercel'].map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
            <div className={styles.serviceRight}>
              <div className={styles.priceCard}>
                <p className={styles.planName}>MONTHLY PLAN</p>
                <div className={styles.priceRow}>
                  <span className={styles.priceAmount}>¥100,000</span>
                  <span className={styles.priceUnit}>/月</span>
                </div>
                <ul className={styles.featureList}>
                  <li>サイト設計・デザイン・開発</li>
                  <li>microCMS導入・コンテンツ管理</li>
                  <li>Cloudflare CDN・セキュリティ設定</li>
                  <li>Firebase認証・データベース連携</li>
                  <li>毎月のコンテンツ更新・改善</li>
                  <li>GitHub管理・バージョン管理</li>
                  <li>Vercelホスティング・CI/CD</li>
                </ul>
                <ButtonLink href="/contact">お問い合わせ</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <div className={styles.divider} />

      {/* 02 MUSIC */}
      <FadeInSection>
        <section className={styles.serviceSection}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>02</span>
            <span className={styles.serviceTag}>MUSIC</span>
          </div>
          <div className={`${styles.serviceBody} ${styles.serviceBodyReverse}`}>
            <div className={styles.serviceLeft}>
              <h2 className={styles.serviceTitle}>楽曲制作・<br />音楽配信事業</h2>
              <p className={styles.serviceDesc}>
                オリジナル楽曲の制作から、DistroKid・TuneCoreJapanを通じた
                Spotify・Apple Music・YouTube Musicなど世界中の配信プラットフォームへの
                リリースまでをワンストップで対応します。
                BGM・ジングル・CM曲など、あらゆる用途に対応可能です。
              </p>
              <div className={styles.techStack}>
                {['DistroKid', 'TuneCoreJapan', 'Spotify', 'Apple Music', 'YouTube Music'].map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
            <div className={styles.serviceRight}>
              <div className={styles.priceCard}>
                <p className={styles.planName}>SERVICE</p>
                <p className={styles.contactNote}>
                  料金はご要望・用途に応じてお見積りします。
                  まずはお気軽にご相談ください。
                </p>
                <ul className={styles.featureList}>
                  <li>オリジナル楽曲制作</li>
                  <li>世界主要配信プラットフォームへ配信</li>
                  <li>BGM・ジングル・CM曲など幅広く対応</li>
                  <li>著作権管理サポート</li>
                  <li>リリース戦略のご提案</li>
                </ul>
                <ButtonLink href="/contact">お問い合わせ</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <div className={styles.divider} />

      {/* 03 AI */}
      <FadeInSection>
        <section className={styles.serviceSection}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>03</span>
            <span className={styles.serviceTag}>AI PROMPT</span>
          </div>
          <div className={styles.serviceBody}>
            <div className={styles.serviceLeft}>
              <h2 className={styles.serviceTitle}>プロンプト<br />コンサルティング</h2>
              <p className={styles.serviceDesc}>
                ChatGPT・Claude・Geminiなど最新のAIツールを業務に活用するための
                プロンプトエンジニアリング支援を提供します。
                業務効率化・コスト削減・品質向上を実現する
                実践的なプロンプト設計をサポートします。
              </p>
              <div className={styles.techStack}>
                {['ChatGPT', 'Claude', 'Gemini', 'Copilot'].map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
            <div className={styles.serviceRight}>
              <div className={`${styles.priceCard} ${styles.priceCardHighlight}`}>
                <p className={styles.planName}>LIGHT PLAN</p>
                <div className={styles.priceRow}>
                  <span className={styles.priceAmount}>¥30,000</span>
                  <span className={styles.priceUnit}>/月</span>
                </div>
                <ul className={styles.featureList}>
                  <li>月2回オンライン相談（各60分）</li>
                  <li>プロンプト添削・改善サポート</li>
                  <li>ChatGPT・Claude・Gemini活用支援</li>
                  <li>業務効率化プロンプトの提案</li>
                  <li>Slackでの質問対応（月10件まで）</li>
                </ul>
                <ButtonLink href="/contact">お問い合わせ</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <div className={styles.cta}>
          <p className={styles.ctaLabel}>CONTACT</p>
          <h2 className={styles.ctaTitle}>まずはお気軽に<br />ご相談ください</h2>
          <p className={styles.ctaSub}>
            貴社のニーズに合わせた最適なプランをご提案します。
            どんな些細なご相談もお気軽にどうぞ。
          </p>
          <ButtonLink href="/contact">お問い合わせ</ButtonLink>
        </div>
      </FadeInSection>

    </div>
  );
}
