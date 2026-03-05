import styles from './index.module.css'
import Image from 'next/image'

// ✅ Props型を追加
type Props = {
  title?: string;
  sub?: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.container}>

      <div className={styles.content}>

        <Image
          src="/nextgame-logo.png"
          alt="NEXTGAME"
          width={320}
          height={120}
          priority
        />

        <h1 className={styles.title}>
          過集中を、経営資産に。
        </h1>

        <p className={styles.text}>
          弊社は、各々の才能を価値へと変える、最高の環境を提供します。
        </p>

        <div className={styles.scroll}>
          ↓ Scroll
        </div>

      </div>

    </section>
  )
}
