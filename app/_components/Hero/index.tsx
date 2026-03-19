// Hero/index.tsx
import styles from './index.module.css'
import Image from 'next/image'
import ButtonLink from '@/app/_components/ButtonLink'

type Props = {
  title?: string;
  sub?: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.container}>

      {/* 背景動画 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.bgVideo}
      >
        <source src="/videos/NEXTGAME-PV.mp4" type="video/mp4" />
      </video>

      {/* オーバーレイ（動画の上に暗幕） */}
      <div className={styles.overlay} />

      {/* 既存コンテンツ（z-indexで動画の上に表示） */}
      <div className={styles.content}>

        <div className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="NEXTGAME"
            width={320}
            height={120}
            priority
          />
        </div>

        <div className={styles.textWrap}>
          <p className={styles.subCatch}>
            発達障害・精神障害のある方が、ITスキルで稼ぐ。
          </p>
          <h1 className={styles.title}>
            過集中を、経営資産に。
          </h1>
          <p className={styles.text}>
            弊社は、各々の才能を価値へと変える、最高の環境を提供します。
          </p>
        </div>

        <div className={styles.ctaWrap}>
          <ButtonLink href="/recruit">採用情報を見る</ButtonLink>
          <ButtonLink href="/business">事業内容を見る</ButtonLink>
        </div>

        <div className={styles.scroll}>
          ↓ Scroll
        </div>

      </div>
    </section>
  )
}
