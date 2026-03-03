　import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

/* ===============================
   型定義
================================ */

// カテゴリー
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ニュース
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSContentId &
  MicroCMSDate;

// メンバー
export type Member = {
  name: string;
  position: string;
  profile: string;
  image?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

// 採用情報（microCMSの実データ構造に合わせる）
export type Recruit = {
  role: string;
  job_description?: string;
  salary?: string;
  capacity?: string;
  working_hours?: string;
} & MicroCMSContentId &
  MicroCMSDate;

// 事業内容
export type Business = {
  logo?: MicroCMSImage;
  description: string;
  image?: MicroCMSImage;
  link: string;
  content: string;
} & MicroCMSContentId &
  MicroCMSDate;

// メタ情報
export type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: MicroCMSImage;
  canonical?: string;
};

/* ===============================
   環境変数チェック
================================ */

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

/* ===============================
   Client初期化（🔥customFetch削除）
================================ */

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

/* ===============================
   News
================================ */

export const getNewsList = async (queries?: MicroCMSQueries) => {
  return await client
    .getList<News>({
      endpoint: 'news',
      queries,
    })
    .catch(notFound);
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client
    .getListDetail<News>({
      endpoint: 'news',
      contentId,
      queries,
    })
    .catch(notFound);
};

/* ===============================
   Recruit
================================ */

export const getRecruitList = async (queries?: MicroCMSQueries) => {
  return await client
    .getList<Recruit>({
      endpoint: 'recruit',
      queries,
    })
    .catch(notFound);
};