import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>未来を切り開く あなたのパートナー</h1>
          <p className={styles.description}>
            起業支援・マーケティング・共育・業務効率化をワンストップで。プロフェッショナルチームが成果創出まで伴走します。
          </p>
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
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Business</h2>
            <p className={styles.sectionTitleJa}>事業内容</p>
            <p className={styles.sectionDescription}>
              起業準備から法人登記、SNS/SEO・MEO、共育、業務効率化システム、ビジネスマッチング、フランチャイズ支援までを一社完結で提供します。
              <br />
              「出来ない言い訳より出来る方法」をモットーに、実行力まで含めた伴走支援で成果を作ります。
            </p>
            <ButtonLink href="/business">もっとみる</ButtonLink>
          </div>
          <Image
            className={styles.businessImg}
            src="/img-business.png"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>About Us</h2>
              <p className={styles.sectionTitleJa}>私たちについて</p>
              <p className={styles.sectionDescription}>
                ビジネスの各ステージで最適なサポートを提供する NEXTGAME。正しいリスクと努力で障壁を超え、成果に直結する戦略と実行を届けます。
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>社名</dt>
                <dd className={styles.infoDescription}>NEXTGAME株式会社</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>所在地</dt>
                <dd className={styles.infoDescription}>
                  〒461-0001
                  <br />
                  愛知県名古屋市東区泉2-19-11-1
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>代表者</dt>
                <dd className={styles.infoDescription}>内山 博貴</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>資本金</dt>
                <dd className={styles.infoDescription}>900万円</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>事業内容</dt>
                <dd className={styles.infoDescription}>
                  1.WEBサイト、ホームページ及び各種デジタルコンテンツの企画、設計、制作、運営及び保守
                  <br />
                  2.アプリケーション、ソフトウェア及び情報システムの企画、開発、販売、運営及び保守
                  <br />
                  3.IT、デジタルマーケティング及び情報システムに関するコンサルティング業務
                </dd>
                <dd className={styles.infoDescription}>
                  4.障害者総合支援法に基づく就労継続支援B型事業所の運営及び管理
                  <br />
                  5.不動産の所有、取得、管理、賃貸及び運営
                  <br />
                  6.前各号に附帯又は関連する一切の業務
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="">採用情報へ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>
    </>
  );
}
