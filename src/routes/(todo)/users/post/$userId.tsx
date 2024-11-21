import * as React from "react";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { delay } from "../../users";

export const Route = createFileRoute("/(todo)/users/post/$userId")({
  component: RouteComponent,
  pendingComponent: Pending,
  loader: ({ context, params }) => {
    context.queryClient.ensureQueryData({
      queryKey: ["post", params.userId],
      queryFn: async () => {
        await delay(3000);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.userId}`
        );
        return await res.json();
      },
    });
  },
});

// export const postQueryOption = queryOptions();
function Pending() {
  return <div>user id pending</div>;
}
function RouteComponent() {
  const params = Route.useParams();
  const { data } = useSuspenseQuery({
    queryKey: ["post", params.userId],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.userId}`
      );
      return await res.json();
    },
  });
  console.log(data);

  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
}
