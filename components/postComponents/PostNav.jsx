import MarkdownNavbar from "markdown-navbar";
// The default style of markdown-navbar should be imported additionally
import "markdown-navbar/dist/navbar.css";

const PostNav = ({ content }) => {
  return (
    <div className=" sticky bgc top-10 textc transition-colors duration-500">
      <h3 className="textc pl-3 transition-colors duration-500">目录</h3>
      <MarkdownNavbar
        className="textc duration-500 transition-colors"
        source={content?.replace(/\\n/g, "\n")}
        ordered={false}
        updateHashAuto={false}
      />
    </div>
  );
};

export default PostNav;
