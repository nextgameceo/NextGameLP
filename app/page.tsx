import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import AboutTabs from '@/app/_components/AboutTabs';
import FadeInSection from '@/app/_components/FadeInSection';

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
              最先端のAIプロンプトを学び、個性で稼ぐ未来へ。
            </p>
            <h1 className={styles.title}>アイデアを、資産に。</h1>
            <p className={styles.description}>
              各々の才能を価値へと変える最高の環境を提供します
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
        <FadeInSection>
          <div className={styles.horizontal}>
            <div>
              <h2 className={styles.sectionTitleEn}>Business</h2>
              <p className={styles.sectionTitleJa}>事業内容</p>
              <p className={styles.sectionDescription}>
                利用者の皆様が、業界最高峰の工賃を貰いつつ、これからの未来に適応したスキルを会得出来る、他に類を見ないB型作業所です。
                <br />
                弊社は従来の単純作業中心ではなく、利用者の皆様の未来に直結する、経済的自立を促すビジネスモデルです。
              </p>
              <ButtonLink href="/business">MORE READ</ButtonLink>
            </div>
          </div>
        </FadeInSection>
      </section>

      <div className={styles.aboutus}>
        <section className={styles.section}>
          <FadeInSection>
            <h2 className={styles.sectionTitleEn}>About Us</h2>
            <p className={styles.sectionTitleJa}>私たちについて</p>
            <AboutTabs />
          </FadeInSection>
        </section>
      </div>

      <section className={styles.section}>
        <FadeInSection>
          <div className={styles.horizontal}>
            <div>
              <h2 className={styles.sectionTitleEn}>We are hiring</h2>
              <p className={styles.sectionTitleJa}>採用情報</p>
              <div className={styles.hiringBody}>
                <p className={styles.hiringLead}>
                  名古屋市内でのB型事業所開所にあたり、
共に事業を創り上げるオープニングスタッフと利用者を募集いたします。
NEXTGAMEの核は、プロンプトエンジニアリングです。
従来の枠組みにとらわれず、AIという強力なレバレッジを使いこなし、個々のポテンシャルを「確かな市場価値」へと変換する環境を構築します。
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
                        <li>サービス管理責任者：保証月給最低35万円</li>
                        <li>IT指導員：保証月給30万円</li>
                        <li>生活指導員：保証月給30万円</li>
                      </ul>
                      <p>私は搾取を一切しません。成果と責任に、正当な報酬を支払います。</p>
                    </div>
                    <div>
                      <p className={styles.hiringSubheading}>AI×実務×成長環境</p>
                      <p>楽しく稼げるビジネスという、GAMEのような会社を、私と築き上げましょう！</p>
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
                    <li>スキル教育を実務として行える</li>
                    <li>利用者を対等なビジネスパートナーと見られる</li>
                    <li>ぬるい環境より、成長する現場を選びたい</li>
                    <li>高給をもらう覚悟がある</li>
                  </ul>
                  <p className={styles.hiringNote}>※本気の方以外は不要です。</p>
                </div>
                <div className={styles.hiringBlock}>
                  <h3 className={styles.hiringHeading}>最後に</h3>
                  <p>
                    NEXTGAMEは命をかけてでも成功させる覚悟の事業です。私と本気の価値を生み出す側に回りたい方のみ、是非私の描く未来まで付いて来て下さい。
                  </p>
                </div>
              </div>
              <ButtonLink href="/recruit">採用情報へ</ButtonLink>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className={styles.news}>
        <FadeInSection>
          <h2 className={styles.newsTitle}>News</h2>
          <NewsList articles={data.contents} />
          <div className={styles.newsLink}>
            <ButtonLink href="/news">もっとみる</ButtonLink>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
