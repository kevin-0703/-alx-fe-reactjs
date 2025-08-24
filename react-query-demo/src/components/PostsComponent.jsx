import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const ReactQueryComponent = () => {
  const { data, error, isLoading } = useQuery("fetchData", fetchData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
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
export default ReactQueryComponent;
