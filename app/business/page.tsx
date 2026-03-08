import Image from 'next/image';
import { getBusinessList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import FadeInSection from '@/app/_components/FadeInSection';

type Props = {
  searchParams: Promise<{
    dk: string;
  }>;
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const data = await getBusinessList({
    draftKey: searchParams.dk,
  });

  const serviceLabels = ['WEB', 'MUSIC', 'AI'];
  const serviceNumbers = ['01', '02', '03'];

  return (
    <div className={styles.container}>

      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.heroLabel}>BUSINESS</p>
        <h1 className={styles.heroTitle}>事業内容</h1>
        <p className={styles.heroSub}>NEXTGAMEが手がける3つの事業領域</p>
      </div>

      {/* Services */}
      {data.contents.length === 0 ? (
        <p className={styles.empty}>事業内容が登録されていません。</p>
      ) : (
        <ul className={styles.serviceList}>
          {data.contents.map((business, index) => (
            <li key={business.id} className={styles.serviceItem}>
              <FadeInSection>
                <div className={styles.serviceInner}>

                  {/* Left */}
                  <div className={styles.serviceLeft}>
                    <div className={styles.serviceMeta}>
                      <span className={styles.serviceNumber}>{serviceNumbers[index] ?? `0${index + 1}`}</span>
                      <span className={styles.serviceTag}>{serviceLabels[index] ?? 'SERVICE'}</span>
                    </div>
                    {business.logo && (
                      <Image
                        src={business.logo.url}
                        alt=""
                        width={business.logo.width}
                        height={business.logo.height}
                        className={styles.logo}
                      />
                    )}
                    <p className={styles.description}>{business.description}</p>

                    {/* 01 WEB - 料金表 */}
                    {index === 0 && (
                      <div className={styles.priceBox}>
                        <p className={styles.priceLabel}>MONTHLY PLAN</p>
                        <div className={styles.priceMain}>
                          <span className={styles.priceAmount}>¥100,000</span>
                          <span className={styles.priceUnit}> / 月</span>
                        </div>
                        <ul className={styles.priceFeatures}>
                          <li>サイト設計・デザイン・開発</li>
                          <li>microCMS導入・コンテンツ管理</li>
                          <li>Vercelホスティング・運用</li>
                          <li>毎月のコンテンツ更新・改善</li>
                          <li>GitHub管理・バージョン管理</li>
                        </ul>
                        <div className={styles.action}>
                          <ButtonLink href="/contact">お問い合わせ</ButtonLink>
                        </div>
                      </div>
                    )}

                    {/* 02 MUSIC - お問い合わせ */}
                    {index === 1 && (
                      <div className={styles.priceBox}>
                        <p className={styles.priceLabel}>SERVICE</p>
                        <ul className={styles.priceFeatures}>
                          <li>オリジナル楽曲制作</li>
                          <li>DistroKid経由で各種配信サービスへ配信</li>
                          <li>BGM・ジングル・CM曲など幅広く対応</li>
                          <li>料金はご要望に応じてお見積り</li>
                        </ul>
                        <div className={styles.action}>
                          <ButtonLink href="/contact">お問い合わせ</ButtonLink>
                        </div>
                      </div>
                    )}

                    {/* 03 AI - プラン */}
                    {index === 2 && (
                      <div className={styles.planBox}>
                        <p className={styles.priceLabel}>LIGHT PLAN</p>
                        <div className={styles.priceMain}>
                          <span className={styles.priceAmount}>¥30,000</span>
                          <span className={styles.priceUnit}> / 月</span>
                        </div>
                        <ul className={styles.priceFeatures}>
                          <li>月2回オンライン相談（各60分）</li>
                          <li>プロンプト添削・改善サポート</li>
                          <li>ChatGPT・Claude等の活用支援</li>
                          <li>業務効率化プロンプトの提案</li>
                        </ul>
                        <div className={styles.action}>
                          <ButtonLink href="/contact">お問い合わせ</ButtonLink>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right */}
                  <div className={styles.serviceRight}>
                    {business.image?.url && (
                      <div className={styles.imageWrap}>
                        <Image
                          src={business.image.url}
                          alt=""
                          width={business.image.width ?? 800}
                          height={business.image.height ?? 600}
                          className={styles.image}
                        />
                        <div className={styles.imageOverlay} />
                      </div>
                    )}
                  </div>

                </div>
              </FadeInSection>

              {index < data.contents.length - 1 && (
                <div className={styles.divider} />
              )}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <FadeInSection>
        <div className={styles.cta}>
          <p className={styles.ctaLabel}>CONTACT</p>
          <h2 className={styles.ctaTitle}>まずはお気軽に<br />ご相談ください</h2>
          <p className={styles.ctaSub}>
            貴社のニーズに合わせた最適なプランをご提案します。
          </p>
          <ButtonLink href="/contact">お問い合わせ</ButtonLink>
        </div>
      </FadeInSection>

    </div>
  );
}
