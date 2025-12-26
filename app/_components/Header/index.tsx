import Menu from '@/app/_components/Menu';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/favicons/android-chrome-192x192.png"
          alt="NEXTGAME"
          className={styles.logo}
          width={192}
          height={192}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
