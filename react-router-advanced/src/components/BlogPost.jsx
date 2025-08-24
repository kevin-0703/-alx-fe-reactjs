import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();
  return <h2>Blog Post ID: {postId}</h2>;
}

export default BlogPost;
