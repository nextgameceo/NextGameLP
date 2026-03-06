import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import FadeInSection from '@/app/_components/FadeInSection';

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      {/* Hero */}
      <section className={styles.top}>
        <div className={styles.heroContent}>
          <div className={styles.heroLogoWrap}>
            <Image
              className={styles.heroLogo}
              src="/logo.png"
              alt="NEXTGAME ロゴ"
              width={512}
              height={512}
              priority
            />
          </div>
          <div className={styles.heroText}>
            <p className={styles.heroSubCatch}>
              発達障害・精神障害のある方が、ITスキルで稼ぐ。
            </p>
            <h1 className={styles.title}>過集中を、経営資産に。</h1>
            <p className={styles.description}>
              弊社は、各々の才能を価値へと変える、最高の環境を提供します。
            </p>
          </div>
          <div className={styles.heroCta}>
            <ButtonLink href="/recruit">採用情報を見る</ButtonLink>
            <ButtonLink href="/business">事業内容を見る</ButtonLink>
          </div>
          <div className={styles.heroScroll}>scroll</div>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>

      {/* Business */}
      <section className={styles.section}>
        <FadeInSection>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLeft}>
              <p className={styles.sectionNumber}>01</p>
              <h2 className={styles.sectionTitleEn}>Business</h2>
              <span className={styles.sectionTitleJa}>事業内容</span>
            </div>
            <div className={styles.sectionRight}>
              <p className={styles.sectionDescription}>
                障害者が、これからの未来に適応したスキルを取得し、従業員が業界最高峰の給料で報われる、画期的な経済圏を創ることをビジョンとしています。
                弊社は従来の単純作業中心ではなく、利用者の皆様にAIとITのスキルを会得させ、障害のある方々の経済的自立を促す、画期的なビジネスモデルです。
              </p>
              <div>
                <ButtonLink href="/business">詳しく見る</ButtonLink>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <div className={styles.divider} />

      {/* For Users */}
      <div className={styles.wageSection}>
        <section className={styles.section}>
          <FadeInSection>
            <div className={styles.sectionInner}>
              <div className={styles.sectionLeft}>
                <p className={styles.sectionNumber}>02</p>
                <h2 className={styles.sectionTitleEn}>For Users</h2>
                <span className={styles.sectionTitleJa}>利用者の方へ</span>
              </div>
              <div className={styles.sectionRight}>
                <p className={styles.sectionDescription}>
                  NEXTGAMEでは、通所実績とスキルに応じて工賃が上がる仕組みを用意しています。
                  段階的なキャリアアップを経て、最終的には業務委託・個人事業主として独立するキャリアパスを支援します。
                </p>
                <div>
                  <ButtonLink href="/wage">工賃・キャリアを見る</ButtonLink>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>

      {/* News */}
      <section className={styles.section}>
        <FadeInSection>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLeft}>
              <p className={styles.sectionNumber}>03</p>
              <h2 className={styles.sectionTitleEn}>News</h2>
              <span className={styles.sectionTitleJa}>お知らせ</span>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.newsWrap}>
                <NewsList articles={data.contents} />
              </div>
              <div>
                <ButtonLink href="/news">もっとみる</ButtonLink>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <div className={styles.divider} />

      {/* Recruit */}
      <div className={styles.recruitSection}>
        <section className={styles.section}>
          <FadeInSection>
            <div className={styles.sectionInner}>
              <div className={styles.sectionLeft}>
                <p className={styles.sectionNumber}>04</p>
                <h2 className={styles.sectionTitleEn}>Recruit</h2>
                <span className={styles.sectionTitleJa}>採用情報</span>
              </div>
              <div className={styles.sectionRight}>
                <p className={styles.sectionDescription}>
                  福祉業界の構造を変える、本気の仲間を募集しています。
                  AIとITで障害者の経済的自立を実現する、未だかつてない挑戦に共に取り組みませんか。
                  業界最高峰の給与水準で、あなたの覚悟に応えます。
                </p>
                <div>
                  <ButtonLink href="/recruit">採用情報を見る</ButtonLink>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>
    </>
  );
}
