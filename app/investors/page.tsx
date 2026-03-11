import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export default function Page() {
  return (
    <div className={styles.container}>

      {/* ヘッダー */}
      <div className={styles.header}>
        <p className={styles.headerEn}>INVESTORS & LENDERS</p>
        <h1 className={styles.headerTitle}>投資家・融資機関の方へ</h1>
        <p className={styles.headerLead}>
          NEXTGAME株式会社は、AI特化型就労継続支援B型事業所として愛知県名古屋市への開所を目指しています。本ページでは事業計画・収支シミュレーション・資金調達計画を開示しています。
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

      {/* なぜ今か */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>WHY NOW</p>
          <h2 className={styles.sectionTitle}>なぜ今、このビジネスか</h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.cardEn}>01</p>
            <h3 className={styles.cardTitle}>市場の安定性</h3>
            <p className={styles.cardText}>
              障害福祉サービスの給付金は国が支払う公費です。景気に左右されない安定収益が見込めます。就労継続支援B型の市場規模は年々拡大しており、需要は右肩上がりです。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardEn}>02</p>
            <h3 className={styles.cardTitle}>AI特化の独自性</h3>
            <p className={styles.cardText}>
              従来の作業所は単純作業が中心。NEXTGAMEはAIプロンプト・Web制作・楽曲制作に特化した日本初レベルの事業所です。競合が少なく、差別化が明確です。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardEn}>03</p>
            <h3 className={styles.cardTitle}>複数収益の構造</h3>
            <p className={styles.cardText}>
              障害福祉給付金に加え、Web制作月額受託・楽曲制作・AIコンサルティングの4本柱で収益を構成。給付金が遅延しても受託収益でカバーできる構造です。
            </p>
          </div>
        </div>
      </div>

      {/* 収益モデル */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>REVENUE MODEL</p>
          <h2 className={styles.sectionTitle}>収益モデル</h2>
          <p className={styles.sectionLead}>
            4本柱の収益構造により、給付金収入が安定するまでの期間をIT受託売上で補完します。
          </p>
        </div>
        <div className={styles.revenueList}>

          <div className={styles.revenueItem}>
            <div className={styles.revenueLeft}>
              <p className={styles.revenueNum}>01</p>
              <div className={styles.revenueLine} />
            </div>
            <div className={styles.revenueBody}>
              <p className={styles.revenueTag}>安定収益</p>
              <h3 className={styles.revenueTitle}>障害福祉給付金</h3>
              <p className={styles.revenueText}>
                利用者1名あたり月額約7,500〜10,000円×稼働日数×稼働率。利用者20名・稼働率90%時で月額約396万円。指定申請から3ヶ月後より収入開始。
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
              <p className={styles.revenueTag}>受託収益</p>
              <h3 className={styles.revenueTitle}>Web制作 月額サブスク</h3>
              <p className={styles.revenueText}>
                初期費用ゼロ・月額10万円のホームページ制作サブスク。契約10社で月100万円。開所前から営業活動を開始し、開所時点での契約獲得を目指します。
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
              <p className={styles.revenueTag}>受託収益</p>
              <h3 className={styles.revenueTitle}>楽曲制作</h3>
              <p className={styles.revenueText}>
                AIを活用した楽曲制作をDistroKid・TuneCoreJapan経由で配信。利用者のスキル習得と収益化を同時に実現します。
              </p>
            </div>
            <div className={styles.revenueAmount}>
              <p className={styles.revenueAmountNum}>月3〜5曲/人</p>
              <p className={styles.revenueAmountLabel}>制作目標</p>
            </div>
          </div>

          <div className={styles.revenueItem}>
            <div className={styles.revenueLeft}>
              <p className={styles.revenueNum}>04</p>
            </div>
            <div className={styles.revenueBody}>
              <p className={styles.revenueTag}>コンサル収益</p>
              <h3 className={styles.revenueTitle}>AIコンサルティング</h3>
              <p className={styles.revenueText}>
                ChatGPT・Claude・Geminiのプロンプト活用支援。月額30,000円/社。中小企業のAI導入ニーズに対応します。
              </p>
            </div>
            <div className={styles.revenueAmount}>
              <p className={styles.revenueAmountNum}>3万円×社数</p>
              <p className={styles.revenueAmountLabel}>月額</p>
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

      {/* 資金計画 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEn}>FUNDING PLAN</p>
          <h2 className={styles.sectionTitle}>資金調達計画</h2>
          <p className={styles.sectionLead}>
            総調達目標3,500万円。複数の調達先を組み合わせることでリスクを分散します。
          </p>
        </div>
        <div className={styles.fundingGrid}>
          <div className={styles.fundingUse}>
            <p className={styles.fundingSubTitle}>資金用途</p>
            <div className={styles.fundingItems}>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>物件取得・内装費</p>
                <p className={styles.fundingItemAmount}>750万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>PC・周辺機器（24台）</p>
                <p className={styles.fundingItemAmount}>750万円</p>
              </div>
              <div className={styles.fundingItem}>
                <p className={styles.fundingItemLabel}>運転資金（6ヶ月分）</p>
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
              <p className={styles.roadmapText}>NEXTGAME株式会社として法人登記完了。事業計画書としてのホームページを公開。</p>
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

      {/* 代表メッセージ */}
      <div className={styles.message}>
        <p className={styles.messageText}>
          資本金30万円からのスタートです。大きな数字ではありません。しかし、障害のある方々がAIスキルで本当に稼げる場所をつくるという確信は、誰にも負けません。このホームページ自体が、私たちの事業計画書です。数字と熱量、両方で判断していただければ幸いです。
        </p>
        <p className={styles.messageSignature}>代表取締役　内山 博貴</p>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <ButtonLink href="/contact">融資・投資のお問い合わせ</ButtonLink>
        <ButtonLink href="/business">事業内容を見る</ButtonLink>
      </div>

    </div>
  );
}
