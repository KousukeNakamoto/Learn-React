import { useSuspenseQuery } from "@tanstack/react-query";

export const Item = ({ id }: { id: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
      await delay(1000);

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return await res.json();
    },
  });
  console.log(data);
  return (
    <div>
      <h2>user</h2>
    </div>
  );
};
