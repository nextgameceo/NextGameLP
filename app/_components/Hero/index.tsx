import styles from './index.module.css';

type HeroProps = {
  title?: string;
  sub?: string;
  /** 背景画像を使ってる場合に備えて任意で残す（不要なら消してOK） */
  bgImageSrc?: string;
  children?: React.ReactNode;
};

export default function Hero({ title, sub, bgImageSrc, children }: HeroProps) {
  return (
    <section className={styles.container}>
      {bgImageSrc ? (
        <img className={styles.bgimg} src={bgImageSrc} alt="" />
      ) : null}

      <div>
        {title ? <h1 className={styles.title}>{title}</h1> : null}
        {sub ? <p className={styles.sub}>{sub}</p> : null}
        {children}
      </div>
    </section>
  );
}