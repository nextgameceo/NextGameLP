import Image from 'next/image';
import styles from './index.module.css';

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.container}>
      {/* 背景画像を使ってるならここ（使ってないなら丸ごと消してOK） */}
      {/* 画像名はプロジェクトに合わせて変更してください */}
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={2000}
        height={1200}
        priority
      />

      <h1 className={styles.title}>{title}</h1>
      <div className={styles.sub}>{sub}</div>

      {/* ボタンを置きたいならここに追加していく */}
      {/* 例：
      <a className={styles.cta} href="/contact">お問い合わせ</a>
      */}
    </section>
  );
}