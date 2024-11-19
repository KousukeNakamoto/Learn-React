import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Item } from "./item";
import { Suspense } from "react";

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
          <Suspense key={user.id} fallback={<div>loadingaaa</div>}>
            <Item id={user.id} />
          </Suspense>
        ))}
      </ul>
    </div>
  );
};
