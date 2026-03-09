'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

const TABS = [
  { id: 'company', labelEn: 'Company', labelJa: '企業情報' },
  { id: 'ceo', labelEn: 'CEO Message', labelJa: '代表者メッセージ' },
];

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState('company');

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <p className={styles.heroLabel}>ABOUT</p>
        <h1 className={styles.heroTitle}>
          About Us
          <span className={styles.heroTitleJa}>企業情報</span>
        </h1>
        <p className={styles.heroLead}>
          NEXTGAMEは、AIとITで障害者福祉の構造を変える、名古屋発の就労継続支援B型事業所です。
        </p>
      </div>

      <div className={styles.tabWrap}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={styles.tabBtnEn}>{tab.labelEn}</span>
            <span className={styles.tabBtnJa}>{tab.labelJa}</span>
          </button>
        ))}
      </div>

      {activeTab === 'company' && (
        <div className={styles.tabContent}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <div className={styles.sectionTitleWrap}>
                <span className={styles.sectionTag}>COMPANY INFO</span>
                <h2 className={styles.sectionTitle}>Company</h2>
                <p className={styles.sectionTitleJa}>会社概要</p>
              </div>
            </div>
            <div className={styles.infoGrid}>
              {[
                { term: '社名', desc: 'NEXTGAME株式会社' },
                { term: '所在地', desc: '愛知県名古屋市にて探し中です' },
                { term: '代表者', desc: '内山 博貴（Hiroki Uchiyama）' },
                { term: '資本金', desc: '出資者募集中です' },
              ].map((item) => (
                <div key={item.term} className={styles.infoItem}>
                  <p className={styles.infoTerm}>{item.term}</p>
                  <p className={styles.infoDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <div className={styles.sectionTitleWrap}>
                <span className={styles.sectionTag}>BUSINESS</span>
                <h2 className={styles.sectionTitle}>Services</h2>
                <p className={styles.sectionTitleJa}>事業内容</p>
              </div>
            </div>
            <div className={styles.bizGrid}>
              {[
                { num: '01', text: '就労継続支援B型事業所の運営および障害福祉サービスの提供' },
                { num: '02', text: 'ITスキル・AIプロンプト教育プログラムの企画・実施' },
                { num: '03', text: '障害者向けデジタルコンテンツ制作・Webデザイン・動画制作・音楽制作・デジタルコンサルティング等の受注業務' },
                { num: '04', text: '業務委託による在宅就労支援および施設外就労支援' },
                { num: '05', text: '上記に附帯する一切の事業' },
              ].map((item) => (
                <div key={item.num} className={styles.bizItem}>
                  <span className={styles.bizNum}>{item.num}</span>
                  <p className={styles.bizText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cta}>
            <ButtonLink href="/contact">お問い合わせ</ButtonLink>
          </div>
        </div>
      )}

      {activeTab === 'ceo' && (
        <div className={styles.tabContent}>
          <div className={styles.profile}>
            <div className={styles.profileImageWrap}>
              <Image
                src="/ceo.jpg"
                alt="代表取締役 内山博貴"
                width={300}
                height={300}
                className={styles.profileImage}
              />
              <div className={styles.profileImageRing} />
            </div>
            <div className={styles.profileInfo}>
              <p className={styles.profileRole}>代表取締役</p>
              <p className={styles.profileName}>内山 博貴</p>
              <p className={styles.profileNameEn}>Hiroki Uchiyama</p>
              <p className={styles.profileDesc}>
                統合失調感情障害を発症し、精神科の隔離病棟へ措置入院。退院後はB型事業所の利用者として現場を内側から経験。その全てを燃料に、日本の障害者福祉業界に革命を起こす。
              </p>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <div className={styles.sectionTitleWrap}>
                <span className={styles.sectionTag}>FOUNDING STORY</span>
                <h2 className={styles.sectionTitle}>Origin</h2>
                <p className={styles.sectionTitleJa}>創業の背景</p>
              </div>
            </div>
            <div className={styles.sectionBody}>
              <p className={styles.bodyText}>
                代表者である内山博貴は「統合失調感情障害」という精神病を発症し、精神科の隔離病棟へ措置入院という生き地獄を経験しました。退院後はB型事業所の利用者として現場に立ち、代表者が利益を独占し、従業員は低賃金という福祉業界の構造をこの目で見抜きました。
              </p>
              <div className={styles.episodeList}>
                <div className={styles.episodeItem}>
                  <p className={styles.episodeLabel}>福祉の闇</p>
                  <p className={styles.episodeText}>利用者を何の生産性もない単純作業に閉じ込め、工賃や従業員の賃金の低さが離職を生む負のループを目の当たりにしました。</p>
                </div>
                <div className={styles.episodeItem}>
                  <p className={styles.episodeLabel}>投資家としての挫折</p>
                  <p className={styles.episodeText}>入院前に私が​​​​​​​​​​​​​​​​
