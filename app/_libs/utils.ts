import { formatInTimeZone } from 'date-fns-tz';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

export const formatDate = (date: string) => {
  return formatInTimeZone(new Date(date), 'Asia/Tokyo', 'yyyy/MM/dd');
};

export const formatRichText = (richText: string) => {
  const $ = load(richText, null, false);
  $('a').each((_, elm) => {
    const href = $(elm).attr('href');
    if (!href) {
      return;
    }
    const isImageLink = /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(href);
    if (!isImageLink) {
      return;
    }
    const text = $(elm).text().trim();
    if (text && !text.includes(href.split('/').pop() || '')) {
      return;
    }
    $(elm).replaceWith(`<img src="${href}" alt="${text || ''}" />`);
  });
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = lang
      ? hljs.highlight($(elm).text(), { language: lang?.replace(/^language-/, '') || '' })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(res.value);
  });
  return $.html();
};
