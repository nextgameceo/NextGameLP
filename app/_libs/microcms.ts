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

export type Recruit = {
  role: string;
  job_description?: string;
  salary?: string;
  capacity?: string;
  working_hours?: string;
} & MicroCMSContentId &
  MicroCMSDate;

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