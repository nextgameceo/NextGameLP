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
              工賃を貰いながら最先端スキルを学べるB型作業所
            </p>
            <h1 className={styles.title}>THE IDEA INTO AN ASSET</h1>
            <p className={styles.description}>
              ご自身の才能を価値へと変える最高の環境を提供します
            </p>
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
                AIとITを活用した業務アウトソーシングサービスを提供しています。
                データ処理やコンテンツ制作などの業務を高品質かつ柔軟に対応し、企業様の業務効率化とコスト削減を実現します。
              </p>
              <div>
                <ButtonLink href="/business">Read More</ButtonLink>
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
                  利用者の皆様が、これからの未来に適応したスキルを取得し、アイデアで稼げる未来をビジョンとしています。
                  弊社は従来の単純作業中心の作業所ではなく、利用者の皆様に工賃を支払いつつ、実際の業務を通じて、プロンプトエンジニアリングスキルをOJT教育し、経済的に自立が出来る支援を行います。
                  またNEXTGAMEは、通所実績とスキルに応じて工賃が上がる仕組みを用意しています。
                  段階的なキャリアアップを経て、最終的には業務委託・個人事業主として独立するキャリアパスプランを設計します。
                </p>
                <div>
                  <ButtonLink href="/wage">Read More</ButtonLink>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>

      <div className={styles.divider} />

      {/* About */}
      <section className={styles.section}>
        <FadeInSection>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLeft}>
              <p className={styles.sectionNumber}>03</p>
              <h2 className={styles.sectionTitleEn}>About</h2>
              <span className={styles.sectionTitleJa}>企業情報</span>
            </div>
            <div className={styles.sectionRight}>
              <p className={styles.sectionDescription}>
                NEXTGAME株式会社は、愛知県名古屋市に拠点を置く就労継続支援B型事業所です。
                代表取締役 内山博貴のもと、障害のある方々がスキルで稼ぎ、自立できる社会の実現を目指しています。
              </p>
              <div>
                <ButtonLink href="/about">Read More</ButtonLink>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      <div className={styles.divider} />

      {/* News */}
      <section className={styles.section}>
        <FadeInSection>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLeft}>
              <p className={styles.sectionNumber}>04</p>
              <h2 className={styles.sectionTitleEn}>News</h2>
              <span className={styles.sectionTitleJa}>お知らせ</span>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.newsWrap}>
                <NewsList articles={data.contents} />
              </div>
              <div>
                <ButtonLink href="/news">Read More</ButtonLink>
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
                <p className={styles.sectionNumber}>05</p>
                <h2 className={styles.sectionTitleEn}>Recruit</h2>
                <span className={styles.sectionTitleJa}>採用情報</span>
              </div>
              <div className={styles.sectionRight}>
                <p className={styles.sectionDescription}>
                  福祉業界の構造を変える、本気の仲間を募集しています。
                  AIとITで利用者の経済的自立を実現する、未だかつてない挑戦に共に取り組みませんか？
                  業界最高峰の給与水準で、あなたの覚悟に応えます。
                </p>
                <div>
                  <ButtonLink href="/recruit">Read More</ButtonLink>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>
    </>
  );
}
