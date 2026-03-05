import styles from './page.module.css';

export const metadata = {
  title: '代表者メッセージ | NEXTGAME株式会社',
  description: '絶望の淵から見出した「正しい努力が報われる社会」を、NEXTGAMEはデジタルと福祉の融合で実装します。',
};

export default function Page() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <p className={styles.label}>CEO MESSAGE</p>
        <h1 className={styles.title}>代表者メッセージ</h1>
        <p className={styles.lead}>
          絶望の淵から見出した「正しい努力が報われる社会」を、NEXTGAME はデジタルと福祉の融合で実装します。
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.content}>

          <h2 className={styles.subTitle}>創業の背景 ― なぜ内山博貴が挑むのか</h2>
          <p>
            私は「統合失調感情障害」という精神病を発症し、精神科の隔離病棟へ措置入院という生き地獄を経験し、退院後はB型事業所の利用者として現場に立ちました。そこで私は、代表者が利益を独占し、従業員は低賃金という、福祉業界の構造をこの目で見抜いたのが NEXTGAME の原点です。
          </p>

          <ul className={styles.list}>
            <li>
              <span>福祉の闇</span>
              障害者を何の生産性もない単純作業に閉じ込め、また、利用者の方々への工賃や、従業員の賃金の低さが離職を生む負のループを目の当たりにしました。
            </li>
            <li>
              <span>投資家としての挫折</span>
              入院前に私が筆頭株主だった複数企業が、私の不在中に失速し、赤字転落や廃業に至っていた事実を知り、再び挫折しました。
            </li>
          </ul>

          <p className={styles.mission}>
            「障害者が『スキル』で稼ぎ、従業員が『業界最高峰の高給料』で報われる、前人未到な帝国を創る」
          </p>

          <p>
            隔離病棟での地獄、利用者としての屈辱、投資家としての挫折。その全てを燃料に、日本の障害者福祉業界構造の本質に革命を起こす事が私の執念です。
          </p>

          <h2 className={styles.subTitle}>内山博貴の覚悟</h2>
          <p>
            精神の底に落ち、全事業崩壊という底も味わった私だからこそ、このロジックを描けた。隔離病棟から生還し、福祉の現場を内側から見てきた経験を武器に、誰も取り残さないエコシステムを築いていきます。これこそ、社名に恥じない、次のゲーム。
          </p>

        </div>

        <div className={styles.quote}>
          <p>「人生に無駄なことはない。」</p>
          <p className={styles.signature}>代表取締役 内山 博貴</p>
        </div>
      </div>

    </div>
  );
}
