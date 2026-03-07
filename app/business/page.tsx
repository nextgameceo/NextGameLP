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
        <p className={styles.heroSub}>
          NEXTGAMEが手がける3つの事業領域
        </p>
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
                    <div className={styles.action}>
                      <ButtonLink href={`/business/${business.id}`}>Read More</ButtonLink>
                    </div>
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
          <p className={styles.ctaLabel}>WE ARE HIRING</p>
          <h2 className={styles.ctaTitle}>共に挑戦する<br />仲間を募集しています</h2>
          <p className={styles.ctaSub}>
            福祉業界の構造を変える、本気の仲間を求めています。
          </p>
          <ButtonLink href="/recruit">採用情報を見る</ButtonLink>
        </div>
      </FadeInSection>

    </div>
  );
}
