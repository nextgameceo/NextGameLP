import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/app/_libs/microcms';
import PublishedDate from '../Date';
import Category from '../Category';
import styles from './index.module.css';

type Props = {
  news: Article;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className={styles.item}>
      <Link href={`/news/${news.id}`} className={styles.link}>
        <div className={styles.thumbnail}>
          {news.thumbnail ? (
            <Image
              src={news.thumbnail.url}
              alt={news.title}
              width={news.thumbnail.width}
              height={news.thumbnail.height}
              className={styles.image}
            />
          ) : (
            <div className={styles.noImage}>
              <span>NO IMAGE</span>
            </div>
          )}
        </div>
        <div className={styles.body}>
          <div className={styles.meta}>
            <Category category={news.category} />
            <PublishedDate date={news.publishedAt || news.createdAt} />
          </div>
          <h2 className={styles.title}>{news.title}</h2>
          {news.description && (
            <p className={styles.description}>{news.description}</p>
          )}
          <span className={styles.readMore}>READ MORE →</span>
        </div>
      </Link>
    </li>
  );
}
