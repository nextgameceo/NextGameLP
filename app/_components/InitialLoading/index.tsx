'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

const MIN_LOADING_MS = 2000;
const LOGO_FADE_MS = 800;
const STORAGE_KEY = 'nextgame_initial_loading_shown';

export default function InitialLoading() {
  const [isActive, setIsActive] = useState(true);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hasShown = window.localStorage.getItem(STORAGE_KEY);
    if (hasShown) {
      document.body.classList.remove('loading-active');
      setIsActive(false);
      return;
    }

    document.body.classList.add('loading-active');
    setShouldPlay(true);

    const logoTimer = window.setTimeout(() => {
      setShowLogo(true);
    }, MIN_LOADING_MS);

    const hideTimer = window.setTimeout(() => {
      setIsActive(false);
      document.body.classList.remove('loading-active');
      window.localStorage.setItem(STORAGE_KEY, 'true');
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
        {shouldPlay && (
          <video
            className={`${styles.video} ${showLogo ? styles.videoHidden : ''}`}
            src="/loads/loading_video.mp4"
            autoPlay
            muted
            playsInline
          />
        )}
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
