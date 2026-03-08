import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import FadeInSection from '@/app/_components/FadeInSection';

export default function Page() {
  return (
    <div className={styles.container}>

      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.heroLabel}>BUSINESS</p>
        <h1 className={styles.heroTitle}>OUR SERVICES</h1>
        <p className={styles.heroJa}>NEXTGAMEは、Web制作・音楽配信・AIコンサルティングの3つの専門サービスを提供します。</p>
      </div>

      {/* Service Cards */}
      <FadeInSection>
        <div className={styles.serviceCards}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceCardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <p className={styles.serviceCardNum}>01</p>
            <p className={styles.serviceCardEn}>Web Subscription</p>
            <p className={styles.serviceCardJa}>Web制作・運用</p>
            <p className={styles.serviceCardPrice}>¥100,000 / 月</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceCardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18V5l12-2v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
              </svg>
            </div>
            <p className={styles.serviceCardNum}>02</p>
            <p className={styles.serviceCardEn}>Music Distribution</p>
            <p className={styles.serviceCardJa}>楽曲制作・配信</p>
            <p className={styles.serviceCardPrice}>要お見積り</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceCardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/>
                <path d="M13 2.05A10 10 0 0 1 22 12"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <p className={styles.serviceCardNum}>03</p>
            <p className={styles.serviceCardEn}>Prompt Consulting</p>
            <p className={styles.serviceCardJa}>AIコンサルティング</p>
            <p className={styles.serviceCardPrice}>¥30,000 / 月〜</p>
          </div>
        </div>
      </FadeInSection>

      <div className={styles.divider} />

      {/* 01 WEB */}
      <FadeInSection>
        <section className={styles.serviceSection}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>01</span>
            <div className={styles.serviceTitleWrap}>
              <span className={styles.serviceTag}>WEB DEVELOPMENT</span>
              <h2 className={styles.serviceTitle}>Web Subscription</h2>
              <p className={styles.serviceTitleJa}>Web制作・運用サブスクリプション</p>
            </div>
          </div>
          <div className={styles.serviceBody}>
            <div className={styles.serviceLeft}>
              <p className={styles.serviceDesc}>Next.js・microCMS・Cloudflare・Firebase・GitHub・Vercelを組み合わせた高速でスケーラブルなWebサイトを月額定額で提供します。制作から運用・改善まで一貫してサポートし、貴社のデジタルプレゼンスを継続的に強化します。</p>
              <div className={styles.techStack}>
                {['Next.js', 'microCMS', 'Cloudflare', 'Firebase', 'GitHub', 'Vercel'].map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.whyBox}>
                <p className={styles.whyLabel}>WHY NEXTGAME?</p>
                <p className={styles.whyTitle}>WordPressより速く、安く、安全に。</p>
                <p className={styles.whyJa}>なぜNEXTGAMEのWebサービスを選ぶのか</p>
                <div className={styles.whyList}>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>表示速度</span>
                    <div className={styles.whyBar}>
                      <div className={styles.whyBarFill} style={{width: '95%'}}>
                        <span>Next.js 95点</span>
                      </div>
                    </div>
                    <div className={styles.whyBar}>
                      <div className={`${styles.whyBarFill} ${styles.whyBarSub}`} style={{width: '55%'}}>
                        <span>WordPress 55点</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>セキュリティ</span>
                    <p className={styles.whyText}>WordPressはプラグインの脆弱性から攻撃を受けやすく、定期的なアップデートが必要です。NEXTGAMEはサーバーレス構成によりハッキングリスクを大幅に低減します。</p>
                  </div>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>コスト比較</span>
                    <div className={styles.whyCompare}>
                      <div className={styles.whyCompareItem}>
                        <p className={styles.whyCompareLabel}>一般制作会社</p>
                        <p className={styles.whyComparePrice}>初期 ¥500,000〜 + 月額 ¥30,000〜</p>
                      </div>
                      <div className={styles.whyCompareDivider}>VS</div>
                      <div className={`${styles.whyCompareItem} ${styles.whyCompareHighlight}`}>
                        <p className={styles.whyCompareLabel}>NEXTGAME</p>
                        <p className={styles.whyComparePrice}>初期費用 ¥0 / 月額 ¥100,000のみ</p>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className={styles.serviceTitleWrap}>
              <span className={styles.serviceTag}>MUSIC PRODUCTION</span>
              <h2 className={styles.serviceTitle}>Music Distribution</h2>
              <p className={styles.serviceTitleJa}>楽曲制作・音楽配信事業</p>
            </div>
          </div>
          <div className={`${styles.serviceBody} ${styles.serviceBodyReverse}`}>
            <div className={styles.serviceLeft}>
              <p className={styles.serviceDesc}>オリジナル楽曲の制作から、DistroKid・TuneCoreJapanを通じたSpotify・Apple Music・YouTube Musicなど世界中の配信プラットフォームへのリリースまでをワンストップで対応します。BGM・ジングル・CM曲など、あらゆる用途に対応可能です。</p>
              <div className={styles.techStack}>
                {['DistroKid', 'TuneCoreJapan', 'Spotify', 'Apple Music', 'YouTube Music'].map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.whyBox}>
                <p className={styles.whyLabel}>WHY MUSIC?</p>
                <p className={styles.whyTitle}>音楽は、最も感情に直結するブランド資産。</p>
                <p className={styles.whyJa}>なぜ楽曲制作がビジネスに価値をもたらすのか</p>
                <div className={styles.whyList}>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>ブランド認知</span>
                    <p className={styles.whyText}>企業固有のBGMやジングルは視覚情報より記憶に残りやすく、顧客のブランド想起率を大幅に向上させます。音楽はCMや動画コンテンツの品質を一段引き上げます。</p>
                  </div>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>収益化の可能性</span>
                    <p className={styles.whyText}>DistroKid・TuneCoreJapanを通じて配信された楽曲は、ストリーミング再生数に応じた収益を継続的に生み出します。一度制作すれば資産として積み上がります。</p>
                  </div>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>グローバル配信</span>
                    <p className={styles.whyText}>Spotify・Apple Music・YouTube Musicなど世界150以上のプラットフォームへ即時配信。国内外問わず、あなたの音楽を届けます。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.serviceRight}>
              <div className={styles.priceCard}>
                <p className={styles.planName}>SERVICE</p>
                <p className={styles.contactNote}>料金はご要望・用途に応じてお見積りします。まずはお気軽にご相談ください。</p>
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
            <div className={styles.serviceTitleWrap}>
              <span className={styles.serviceTag}>AI CONSULTING</span>
              <h2 className={styles.serviceTitle}>Prompt Consulting</h2>
              <p className={styles.serviceTitleJa}>プロンプトコンサルティング</p>
            </div>
          </div>
          <div className={styles.serviceBody}>
            <div className={styles.serviceLeft}>
              <p className={styles.serviceDesc}>ChatGPT・Claude・Geminiなど最新のAIツールを業務に活用するためのプロンプトエンジニアリング支援を提供します。業務効率化・コスト削減・品質向上を実現する実践的なプロンプト設計をサポートします。</p>
              <div className={styles.techStack}>
                {['ChatGPT', 'Claude', 'Gemini', 'Copilot'].map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.whyBox}>
                <p className={styles.whyLabel}>WHY AI PROMPT?</p>
                <p className={styles.whyTitle}>AIを使える人と使えない人の差は、これから10倍になる。</p>
                <p className={styles.whyJa}>なぜ今AIプロンプトを学ぶべきなのか</p>
                <div className={styles.whyList}>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>生産性の革命</span>
                    <p className={styles.whyText}>適切なプロンプト設計により、資料作成・メール対応・データ分析などの業務を従来の10分の1の時間で完了できます。人件費削減と品質向上を同時に実現します。</p>
                  </div>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>競合との差別化</span>
                    <p className={styles.whyText}>2025年以降、AIを活用できる企業とそうでない企業の競争力の差は急速に拡大しています。今すぐ導入することが、将来の市場優位性を決定します。</p>
                  </div>
                  <div className={styles.whyItem}>
                    <span className={styles.whyItemLabel}>投資対効果</span>
                    <div className={styles.whyCompare}>
                      <div className={styles.whyCompareItem}>
                        <p className={styles.whyCompareLabel}>IT人材採用</p>
                        <p className={styles.whyComparePrice}>月額 ¥400,000〜</p>
                      </div>
                      <div className={styles.whyCompareDivider}>VS</div>
                      <div className={`${styles.whyCompareItem} ${styles.whyCompareHighlight}`}>
                        <p className={styles.whyCompareLabel}>NEXTGAME AI支援</p>
                        <p className={styles.whyComparePrice}>月額 ¥30,000〜</p>
                      </div>
                    </div>
                  </div>
                </div>
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
          <p className={styles.ctaLabel}>GET IN TOUCH</p>
          <h2 className={styles.ctaTitle}>Let&#39;s Work Together</h2>
          <p className={styles.ctaJa}>まずはお気軽にご相談ください</p>
          <p className={styles.ctaSub}>貴社のニーズに合わせた最適なプランをご提案します。どんな些細なご相談もお気軽にどうぞ。</p>
          <ButtonLink href="/contact">お問い合わせ</ButtonLink>
        </div>
      </FadeInSection>

    </div>
  );
}
