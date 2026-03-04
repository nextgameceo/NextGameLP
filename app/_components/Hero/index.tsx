import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.container}>
      {/* 背景画像があるなら */}
      <Image
        src="/img-mv.jpg"
        alt=""
        fill
        priority
        className={styles.bgimg}
      />

      {/* ロゴ（Hero内の大きいロゴ） */}
      <Image
        src="/logo.png"
        alt="NEXTGAME"
        width={520}
        height={180}
        priority
      />

      {/* 文章（ここを後であなたが書き換え） */}
      <h1 className={styles.title}>過集中を、経営資産に。</h1>
      <p className={styles.sub}>（ここにあなたの文章を入れる）</p>

      {/* ボタン：Businessへスクロール or お問い合わせへ */}
      <div className={styles.btnWrap}>
        <Link href="/contact">お問い合わせ</Link>
        {/* もし Business へ飛ばしたいなら↓に変更
        <Link href="#business">事業内容を見る</Link>
        */}
      </div>
    </section>
  );
}