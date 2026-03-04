import Image from "next/image";
import styles from "./index.module.css";

type HeroProps = {
  title: string;
  sub: string;
  children?: React.ReactNode;
};

export default function Hero({ title, sub, children }: HeroProps) {
  return (
    <section className={styles.container}>
      {/* 背景画像を使ってるならここ（必要なければ消してOK） */}
      {/* <Image className={styles.bgimg} src="/img-mv.jpg" alt="" fill priority /> */}

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.sub}>{sub}</p>

      {/* ボタン置きたいなら、layout側から <Hero>...ボタン...</Hero> で差し込める */}
      {children}
    </section>
  );
}