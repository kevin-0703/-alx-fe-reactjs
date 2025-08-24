import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
function PostsComponent() {
    const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
        queryFn: fetchPosts,
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
  });
 }
    if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;
  
  return (
    <>
      <div>
        {data.map((item) => (
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
