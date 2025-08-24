import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const PostsComponent = () => {
  const { fetchPosts, isError, isLoading } = useQuery("fetchPosts", fetchPosts);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;
  return (
    <>
      <div>
        {fetchPosts.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload Data
      </button>
    </>
  );
};
export default PostsComponent;
