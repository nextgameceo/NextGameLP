import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export default function Page() {
  return (
    <div className={styles.container}>

      {/* 1. Hero */}
      <div className={styles.header}>
        <p className={styles.headerEn}>FOR INVESTORS</p>
        <h1 className={styles.headerTitle}>投資家・金融機関の方へ</h1>
        <p className={styles.headerLead}>
          NEXTGAMEは、AIとITスキルを活用し、障害のある方が本当に稼げる就労環境を創ることを目的とした次世代型の就労支援事業です。{'\n\n'}本ホームページはNEXTGAMEの事業構想・ビジョン・ビジネスモデルを公開するオンライン事業計画書として作成されています。{'\n\n'}現在、事業立ち上げ資金として3,500万円の資金調達を計画しています。
        </p>
        <div className={styles.headerBadge}>
          このページは融資審査・投資検討のための情報開示ページです
        </div>
      </div>

      {/* KPI */}
      <div className={styles.kpiRow}>
        <div className={styles.kpi}>
          <p className={styles.kpiNumber}>¥35,000,000</p>
          <p className={styles.kpiLabel}>融資目標額</p>
        </div>
        <div className={styles.kpi}>
          <p className={styles.kpiNumber}>20名</p>
          <p className={styles.kpiLabel}>利用者定員（MAX）</p>
        </div>
        <div className={styles.kpi}>
          <p className={styles.kpiNumber}>3ヶ月目</p>
          <p className={styles.kpiLabel}>給付金収入開始</p>
        </div>
        <div className={styles.kpi}>
          <p className={styles.kpiNumber}>1年以内</p>
          <p className={styles.kpiLabel}>開所目標</p>
        </div>
      </div>

      {/* 2. Market Opportunity */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>MARKET OPPORTUNITY</p>
          <h2 className={styles.sectionTitle}>市場機会</h2>
          <p className={styles.sectionLead}>
            日本の障害者就労支援市場は拡大を続けており、NEXTGAMEが参入する領域には明確な課題と大きな機会が存在します。
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.cardEn}>01</p>
            <h3 className={styles.cardTitle}>市場規模</h3>
            <p className={styles.cardText}>
              日本の障害者人口は現在約964万人とされており、就労支援サービスの需要は年々拡大しています。就労継続支援B型事業所は全国約17,000事業所が存在し、市場規模は年間1兆円を超えています。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardEn}>02</p>
            <h3 className={styles.cardTitle}>構造的課題</h3>
            <p className={styles.cardText}>
              しかし多くの事業所では平均工賃が月額約23,000円に留まり、収益性と持続可能性の課題を抱えています。単純作業中心のビジネスモデルでは、利用者の収入向上と事業継続の両立が困難な状況です。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardEn}>03</p>
            <h3 className={styles.cardTitle}>NEXTGAMEの解答</h3>
            <p className={styles.cardText}>
              NEXTGAMEはAI・ITスキルを活用した高付加価値業務により、この構造を変えることを目指します。利用者の収入向上と事業の持続可能性を同時に実現する新しいモデルです。
            </p>
          </div>
        </div>
      </div>

      {/* 3. Business Model */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>BUSINESS MODEL</p>
          <h2 className={styles.sectionTitle}>ビジネスモデル</h2>
          <p className={styles.sectionLead}>
            NEXTGAMEは福祉給付金を基盤収益としながら、IT受託・教育・自社サービスの3軸で収益を積み上げます。
          </p>
        </div>
        <div className={styles.revenueList}>

          <div className={styles.revenueItem}>
            <div className={styles.revenueLeft}>
              <p className={styles.revenueNum}>01</p>
              <div className={styles.revenueLine} />
            </div>
            <div className={styles.revenueBody}>
              <p className={styles.revenueTag}>基盤収益</p>
              <h3 className={styles.revenueTitle}>障害福祉給付金</h3>
              <p className={styles.revenueText}>
                国が支払う公費であり、景気に左右されない安定収益です。利用者数と稼働率に応じて給付金が増加し、利用者20名・稼働率90%時で月額約396万円を見込みます。指定申請から3ヶ月後より収入開始。
              </p>
            </div>
            <div className={styles.revenueAmount}>
              <p className={styles.revenueAmountNum}>〜396万円</p>
              <p className={styles.revenueAmountLabel}>月額（20名時）</p>
            </div>
          </div>

          <div className={styles.revenueItem}>
            <div className={styles.revenueLeft}>
              <p className={styles.revenueNum}>02</p>
              <div className={styles.revenueLine} />
            </div>
            <div className={styles.revenueBody}>
              <p className={styles.revenueTag}>IT業務アウトソーシング</p>
              <h3 className={styles.revenueTitle}>企業からの受託業務</h3>
              <p className={styles.revenueText}>
                企業からデータ処理・AI業務・コンテンツ制作・Web制作などを受託します。利用者がOJTで習得したスキルを実際の業務に活用し、工賃と事業収益を同時に生み出す構造です。
              </p>
            </div>
            <div className={styles.revenueAmount}>
              <p className={styles.revenueAmountNum}>10万円×社数</p>
              <p className={styles.revenueAmountLabel}>月額</p>
            </div>
          </div>

          <div className={styles.revenueItem}>
            <div className={styles.revenueLeft}>
              <p className={styles.revenueNum}>03</p>
              <div className={styles.revenueLine} />
            </div>
            <div className={styles.revenueBody}>
              <p className={styles.revenueTag}>AI / ITスキル教育</p>
              <h3 className={styles.revenueTitle}>高付加価値業務への参加環境</h3>
              <p className={styles.revenueText}>
                利用者がAIツールやITスキルを習得し、高付加価値業務へ参加できる環境を構築します。楽曲制作でAIプロンプトを学び、Web制作・ITスキルへとステップアップするカリキュラムを設計しています。
              </p>
            </div>
            <div className={styles.revenueAmount}>
              <p className={styles.revenueAmountNum}>月3〜5曲/人</p>
              <p className={styles.revenueAmountLabel}>楽曲制作目標</p>
            </div>
          </div>

          <div className={styles.revenueItem}>
            <div className={styles.revenueLeft}>
              <p className={styles.revenueNum}>04</p>
            </div>
            <div className={styles.revenueBody}>
              <p className={styles.revenueTag}>Web / AIサービス事業</p>
              <h3 className={styles.revenueTitle}>自社サービスの展開</h3>
              <p className={styles.revenueText}>
                自社のWebサービスやAI関連サービスを展開します。AIコンサルティング（月額30,000円/社）・Web制作サブスク（月額100,000円/社）により、福祉×IT×AIという新しい就労支援モデルを収益化します。
              </p>
            </div>
            <div className={styles.revenueAmount}>
              <p className={styles.revenueAmountNum}>3万円〜/社</p>
              <p className={styles.revenueAmountLabel}>月額</p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Funding Plan */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>FUNDING PLAN</p>
          <h2 className={styles.sectionTitle}>資金調達計画</h2>
          <p className={styles.sectionLead}>
            NEXTGAMEでは事業立ち上げ資金として3,500万円の資金調達を計画しています。複数の調達先を組み合わせることでリスクを分散します。
          </p>
        </div>
        <div className={styles.fundingGrid}>
          <div className={styles.fundingUse}>
            <p className={styles.fundingSubTitle}>資金用途</p>
            <div className={styles.fundingItems}>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>事業所開設費（物件取得・内装）</p>
                <p className={styles.fundingItemAmount}>750万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>設備投資（PC・IT環境 24台）</p>
                <p className={styles.fundingItemAmount}>750万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>人材採用・運転資金（6ヶ月分）</p>
                <p className={styles.fundingItemAmount}>1,590万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>指定申請・許認可費用</p>
                <p className={styles.fundingItemAmount}>約100万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>予備費</p>
                <p className={styles.fundingItemAmount}>約310万円</p>
              </div>
              <div className={`${styles.fundingItem} ${styles.fundingTotal}`}>
                <p className={styles.fundingItemLabel}>合計</p>
                <p className={styles.fundingItemAmount}>3,500万円</p>
              </div>
            </div>
          </div>
          <div className={styles.fundingSource}>
            <p className={styles.fundingSubTitle}>調達先</p>
            <div className={styles.fundingItems}>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>日本政策金融公庫（創業融資）</p>
                <p className={styles.fundingItemAmount}>〜2,000万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>銀行・信用金庫</p>
                <p className={styles.fundingItemAmount}>〜1,500万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>補助金・助成金</p>
                <p className={styles.fundingItemAmount}>〜500万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>エンジェル投資家</p>
                <p className={styles.fundingItemAmount}>応相談</p>
              </div>
              <div className={`${styles.fundingItem} ${styles.fundingTotal}`}>
                <p className={styles.fundingItemLabel}>目標合計</p>
                <p className={styles.fundingItemAmount}>3,500万円</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 収支シミュレーション */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>FINANCIAL SIMULATION</p>
          <h2 className={styles.sectionTitle}>収支シミュレーション</h2>
          <p className={styles.sectionLead}>
            開所から36ヶ月の収支見通しです。3ヶ月目より給付金収入が開始し、利用者増加とIT受託売上の拡大により段階的に黒字転換を目指します。
          </p>
        </div>
        <div className={styles.simTable}>
          <div className={styles.simHeader}>
            <p className={styles.simHeaderCell}>期間</p>
            <p className={styles.simHeaderCell}>利用者数</p>
            <p className={styles.simHeaderCell}>月次売上目安</p>
            <p className={styles.simHeaderCell}>月次支出目安</p>
            <p className={styles.simHeaderCell}>状況</p>
          </div>
          <div className={styles.simRow}>
            <p className={styles.simCell}>1〜2ヶ月目</p>
            <p className={styles.simCell}>2〜4名</p>
            <p className={styles.simCell}>IT売上のみ{'\n'}約30〜50万円</p>
            <p className={styles.simCell}>約265万円</p>
            <p className={`${styles.simCell} ${styles.simNegative}`}>赤字（運転資金で補填）</p>
          </div>
          <div className={styles.simRow}>
            <p className={styles.simCell}>3〜6ヶ月目</p>
            <p className={styles.simCell}>6〜12名</p>
            <p className={styles.simCell}>給付金＋IT{'\n'}約150〜250万円</p>
            <p className={styles.simCell}>約280〜310万円</p>
            <p className={`${styles.simCell} ${styles.simNegative}`}>縮小傾向の赤字</p>
          </div>
          <div className={styles.simRow}>
            <p className={styles.simCell}>7〜12ヶ月目</p>
            <p className={styles.simCell}>15〜20名</p>
            <p className={styles.simCell}>給付金＋IT{'\n'}約300〜500万円</p>
            <p className={styles.simCell}>約310〜330万円</p>
            <p className={`${styles.simCell} ${styles.simBreakeven}`}>損益分岐点通過</p>
          </div>
          <div className={styles.simRow}>
            <p className={styles.simCell}>13ヶ月目〜</p>
            <p className={styles.simCell}>20名（定員MAX）</p>
            <p className={styles.simCell}>約500〜700万円</p>
            <p className={styles.simCell}>約350〜400万円</p>
            <p className={`${styles.simCell} ${styles.simPositive}`}>安定黒字</p>
          </div>
        </div>
      </div>

      {/* ロードマップ */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>ROADMAP</p>
          <h2 className={styles.sectionTitle}>開所までのロードマップ</h2>
        </div>
        <div className={styles.roadmap}>
          <div className={styles.roadmapItem}>
            <div className={styles.roadmapLeft}>
              <p className={styles.roadmapNum}>01</p>
              <div className={styles.roadmapLine} />
            </div>
            <div className={styles.roadmapBody}>
              <p className={styles.roadmapTag}>完了</p>
              <h3 className={styles.roadmapTitle}>法人登記・ホームページ公開</h3>
              <p className={styles.roadmapText}>NEXTGAME株式会社として法人登記完了。オンライン事業計画書としてホームページを公開。</p>
            </div>
          </div>
          <div className={styles.roadmapItem}>
            <div className={styles.roadmapLeft}>
              <p className={styles.roadmapNum}>02</p>
              <div className={styles.roadmapLine} />
            </div>
            <div className={styles.roadmapBody}>
              <p className={styles.roadmapTag}>進行中</p>
              <h3 className={styles.roadmapTitle}>融資申請・物件探し</h3>
              <p className={styles.roadmapText}>日本政策金融公庫・銀行・信用金庫への融資申請。名古屋市内での物件選定を並行して進める。</p>
            </div>
          </div>
          <div className={styles.roadmapItem}>
            <div className={styles.roadmapLeft}>
              <p className={styles.roadmapNum}>03</p>
              <div className={styles.roadmapLine} />
            </div>
            <div className={styles.roadmapBody}>
              <p className={styles.roadmapTag}>予定</p>
              <h3 className={styles.roadmapTitle}>指定申請・スタッフ採用</h3>
              <p className={styles.roadmapText}>名古屋市への就労継続支援B型指定申請。サービス管理責任者・指導員の採用開始。</p>
            </div>
          </div>
          <div className={styles.roadmapItem}>
            <div className={styles.roadmapLeft}>
              <p className={styles.roadmapNum}>04</p>
            </div>
            <div className={styles.roadmapBody}>
              <p className={styles.roadmapTag}>目標</p>
              <h3 className={styles.roadmapTitle}>開所・利用者受け入れ開始</h3>
              <p className={styles.roadmapText}>1年以内の開所を目標。初年度は利用者5名からスタートし、定員20名を目指す。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Vision */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>VISION</p>
          <h2 className={styles.sectionTitle}>ビジョン</h2>
        </div>
        <div className={styles.message}>
          <p className={styles.messageText}>
            NEXTGAMEは、福祉 × AI × IT という新しい領域で、社会課題の解決と持続可能な事業成長を両立する次世代型の福祉モデルを創ります。{'\n\n'}障害のある方が「通うための場所」ではなく、「稼ぐスキルを会得する場所」として機能する事業所を目指しています。利用者がAIスキルを武器に個人事業主として独立するキャリアパスを設計することで、福祉の在り方そのものを変えていきます。{'\n\n'}資本金30万円からのスタートです。しかし、この確信は誰にも負けません。数字と熱量、両方で判断していただければ幸いです。
          </p>
          <p className={styles.messageSignature}>代表取締役　内山 博貴</p>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <ButtonLink href="/contact">融資・投資のお問い合わせ</ButtonLink>
        <ButtonLink href="/business">事業内容を見る</ButtonLink>
      </div>

    </div>
  );
}
