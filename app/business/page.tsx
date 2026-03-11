'use client';

import { useState } from 'react';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import FadeInSection from '@/app/_components/FadeInSection';

type Tab = 'web' | 'music' | 'ai';

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>('web');

  return (
    <div className={styles.container}>

      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.heroLabel}>BUSINESS</p>
        <h1 className={styles.heroTitle}>OUR SERVICES</h1>
        <p className={styles.heroJa}>NEXTGAMEは、Web制作・楽曲制作・AIコンサルティングの3つの専門サービスを提供します。</p>
      </div>

      {/* タブ */}
      <div className={styles.tabBar}>
        <button
          className={`${styles.tabBtn} ${activeTab === 'web' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('web')}
        >
          <span className={styles.tabNum}>01</span>
          <span className={styles.tabLabel}>Web Subscription</span>
          <span className={styles.tabJa}>HP制作・運用</span>
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'music' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('music')}
        >
          <span className={styles.tabNum}>02</span>
          <span className={styles.tabLabel}>Music Distribution</span>
          <span className={styles.tabJa}>楽曲制作</span>
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'ai' ? styles.tabBtnActive : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          <span className={styles.tabNum}>03</span>
          <span className={styles.tabLabel}>Prompt Consulting</span>
          <span className={styles.tabJa}>プロンプトコンサルティング</span>
        </button>
      </div>

      {/* ===== 01 WEB ===== */}
      {activeTab === 'web' && (
        <FadeInSection key="web">
          <section className={styles.serviceSection}>
            <div className={styles.serviceHeader}>
              <span className={styles.serviceNumber}>01</span>
              <div className={styles.serviceTitleWrap}>
                <span className={styles.serviceTag}>WEB DEVELOPMENT</span>
                <h2 className={styles.serviceTitle}>Web Subscription</h2>
                <p className={styles.serviceTitleJa}>HP制作・運用サブスクリプション</p>
              </div>
            </div>
            <div className={styles.serviceBody}>
              <div className={styles.serviceLeft}>

                <div className={styles.problemBlock}>
                  <p className={styles.problemQuestion}>貴社のホームページは、まだWordPressですか？</p>
                  <div className={styles.problemList}>
                    <p className={styles.problemItem}>表示が遅く</p>
                    <p className={styles.problemItem}>更新が難しく</p>
                    <p className={styles.problemItem}>セキュリティリスクも高い。</p>
                  </div>
                  <p className={styles.problemSub}>そのWebサイト、本当に「資産」になっていますか？</p>
                </div>

                <div className={styles.oldModelBlock}>
                  <p className={styles.oldModelText}>
                    多くの企業は制作会社に50万〜100万円以上を支払い、完成したホームページを「自分で更新してください」と渡されます。
                  </p>
                  <div className={styles.oldModelResult}>
                    <p className={styles.oldModelResultItem}>更新されない</p>
                    <p className={styles.oldModelResultItem}>集客しない</p>
                    <p className={styles.oldModelResultItem}>古いサイト</p>
                  </div>
                  <p className={styles.oldModelSub}>が出来上がります。</p>
                </div>

                <div className={styles.answerBlock}>
                  <p className={styles.answerLabel}>NEXTGAMEは違います。</p>
                  <p className={styles.answerPrice}>初期費用 0円。</p>
                  <p className={styles.answerText}>
                    設計・デザイン・開発・運用・改善まですべて月額でサポート。Webサイトを「作るもの」ではなく「成長する資産」に変えます。
                  </p>
                </div>

                <div className={styles.techStackBlock}>
                  <p className={styles.techStackLabel}>TECH STACK</p>
                  <div className={styles.techStack}>
                    {['Next.js', 'microCMS', 'Cloudflare', 'GitHub', 'Vercel'].map((tech) => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                  <p className={styles.techStackDesc}>
                    WordPressのようなプラグイン依存の構造ではなく、高速・安全・拡張可能なWebサイトを提供します。さらにAIを活用したコンテンツ運用を導入し、記事作成・コンテンツ更新・リサーチなどを効率化。Webサイトを「毎月成長するメディア」として運用します。
                  </p>
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
                    <li>毎月のコンテンツ更新・改善</li>
                    <li>GitHub管理・バージョン管理</li>
                    <li>Vercelホスティング・CI/CD</li>
                    <li>AIコンテンツ運用サポート</li>
                  </ul>
                  <ButtonLink href="/contact">お問い合わせ</ButtonLink>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {/* ===== 02 MUSIC ===== */}
      {activeTab === 'music' && (
        <FadeInSection key="music">
          <section className={styles.serviceSection}>
            <div className={styles.serviceHeader}>
              <span className={styles.serviceNumber}>02</span>
              <div className={styles.serviceTitleWrap}>
                <span className={styles.serviceTag}>MUSIC PRODUCTION</span>
                <h2 className={styles.serviceTitle}>Music Distribution</h2>
                <p className={styles.serviceTitleJa}>楽曲制作・音楽配信事業</p>
              </div>
            </div>
            <div className={styles.serviceBody}>
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
      )}

      {/* ===== 03 AI ===== */}
      {activeTab === 'ai' && (
        <FadeInSection key="ai">
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
      )}

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
