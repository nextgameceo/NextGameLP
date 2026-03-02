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
};

// ★ Article型（これが重要）
export type Article = News & MicroCMSContentId & MicroCMSDate;

// メンバー
export type Member = {
  name: string;
  position: string;
  profile: string;
  image?: MicroCMSImage;
};

// 採用情報
export type Recruit = {
  role: string;
  wages: string;
  limit: string;
  'working-hours': string;
};

// 事業内容
export type Business = {
  logo?: MicroCMSImage;
  description: string;
  image?: MicroCMSImage;
  link: string;
  content: string;
};

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
   Client初期化
================================ */

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/* ===============================
   News
================================ */

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<News>({
      endpoint: 'news',
      queries,
    })
    .catch(notFound);

  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<News>({
      endpoint: 'news',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

/* ===============================
   Category
================================ */

export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Category>({
      endpoint: 'categories',
      queries,
    })
    .catch(notFound);

  return listData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Category>({
      endpoint: 'categories',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

/* ===============================
   Members
================================ */

export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Member>({
      endpoint: 'members',
      queries,
    })
    .catch(notFound);

  return listData;
};

/* ===============================
   Recruit
================================ */

export const getRecruitList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Recruit>({
      endpoint: 'recruit',
      queries,
    })
    .catch(notFound);

  return listData;
};

/* ===============================
   Business
================================ */

export const getBusinessList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Business>({
      endpoint: 'business',
      queries,
    })
    .catch(notFound);

  return listData;
};

export const getBusinessDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Business>({
      endpoint: 'business',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

/* ===============================
   Meta
================================ */
export const getMeta = async (queries?: MicroCMSQueries) => {
  const data = await client
    .getObject<Meta>({
      endpoint: 'meta',
      queries,
    })
    .catch(() => null);

  return data;
}
