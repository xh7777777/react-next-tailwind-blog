import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
export default function MdRender({ content }) {
  return (
    <ReactMarkdown
      className='textc transition-all duration-500 bgc'
      remarkPlugins={[gfm]}
      children={content}
    />
  );
}
