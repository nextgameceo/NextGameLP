import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import AboutTabs from '@/app/_components/AboutTabs';

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
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
          <div className={styles.heroScroll}>↓ Scroll</div>
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

      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Business</h2>
            <p className={styles.sectionTitleJa}>事業内容</p>
            <p className={styles.sectionDescription}>
              障害者が、これからの未来に適応したスキルを取得し、従業員が業界最高峰の給料で報われる、画期的な経済圏を創ることをビジョンとしています。
              <br />
              弊社は従来の単純作業中心ではなく、利用者の皆様にAIとITのスキルを会得させ、障害のある方々の経済的自立を促す、画期的なビジネスモデルです。
            </p>
            <ButtonLink href="/business">MORE READ</ButtonLink>
          </div>
        </div>
      </section>

      <div className={styles.aboutus}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitleEn}>About Us</h2>
          <p className={styles.sectionTitleJa}>私たちについて</p>
          <AboutTabs />
        </section>
      </div>

      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <div className={styles.hiringBody}>
              <p className={styles.hiringLead}>
                障害者がスキルで稼ぎ、その分だけ従業員が業界最高峰の所得を得られる革命的な未来を、本気で実現する為に舞い戻って来た私が直接経営する「NEXTGAME」
                <br />
                誰もが業界最高峰の所得を得られる革命的な未来へ。
                <br />
                私の直接経営でNEXTGAMEを導いていきます。
              </p>
              <div className={styles.hiringBlock}>
                <h3 className={styles.hiringHeading}>なぜ募集するのか</h3>
                <ul className={styles.hiringList}>
                  <li>単純作業しか与えられない利用者が多い</li>
                  <li>低賃金で疲弊する従業員が多い</li>
                  <li>成長しない作業所が多い</li>
                </ul>
                <p>
                  私がこの構造をブチ壊し、AIとITスキルを本気で教え、これからの社会に順応する仕事を回し、未だかつて無い帝国を創ります。
                </p>
              </div>
              <div className={styles.hiringBlock}>
                <h3 className={styles.hiringHeading}>NEXTGAMEで働く意味</h3>
                <div className={styles.hiringGrid}>
                  <div>
                    <p className={styles.hiringSubheading}>福祉業界トップクラスの待遇</p>
                    <ul className={styles.hiringList}>
                      <li>サービス管理責任者：月給手取り35万円〜</li>
                      <li>IT指導員：月給手取り30万円〜</li>
                      <li>生活指導員：月給手取り30万円〜</li>
                      <li>責任者：月給手取り50万円〜</li>
                    </ul>
                    <p>私は搾取を一切しません。成果と責任に、正当な報酬を支払います。</p>
                  </div>
                  <div>
                    <p className={styles.hiringSubheading}>AI×IT×実務×成長環境</p>
                    <p>楽しく稼げるビジネスという、GAMEのような帝国を、私が直接経営で築き上げます。</p>
                  </div>
                  <div>
                    <p className={styles.hiringSubheading}>囲い込まない支援</p>
                    <p>
                      ゴールは通所ではなく、独立・業務委託・社会への参加。外に出て稼げる事が福祉業界の成功です。
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.hiringBlock}>
                <h3 className={styles.hiringHeading}>こんな人と働きたい</h3>
                <ul className={styles.hiringList}>
                  <li>福祉を変えたいと本気で思っている</li>
                  <li>AIとITのスキル教育を実務として教えられる</li>
                  <li>利用者を対等なビジネスパートナーと見られる</li>
                  <li>ぬるい環境より、成長する現場を選びたい</li>
                  <li>高給をもらう覚悟がある</li>
                </ul>
                <p className={styles.hiringNote}>※ 優しさだけの人は向いていません。</p>
              </div>
              <div className={styles.hiringBlock}>
                <h3 className={styles.hiringHeading}>最後に</h3>
                <p>
                  NEXTGAMEは命をかけてでも成功させる覚悟の事業です。私と本気の価値を生み出す側に回りたい方、是非私の描く未来まで付いて来て下さい。
                </p>
              </div>
            </div>
            <ButtonLink href="/recruit">採用情報へ</ButtonLink>
          </div>
        </div>
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
