import { getRecruitList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const runtime = 'edge';

type Props = {
  searchParams: Promise<{
    dk: string;
  }>;
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const data = await getRecruitList({
    draftKey: searchParams.dk,
  });

  return (
    <div className={styles.container}>
      <section className={styles.positions}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>募集職種</h2>
          <p className={styles.sectionLead}>
            事業拡大に伴い、以下のポジションで新しい仲間を募集しています。
          </p>
        </div>
        {data.contents.length === 0 ? (
          <p className={styles.empty}>現在公開されている募集はありません。</p>
        ) : (
          <ul className={styles.grid}>
            {data.contents.map((role) => (
              <li key={role.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  {/* microCMSのフィールド「役職(title)」に合わせて修正 */}
                  <h3 className={styles.roleTitle}>{(role as any).title}</h3>
                  <span className={styles.cardBadge}>New</span>
                </div>
                
                <div className={styles.cardBody}>
                  {/* 仕事内容（リッチエディタ）の表示エリアを追加 */}
                  {role.job_description && (
                    <div className={styles.descriptionSection}>
                      <p className={styles.cardLabel}>仕事内容</p>
                      <div 
                        className={styles.jobDescription}
                        dangerouslySetInnerHTML={{ __html: role.job_description }} 
                      />
                    </div>
                  )}

                  <div className={styles.cardRow}>
                    <p className={styles.cardLabel}>給与・待遇</p>
                    {/* wages → salary に変更 */}
                    <p className={styles.cardValue}>{role.salary}</p>
                  </div>
                  <div className={styles.cardRow}>
                    <p className={styles.cardLabel}>募集人数</p>
                    {/* limit → capacity に変更 */}
                    <p className={styles.cardValue}>{role.capacity}</p>
                  </div>
                  <div className={styles.cardRow}>
                    <p className={styles.cardLabel}>勤務時間</p>
                    {/* working-hours → working_hours に変更 */}
                    <p className={styles.cardValue}>{role.working_hours}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 選考フロー以降は変更なし */}
      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>選考フロー</h2>
          <p className={styles.sectionLead}>
            カジュアル面談から内定まで、スピーディに進行します。
          </p>
        </div>
        <ol className={styles.processList}>
          <li className={styles.processItem}>
            <span className={styles.processNumber}>01</span>
            <div>
              <p className={styles.processTitle}>カジュアル面談</p>
              <p className={styles.processText}>オンラインで働き方やキャリアをお話しします。</p>
            </div>
          </li>
          <li className={styles.processItem}>
            <span className={styles.processNumber}>02</span>
            <div>
              <p className={styles.processTitle}>スキル面接</p>
              <p className={styles.processText}>担当領域の強みや経験を深掘りします。</p>
            </div>
          </li>
          <li className={styles.processItem}>
            <span className={styles.processNumber}>03</span>
            <div>
              <p className={styles.processTitle}>最終面接</p>
              <p className={styles.processText}>ビジョンの共感度とカルチャーフィットを確認します。</p>
            </div>
          </li>
        </ol>
      </section>

      <div className={styles.footer}>
        <div>
          <h2 className={styles.message}>We are hiring</h2>
          <p>私たちは共にチャレンジする仲間を募集しています。</p>
        </div>
        <ButtonLink href="/contact">エントリーする</ButtonLink>
      </div>
    </div>
  );
}
