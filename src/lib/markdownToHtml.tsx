import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export const markdownToHtml = (markdown: string) => {
  const convertedHTML = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify)
    .processSync(markdown)
    .toString();

  return convertedHTML;
};
