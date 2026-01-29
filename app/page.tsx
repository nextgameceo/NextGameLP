import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
  
export const runtime = 'edge';

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div className={styles.heroContent}>
          <Image
            className={styles.heroLogo}
            src="/logo.png"
            alt="NEXTGAME ロゴ"
            width={512}
            height={512}
            priority
          />
          <div className={styles.heroText}>
            <h1 className={styles.title}>出来ない言い訳より出来る方法を</h1>
            <p className={styles.description}>
              ITで障害者福祉を革新、利用者・従業員・投資家の三方を勝てるサービスを提供します。
            </p>
          </div>
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
            「障害者が『スキル』で稼ぎ、従業員が『業界屈指の高給料』で報われる、止まらない経済圏を創る」ことをビジョンとしています。
            <br/>
            従来の単純作業中心ではなく、ITスキル習得を通じて障害のある方の経済的自立を促し、持続可能なビジネスモデルを構築することを目指しています。
            </p>
            <ButtonLink href="/business">もっとみる</ButtonLink>
          </div>
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
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
                <dd className={styles.infoDescription}>300,000円</dd>
              </dl>
              <dl className={styles.info}>
               <dt className={styles.infoTitle}>事業内容</dt>
<dd className={styles.infoDescription}>
  1. 障害者の日常生活及び社会生活を総合的に支援するための法律に基づく障害福祉サービス事業
  <br />
  2. 就労継続支援B型事業所の運営及び管理
  <br />
  3. 障害者の就労支援、職業訓練、作業支援及び生活支援に関する事業
  <br />
  4. 情報通信技術（IT）及び人工知能（AI）等を活用した作業支援、職業訓練及び就労支援に関する事業
  <br />
  5. データ入力、データ処理、情報処理、デジタルコンテンツ制作その他の業務の受託及び請負
  <br />
  6. 音楽、楽曲、音声その他の表現コンテンツの企画、制作、編集、配信及び販売並びにこれらに関する業務の受託
  <br />
  7. 福祉事業に関連する物品及びデジタル成果物の企画、制作、販売並びに請負
  <br />
  8. 福祉事業に関する研修、教育、指導及びコンサルティング事業
  <br />
  9. 上記各号に附帯関連する一切の事業
</dd>
              </dl>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.messageSection}`}>
          <div className={styles.messageWrapper}>
            <div className={styles.messageIntro}>
              <p className={styles.messageLabel}>CEO MESSAGE</p>
              <h2 className={styles.sectionTitleEn}>代表者メッセージ</h2>
              <p className={styles.sectionDescription}>
                絶望の淵から見出した「正しい努力が報われる社会」を、NEXTGAME はデジタルと
                福祉の融合で実装します。創業者 内山博貴が、この事業に込めた覚悟をお伝えします。
              </p>
            </div>
            <div className={styles.messageCard}>
              <div className={styles.messageContent}>
                <h3 className={styles.messageSubTitle}>創業の背景 ― なぜ内山博貴が挑むのか</h3>
                <p className={styles.messageLead}>
                  私は「統合失調感情障害」により精神科の隔離病棟という生き地獄を経験し、退院後は
                  B型事業所の利用者として現場に立ちました。福祉業界の構造的な闇と、投資家としての失敗で
                  味わった悔しさが NEXTGAME の原動力です。
                </p>
                <ul className={styles.messageList}>
                  <li>
                    <span>福祉の闇</span>
                    障害者を単純作業に閉じ込め、賃金の低さが離職を生む負のループを目の当たりにしました。
                  </li>
                  <li>
                    <span>投資家としての挫折</span>
                    入院前に筆頭株主だった複数企業が、私の不在中に失速し、責任の重さを突き付けられました。
                  </li>
                </ul>
                <p className={styles.messageMission}>
                  「障害者が『スキル』で稼ぎ、従業員が『業界屈指の高給料』で報われる、止まらない経済圏を創る」
                </p>
                <p>
                  隔離病棟での地獄、利用者としての屈辱、投資家としての挫折。その全てを燃料に、日本の
                  福祉構造の本質を変革することが私の使命です。
                </p>
                <h3 className={styles.messageSubTitle}>内山博貴の覚悟</h3>
                <p>
                  精神の闇に落ち、事業崩壊の痛みも知った私だからこそ、勝つためのロジックを描ける。
                  隔離病棟から生還し、福祉の現場を内側から見てきた経験を武器に、誰も取り残さない
                  エコシステムを築いていきます。
                </p>
              </div>
              <div className={styles.messageQuote}>
                <p>「人生に無駄なことはない。」</p>
                <p className={styles.messageSignature}>代表取締役 内山 博貴</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <div className={styles.hiringBody}>
              <p className={styles.hiringLead}>
                障害者がスキルで稼ぎ、支援者が高給で報われる経済圏を、本気で実現するために生まれたのが
                NEXTGAMEです。
              </p>
              <div className={styles.hiringBlock}>
                <h3 className={styles.hiringHeading}>なぜ募集するのか</h3>
                <ul className={styles.hiringList}>
                  <li>単純作業しか与えられない利用者が多い</li>
                  <li>低賃金で疲弊する支援者が多い</li>
                  <li>成長しない事業所が多い</li>
                </ul>
                <p>
                  私たちはその構造を壊し、ITスキルを本気で教え、市場で通用する仕事を回し、
                  「できる人が、きちんと稼げる」福祉をつくります。
                </p>
              </div>
              <div className={styles.hiringBlock}>
                <h3 className={styles.hiringHeading}>NEXTGAMEで働く意味</h3>
                <div className={styles.hiringGrid}>
                  <div>
                    <p className={styles.hiringSubheading}>福祉業界トップクラスの待遇</p>
                    <ul className={styles.hiringList}>
                      <li>サービス管理責任者：月給45万円〜</li>
                      <li>IT指導員：月給35万円〜</li>
                      <li>エリアマネージャー：月給50万円〜</li>
                    </ul>
                    <p>「やりがい搾取」はしません。成果と責任に、正当な報酬を支払います。</p>
                  </div>
                  <div>
                    <p className={styles.hiringSubheading}>IT×実務×成長環境</p>
                    <ul className={styles.hiringList}>
                      <li>Web制作 / LP制作</li>
                      <li>動画編集</li>
                      <li>アプリ・ゲーム制作</li>
                    </ul>
                    <p>実際に売れる仕事を、利用者と一緒に回します。</p>
                  </div>
                  <div>
                    <p className={styles.hiringSubheading}>囲い込まない支援</p>
                    <p>
                      ゴールは「通所」ではなく、独立・業務委託・市場参加。外に出て稼げるならそれが成功です。
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.hiringBlock}>
                <h3 className={styles.hiringHeading}>こんな人と働きたい</h3>
                <ul className={styles.hiringList}>
                  <li>福祉を「変えたい」と本気で思っている</li>
                  <li>ITやスキル教育を“実務”として教えられる</li>
                  <li>利用者を「対等なビジネスパートナー」と見られる</li>
                  <li>ぬるい環境より、成長する現場を選びたい</li>
                  <li>高給をもらう覚悟がある</li>
                </ul>
                <p className={styles.hiringNote}>※ 優しさだけの人は向いていません。</p>
              </div>
              <div className={styles.hiringBlock}>
                <h3 className={styles.hiringHeading}>最後に</h3>
                <p>
                  NEXTGAMEは命をかけてでも成功させる覚悟の事業です。福祉で本気の価値を生み出す側に回りたい人、
                  ぜひ一緒にやりましょう。
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
