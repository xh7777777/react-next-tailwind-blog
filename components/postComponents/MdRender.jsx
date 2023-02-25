import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
export default function MdRender({ content }) {
  return (
    <ReactMarkdown
      className='textc transition-all duration-500 bgc prose prose-headings:textc'
      remarkPlugins={[gfm]}
      children={content}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className='whitespace-pre-line bg-[#F5F2F0] text-xl' {...props}>
              {children}
            </code>
          )
        },
      }}
    />
  );
}
