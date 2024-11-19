import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const Tanstack = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
      await delay(1000);

      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return await res.json();
    },
  });
  console.log(data);

  return (
    <div>
      <div>data fetch</div>
      <ul>
        {data.map((user: any) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </ul>
    </div>
  );
};
