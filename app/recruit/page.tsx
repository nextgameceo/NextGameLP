import { getRecruitList } from '../_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '../_components/ButtonLink';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page(props: any) {
  const searchParams = await props?.searchParams;

  let data = { contents: [] as any[] };

  try {
    const draftKey =
      typeof searchParams?.dk === 'string'
        ? searchParams.dk
        : undefined;

    data = await getRecruitList(
      draftKey ? { draftKey } : undefined
    );
  } catch (error) {
    console.error('Failed to fetch recruit list:', error);
  }

  return (
    <div className={styles.container}>

      <section className={styles.positions}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>募集職種</h2>
          <p className={styles.sectionLead}>
            NEXTGAMEで共に挑戦する仲間を募集しています。
          </p>
        </div>

        {data.contents.length === 0 ? (
          <div className={styles.empty}>現在募集中のポジションはありません。</div>
        ) : (
          <div className={styles.grid}>
            {data.contents.map((item) => (
              <div key={item.id} className={styles.card}>

                <div className={styles.cardHeader}>
                  <h3 className={styles.roleTitle}>{item.role}</h3>
                  <span className={styles.cardBadge}>OPEN</span>
                </div>

                <div className={styles.cardBody}>
                  {item.job_description && (
                    <div className={styles.cardRow}>
                      <p className={styles.cardLabel}>仕事内容</p>
                      <div
                        className={styles.cardValue}
                        dangerouslySetInnerHTML={{
                          __html: item.job_description,
                        }}
                      />
                    </div>
                  )}

                  {item.salary && (
                    <div className={styles.cardRow}>
                      <p className={styles.cardLabel}>給与</p>
                      <div
                        className={styles.cardValue}
                        dangerouslySetInnerHTML={{
                          __html: item.salary,
                        }}
                      />
                    </div>
                  )}

                  {item.capacity && (
                    <div className={styles.cardRow}>
                      <p className={styles.cardLabel}>募集人数</p>
                      <p className={styles.cardValue}>{item.capacity}</p>
                    </div>
                  )}

                  {item.working_hours && (
                    <div className={styles.cardRow}>
                      <p className={styles.cardLabel}>勤務時間</p>
                      <p className={styles.cardValue}>{item.working_hours}</p>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>選考フロー</h2>
        </div>

        <ol className={styles.processList}>
          <li className={styles.processItem}>
            <span className={styles.processNumber}>01</span>
            <div>
              <p className={styles.processTitle}>書類選考</p>
              <p className={styles.processText}>
                ご応募内容をもとに選考を行います。
              </p>
            </div>
          </li>

          <li className={styles.processItem}>
            <span className={styles.processNumber}>02</span>
            <div>
              <p className={styles.processTitle}>一次面接</p>
              <p className={styles.processText}>
                業務内容やスキルについて確認します。
              </p>
            </div>
          </li>

          <li className={styles.processItem}>
            <span className={styles.processNumber}>03</span>
            <div>
              <p className={styles.processTitle}>最終面接</p>
              <p className={styles.processText}>
                ビジョンの共感度とカルチャーフィットを確認します。
              </p>
            </div>
          </li>
        </ol>
      </section>

      <div className={styles.footer}>
        <div>
          <h2 className={styles.message}>We are hiring</h2>
          <p>私たちは共にチャレンジする仲間を募集しています。</p>
        </div>
        <ButtonLink href="/contact">
          エントリーする
        </ButtonLink>
      </div>

    </div>
  );
}
