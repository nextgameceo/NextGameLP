'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

const MIN_LOADING_MS = 2000;
const LOGO_FADE_MS = 800;
export default function InitialLoading() {
  const [isActive, setIsActive] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document.body.classList.add('loading-active');

    const logoTimer = window.setTimeout(() => {
      setShowLogo(true);
    }, MIN_LOADING_MS);

    const hideTimer = window.setTimeout(() => {
      setIsActive(false);
      document.body.classList.remove('loading-active');
    }, MIN_LOADING_MS + LOGO_FADE_MS);

    return () => {
      window.clearTimeout(logoTimer);
      window.clearTimeout(hideTimer);
      document.body.classList.remove('loading-active');
    };
  }, []);

  if (!isActive) {
    return null;
  }

  return (
    <div className={styles.overlay} aria-live="polite">
      <div className={styles.content}>
        <video
          className={`${styles.video} ${showLogo ? styles.videoHidden : ''}`}
          src="/loads/loading_video.mp4"
          autoPlay
          muted
          playsInline
        />
        <div className={`${styles.logoWrapper} ${showLogo ? styles.logoVisible : ''}`}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="NEXTGAME ロゴ"
            width={512}
            height={512}
            priority
          />
        </div>
      </div>
    </div>
  );
}
